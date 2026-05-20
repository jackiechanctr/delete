import type { Express } from 'express';
import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
import { checkRedisHealth } from '../workers/queue.js';
import { equityClient } from '../clients/equity.client.js';
import { env } from '../config/env.js';
import axios from 'axios';

export async function healthRoutes(app: Express) {
  app.get('/health', async (_req, res) => res.json(success({ status: 'ok', service: 'aggregator-server' })));

  app.get('/health/db', async (_req, res) => {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return res.json(success({ status: 'ok' }));
    } catch {
      return res.status(503).json({ success: false, error: { message: 'Database unavailable' } });
    }
  });

  app.get('/health/redis', async (_req, res) => {
    const ok = await checkRedisHealth();
    if (!ok) return res.status(503).json({ success: false, error: { message: 'Redis unavailable' } });
    return res.json(success({ status: 'ok' }));
  });

  app.get('/metrics', async (_req, res) => {
    const services = await prisma.serviceHealth.findMany();
    return res.json(success({
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      downstream: services,
    }));
  });

  app.get('/api/v1/operations/health-check', async (_req, res) => {
    const results = [];
    const start = Date.now();
    try {
      await axios.get(`${env.EQUITY_SERVER_URL}/health`, { timeout: 5000 });
      results.push({ service: 'equity', status: 'UP', latencyMs: Date.now() - start });
    } catch {
      results.push({ service: 'equity', status: 'DOWN' });
    }

    const mfStart = Date.now();
    try {
      await axios.get(`${env.MF_SERVER_URL}/health`, { timeout: 5000 });
      results.push({ service: 'mutual-fund', status: 'UP', latencyMs: Date.now() - mfStart });
    } catch {
      results.push({ service: 'mutual-fund', status: 'DOWN' });
    }

    for (const r of results) {
      await prisma.serviceHealth.upsert({
        where: { serviceName: r.service },
        update: { status: r.status, latencyMs: r.latencyMs ?? null, lastChecked: new Date() },
        create: { serviceName: r.service, status: r.status, latencyMs: r.latencyMs ?? null },
      });
    }

    return res.json(success(results));
  });
}
