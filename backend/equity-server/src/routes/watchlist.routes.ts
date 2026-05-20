import type { Express } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';

export async function watchlistRoutes(app: Express) {
  app.get('/api/v1/watchlists', app.locals.authenticate, async (req, res) => {
    const { investorRef } = z.object({ investorRef: z.string().optional() }).parse(req.query);
    const where = investorRef ? { investorRef } : {};
    const lists = await prisma.watchlist.findMany({ where, orderBy: { updatedAt: 'desc' } });
    return res.json(success(lists));
  });
}
