import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated, success } from '../lib/response.js';
export async function alertsRoutes(app) {
    app.addHook('onRequest', app.authenticate);
    app.get('/api/v1/alerts', async (req, reply) => {
        const query = z
            .object({
            status: z.enum(['OPEN', 'ACKNOWLEDGED', 'RESOLVED']).optional(),
            severity: z.enum(['INFO', 'WARNING', 'CRITICAL']).optional(),
            page: z.coerce.number().default(1),
            limit: z.coerce.number().default(20),
        })
            .parse(req.query);
        const where = {};
        if (query.status)
            where.status = query.status;
        if (query.severity)
            where.severity = query.severity;
        const [items, total] = await Promise.all([
            prisma.alert.findMany({ where, orderBy: { createdAt: 'desc' }, skip: (query.page - 1) * query.limit, take: query.limit }),
            prisma.alert.count({ where }),
        ]);
        return reply.send(paginated(items, total, query.page, query.limit));
    });
    app.patch('/api/v1/alerts/:id', async (req, reply) => {
        const { id } = req.params;
        const body = z.object({ status: z.enum(['ACKNOWLEDGED', 'RESOLVED']) }).parse(req.body);
        const alert = await prisma.alert.update({
            where: { id },
            data: { status: body.status, resolvedAt: body.status === 'RESOLVED' ? new Date() : undefined },
        });
        return success(alert);
    });
}
