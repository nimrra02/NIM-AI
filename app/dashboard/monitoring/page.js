'use client';

import { useIncident } from '@/lib/incident-context';
import { PageHeader } from '@/components/ui';

const rows = [
  { name: 'auth-service', latency: '42 ms', cpu: '21%', mem: '38%', err: '0.0%' },
  { name: 'checkout-service', latency: '95 ms', cpu: '38%', mem: '52%', err: '0.1%' },
  { name: 'notifications-service', latency: '61 ms', cpu: '17%', mem: '29%', err: '0.0%' },
  { name: 'search-service', latency: '118 ms', cpu: '29%', mem: '44%', err: '0.1%' },
  { name: 'billing-service', latency: '73 ms', cpu: '24%', mem: '33%', err: '0.0%' },
];

export default function MonitoringPage() {
  const { metrics, active } = useIncident();

  return (
    <div>
      <PageHeader title="Monitoring" sub="Current metrics across services" />
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left text-[11px] text-ops-muted">
            <th className="font-medium py-2 border-b border-ops-border">Service</th>
            <th className="font-medium py-2 border-b border-ops-border">Latency</th>
            <th className="font-medium py-2 border-b border-ops-border">CPU</th>
            <th className="font-medium py-2 border-b border-ops-border">Memory</th>
            <th className="font-medium py-2 border-b border-ops-border">Error rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2.5 border-b border-ops-border">payments-service</td>
            <td className="py-2.5 border-b border-ops-border">{metrics.latency} ms</td>
            <td className="py-2.5 border-b border-ops-border">{metrics.cpu}%</td>
            <td className="py-2.5 border-b border-ops-border">61%</td>
            <td className="py-2.5 border-b border-ops-border">{active ? '4.1%' : '0.2%'}</td>
          </tr>
          {rows.map((r) => (
            <tr key={r.name}>
              <td className="py-2.5 border-b border-ops-border">{r.name}</td>
              <td className="py-2.5 border-b border-ops-border">{r.latency}</td>
              <td className="py-2.5 border-b border-ops-border">{r.cpu}</td>
              <td className="py-2.5 border-b border-ops-border">{r.mem}</td>
              <td className="py-2.5 border-b border-ops-border">{r.err}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
