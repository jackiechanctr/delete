import { buildApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';

const start = async () => {
  const app = await buildApp();
  try {
    app.listen(env.PORT, '0.0.0.0');
    logger.info(`Equity server listening on port ${env.PORT}`);
  } catch (err) {
    logger.error('Failed to start', { err });
    process.exit(1);
  }
};

start();
