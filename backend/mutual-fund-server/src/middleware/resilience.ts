import { Request, Response, NextFunction } from 'express';
import { env } from '../config/env.js';

export async function simulateLatency(_req: Request, _res: Response, next: NextFunction) {
  if (env.SIMULATED_LATENCY_MS > 0) {
    await new Promise((r) => setTimeout(r, env.SIMULATED_LATENCY_MS + Math.random() * 200));
  }
  next();
}

export async function simulateFailure(_req: Request, res: Response, next: NextFunction) {
  if (Math.random() < env.FAILURE_RATE) {
    return res.status(503).json({
      success: false,
      error: { message: 'Simulated MF downstream failure - retry recommended', code: 'SERVICE_UNAVAILABLE' },
    });
  }
  next();
}
