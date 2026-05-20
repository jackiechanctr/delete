'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card } from '@/components/ui/card';
import api from '@/lib/api';
import { formatCurrency } from '@/lib/utils';

export default function InvestorsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['investors'],
    queryFn: () => api.get('/api/v1/investors').then((r) => r.data),
  });

  const investors = data?.data ?? [];

  return (
    <DashboardShell title="Investors">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="p-3">Name</th>
                <th className="p-3">Unified ID</th>
                <th className="p-3">PAN</th>
                <th className="p-3">Net Worth</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr><td className="p-3" colSpan={5}>Loading...</td></tr>
              ) : (
                investors.map((inv: { id: string; displayName: string; unifiedId: string; pan?: string; totalNetWorth?: number }) => (
                  <tr key={inv.id} className="border-b border-border/50 hover:bg-muted/30">
                    <td className="p-3 font-medium">{inv.displayName}</td>
                    <td className="p-3 text-muted-foreground">{inv.unifiedId}</td>
                    <td className="p-3">{inv.pan ?? '—'}</td>
                    <td className="p-3">{formatCurrency(Number(inv.totalNetWorth ?? 0))}</td>
                    <td className="p-3">
                      <Link href={`/investors/${inv.id}`} className="text-primary hover:underline">View</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardShell>
  );
}
