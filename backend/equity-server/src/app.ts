import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
import { simulateLatency, simulateFailure } from './middleware/resilience.js';
import { healthRoutes } from './routes/health.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { holdingsRoutes } from './routes/holdings.routes.js';
import { transactionsRoutes } from './routes/transactions.routes.js';
import { watchlistRoutes } from './routes/watchlist.routes.js';
import { marketRoutes } from './routes/market.routes.js';

export async function buildApp() {
  const app = express();
  app.use((req, _res, next) => {
    req.id = (req.header('x-correlation-id') as string) || crypto.randomUUID();
    next();
  });

  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(express.json());

  app.locals.authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.header('authorization')?.replace('Bearer ', '');
      if (!token) throw new Error('missing');
      req.user = jwt.verify(token, env.JWT_SECRET) as Record<string, unknown>;
      next();
    } catch {
      res.status(401).json({ success: false, error: { message: 'Unauthorized', code: 'UNAUTHORIZED' } });
    }
  };
  app.locals.jwtSign = (payload: object, expiresIn: string) => jwt.sign(payload, env.JWT_SECRET, { expiresIn });

  app.get('/docs', (_req, res) => res.json({ success: true, data: { message: 'Swagger not configured in Express migration' } }));

  app.use((req, res, next) => {
    const start = Date.now();
    res.on('close', () => {
      logger.info('request', {
        correlationId: req.id,
        method: req.method,
        url: req.originalUrl,
        latencyMs: Date.now() - start,
      });
    });
    next();
  });

  app.use(simulateLatency);
  app.use(simulateFailure);

  await healthRoutes(app);
  await authRoutes(app);
  await marketRoutes(app);
  await holdingsRoutes(app);
  await transactionsRoutes(app);
  await watchlistRoutes(app);

  return app;
}
