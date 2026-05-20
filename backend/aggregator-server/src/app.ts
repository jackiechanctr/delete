import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
import { authService } from './services/auth.service.js';
import { redis } from './lib/redis.js';
import { healthRoutes } from './routes/health.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { investorsRoutes } from './routes/investors.routes.js';
import { realEstateRoutes } from './routes/real-estate.routes.js';
import { alertsRoutes } from './routes/alerts.routes.js';
import { auditRoutes } from './routes/audit.routes.js';
import { notificationsRoutes } from './routes/notifications.routes.js';
import { dashboardRoutes } from './routes/dashboard.routes.js';

export async function buildApp() {
  const app = express();
  app.use((req, _res, next) => {
    req.id = (req.header('x-correlation-id') as string) || crypto.randomUUID();
    next();
  });

  app.use(helmet());
  app.use(cors({ origin: [env.CORS_ORIGIN, 'http://localhost:3000'], credentials: true }));
  app.use(express.json());

  app.locals.authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const auth = req.headers.authorization;
      if (auth?.startsWith('Bearer ')) {
        const token = auth.slice(7);
        const blacklisted = await redis.get(`blacklist:${authService.hashToken(token)}`);
        if (blacklisted) throw new Error('blacklisted');
      }
      const token = auth?.slice(7);
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
      logger.info('request', { correlationId: req.id, method: req.method, url: req.url, latencyMs: Date.now() - start });
    });
    next();
  });

  await healthRoutes(app);
  await authRoutes(app);
  await investorsRoutes(app);
  await realEstateRoutes(app);
  await alertsRoutes(app);
  await auditRoutes(app);
  await notificationsRoutes(app);
  await dashboardRoutes(app);

  return app;
}
