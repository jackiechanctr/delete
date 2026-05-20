import { Redis } from '@upstash/redis';
import { env } from '../config/env.js';

export const redis = new Redis({
  url: env.UPSTASH_REDIS_REST_URL,
  token: env.UPSTASH_REDIS_REST_TOKEN,
});

export async function cacheGet<T>(key: string): Promise<T | null> {
  const val = await redis.get<string>(key);
  if (!val) return null;
  try {
    return JSON.parse(val) as T;
  } catch {
    return val as unknown as T;
  }
}

export async function cacheSet(key: string, value: unknown, ttl = env.REDIS_TTL) {
  await redis.set(key, JSON.stringify(value), { ex: ttl });
}

export async function cacheDel(key: string) {
  await redis.del(key);
}
