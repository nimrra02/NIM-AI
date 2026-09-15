'use client';

import { useIncident } from '@/lib/incident-context';
import { PageHeader } from '@/components/ui';

const normalLogs = [
  { level: 'info', text: 'request completed in 182ms \u2014 /v1/charge' },
  { level: 'info', text: 'request completed in 176ms \u2014 /v1/charge' },
  { level: 'info', text: 'request completed in 190ms \u2014 /v1/refund' },
  { level: 'info', text: 'request completed in 184ms \u2014 /v1/charge' },
];

const incidentLogs = [
  { level: 'info', text: 'request completed in 184ms \u2014 /v1/charge' },
  { level: 'warn', text: 'db connection pool at 92% utilization' },
  { level: 'warn', text: 'request queue depth increasing (charge-service)' },
  { level: 'error', text: 'request timeout after 740ms \u2014 /v1/charge' },
  { level: 'warn', text: 'db connection pool exhausted \u2014 new sessions queued' },
  { level: 'error', text: 'request timeout after 812ms \u2014 /v1/charge' },
];

const resolvedLogs = [
  { level: 'info', text: 'api replicas scaled 2 \u2192 4' },
  { level: 'info', text: 'query cache enabled \u2014 charge-service' },
  { level: 'info', text: 'request completed in 231ms \u2014 /v1/charge' },
  { level: 'info', text: 'request completed in 226ms \u2014 /v1/charge' },
];

const colors = { info: 'text-ops-text', warn: 'text-warn', error: 'text-critical' };

export default function LogsPage() {
  const { phase, active } = useIncident();
  const logs = active ? incidentLogs : phase === 'resolved' ? resolvedLogs : normalLogs;

  return (
    <div>
      <PageHeader title="Logs" sub="payments-service \u2014 last 15 minutes" />
      <div className="bg-ops-surface border border-ops-border rounded-lg px-4 py-3.5 font-mono text-[12.5px] leading-[1.9] text-ops-muted max-h-[340px] overflow-y-auto">
        {logs.map((l, i) => (
          <div key={i} className={colors[l.level]}>
            14:0{i}:{10 + i * 5} {l.level.toUpperCase().padEnd(5)} {l.text}
          </div>
        ))}
      </div>
    </div>
  );
}
