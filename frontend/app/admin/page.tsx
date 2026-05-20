'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth-store';
import { canAccessAdmin, ROLES, ROLE_LABELS, type UserRole } from '@/lib/rbac';
import api from '@/lib/api';
import { Shield, GitMerge, CheckCircle2, AlertCircle } from 'lucide-react';

const IDENTITY_SOURCES = ['EQUITY', 'MUTUAL_FUND', 'CRM', 'MANUAL', 'REAL_ESTATE'] as const;

export default function AdminPage() {
  const user = useAuthStore((s) => s.user);
  const router = useRouter();
  const [form, setForm] = useState({
    source: 'CRM' as (typeof IDENTITY_SOURCES)[number],
    externalId: '',
    email: '',
    pan: '',
    displayName: '',
  });
  const [result, setResult] = useState<{ unifiedId?: string; error?: string } | null>(null);

  useEffect(() => {
    if (user && !canAccessAdmin(user)) router.replace('/dashboard');
  }, [user, router]);

  const reconcile = useMutation({
    mutationFn: () =>
      api.post('/api/v1/investors/reconcile', {
        source: form.source,
        externalId: form.externalId.trim(),
        ...(form.email.trim() && { email: form.email.trim() }),
        ...(form.pan.trim() && { pan: form.pan.trim().toUpperCase() }),
        ...(form.displayName.trim() && { displayName: form.displayName.trim() }),
      }),
    onSuccess: (res) => {
      setResult({
        unifiedId: res.data.data?.investor?.unifiedId,
        error: undefined,
      });
    },
    onError: (err: { response?: { data?: { error?: { message?: string } } } }) => {
      setResult({
        error: err.response?.data?.error?.message ?? 'Reconciliation failed',
      });
    },
  });

  if (!user || !canAccessAdmin(user)) {
    return (
      <DashboardShell title="Admin Panel">
        <p className="text-sm text-muted-foreground">Checking access…</p>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell title="Admin Panel">
      <p className="mb-6 text-sm text-muted-foreground">
        Signed in as <span className="text-foreground">{user.email}</span> ·{' '}
        <span className="font-medium text-primary">{user.role}</span>
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              RBAC
            </CardTitle>
            <CardDescription>Role-based access control for the platform</CardDescription>
          </CardHeader>
          <ul className="space-y-3">
            {ROLES.map((role) => (
              <li
                key={role}
                className={`rounded-lg border px-4 py-3 ${
                  user.role === role ? 'border-primary/50 bg-primary/10' : 'border-border/50 bg-muted/20'
                }`}
              >
                <p className="font-mono text-sm font-semibold">{role}</p>
                <p className="mt-1 text-xs text-muted-foreground">{ROLE_LABELS[role]}</p>
                {(role === 'ADMIN' || role === 'SUPER_ADMIN') && (
                  <p className="mt-2 text-xs text-emerald-400/90">Admin panel · identity reconciliation</p>
                )}
                {role === 'OPERATIONS' && (
                  <p className="mt-2 text-xs text-muted-foreground">Audit logs · operations monitoring</p>
                )}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitMerge className="h-5 w-5 text-primary" />
              Identity reconciliation
            </CardTitle>
            <CardDescription>
              Merge investor identities by PAN and email across equity, MF, and CRM sources.
            </CardDescription>
          </CardHeader>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setResult(null);
              reconcile.mutate();
            }}
          >
            <label className="block text-xs font-medium text-muted-foreground">Source system</label>
            <select
              className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm"
              value={form.source}
              onChange={(e) => setForm({ ...form, source: e.target.value as typeof form.source })}
            >
              {IDENTITY_SOURCES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <input
              className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm"
              placeholder="External ID (e.g. INV1001, CUST-1001) *"
              value={form.externalId}
              onChange={(e) => setForm({ ...form, externalId: e.target.value })}
              required
            />
            <input
              className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm uppercase"
              placeholder="PAN (e.g. ABCDE1234F)"
              value={form.pan}
              onChange={(e) => setForm({ ...form, pan: e.target.value })}
              maxLength={10}
            />
            <input
              className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm"
              placeholder="Display name"
              value={form.displayName}
              onChange={(e) => setForm({ ...form, displayName: e.target.value })}
            />

            <Button type="submit" className="w-full" disabled={reconcile.isPending || !form.externalId.trim()}>
              {reconcile.isPending ? 'Reconciling…' : 'Reconcile identity'}
            </Button>
          </form>

          {result?.unifiedId && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <div>
                <p className="font-medium text-emerald-300">Reconciliation successful</p>
                <p className="text-muted-foreground">Unified ID: {result.unifiedId}</p>
              </div>
            </div>
          )}
          {result?.error && (
            <div className="mt-4 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
              <p className="text-red-300">{result.error}</p>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            Example: source CRM, external ID CUST-1001, PAN ABCDE1234F, email rahul.sharma@example.com
          </p>
        </Card>
      </div>
    </DashboardShell>
  );
}
