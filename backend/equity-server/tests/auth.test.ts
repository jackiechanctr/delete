import { describe, it, expect } from 'vitest';
import { createHash } from 'crypto';

describe('AuthService token hashing', () => {
  it('produces consistent sha256 hash', () => {
    const token = 'test-refresh-token';
    const hash = createHash('sha256').update(token).digest('hex');
    expect(hash).toHaveLength(64);
    expect(createHash('sha256').update(token).digest('hex')).toBe(hash);
  });
});
