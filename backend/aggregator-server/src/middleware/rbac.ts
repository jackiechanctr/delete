import { Request, Response, NextFunction } from 'express';
import type { UserRole } from '../../generated/client/index.js';

const ROLE_RANK: Record<UserRole, number> = {
  VIEWER: 1,
  ADVISOR: 2,
  OPERATIONS: 3,
  ADMIN: 4,
  SUPER_ADMIN: 5,
};

export function requireRole(...roles: UserRole[]) {
  const minRank = Math.min(...roles.map((r) => ROLE_RANK[r]));
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as { role?: UserRole };
    if (!user?.role) {
      return res.status(401).json({ success: false, error: { message: 'Unauthorized' } });
    }
    if (ROLE_RANK[user.role] < minRank) {
      return res.status(403).json({ success: false, error: { message: 'Forbidden', code: 'FORBIDDEN' } });
    }
    next();
  };
}
