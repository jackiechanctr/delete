'use client';

import { useQuery } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import api from '@/lib/api';

export default function OperationsPage() {
  const { data, refetch } = useQuery({
    queryKey: ['ops-health'],
    queryFn: () => api.get('/api/v1/operations/health-check').then((r) => r.data.data),
    refetchInterval: 30_000,
  });

  return (
    <DashboardShell title="Operations Monitoring">
      <button onClick={() => refetch()} className="mb-4 text-sm text-primary hover:underline">Refresh health check</button>
      <div className="grid gap-4 md:grid-cols-3">
        {(data ?? []).map((s: { service: string; status: string; latencyMs?: number }) => (
          <Card key={s.service}>
            <CardHeader>
              <CardTitle className="capitalize">{s.service}</CardTitle>
              <p className={s.status === 'UP' ? 'text-emerald-400' : 'text-red-400'}>{s.status}</p>
              {s.latencyMs != null && <p className="text-xs text-muted-foreground">{s.latencyMs}ms</p>}
            </CardHeader>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
