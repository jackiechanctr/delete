'use client';

import { DashboardShell } from '@/components/layout/dashboard-shell';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/store/auth-store';

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);

  return (
    <DashboardShell title="Profile Settings">
      <Card className="max-w-lg">
        <CardHeader><CardTitle>Account</CardTitle></CardHeader>
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between"><dt>Name</dt><dd>{user?.firstName} {user?.lastName}</dd></div>
          <div className="flex justify-between"><dt>Email</dt><dd>{user?.email}</dd></div>
          <div className="flex justify-between"><dt>Role</dt><dd className="text-primary">{user?.role}</dd></div>
        </dl>
      </Card>
    </DashboardShell>
  );
}
