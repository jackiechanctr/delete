import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import jwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
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
    const app = Fastify({
        logger: false,
        requestIdHeader: 'x-correlation-id',
        genReqId: (req) => req.headers['x-correlation-id'] || crypto.randomUUID(),
    });
    await app.register(helmet);
    await app.register(cors, { origin: true });
    await app.register(jwt, { secret: env.JWT_SECRET });
    app.decorate('authenticate', async (req, reply) => {
        try {
            await req.jwtVerify();
        }
        catch {
            reply.status(401).send({ success: false, error: { message: 'Unauthorized', code: 'UNAUTHORIZED' } });
        }
    });
    await app.register(swagger, {
        openapi: {
            info: { title: 'Equity Server API', version: '1.0.0' },
            servers: [{ url: `http://localhost:${env.PORT}` }],
        },
    });
    await app.register(swaggerUi, { routePrefix: '/docs' });
    app.addHook('onRequest', async (req, _reply) => {
        const start = Date.now();
        req.raw.on('close', () => {
            logger.info('request', {
                correlationId: req.id,
                method: req.method,
                url: req.url,
                latencyMs: Date.now() - start,
            });
        });
    });
    app.addHook('preHandler', simulateLatency);
    app.addHook('preHandler', simulateFailure);
    await app.register(healthRoutes);
    await app.register(authRoutes);
    await app.register(marketRoutes);
    await app.register(holdingsRoutes);
    await app.register(transactionsRoutes);
    await app.register(watchlistRoutes);
    return app;
}
