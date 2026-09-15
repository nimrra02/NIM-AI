'use client';

import Link from 'next/link';
import { useIncident } from '@/lib/incident-context';
import { PageHeader } from '@/components/ui';

const history = [
  { service: 'auth-service', started: 'Sep 8, 14:22', duration: '4m 10s' },
  { service: 'checkout-service', started: 'Sep 5, 09:47', duration: '11m 30s' },
  { service: 'search-service', started: 'Aug 30, 21:03', duration: '6m 45s' },
];

export default function IncidentsPage() {
  const { phase } = useIncident();
  const liveActive = phase !== 'normal';
  const liveResolved = phase === 'resolved';

  return (
    <div>
      <PageHeader title="Incidents" sub="History across all monitored services" />
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left text-[11px] text-ops-muted">
            <th className="font-medium py-2 border-b border-ops-border">Service</th>
            <th className="font-medium py-2 border-b border-ops-border">Status</th>
            <th className="font-medium py-2 border-b border-ops-border">Started</th>
            <th className="font-medium py-2 border-b border-ops-border">Duration</th>
            <th className="font-medium py-2 border-b border-ops-border"></th>
          </tr>
        </thead>
        <tbody>
          {liveActive && (
            <tr>
              <td className="py-2.5 border-b border-ops-border">payments-service</td>
              <td className="py-2.5 border-b border-ops-border">
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: liveResolved ? '#4FD1A5' : '#EF5B5B' }}
                  />
                  {liveResolved ? 'Resolved' : 'Investigating'}
                </span>
              </td>
              <td className="py-2.5 border-b border-ops-border">Today, 09:14</td>
              <td className="py-2.5 border-b border-ops-border">{liveResolved ? '5m 20s' : 'ongoing'}</td>
              <td className="py-2.5 border-b border-ops-border">
                <Link href="/dashboard/ai-agent" className="text-agent font-medium">
                  View
                </Link>
              </td>
            </tr>
          )}
          {history.map((h) => (
            <tr key={h.service}>
              <td className="py-2.5 border-b border-ops-border">{h.service}</td>
              <td className="py-2.5 border-b border-ops-border">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ok" /> Resolved
                </span>
              </td>
              <td className="py-2.5 border-b border-ops-border">{h.started}</td>
              <td className="py-2.5 border-b border-ops-border">{h.duration}</td>
              <td className="py-2.5 border-b border-ops-border"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
