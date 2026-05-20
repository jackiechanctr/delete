import type { Express } from 'express';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';

export async function notificationsRoutes(app: Express) {
  app.get('/api/v1/notifications', app.locals.authenticate, async (req, res) => {
    const userId = (req.user as { sub: string }).sub;
    const items = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
    return res.json(success(items));
  });

  app.patch('/api/v1/notifications/:id/read', app.locals.authenticate, async (req, res) => {
    const { id } = req.params as { id: string };
    const userId = (req.user as { sub: string }).sub;
    await prisma.notification.updateMany({ where: { id, userId }, data: { read: true } });
    return res.json(success({ updated: true }));
  });
}
