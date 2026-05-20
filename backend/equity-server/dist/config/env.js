import { config } from 'dotenv';
import { z } from 'zod';
config();
const schema = z.object({
    PORT: z.coerce.number().default(3002),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    DATABASE_URL: z.string(),
    JWT_SECRET: z.string().min(32),
    JWT_EXPIRY: z.string().default('24h'),
    JWT_REFRESH_EXPIRY: z.string().default('7d'),
    SIMULATED_LATENCY_MS: z.coerce.number().default(150),
    FAILURE_RATE: z.coerce.number().default(0.02),
});
export const env = schema.parse(process.env);
