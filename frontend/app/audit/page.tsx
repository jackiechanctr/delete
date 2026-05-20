'use client';

import { useQuery } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import api from '@/lib/api';
import { useAuthStore } from '@/store/auth-store';
import { canAccessAudit } from '@/lib/rbac';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuditPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const { data } = useQuery({
    queryKey: ['audit'],
    queryFn: () => api.get('/api/v1/audit-logs').then((r) => r.data.data),
    enabled: canAccessAudit(user),
  });

  useEffect(() => {
    if (user && !canAccessAudit(user)) router.replace('/dashboard');
  }, [user, router]);

  return (
    <DashboardShell title="Audit Logs">
      <Card>
        <ul className="divide-y divide-border text-sm">
          {(data ?? []).map((log: { id: string; action: string; resource: string; createdAt: string; user?: { email: string } }) => (
            <li key={log.id} className="flex justify-between py-3">
              <span>{log.action} · {log.resource}</span>
              <span className="text-muted-foreground">{log.user?.email} · {new Date(log.createdAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </Card>
    </DashboardShell>
  );
}
