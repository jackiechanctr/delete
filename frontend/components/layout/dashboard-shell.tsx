'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from './sidebar';
import { useAuthStore } from '@/store/auth-store';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DashboardShell({ children, title }: { children: React.ReactNode; title: string }) {
  const router = useRouter();
  const { user } = useAuthStore();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token && !user) router.replace('/login');
  }, [user, router]);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-64 min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-violet-200/30 bg-white/80 px-8 py-4 backdrop-blur-xl">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h1>
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-violet-700 hover:bg-violet-100">
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </header>
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
