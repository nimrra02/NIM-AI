'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { IncidentProvider } from '@/lib/incident-context';
import { useAuth } from '@/lib/auth-context';
import Sidebar from '@/components/Sidebar';

// Guard — AuthProvider is already at root layout, just read the session here
function DashboardGuard({ children }) {
  const { session, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) router.replace('/login');
  }, [loading, session, router]);

  // Show nothing while checking session to avoid flash
  if (loading || !session) return null;

  return (
    <IncidentProvider>
      <div className="flex min-h-screen bg-ops-bg text-ops-text font-sans">
        <Sidebar />
        <main className="flex-1 px-8 py-7 max-w-5xl">{children}</main>
      </div>
    </IncidentProvider>
  );
}

export default function DashboardLayout({ children }) {
  return <DashboardGuard>{children}</DashboardGuard>;
}
