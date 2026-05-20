import { buildApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
import { initSocket } from './socket/index.js';
import { startWorkers } from './workers/queue.js';
const start = async () => {
    const app = await buildApp();
    await app.ready();
    const httpServer = app.server;
    const socketHub = initSocket(httpServer);
    global.socketHub = socketHub;
    startWorkers();
    await app.listen({ port: env.PORT, host: '0.0.0.0' });
    logger.info(`Aggregator server listening on port ${env.PORT}`);
};
start().catch((err) => {
    logger.error('Failed to start aggregator', { err });
    process.exit(1);
});
