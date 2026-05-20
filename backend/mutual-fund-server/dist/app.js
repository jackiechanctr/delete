import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import { logger } from './lib/logger.js';
import { hmacAuth } from './middleware/hmac-auth.js';
import { simulateLatency, simulateFailure } from './middleware/resilience.js';
import { healthRoutes } from './routes/health.routes.js';
import { sipRoutes } from './routes/sip.routes.js';
import { navRoutes } from './routes/nav.routes.js';
import { transactionsRoutes } from './routes/transactions.routes.js';
export async function buildApp() {
    const app = Fastify({
        logger: false,
        requestIdHeader: 'x-correlation-id',
        genReqId: (req) => req.headers['x-correlation-id'] || crypto.randomUUID(),
    });
    await app.register(helmet);
    await app.register(cors, { origin: true });
    await app.register(swagger, {
        openapi: { info: { title: 'Mutual Fund Server API', version: '1.0.0' } },
    });
    await app.register(swaggerUi, { routePrefix: '/docs' });
    app.addHook('onRequest', async (req, _reply) => {
        const start = Date.now();
        req.raw.on('close', () => {
            logger.info('request', { correlationId: req.id, method: req.method, url: req.url, latencyMs: Date.now() - start });
        });
    });
    await app.register(healthRoutes);
    app.addHook('preHandler', async (req, reply) => {
        if (!req.url.startsWith('/health') && !req.url.startsWith('/docs')) {
            await hmacAuth(req, reply);
            await simulateLatency(req, reply);
            await simulateFailure(req, reply);
        }
    });
    await app.register(sipRoutes);
    await app.register(navRoutes);
    await app.register(transactionsRoutes);
    return app;
}
