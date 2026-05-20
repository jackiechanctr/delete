import bcrypt from 'bcryptjs';
import { createHash, randomBytes } from 'crypto';
import { prisma } from '../lib/prisma.js';

export class AuthService {
  async register(email: string, password: string, externalId?: string) {
    const existing = await prisma.equityUser.findUnique({ where: { email } });
    if (existing) throw new Error('EMAIL_EXISTS');
    const passwordHash = await bcrypt.hash(password, 12);
    return prisma.equityUser.create({
      data: { email, passwordHash, externalId },
      select: { id: true, email: true, externalId: true, createdAt: true },
    });
  }

  async validateUser(email: string, password: string) {
    const user = await prisma.equityUser.findUnique({ where: { email } });
    if (!user) return null;
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return null;
    return { id: user.id, email: user.email, externalId: user.externalId };
  }

  hashToken(token: string) {
    return createHash('sha256').update(token).digest('hex');
  }

  async storeRefreshToken(userId: string, token: string, expiresAt: Date) {
    return prisma.refreshToken.create({
      data: { userId, tokenHash: this.hashToken(token), expiresAt },
    });
  }

  async rotateRefreshToken(oldToken: string, newToken: string, expiresAt: Date) {
    const hash = this.hashToken(oldToken);
    const record = await prisma.refreshToken.findFirst({
      where: { tokenHash: hash, revoked: false, expiresAt: { gt: new Date() } },
    });
    if (!record) throw new Error('INVALID_REFRESH');
    await prisma.refreshToken.update({ where: { id: record.id }, data: { revoked: true } });
    return this.storeRefreshToken(record.userId, newToken, expiresAt);
  }

  generateRefreshToken() {
    return randomBytes(48).toString('hex');
  }
}

export const authService = new AuthService();
