'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import api from '@/lib/api';
import { formatCurrency, formatPercent } from '@/lib/utils';

export default function InvestorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: profile } = useQuery({
    queryKey: ['investor', id],
    queryFn: () => api.get(`/api/v1/investors/${id}`).then((r) => r.data.data),
  });
  const { data: wealth } = useQuery({
    queryKey: ['wealth', id],
    queryFn: () => api.get(`/api/v1/investors/${id}/wealth`).then((r) => r.data.data),
  });

  return (
    <DashboardShell title={profile?.displayName ?? 'Investor'}>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle>Unified identity</CardTitle></CardHeader>
          <ul className="space-y-2 text-sm">
            {(profile?.identities ?? []).map((id: { source: string; externalId: string; email?: string; pan?: string }) => (
              <li key={id.externalId} className="rounded-lg bg-muted/30 px-3 py-2">
                <span className="text-primary">{id.source}</span> · {id.externalId}
                {id.pan && <span className="ml-2 text-muted-foreground">PAN: {id.pan}</span>}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardHeader><CardTitle>Wealth snapshot</CardTitle></CardHeader>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between"><dt>Net worth</dt><dd className="font-bold">{formatCurrency(wealth?.totalNetWorth ?? 0)}</dd></div>
            <div className="flex justify-between"><dt>Diversification</dt><dd>{formatPercent(wealth?.diversificationScore ?? 0)}</dd></div>
            <div className="flex justify-between"><dt>Liquidity</dt><dd>{((wealth?.liquidityRatio ?? 0) * 100).toFixed(1)}%</dd></div>
            <div className="flex justify-between"><dt>Risk</dt><dd>{wealth?.riskExposure ?? '—'}</dd></div>
          </dl>
        </Card>
      </div>
    </DashboardShell>
  );
}
