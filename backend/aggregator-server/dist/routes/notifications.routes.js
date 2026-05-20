import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
export async function notificationsRoutes(app) {
    app.addHook('onRequest', app.authenticate);
    app.get('/api/v1/notifications', async (req, reply) => {
        const userId = req.user.sub;
        const items = await prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50,
        });
        return success(items);
    });
    app.patch('/api/v1/notifications/:id/read', async (req, reply) => {
        const { id } = req.params;
        const userId = req.user.sub;
        await prisma.notification.updateMany({ where: { id, userId }, data: { read: true } });
        return success({ updated: true });
    });
}
