'use client';

import { useQuery } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import api from '@/lib/api';
import { formatCurrency, formatPercent } from '@/lib/utils';

export default function RealEstatePage() {
  const { data } = useQuery({
    queryKey: ['real-estate'],
    queryFn: () => api.get('/api/v1/real-estate').then((r) => r.data.data),
  });

  return (
    <DashboardShell title="Real Estate Assets">
      <div className="grid gap-6 md:grid-cols-2">
        {(data ?? []).map((p: { id: string; name: string; category: string; city?: string; currentValue: number; appreciationPct: number; roiPct: number }) => (
          <Card key={p.id}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{p.category} · {p.city}</p>
            </CardHeader>
            <dl className="grid grid-cols-3 gap-2 text-sm">
              <div><dt className="text-muted-foreground">Value</dt><dd className="font-semibold">{formatCurrency(p.currentValue)}</dd></div>
              <div><dt className="text-muted-foreground">Appreciation</dt><dd className="text-emerald-400">{formatPercent(p.appreciationPct)}</dd></div>
              <div><dt className="text-muted-foreground">ROI</dt><dd>{formatPercent(p.roiPct)}</dd></div>
            </dl>
          </Card>
        ))}
      </div>
    </DashboardShell>
  );
}
