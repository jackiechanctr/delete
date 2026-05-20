import { env } from '../config/env.js';
export async function simulateLatency(_req, _reply) {
    if (env.SIMULATED_LATENCY_MS > 0) {
        await new Promise((r) => setTimeout(r, env.SIMULATED_LATENCY_MS + Math.random() * 100));
    }
}
export async function simulateFailure(_req, reply) {
    if (Math.random() < env.FAILURE_RATE) {
        return reply.status(503).send({
            success: false,
            error: { message: 'Simulated downstream failure', code: 'SERVICE_UNAVAILABLE' },
        });
    }
}
