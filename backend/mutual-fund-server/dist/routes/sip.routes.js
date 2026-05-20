import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated, success } from '../lib/response.js';
export async function sipRoutes(app) {
    app.get('/api/v1/sips', async (req, reply) => {
        const query = z
            .object({
            investorRef: z.string().optional(),
            status: z.enum(['ACTIVE', 'PAUSED', 'FAILED', 'CANCELLED']).optional(),
            page: z.coerce.number().default(1),
            limit: z.coerce.number().max(100).default(20),
        })
            .parse(req.query);
        const where = {};
        if (query.investorRef)
            where.investorRef = query.investorRef;
        if (query.status)
            where.status = query.status;
        const [items, total] = await Promise.all([
            prisma.sip.findMany({
                where,
                include: { fund: true },
                skip: (query.page - 1) * query.limit,
                take: query.limit,
                orderBy: { createdAt: 'desc' },
            }),
            prisma.sip.count({ where }),
        ]);
        return reply.send(paginated(items.map((s) => ({
            id: s.id,
            investorRef: s.investorRef,
            amount: Number(s.amount),
            frequency: s.frequency,
            status: s.status,
            fund: { schemeCode: s.fund.schemeCode, name: s.fund.name, category: s.fund.category },
            nextDueDate: s.nextDueDate,
        })), total, query.page, query.limit));
    });
    app.get('/api/v1/sips/:investorRef/summary', async (req, reply) => {
        const { investorRef } = req.params;
        const sips = await prisma.sip.findMany({ where: { investorRef }, include: { fund: true } });
        const active = sips.filter((s) => s.status === 'ACTIVE');
        const monthlyCommitment = active
            .filter((s) => s.frequency === 'MONTHLY')
            .reduce((sum, s) => sum + Number(s.amount), 0);
        return success({
            investorRef,
            totalSips: sips.length,
            activeSips: active.length,
            failedSips: sips.filter((s) => s.status === 'FAILED').length,
            monthlyCommitment,
        });
    });
}
