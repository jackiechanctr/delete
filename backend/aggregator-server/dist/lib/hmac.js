import { createHmac } from 'crypto';
export function signMfRequest(method, url, body, timestamp, secret) {
    const payload = `${method}\n${url}\n${timestamp}\n${body}`;
    return createHmac('sha256', secret).update(payload).digest('hex');
}
