import type { Express } from 'express';
import { z } from 'zod';
import { authService } from '../services/auth.service.js';
import { success, fail } from '../lib/response.js';
import { env } from '../config/env.js';
import { prisma } from '../lib/prisma.js';
import { redis } from '../lib/redis.js';

export async function authRoutes(app: Express) {
  app.post('/api/v1/auth/register', async (req, res) => {
    const body = z
      .object({
        email: z.string().email(),
        password: z.string().min(8),
        firstName: z.string(),
        lastName: z.string(),
      })
      .safeParse(req.body);
    if (!body.success) return res.status(400).json(fail(body.error.message));
    try {
      const user = await authService.register(body.data);
      return res.json(success(user));
    } catch (e) {
      if ((e as Error).message === 'EMAIL_EXISTS') return res.status(409).json(fail('Email exists', 'CONFLICT', 409));
      throw e;
    }
  });

  app.post('/api/v1/auth/login', async (req, res) => {
    const body = z.object({ email: z.string().email(), password: z.string() }).safeParse(req.body);
    if (!body.success) return res.status(400).json(fail('Invalid credentials'));
    const user = await authService.login(body.data.email, body.data.password);
    if (!user) return res.status(401).json(fail('Invalid credentials', 'UNAUTHORIZED', 401));

    const accessToken = app.locals.jwtSign({ sub: user.id, email: user.email, role: user.role, type: 'access' }, env.JWT_EXPIRY);
    const refreshToken = authService.generateRefreshToken();
    await authService.storeRefreshToken(user.id, refreshToken, new Date(Date.now() + 7 * 86400000));

    await prisma.auditLog.create({
      data: { userId: user.id, action: 'LOGIN', resource: 'auth', ipAddress: req.ip, correlationId: req.id },
    });

    return res.json(success({
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role },
    }));
  });

  app.post('/api/v1/auth/refresh', async (req, res) => {
    const body = z.object({ refreshToken: z.string() }).safeParse(req.body);
    if (!body.success) return res.status(400).json(fail('Invalid body'));
    const record = await authService.validateRefreshToken(body.data.refreshToken);
    if (!record?.user) return res.status(401).json(fail('Invalid refresh token', 'UNAUTHORIZED', 401));

    const newRefresh = authService.generateRefreshToken();
    await authService.revokeRefreshToken(body.data.refreshToken);
    await authService.storeRefreshToken(record.user.id, newRefresh, new Date(Date.now() + 7 * 86400000));

    const accessToken = app.locals.jwtSign({ sub: record.user.id, email: record.user.email, role: record.user.role, type: 'access' }, env.JWT_EXPIRY);
    return res.json(success({ accessToken, refreshToken: newRefresh }));
  });

  app.post('/api/v1/auth/logout', app.locals.authenticate, async (req, res) => {
    const body = z.object({ refreshToken: z.string().optional() }).safeParse(req.body);
    if (body.success && body.data.refreshToken) {
      await authService.revokeRefreshToken(body.data.refreshToken);
      await redis.set(`blacklist:${authService.hashToken(body.data.refreshToken)}`, '1', { ex: 86400 });
    }
    return res.json(success({ loggedOut: true }));
  });
}
