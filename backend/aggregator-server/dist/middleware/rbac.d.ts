import { FastifyRequest, FastifyReply } from 'fastify';
import type { UserRole } from '../../generated/client/index.js';
export declare function requireRole(...roles: UserRole[]): (req: FastifyRequest, reply: FastifyReply) => Promise<undefined>;
