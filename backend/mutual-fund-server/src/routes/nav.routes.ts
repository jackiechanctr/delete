import type { Express } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';

export async function navRoutes(app: Express) {
  app.get('/api/v1/nav/:schemeCode', async (req, res) => {
    const { schemeCode } = req.params as { schemeCode: string };
    const fund = await prisma.fund.findUnique({
      where: { schemeCode },
      include: { navHistory: { orderBy: { navDate: 'desc' }, take: 30 } },
    });
    if (!fund) return res.status(404).json({ success: false, error: { message: 'Fund not found' } });

    return res.json(success({
      schemeCode: fund.schemeCode,
      name: fund.name,
      category: fund.category,
      latestNav: fund.navHistory[0] ? Number(fund.navHistory[0].nav) : null,
      history: fund.navHistory.map((n) => ({ nav: Number(n.nav), date: n.navDate })),
    }));
  });

  app.get('/api/v1/funds', async (req, res) => {
    const { category } = z.object({ category: z.string().optional() }).parse(req.query);
    const funds = await prisma.fund.findMany({
      where: category ? { category } : undefined,
      include: { navHistory: { orderBy: { navDate: 'desc' }, take: 1 } },
    });
    return res.json(success(
      funds.map((f) => ({
        schemeCode: f.schemeCode,
        name: f.name,
        category: f.category,
        amc: f.amc,
        riskLevel: f.riskLevel,
        latestNav: f.navHistory[0] ? Number(f.navHistory[0].nav) : null,
      }))
    ));
  });
}
