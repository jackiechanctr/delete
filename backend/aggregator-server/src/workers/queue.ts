import { Queue, Worker } from 'bullmq';
import { env } from '../config/env.js';
import { logger } from '../lib/logger.js';
import { prisma } from '../lib/prisma.js';
import { wealthEngine } from '../services/wealth-engine.service.js';
import { redis } from '../lib/redis.js';

const connection = env.REDIS_URL
  ? { url: env.REDIS_URL }
  : undefined;

export const syncQueue = connection
  ? new Queue('wealth-sync', { connection })
  : null;

export const alertQueue = connection ? new Queue('alerts', { connection }) : null;

export function startWorkers() {
  if (!connection) {
    logger.warn('BullMQ workers disabled - REDIS_URL not configured for TCP');
    return;
  }

  new Worker(
    'wealth-sync',
    async (job) => {
      const { investorId, investorRef } = job.data as { investorId: string; investorRef: string };
      await wealthEngine.computeWealth(investorId, investorRef);
      logger.info('Sync job completed', { jobId: job.id });
    },
    { connection }
  );

  new Worker(
    'alerts',
    async (job) => {
      const { title, message, severity, source } = job.data as {
        title: string;
        message: string;
        severity: 'INFO' | 'WARNING' | 'CRITICAL';
        source: string;
      };
      await prisma.alert.create({ data: { title, message, severity, source } });
    },
    { connection }
  );

  logger.info('BullMQ workers started');
}

export async function enqueueSync(investorId: string, investorRef: string) {
  if (syncQueue) {
    await syncQueue.add('sync-wealth', { investorId, investorRef }, { attempts: 3, backoff: { type: 'exponential', delay: 2000 } });
  } else {
    await prisma.retryJob.create({
      data: {
        jobType: 'sync-wealth',
        payload: { investorId, investorRef },
        scheduledAt: new Date(),
      },
    });
  }
}

export async function checkRedisHealth() {
  try {
    await redis.ping();
    return true;
  } catch {
    return false;
  }
}
