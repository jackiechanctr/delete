import { Server as HttpServer } from 'http';
import { Server } from 'socket.io';
export declare function initSocket(httpServer: HttpServer): {
    io: Server<import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, import("socket.io").DefaultEventsMap, any>;
    emitAlert: (payload: unknown) => boolean;
    emitPortfolioUpdate: (investorId: string, payload: unknown) => boolean;
    emitSyncComplete: (investorId: string) => boolean;
    emitServiceOutage: (service: string) => boolean;
    emitSipFailure: (payload: unknown) => boolean;
};
export type SocketHub = ReturnType<typeof initSocket>;
