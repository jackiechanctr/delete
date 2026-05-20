import type { Express } from 'express';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';

export async function marketRoutes(app: Express) {
  app.get('/api/v1/market/prices', async (_req, res) => {
    const prices = await prisma.marketPrice.findMany({ orderBy: { symbol: 'asc' } });
    return res.json(success(prices.map((p) => ({
      symbol: p.symbol,
      price: Number(p.price),
      changePct: Number(p.changePct),
      volume: p.volume ? Number(p.volume) : null,
      updatedAt: p.updatedAt,
    }))));
  });

  app.get('/api/v1/market/prices/:symbol', async (req, res) => {
    const { symbol } = req.params as { symbol: string };
    const price = await prisma.marketPrice.findUnique({ where: { symbol: symbol.toUpperCase() } });
    if (!price) return res.status(404).json({ success: false, error: { message: 'Symbol not found' } });
    return res.json(success({
      symbol: price.symbol,
      price: Number(price.price),
      changePct: Number(price.changePct),
    }));
  });
}
