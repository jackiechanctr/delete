import { describe, it, expect } from 'vitest';
import { createHmac } from 'crypto';

function sign(method: string, url: string, body: string, ts: string, secret: string) {
  return createHmac('sha256', secret).update(`${method}\n${url}\n${ts}\n${body}`).digest('hex');
}

describe('HMAC signing', () => {
  it('generates valid signature', () => {
    const secret = 'mf-hmac-secret-enterprise-2024-min-32-chars';
    const ts = '1700000000000';
    const sig = sign('GET', '/api/v1/sips', '', ts, secret);
    expect(sig).toMatch(/^[a-f0-9]{64}$/);
  });
});
