import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { hasMinRole, type UserRole } from '@/lib/rbac';

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole | string;
}

interface AuthState {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
        set({ user: null });
      },
    }),
    { name: 'auth-storage' }
  )
);

/** @deprecated Prefer hasMinRole / hasAnyRole from @/lib/rbac */
export function hasRole(user: AuthUser | null, roles: string[]) {
  const rank: Record<string, number> = { VIEWER: 1, ADVISOR: 2, OPERATIONS: 3, ADMIN: 4, SUPER_ADMIN: 5 };
  const min = Math.min(...roles.map((r) => rank[r] ?? 99));
  return (rank[user?.role ?? ''] ?? 0) >= min;
}

export { hasMinRole };
