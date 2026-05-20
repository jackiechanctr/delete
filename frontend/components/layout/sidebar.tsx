'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  PieChart,
  Building2,
  Activity,
  Bell,
  FileText,
  Shield,
  Settings,
  LogOut,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth-store';
import { canAccessAdmin, canAccessAudit } from '@/lib/rbac';

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  visible?: (user: ReturnType<typeof useAuthStore.getState>['user']) => boolean;
};

const links: NavLink[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/investors', label: 'Investors', icon: Users },
  { href: '/portfolio', label: 'Portfolio', icon: PieChart },
  { href: '/real-estate', label: 'Real Estate', icon: Building2 },
  { href: '/operations', label: 'Operations', icon: Activity },
  { href: '/alerts', label: 'Alerts', icon: Bell },
  { href: '/audit', label: 'Audit Logs', icon: FileText, visible: canAccessAudit },
  { href: '/admin', label: 'Admin', icon: Shield, visible: canAccessAdmin },
  { href: '/profile', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuthStore();

  const visibleLinks = links.filter((link) => !link.visible || link.visible(user));

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-violet-200/30 bg-gradient-to-b from-violet-50/50 to-white backdrop-blur-xl">
      <div className="border-b border-violet-200/30 p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image src="/ai.svg" alt="WEALTH IQ" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-bold bg-gradient-to-r from-violet-700 to-indigo-700 bg-clip-text text-transparent">
            WEALTH IQ
          </span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {visibleLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all',
              pathname === href || pathname.startsWith(href + '/')
                ? 'bg-violet-100 text-violet-700 font-medium'
                : 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="border-t border-violet-200/30 p-4">
        <p className="truncate text-xs text-slate-600">{user?.email}</p>
        <p className="text-xs font-semibold text-violet-700">{user?.role}</p>
        <button
          type="button"
          onClick={logout}
          className="mt-3 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-violet-100 hover:text-violet-700 transition-all"
        >
          <LogOut className="h-4 w-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
