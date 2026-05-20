import { createHmac, timingSafeEqual } from 'crypto';
import { Request, Response } from 'express';
import { env } from '../config/env.js';

const MAX_SKEW_MS = 5 * 60 * 1000;

export async function hmacAuth(req: Request, res: Response) {
  if (req.url.startsWith('/health') || req.url.startsWith('/docs')) return false;

  const apiKey = req.headers['x-api-key'] as string;
  const timestamp = req.headers['x-timestamp'] as string;
  const signature = req.headers['x-signature'] as string;

  if (!apiKey || !timestamp || !signature) {
    res.status(401).json({ success: false, error: { message: 'Missing auth headers', code: 'UNAUTHORIZED' } });
    return true;
  }

  if (apiKey !== env.API_KEY) {
    res.status(401).json({ success: false, error: { message: 'Invalid API key', code: 'UNAUTHORIZED' } });
    return true;
  }

  const ts = parseInt(timestamp, 10);
  if (Number.isNaN(ts) || Math.abs(Date.now() - ts) > MAX_SKEW_MS) {
    res.status(401).json({ success: false, error: { message: 'Timestamp expired', code: 'UNAUTHORIZED' } });
    return true;
  }

  const body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? '');
  const payload = `${req.method}\n${req.url}\n${timestamp}\n${body}`;
  const expected = createHmac('sha256', env.API_SECRET).update(payload).digest('hex');

  try {
    const valid = timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
    if (!valid) throw new Error('mismatch');
  } catch {
    res.status(401).json({ success: false, error: { message: 'Invalid signature', code: 'UNAUTHORIZED' } });
    return true;
  }
  return false;
}
