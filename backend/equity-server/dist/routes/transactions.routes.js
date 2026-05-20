import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated } from '../lib/response.js';
export async function transactionsRoutes(app) {
    app.addHook('onRequest', app.authenticate);
    app.get('/api/v1/transactions', async (req, reply) => {
        const query = z
            .object({
            investorRef: z.string().optional(),
            symbol: z.string().optional(),
            type: z.enum(['BUY', 'SELL', 'DIVIDEND', 'BONUS']).optional(),
            page: z.coerce.number().default(1),
            limit: z.coerce.number().max(100).default(20),
            sortOrder: z.enum(['asc', 'desc']).default('desc'),
        })
            .parse(req.query);
        const where = {};
        if (query.investorRef)
            where.investorRef = query.investorRef;
        if (query.symbol)
            where.symbol = query.symbol;
        if (query.type)
            where.type = query.type;
        const [items, total] = await Promise.all([
            prisma.transaction.findMany({
                where,
                skip: (query.page - 1) * query.limit,
                take: query.limit,
                orderBy: { executedAt: query.sortOrder },
            }),
            prisma.transaction.count({ where }),
        ]);
        const data = items.map((t) => ({
            ...t,
            quantity: Number(t.quantity),
            price: Number(t.price),
            totalAmount: Number(t.totalAmount),
        }));
        return reply.send(paginated(data, total, query.page, query.limit, req.id));
    });
}
