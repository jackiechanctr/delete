import type { Express } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated, success } from '../lib/response.js';
import { investorUnification } from '../services/investor-unification.service.js';
import { wealthEngine } from '../services/wealth-engine.service.js';
import { equityClient } from '../clients/equity.client.js';
import { mfClient } from '../clients/mf.client.js';
import { enqueueSync } from '../workers/queue.js';
import { requireRole } from '../middleware/rbac.js';

export async function investorsRoutes(app: Express) {
  app.get('/api/v1/investors', app.locals.authenticate, async (req, res) => {
    const query = z
      .object({ page: z.coerce.number().default(1), limit: z.coerce.number().max(100).default(20), search: z.string().optional() })
      .parse(req.query);

    const where = query.search
      ? {
          OR: [
            { displayName: { contains: query.search, mode: 'insensitive' as const } },
            { email: { contains: query.search, mode: 'insensitive' as const } },
            { pan: { contains: query.search, mode: 'insensitive' as const } },
          ],
        }
      : {};

    const [items, total] = await Promise.all([
      prisma.investor.findMany({
        where,
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        orderBy: { updatedAt: 'desc' },
        include: { identities: true },
      }),
      prisma.investor.count({ where }),
    ]);

    return res.json(paginated(items, total, query.page, query.limit));
  });

  app.get('/api/v1/investors/:id', app.locals.authenticate, async (req, res) => {
    const { id } = req.params as { id: string };
    const profile = await investorUnification.getUnifiedProfile(id);
    if (!profile) return res.status(404).json({ success: false, error: { message: 'Not found' } });
    return res.json(success(profile));
  });

  app.get('/api/v1/investors/:id/wealth', app.locals.authenticate, async (req, res) => {
    const { id } = req.params as { id: string };
    const investor = await prisma.investor.findUnique({ where: { id } });
    if (!investor) return res.status(404).json({ success: false, error: { message: 'Not found' } });
    const wealth = await wealthEngine.computeWealth(id, 'INV1001');
    return res.json(success(wealth));
  });

  app.get('/api/v1/investors/:id/portfolio', app.locals.authenticate, async (req, res) => {
    const investorRef = 'INV1001';
    const [equity, mf, wealth] = await Promise.all([
      equityClient.getHoldings(investorRef),
      mfClient.getSips(investorRef),
      wealthEngine.computeWealth((req.params as { id: string }).id, investorRef),
    ]);
    return res.json(success({ equity, mutualFunds: mf, wealth }));
  });

  app.post('/api/v1/investors/reconcile', app.locals.authenticate, requireRole('ADMIN', 'SUPER_ADMIN'), async (req, res) => {
    const body = z
      .object({
        source: z.enum(['EQUITY', 'MUTUAL_FUND', 'CRM', 'MANUAL', 'REAL_ESTATE']),
        externalId: z.string(),
        email: z.string().email().optional(),
        pan: z.string().optional(),
        displayName: z.string().optional(),
      })
      .parse(req.body);
    const result = await investorUnification.reconcileIdentity(body);
    return res.json(success(result));
  });

  app.post('/api/v1/investors/:id/sync', app.locals.authenticate, async (req, res) => {
    const { id } = req.params as { id: string };
    await enqueueSync(id, 'INV1001');
    return res.json(success({ queued: true }));
  });
}
