import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import jwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
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
    const app = Fastify({
        logger: false,
        requestIdHeader: 'x-correlation-id',
        genReqId: (req) => req.headers['x-correlation-id'] || crypto.randomUUID(),
    });
    await app.register(helmet);
    await app.register(cors, { origin: [env.CORS_ORIGIN, 'http://localhost:3000'], credentials: true });
    await app.register(jwt, { secret: env.JWT_SECRET });
    app.decorate('authenticate', async function (req, reply) {
        try {
            const auth = req.headers.authorization;
            if (auth?.startsWith('Bearer ')) {
                const token = auth.slice(7);
                const blacklisted = await redis.get(`blacklist:${authService.hashToken(token)}`);
                if (blacklisted)
                    throw new Error('blacklisted');
            }
            await req.jwtVerify();
        }
        catch {
            reply.status(401).send({ success: false, error: { message: 'Unauthorized', code: 'UNAUTHORIZED' } });
        }
    });
    await app.register(swagger, {
        openapi: { info: { title: 'Unified Wealth Aggregator API', version: '1.0.0' }, servers: [{ url: `http://localhost:${env.PORT}` }] },
    });
    await app.register(swaggerUi, { routePrefix: '/docs' });
    app.addHook('onRequest', async (req) => {
        const start = Date.now();
        req.raw.on('close', () => {
            logger.info('request', { correlationId: req.id, method: req.method, url: req.url, latencyMs: Date.now() - start });
        });
    });
    await app.register(healthRoutes);
    await app.register(authRoutes);
    await app.register(investorsRoutes);
    await app.register(realEstateRoutes);
    await app.register(alertsRoutes);
    await app.register(auditRoutes);
    await app.register(notificationsRoutes);
    await app.register(dashboardRoutes);
    return app;
}
