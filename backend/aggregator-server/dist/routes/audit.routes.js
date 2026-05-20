import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { paginated } from '../lib/response.js';
import { requireRole } from '../middleware/rbac.js';
export async function auditRoutes(app) {
    app.addHook('onRequest', app.authenticate);
    app.addHook('preHandler', requireRole('ADMIN', 'OPERATIONS', 'SUPER_ADMIN'));
    app.get('/api/v1/audit-logs', async (req, reply) => {
        const query = z
            .object({ page: z.coerce.number().default(1), limit: z.coerce.number().default(50), action: z.string().optional() })
            .parse(req.query);
        const where = query.action ? { action: query.action } : {};
        const [items, total] = await Promise.all([
            prisma.auditLog.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: (query.page - 1) * query.limit,
                take: query.limit,
                include: { user: { select: { email: true, firstName: true, lastName: true } } },
            }),
            prisma.auditLog.count({ where }),
        ]);
        return reply.send(paginated(items, total, query.page, query.limit));
    });
}
