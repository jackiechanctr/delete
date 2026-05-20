import { config } from 'dotenv';
import { z } from 'zod';

config();

const schema = z.object({
  PORT: z.coerce.number().default(3003),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string(),
  API_KEY: z.string(),
  API_SECRET: z.string().min(32),
  SIMULATED_LATENCY_MS: z.coerce.number().default(300),
  FAILURE_RATE: z.coerce.number().default(0.05),
});

export const env = schema.parse(process.env);
