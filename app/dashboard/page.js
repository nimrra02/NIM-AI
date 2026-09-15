'use client';

import Link from 'next/link';
import { useIncident } from '@/lib/incident-context';
import { PageHeader, Stat, Banner, CriticalButton } from '@/components/ui';

const otherServices = [
  { name: 'auth-service', latency: '42 ms', cpu: '21%' },
  { name: 'checkout-service', latency: '95 ms', cpu: '38%' },
  { name: 'notifications-service', latency: '61 ms', cpu: '17%' },
  { name: 'search-service', latency: '118 ms', cpu: '29%' },
  { name: 'billing-service', latency: '73 ms', cpu: '24%' },
];

export default function DashboardPage() {
  const { phase, metrics, active, trigger, reset } = useIncident();

  return (
    <div>
      <PageHeader title="Dashboard" sub="Production environment overview" />

      <div className="grid grid-cols-4 gap-2.5 mb-5">
        <Stat label="Active Incidents" value={active ? '1' : '0'} tone={active ? 'critical' : undefined} />
        <Stat label="Services Monitored" value="6" />
        <Stat label="Avg Latency" value={`${metrics.latency} ms`} tone={active ? 'critical' : phase === 'resolved' ? 'ok' : undefined} />
        <Stat label="Est. Monthly Cost" value="$4,280" />
      </div>

      {active && (
        <Banner title="Critical Incident" desc="Production API latency increased on payments-service">
          <div className="mt-2.5">
            <Link
              href="/dashboard/ai-agent"
              className="inline-block bg-agent text-ops-bg font-semibold text-[13.5px] px-4 py-2 rounded-lg"
            >
              Open AI Agent
            </Link>
          </div>
        </Banner>
      )}
      {phase === 'resolved' && (
        <Banner
          title="Incident Resolved"
          desc="payments-service latency and CPU have returned to normal."
          resolved
        />
      )}

      <table className="w-full text-[13px] mb-5">
        <thead>
          <tr className="text-left text-[11px] text-ops-muted">
            <th className="font-medium py-2 border-b border-ops-border">Service</th>
            <th className="font-medium py-2 border-b border-ops-border">Status</th>
            <th className="font-medium py-2 border-b border-ops-border">Latency</th>
            <th className="font-medium py-2 border-b border-ops-border">CPU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2.5 border-b border-ops-border">payments-service</td>
            <td className="py-2.5 border-b border-ops-border">
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: active ? '#EF5B5B' : '#4FD1A5' }}
                />
                {active ? 'Critical' : 'Healthy'}
              </span>
            </td>
            <td className="py-2.5 border-b border-ops-border">{metrics.latency} ms</td>
            <td className="py-2.5 border-b border-ops-border">{metrics.cpu}%</td>
          </tr>
          {otherServices.map((s) => (
            <tr key={s.name}>
              <td className="py-2.5 border-b border-ops-border">{s.name}</td>
              <td className="py-2.5 border-b border-ops-border">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-ok" />
                  Healthy
                </span>
              </td>
              <td className="py-2.5 border-b border-ops-border">{s.latency}</td>
              <td className="py-2.5 border-b border-ops-border">{s.cpu}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {phase === 'normal' && (
        <div className="max-w-[260px]">
          <CriticalButton onClick={trigger}>Simulate traffic spike</CriticalButton>
        </div>
      )}
      <div className="mt-5">
        <button onClick={reset} className="text-ops-muted text-[12px] underline">
          Reset demo
        </button>
      </div>
    </div>
  );
}
