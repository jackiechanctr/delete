import { buildApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
const start = async () => {
    const app = await buildApp();
    await app.listen({ port: env.PORT, host: '0.0.0.0' });
    logger.info(`Mutual Fund server listening on port ${env.PORT}`);
};
start().catch((err) => {
    logger.error('Failed to start', { err });
    process.exit(1);
});
