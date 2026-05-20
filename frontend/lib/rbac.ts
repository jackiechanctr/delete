import type { AuthUser } from '@/store/auth-store';

export const ROLES = ['SUPER_ADMIN', 'ADMIN', 'ADVISOR', 'OPERATIONS', 'VIEWER'] as const;
export type UserRole = (typeof ROLES)[number];

const ROLE_RANK: Record<UserRole, number> = {
  VIEWER: 1,
  ADVISOR: 2,
  OPERATIONS: 3,
  ADMIN: 4,
  SUPER_ADMIN: 5,
};

export function hasMinRole(user: AuthUser | null, minRole: UserRole): boolean {
  if (!user) return false;
  const role = user.role as UserRole;
  return (ROLE_RANK[role] ?? 0) >= ROLE_RANK[minRole];
}

/** Exact role membership (e.g. Admin nav: ADMIN + SUPER_ADMIN only). */
export function hasAnyRole(user: AuthUser | null, roles: UserRole[]): boolean {
  if (!user) return false;
  return roles.includes(user.role as UserRole);
}

export function canAccessAdmin(user: AuthUser | null): boolean {
  return hasAnyRole(user, ['ADMIN', 'SUPER_ADMIN']);
}

export function canAccessAudit(user: AuthUser | null): boolean {
  return hasMinRole(user, 'OPERATIONS');
}

export const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: 'Full platform control',
  ADMIN: 'User & identity administration',
  ADVISOR: 'Investor & portfolio access',
  OPERATIONS: 'Monitoring, alerts & audit',
  VIEWER: 'Read-only dashboard access',
};
