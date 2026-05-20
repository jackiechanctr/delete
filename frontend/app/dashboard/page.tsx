'use client';

import { useQuery } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AllocationPie, WealthTrendChart } from '@/components/charts/wealth-charts';
import api from '@/lib/api';
import { formatCurrency } from '@/lib/utils';
import { useSocket } from '@/providers/socket-provider';
import { useEffect, useState } from 'react';
import { Activity, TrendingUp, AlertTriangle, Users } from 'lucide-react';

export default function DashboardPage() {
  const socket = useSocket();
  const [liveAlert, setLiveAlert] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => api.get('/api/v1/dashboard').then((r) => r.data.data),
    refetchInterval: 60_000,
  });

  useEffect(() => {
    if (!socket) return;
    socket.on('alert:new', (p: { title?: string }) => setLiveAlert(p.title ?? 'New alert'));
    socket.on('system:health', () => undefined);
    return () => {
      socket.off('alert:new');
    };
  }, [socket]);

  const wealth = data?.wealth;
  const allocation = wealth?.allocation
    ? [
        { name: 'Equity', value: wealth.allocation.equity ?? 0 },
        { name: 'Mutual Funds', value: wealth.allocation.mutualFunds ?? 0 },
        { name: 'Real Estate', value: wealth.allocation.realEstate ?? 0 },
      ]
    : [];

  const stats = [
    { label: 'Platform AUM', value: formatCurrency(data?.summary?.platformAum ?? 0), icon: TrendingUp },
    { label: 'Investors', value: String(data?.summary?.totalInvestors ?? 0), icon: Users },
    { label: 'Critical Alerts', value: String(data?.summary?.criticalAlerts ?? 0), icon: AlertTriangle },
    { label: 'Services', value: data?.serviceHealth?.filter((s: { status: string }) => s.status === 'UP').length ?? 0, icon: Activity },
  ];

  return (
    <DashboardShell title="Dashboard">
      {liveAlert && (
        <div className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
          Live: {liveAlert}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{s.label}</CardDescription>
              <s.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <p className="text-2xl font-bold">{isLoading ? '—' : s.value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Asset allocation</CardTitle>
            <CardDescription>{wealth?.riskExposure ?? '—'} risk profile</CardDescription>
          </CardHeader>
          {allocation.length > 0 ? <AllocationPie data={allocation} /> : <p className="text-muted-foreground">No data</p>}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wealth trend</CardTitle>
            <CardDescription>Net worth: {formatCurrency(wealth?.totalNetWorth ?? 0)}</CardDescription>
          </CardHeader>
          <WealthTrendChart
            data={(data?.wealthTrend ?? []).map((w: { date: string; value: number }) => ({
              date: new Date(w.date).toLocaleDateString(),
              value: w.value,
            }))}
          />
        </Card>
      </div>
    </DashboardShell>
  );
}
