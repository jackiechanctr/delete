import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
export async function healthRoutes(app) {
    app.get('/health', async () => success({ status: 'ok', service: 'equity-server' }));
    app.get('/health/db', async (_req, reply) => {
        try {
            await prisma.$queryRaw `SELECT 1`;
            return success({ status: 'ok', database: 'connected' });
        }
        catch {
            return reply.status(503).send(success({ status: 'degraded', database: 'disconnected' }));
        }
    });
    app.get('/metrics', async () => success({
        service: 'equity-server',
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        timestamp: new Date().toISOString(),
    }));
}
