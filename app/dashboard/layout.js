import { IncidentProvider } from '@/lib/incident-context';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <IncidentProvider>
      <div className="flex min-h-screen bg-ops-bg text-ops-text font-sans">
        <Sidebar />
        <main className="flex-1 px-8 py-7 max-w-5xl">{children}</main>
      </div>
    </IncidentProvider>
  );
}
