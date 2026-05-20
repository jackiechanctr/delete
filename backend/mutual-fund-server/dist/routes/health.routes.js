import { prisma } from '../lib/prisma.js';
import { success } from '../lib/response.js';
export async function healthRoutes(app) {
    app.get('/health', async () => success({ status: 'ok', service: 'mutual-fund-server' }));
    app.get('/health/db', async (_req, reply) => {
        try {
            await prisma.$queryRaw `SELECT 1`;
            return success({ status: 'ok' });
        }
        catch {
            return reply.status(503).send({ success: false, error: { message: 'DB unavailable' } });
        }
    });
    app.get('/metrics', async () => success({ service: 'mutual-fund-server', uptime: process.uptime(), memory: process.memoryUsage() }));
}
