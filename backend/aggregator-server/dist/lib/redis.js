import { Redis } from '@upstash/redis';
import { env } from '../config/env.js';
export const redis = new Redis({
    url: env.UPSTASH_REDIS_REST_URL,
    token: env.UPSTASH_REDIS_REST_TOKEN,
});
export async function cacheGet(key) {
    const val = await redis.get(key);
    if (!val)
        return null;
    try {
        return JSON.parse(val);
    }
    catch {
        return val;
    }
}
export async function cacheSet(key, value, ttl = env.REDIS_TTL) {
    await redis.set(key, JSON.stringify(value), { ex: ttl });
}
export async function cacheDel(key) {
    await redis.del(key);
}
