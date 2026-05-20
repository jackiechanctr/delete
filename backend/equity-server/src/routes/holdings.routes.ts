import type { Express } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated, success, fail } from '../lib/response.js';

export async function holdingsRoutes(app: Express) {
  app.get('/api/v1/holdings', app.locals.authenticate, async (req, res) => {
    const query = z
      .object({
        investorRef: z.string().optional(),
        page: z.coerce.number().default(1),
        limit: z.coerce.number().max(100).default(20),
        sortBy: z.enum(['symbol', 'quantity', 'currentPrice']).default('symbol'),
        sortOrder: z.enum(['asc', 'desc']).default('asc'),
      })
      .parse(req.query);

    const where = query.investorRef ? { investorRef: query.investorRef } : {};
    const [items, total] = await Promise.all([
      prisma.holding.findMany({
        where,
        skip: (query.page - 1) * query.limit,
        take: query.limit,
        orderBy: { [query.sortBy]: query.sortOrder },
      }),
      prisma.holding.count({ where }),
    ]);

    const data = items.map((h) => ({
      ...h,
      quantity: Number(h.quantity),
      avgBuyPrice: Number(h.avgBuyPrice),
      currentPrice: Number(h.currentPrice),
      marketValue: Number(h.quantity) * Number(h.currentPrice),
      pnl: Number(h.quantity) * (Number(h.currentPrice) - Number(h.avgBuyPrice)),
    }));

    return res.json(paginated(data, total, query.page, query.limit, req.id));
  });

  app.get('/api/v1/holdings/:investorRef/summary', app.locals.authenticate, async (req, res) => {
    const { investorRef } = req.params as { investorRef: string };
    const holdings = await prisma.holding.findMany({ where: { investorRef } });
    if (!holdings.length) return res.status(404).json(fail('No holdings found', 'NOT_FOUND', 404));

    const totalValue = holdings.reduce((s, h) => s + Number(h.quantity) * Number(h.currentPrice), 0);
    const totalCost = holdings.reduce((s, h) => s + Number(h.quantity) * Number(h.avgBuyPrice), 0);

    return res.json(success({
      investorRef,
      holdingCount: holdings.length,
      totalValue,
      totalCost,
      totalPnl: totalValue - totalCost,
      pnlPercent: totalCost > 0 ? ((totalValue - totalCost) / totalCost) * 100 : 0,
    }));
  });
}
