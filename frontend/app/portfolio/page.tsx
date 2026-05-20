'use client';

import { useQuery } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { AllocationPie, SipBarChart } from '@/components/charts/wealth-charts';
import api from '@/lib/api';

export default function PortfolioPage() {
  const { data: investors } = useQuery({
    queryKey: ['investors-list'],
    queryFn: () => api.get('/api/v1/investors?limit=1').then((r) => r.data.data),
  });
  const id = investors?.[0]?.id;
  const { data } = useQuery({
    queryKey: ['portfolio', id],
    enabled: !!id,
    queryFn: () => api.get(`/api/v1/investors/${id}/portfolio`).then((r) => r.data.data),
  });

  const allocation = data?.wealth?.allocation
    ? [
        { name: 'Equity', value: data.wealth.allocation.equity },
        { name: 'MF', value: data.wealth.allocation.mutualFunds },
        { name: 'RE', value: data.wealth.allocation.realEstate },
      ]
    : [];

  const sipData = (data?.mutualFunds ?? []).slice(0, 5).map((s: { fund?: { name: string }; amount: number }) => ({
    name: s.fund?.name?.slice(0, 12) ?? 'SIP',
    amount: s.amount ?? 0,
  }));

  return (
    <DashboardShell title="Portfolio Analytics">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card><CardHeader><CardTitle>Allocation</CardTitle></CardHeader><AllocationPie data={allocation} /></Card>
        <Card><CardHeader><CardTitle>SIP commitments</CardTitle></CardHeader><SipBarChart data={sipData} /></Card>
      </div>
    </DashboardShell>
  );
}
