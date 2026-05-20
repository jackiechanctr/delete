import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
import { hmacAuth } from './middleware/hmac-auth.js';
import { simulateLatency, simulateFailure } from './middleware/resilience.js';
import { healthRoutes } from './routes/health.routes.js';
import { sipRoutes } from './routes/sip.routes.js';
import { navRoutes } from './routes/nav.routes.js';
import { transactionsRoutes } from './routes/transactions.routes.js';

export async function buildApp() {
  const app = express();
  app.use((req, _res, next) => {
    req.id = (req.header('x-correlation-id') as string) || crypto.randomUUID();
    next();
  });

  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(express.json());
  app.get('/docs', (_req, res) => res.json({ success: true, data: { message: 'Swagger not configured in Express migration' } }));

  app.use((req, res, next) => {
    const start = Date.now();
    res.on('close', () => {
      logger.info('request', { correlationId: req.id, method: req.method, url: req.url, latencyMs: Date.now() - start });
    });
    next();
  });

  await healthRoutes(app);

  app.use(async (req, res, next) => {
    if (!req.url.startsWith('/health') && !req.url.startsWith('/docs')) {
      const blocked = await hmacAuth(req, res);
      if (blocked) return;
      await simulateLatency(req, res, () => undefined);
      await simulateFailure(req, res, next);
      return;
    }
    next();
  });

  await sipRoutes(app);
  await navRoutes(app);
  await transactionsRoutes(app);

  return app;
}
