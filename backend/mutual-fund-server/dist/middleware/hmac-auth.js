import { createHmac, timingSafeEqual } from 'crypto';
import { env } from '../config/env.js';
const MAX_SKEW_MS = 5 * 60 * 1000;
export async function hmacAuth(req, reply) {
    if (req.url.startsWith('/health') || req.url.startsWith('/docs'))
        return;
    const apiKey = req.headers['x-api-key'];
    const timestamp = req.headers['x-timestamp'];
    const signature = req.headers['x-signature'];
    if (!apiKey || !timestamp || !signature) {
        return reply.status(401).send({ success: false, error: { message: 'Missing auth headers', code: 'UNAUTHORIZED' } });
    }
    if (apiKey !== env.API_KEY) {
        return reply.status(401).send({ success: false, error: { message: 'Invalid API key', code: 'UNAUTHORIZED' } });
    }
    const ts = parseInt(timestamp, 10);
    if (Number.isNaN(ts) || Math.abs(Date.now() - ts) > MAX_SKEW_MS) {
        return reply.status(401).send({ success: false, error: { message: 'Timestamp expired', code: 'UNAUTHORIZED' } });
    }
    const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? '');
    const payload = `${req.method}\n${req.url}\n${timestamp}\n${body}`;
    const expected = createHmac('sha256', env.API_SECRET).update(payload).digest('hex');
    try {
        const valid = timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
        if (!valid)
            throw new Error('mismatch');
    }
    catch {
        return reply.status(401).send({ success: false, error: { message: 'Invalid signature', code: 'UNAUTHORIZED' } });
    }
}
