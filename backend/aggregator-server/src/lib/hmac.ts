import { createHmac } from 'crypto';

export function signMfRequest(method: string, url: string, body: string, timestamp: string, secret: string) {
  const payload = `${method}\n${url}\n${timestamp}\n${body}`;
  return createHmac('sha256', secret).update(payload).digest('hex');
}
