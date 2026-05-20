import { buildApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';
import { initSocket } from './socket/index.js';
import { startWorkers } from './workers/queue.js';

const start = async () => {
  const app = await buildApp();
  const httpServer = app.listen(env.PORT, '0.0.0.0');
  const socketHub = initSocket(httpServer);
  (global as { socketHub?: typeof socketHub }).socketHub = socketHub;

  startWorkers();
  logger.info(`Aggregator server listening on port ${env.PORT}`);
};

start().catch((err) => {
  logger.error('Failed to start aggregator', { err });
  process.exit(1);
});
