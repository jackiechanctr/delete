import type { Express } from 'express';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';

export async function healthRoutes(app: Express) {
  app.get('/health', async (_req, res) => res.json(success({ status: 'ok', service: 'equity-server' })));

  app.get('/health/db', async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return res.json(success({ status: 'ok', database: 'connected' }));
    } catch {
      return res.status(503).json(success({ status: 'degraded', database: 'disconnected' }));
    }
  });

  app.get('/metrics', async (_req, res) =>
    res.json(success({
      service: 'equity-server',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString(),
    }))
  );
}
