import { z } from 'zod';
import { authService } from '../services/auth.service.js';
import { success, fail } from '../lib/response.js';
import { env } from '../config/env.js';
const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    externalId: z.string().optional(),
});
const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export async function authRoutes(app) {
    app.post('/api/v1/auth/register', async (req, reply) => {
        const parsed = registerSchema.safeParse(req.body);
        if (!parsed.success)
            return reply.status(400).send(fail(parsed.error.message));
        try {
            const user = await authService.register(parsed.data.email, parsed.data.password, parsed.data.externalId);
            return success(user);
        }
        catch (e) {
            if (e.message === 'EMAIL_EXISTS')
                return reply.status(409).send(fail('Email already registered', 'CONFLICT', 409));
            throw e;
        }
    });
    app.post('/api/v1/auth/login', async (req, reply) => {
        const parsed = loginSchema.safeParse(req.body);
        if (!parsed.success)
            return reply.status(400).send(fail(parsed.error.message));
        const user = await authService.validateUser(parsed.data.email, parsed.data.password);
        if (!user)
            return reply.status(401).send(fail('Invalid credentials', 'UNAUTHORIZED', 401));
        const accessToken = app.jwt.sign({ sub: user.id, email: user.email, type: 'access' }, { expiresIn: env.JWT_EXPIRY });
        const refreshToken = authService.generateRefreshToken();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await authService.storeRefreshToken(user.id, refreshToken, expiresAt);
        return success({ accessToken, refreshToken, user });
    });
    app.post('/api/v1/auth/refresh', async (req, reply) => {
        const body = z.object({ refreshToken: z.string() }).safeParse(req.body);
        if (!body.success)
            return reply.status(400).send(fail('Invalid body'));
        try {
            const { prisma } = await import('../lib/prisma.js');
            const hash = authService.hashToken(body.data.refreshToken);
            const record = await prisma.refreshToken.findFirst({
                where: { tokenHash: hash, revoked: false, expiresAt: { gt: new Date() } },
                include: { user: true },
            });
            if (!record?.user)
                return reply.status(401).send(fail('Invalid refresh token', 'UNAUTHORIZED', 401));
            const newRefresh = authService.generateRefreshToken();
            const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
            await authService.rotateRefreshToken(body.data.refreshToken, newRefresh, expiresAt);
            const accessToken = app.jwt.sign({ sub: record.user.id, email: record.user.email, type: 'access' }, { expiresIn: env.JWT_EXPIRY });
            return success({ accessToken, refreshToken: newRefresh });
        }
        catch {
            return reply.status(401).send(fail('Invalid refresh token', 'UNAUTHORIZED', 401));
        }
    });
}
