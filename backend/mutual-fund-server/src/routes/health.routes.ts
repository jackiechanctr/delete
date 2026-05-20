import type { Express } from 'express';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';

export async function healthRoutes(app: Express) {
  app.get('/health', async (_req, res) => res.json(success({ status: 'ok', service: 'mutual-fund-server' })));
  app.get('/health/db', async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return res.json(success({ status: 'ok' }));
    } catch {
      return res.status(503).json({ success: false, error: { message: 'DB unavailable' } });
    }
  });
  app.get('/metrics', async (_req, res) =>
    res.json(success({ service: 'mutual-fund-server', uptime: process.uptime(), memory: process.memoryUsage() }))
  );
}
