import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated, success, fail } from '../lib/response.js';
export async function transactionsRoutes(app) {
    app.get('/api/v1/transactions', async (req, reply) => {
        const query = z
            .object({
            investorRef: z.string().optional(),
            page: z.coerce.number().default(1),
            limit: z.coerce.number().max(100).default(20),
        })
            .parse(req.query);
        const where = query.investorRef ? { investorRef: query.investorRef } : {};
        const [items, total] = await Promise.all([
            prisma.mfTransaction.findMany({
                where,
                include: { fund: true },
                skip: (query.page - 1) * query.limit,
                take: query.limit,
                orderBy: { executedAt: 'desc' },
            }),
            prisma.mfTransaction.count({ where }),
        ]);
        return reply.send(paginated(items.map((t) => ({
            id: t.id,
            investorRef: t.investorRef,
            type: t.type,
            units: Number(t.units),
            nav: Number(t.nav),
            amount: Number(t.amount),
            fund: t.fund.name,
            executedAt: t.executedAt,
        })), total, query.page, query.limit));
    });
    app.post('/api/v1/transactions', async (req, reply) => {
        const body = z
            .object({
            investorRef: z.string(),
            schemeCode: z.string(),
            type: z.enum(['PURCHASE', 'REDEMPTION', 'SIP', 'DIVIDEND']),
            units: z.number().positive(),
            nav: z.number().positive(),
            idempotencyKey: z.string().optional(),
        })
            .safeParse(req.body);
        if (!body.success)
            return reply.status(400).send(fail(body.error.message));
        if (body.data.idempotencyKey) {
            const existing = await prisma.mfTransaction.findUnique({
                where: { idempotencyKey: body.data.idempotencyKey },
            });
            if (existing)
                return success({ id: existing.id, duplicate: true });
        }
        const fund = await prisma.fund.findUnique({ where: { schemeCode: body.data.schemeCode } });
        if (!fund)
            return reply.status(404).send(fail('Fund not found', 'NOT_FOUND'));
        const amount = body.data.units * body.data.nav;
        const txn = await prisma.mfTransaction.create({
            data: {
                investorRef: body.data.investorRef,
                fundId: fund.id,
                type: body.data.type,
                units: body.data.units,
                nav: body.data.nav,
                amount,
                executedAt: new Date(),
                idempotencyKey: body.data.idempotencyKey,
            },
        });
        return reply.status(201).send(success({ id: txn.id }));
    });
}
