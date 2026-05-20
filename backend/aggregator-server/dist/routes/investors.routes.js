import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated, success } from '../lib/response.js';
import { investorUnification } from '../services/investor-unification.service.js';
import { wealthEngine } from '../services/wealth-engine.service.js';
import { equityClient } from '../clients/equity.client.js';
import { mfClient } from '../clients/mf.client.js';
import { enqueueSync } from '../workers/queue.js';
import { requireRole } from '../middleware/rbac.js';
export async function investorsRoutes(app) {
    app.addHook('onRequest', app.authenticate);
    app.get('/api/v1/investors', async (req, reply) => {
        const query = z
            .object({ page: z.coerce.number().default(1), limit: z.coerce.number().max(100).default(20), search: z.string().optional() })
            .parse(req.query);
        const where = query.search
            ? {
                OR: [
                    { displayName: { contains: query.search, mode: 'insensitive' } },
                    { email: { contains: query.search, mode: 'insensitive' } },
                    { pan: { contains: query.search, mode: 'insensitive' } },
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
        return reply.send(paginated(items, total, query.page, query.limit));
    });
    app.get('/api/v1/investors/:id', async (req, reply) => {
        const { id } = req.params;
        const profile = await investorUnification.getUnifiedProfile(id);
        if (!profile)
            return reply.status(404).send({ success: false, error: { message: 'Not found' } });
        return success(profile);
    });
    app.get('/api/v1/investors/:id/wealth', async (req, reply) => {
        const { id } = req.params;
        const investor = await prisma.investor.findUnique({ where: { id } });
        if (!investor)
            return reply.status(404).send({ success: false, error: { message: 'Not found' } });
        const wealth = await wealthEngine.computeWealth(id, 'INV1001');
        return success(wealth);
    });
    app.get('/api/v1/investors/:id/portfolio', async (req, reply) => {
        const investorRef = 'INV1001';
        const [equity, mf, wealth] = await Promise.all([
            equityClient.getHoldings(investorRef),
            mfClient.getSips(investorRef),
            wealthEngine.computeWealth(req.params.id, investorRef),
        ]);
        return success({ equity, mutualFunds: mf, wealth });
    });
    app.post('/api/v1/investors/reconcile', { preHandler: requireRole('ADMIN', 'OPERATIONS', 'SUPER_ADMIN') }, async (req, reply) => {
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
        return success(result);
    });
    app.post('/api/v1/investors/:id/sync', async (req, reply) => {
        const { id } = req.params;
        await enqueueSync(id, 'INV1001');
        return success({ queued: true });
    });
}
