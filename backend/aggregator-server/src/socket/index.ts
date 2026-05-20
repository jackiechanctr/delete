import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';
import { env } from '../config/env.js';
import { logger } from '../lib/logger.js';
import { redis } from '../lib/redis.js';

export function initSocket(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: { origin: env.CORS_ORIGIN, credentials: true },
    path: '/socket.io',
  });

  io.on('connection', (socket) => {
    logger.info('WebSocket connected', { socketId: socket.id });
    socket.join('operations');

    socket.on('subscribe:investor', (investorId: string) => {
      socket.join(`investor:${investorId}`);
    });

    socket.on('disconnect', () => {
      logger.debug('WebSocket disconnected', { socketId: socket.id });
    });
  });

  setInterval(async () => {
    try {
      const ping = await redis.ping();
      io.to('operations').emit('system:health', { redis: ping === 'PONG', ts: Date.now() });
    } catch {
      io.to('operations').emit('system:health', { redis: false, ts: Date.now() });
    }
  }, 30000);

  return {
    io,
    emitAlert: (payload: unknown) => io.emit('alert:new', payload),
    emitPortfolioUpdate: (investorId: string, payload: unknown) =>
      io.to(`investor:${investorId}`).emit('portfolio:update', payload),
    emitSyncComplete: (investorId: string) => io.to(`investor:${investorId}`).emit('sync:complete', { investorId }),
    emitServiceOutage: (service: string) => io.to('operations').emit('service:outage', { service, ts: Date.now() }),
    emitSipFailure: (payload: unknown) => io.emit('sip:failure', payload),
  };
}

export type SocketHub = ReturnType<typeof initSocket>;
