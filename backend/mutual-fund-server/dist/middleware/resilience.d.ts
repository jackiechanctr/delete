import { FastifyRequest, FastifyReply } from 'fastify';
export declare function simulateLatency(_req: FastifyRequest, _reply: FastifyReply): Promise<void>;
export declare function simulateFailure(_req: FastifyRequest, reply: FastifyReply): Promise<undefined>;
