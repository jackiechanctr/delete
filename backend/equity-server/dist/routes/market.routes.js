import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
export async function marketRoutes(app) {
    app.get('/api/v1/market/prices', async (_req, reply) => {
        const prices = await prisma.marketPrice.findMany({ orderBy: { symbol: 'asc' } });
        return reply.send(success(prices.map((p) => ({
            symbol: p.symbol,
            price: Number(p.price),
            changePct: Number(p.changePct),
            volume: p.volume ? Number(p.volume) : null,
            updatedAt: p.updatedAt,
        }))));
    });
    app.get('/api/v1/market/prices/:symbol', async (req, reply) => {
        const { symbol } = req.params;
        const price = await prisma.marketPrice.findUnique({ where: { symbol: symbol.toUpperCase() } });
        if (!price)
            return reply.status(404).send({ success: false, error: { message: 'Symbol not found' } });
        return success({
            symbol: price.symbol,
            price: Number(price.price),
            changePct: Number(price.changePct),
        });
    });
}
