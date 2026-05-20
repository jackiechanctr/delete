import { z } from 'zod';
import { authService } from '../services/auth.service.js';
import { success, fail } from '../lib/response.js';
import { env } from '../config/env.js';
import { prisma } from '../lib/prisma.js';
import { redis } from '../lib/redis.js';
export async function authRoutes(app) {
    app.post('/api/v1/auth/register', async (req, reply) => {
        const body = z
            .object({
            email: z.string().email(),
            password: z.string().min(8),
            firstName: z.string(),
            lastName: z.string(),
        })
            .safeParse(req.body);
        if (!body.success)
            return reply.status(400).send(fail(body.error.message));
        try {
            const user = await authService.register(body.data);
            return success(user);
        }
        catch (e) {
            if (e.message === 'EMAIL_EXISTS')
                return reply.status(409).send(fail('Email exists', 'CONFLICT', 409));
            throw e;
        }
    });
    app.post('/api/v1/auth/login', async (req, reply) => {
        const body = z.object({ email: z.string().email(), password: z.string() }).safeParse(req.body);
        if (!body.success)
            return reply.status(400).send(fail('Invalid credentials'));
        const user = await authService.login(body.data.email, body.data.password);
        if (!user)
            return reply.status(401).send(fail('Invalid credentials', 'UNAUTHORIZED', 401));
        const accessToken = app.jwt.sign({ sub: user.id, email: user.email, role: user.role, type: 'access' }, { expiresIn: env.JWT_EXPIRY });
        const refreshToken = authService.generateRefreshToken();
        await authService.storeRefreshToken(user.id, refreshToken, new Date(Date.now() + 7 * 86400000));
        await prisma.auditLog.create({
            data: { userId: user.id, action: 'LOGIN', resource: 'auth', ipAddress: req.ip, correlationId: req.id },
        });
        return success({
            accessToken,
            refreshToken,
            user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role },
        });
    });
    app.post('/api/v1/auth/refresh', async (req, reply) => {
        const body = z.object({ refreshToken: z.string() }).safeParse(req.body);
        if (!body.success)
            return reply.status(400).send(fail('Invalid body'));
        const record = await authService.validateRefreshToken(body.data.refreshToken);
        if (!record?.user)
            return reply.status(401).send(fail('Invalid refresh token', 'UNAUTHORIZED', 401));
        const newRefresh = authService.generateRefreshToken();
        await authService.revokeRefreshToken(body.data.refreshToken);
        await authService.storeRefreshToken(record.user.id, newRefresh, new Date(Date.now() + 7 * 86400000));
        const accessToken = app.jwt.sign({ sub: record.user.id, email: record.user.email, role: record.user.role, type: 'access' }, { expiresIn: env.JWT_EXPIRY });
        return success({ accessToken, refreshToken: newRefresh });
    });
    app.post('/api/v1/auth/logout', { onRequest: [app.authenticate] }, async (req, reply) => {
        const body = z.object({ refreshToken: z.string().optional() }).safeParse(req.body);
        if (body.success && body.data.refreshToken) {
            await authService.revokeRefreshToken(body.data.refreshToken);
            await redis.set(`blacklist:${authService.hashToken(body.data.refreshToken)}`, '1', { ex: 86400 });
        }
        return reply.send(success({ loggedOut: true }));
    });
}
