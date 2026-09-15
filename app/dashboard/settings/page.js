import { PageHeader } from '@/components/ui';

function Row({ label, control }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-ops-border last:border-none text-[13px]">
      <span>{label}</span>
      {control}
    </div>
  );
}

function Toggle({ on }) {
  return (
    <div className={`w-8 h-[19px] rounded-full relative ${on ? 'bg-ok' : 'bg-ops-border'}`}>
      <div
        className="w-[15px] h-[15px] rounded-full bg-ops-bg absolute top-[2px]"
        style={{ [on ? 'right' : 'left']: '2px' }}
      />
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" sub="Data sources and alert thresholds" />

      <div className="bg-ops-surface border border-ops-border rounded-lg p-4 mb-3.5">
        <h3 className="text-[13.5px] font-semibold mb-3">Connected data sources</h3>
        <Row label="Prometheus (metrics)" control={<Toggle on />} />
        <Row label="Application logs" control={<Toggle on />} />
        <Row label="Service mesh telemetry" control={<Toggle on />} />
        <Row label="Cost & billing data" control={<Toggle />} />
      </div>

      <div className="bg-ops-surface border border-ops-border rounded-lg p-4">
        <h3 className="text-[13.5px] font-semibold mb-3">Alert thresholds &mdash; payments-service</h3>
        <Row
          label="Latency (p95)"
          control={
            <input
              className="bg-ops-surface2 border border-ops-border rounded-md font-mono text-[13px] px-2.5 py-1.5 w-24 text-right"
              defaultValue="500 ms"
            />
          }
        />
        <Row
          label="CPU utilization"
          control={
            <input
              className="bg-ops-surface2 border border-ops-border rounded-md font-mono text-[13px] px-2.5 py-1.5 w-24 text-right"
              defaultValue="80%"
            />
          }
        />
        <Row
          label="DB response time"
          control={
            <input
              className="bg-ops-surface2 border border-ops-border rounded-md font-mono text-[13px] px-2.5 py-1.5 w-24 text-right"
              defaultValue="300 ms"
            />
          }
        />
      </div>
    </div>
  );
}
