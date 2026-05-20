import { Server } from 'socket.io';
import { env } from '../config/env.js';
import { logger } from '../lib/logger.js';
import { redis } from '../lib/redis.js';
export function initSocket(httpServer) {
    const io = new Server(httpServer, {
        cors: { origin: env.CORS_ORIGIN, credentials: true },
        path: '/socket.io',
    });
    io.on('connection', (socket) => {
        logger.info('WebSocket connected', { socketId: socket.id });
        socket.join('operations');
        socket.on('subscribe:investor', (investorId) => {
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
        }
        catch {
            io.to('operations').emit('system:health', { redis: false, ts: Date.now() });
        }
    }, 30000);
    return {
        io,
        emitAlert: (payload) => io.emit('alert:new', payload),
        emitPortfolioUpdate: (investorId, payload) => io.to(`investor:${investorId}`).emit('portfolio:update', payload),
        emitSyncComplete: (investorId) => io.to(`investor:${investorId}`).emit('sync:complete', { investorId }),
        emitServiceOutage: (service) => io.to('operations').emit('service:outage', { service, ts: Date.now() }),
        emitSipFailure: (payload) => io.emit('sip:failure', payload),
    };
}
