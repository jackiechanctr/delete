import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
export async function watchlistRoutes(app) {
    app.addHook('onRequest', app.authenticate);
    app.get('/api/v1/watchlists', async (req, reply) => {
        const { investorRef } = z.object({ investorRef: z.string().optional() }).parse(req.query);
        const where = investorRef ? { investorRef } : {};
        const lists = await prisma.watchlist.findMany({ where, orderBy: { updatedAt: 'desc' } });
        return reply.send(success(lists));
    });
}
