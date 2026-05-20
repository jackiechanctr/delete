import { Redis } from '@upstash/redis';
export declare const redis: Redis;
export declare function cacheGet<T>(key: string): Promise<T | null>;
export declare function cacheSet(key: string, value: unknown, ttl?: number): Promise<void>;
export declare function cacheDel(key: string): Promise<void>;
