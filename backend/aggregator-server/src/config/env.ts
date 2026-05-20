import { config } from 'dotenv';
import { z } from 'zod';

config();

export const env = z
  .object({
    PORT: z.coerce.number().default(3001),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    DATABASE_URL: z.string(),
    UPSTASH_REDIS_REST_URL: z.string(),
    UPSTASH_REDIS_REST_TOKEN: z.string(),
    REDIS_URL: z.string().optional(),
    REDIS_TTL: z.coerce.number().default(3600),
    JWT_SECRET: z.string().min(32),
    JWT_EXPIRY: z.string().default('24h'),
    JWT_REFRESH_EXPIRY: z.string().default('7d'),
    EQUITY_SERVER_URL: z.string().default('http://localhost:3002'),
    MF_SERVER_URL: z.string().default('http://localhost:3003'),
    MF_API_KEY: z.string(),
    MF_API_SECRET: z.string(),
    CORS_ORIGIN: z.string().default('http://localhost:3000'),
  })
  .parse(process.env);
