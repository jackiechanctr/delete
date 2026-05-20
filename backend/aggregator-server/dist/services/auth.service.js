import bcrypt from 'bcryptjs';
import { createHash, randomBytes } from 'crypto';
import { prisma } from '../lib/prisma.js';
export class AuthService {
    async register(data) {
        const exists = await prisma.user.findUnique({ where: { email: data.email.toLowerCase() } });
        if (exists)
            throw new Error('EMAIL_EXISTS');
        return prisma.user.create({
            data: {
                email: data.email.toLowerCase(),
                passwordHash: await bcrypt.hash(data.password, 12),
                firstName: data.firstName,
                lastName: data.lastName,
                role: data.role ?? 'VIEWER',
            },
            select: { id: true, email: true, firstName: true, lastName: true, role: true },
        });
    }
    async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user || !user.active)
            return null;
        if (user.lockedUntil && user.lockedUntil > new Date())
            return null;
        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) {
            const failed = user.failedLogins + 1;
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    failedLogins: failed,
                    lockedUntil: failed >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null,
                },
            });
            return null;
        }
        await prisma.user.update({ where: { id: user.id }, data: { failedLogins: 0, lockedUntil: null } });
        return user;
    }
    hashToken(token) {
        return createHash('sha256').update(token).digest('hex');
    }
    generateRefreshToken() {
        return randomBytes(48).toString('hex');
    }
    async storeRefreshToken(userId, token, expiresAt) {
        return prisma.refreshToken.create({
            data: { userId, tokenHash: this.hashToken(token), expiresAt },
        });
    }
    async revokeRefreshToken(token) {
        await prisma.refreshToken.updateMany({
            where: { tokenHash: this.hashToken(token) },
            data: { revoked: true },
        });
    }
    async validateRefreshToken(token) {
        return prisma.refreshToken.findFirst({
            where: { tokenHash: this.hashToken(token), revoked: false, expiresAt: { gt: new Date() } },
            include: { user: true },
        });
    }
}
export const authService = new AuthService();
