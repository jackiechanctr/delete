'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import api from '@/lib/api';

export default function AlertsPage() {
  const qc = useQueryClient();
  const { data } = useQuery({
    queryKey: ['alerts'],
    queryFn: () => api.get('/api/v1/alerts').then((r) => r.data.data),
  });

  const ack = useMutation({
    mutationFn: (id: string) => api.patch(`/api/v1/alerts/${id}`, { status: 'ACKNOWLEDGED' }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['alerts'] }),
  });

  return (
    <DashboardShell title="Alerts Center">
      <div className="space-y-3">
        {(data ?? []).map((a: { id: string; title: string; message: string; severity: string; status: string }) => (
          <Card key={a.id} className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-muted-foreground">{a.message}</p>
              <span className="text-xs text-primary">{a.severity} · {a.status}</span>
            </div>
            {a.status === 'OPEN' && (
              <Button size="sm" variant="outline" onClick={() => ack.mutate(a.id)}>Acknowledge</Button>
            )}
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
