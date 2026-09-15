'use client';

import { useIncident, ANALYSIS_TEXT, RESOLVED_TEXT } from '@/lib/incident-context';
import { PageHeader, Metric, StatusPill, Banner, StageTracker, PrimaryButton } from '@/components/ui';

export default function AiAgentPage() {
  const { phase, metrics, active, stageInfo, investigate, applyFix, reset } = useIncident();

  const pillTone =
    phase === 'normal' || phase === 'resolved' ? 'ok' : phase === 'critical' ? 'critical' : 'working';
  const pillText =
    phase === 'normal'
      ? 'All systems normal'
      : phase === 'critical'
      ? 'Critical incident'
      : phase === 'investigating'
      ? 'Investigating'
      : phase === 'recommended'
      ? 'Recommendation ready'
      : phase === 'fixing'
      ? 'Applying fix'
      : 'All systems normal';

  const metricTone = active ? 'critical' : phase === 'resolved' ? 'ok' : undefined;
  const deltas =
    active
      ? { latency: '180 \u2192 740 ms', cpu: '54 \u2192 87%', db: '110 \u2192 380 ms', traffic: '+63% vs baseline' }
      : phase === 'resolved'
      ? { latency: '740 \u2192 228 ms', cpu: '87 \u2192 56%', db: '380 \u2192 132 ms', traffic: 'normalizing' }
      : {};

  const btnLabel =
    phase === 'critical'
      ? 'Investigate with NIM AI'
      : phase === 'investigating'
      ? 'Analyzing\u2026'
      : phase === 'recommended'
      ? 'Apply recommended fix'
      : phase === 'fixing'
      ? 'Applying fix\u2026'
      : phase === 'resolved'
      ? 'Incident resolved'
      : 'No active incident';

  const btnAction = phase === 'critical' ? investigate : phase === 'recommended' ? applyFix : undefined;
  const btnDisabled = !['critical', 'recommended'].includes(phase);

  return (
    <div>
      <PageHeader title="AI Agent" sub={'Live investigation workspace \u2014 payments-service'} />
      <div className="mb-4">
        <StatusPill tone={pillTone}>{pillText}</StatusPill>
      </div>

      <StageTracker stageInfo={stageInfo} />

      <div className="grid grid-cols-4 gap-2.5 mb-4">
        <Metric label="Latency (p95)" value={`${metrics.latency} ms`} tone={metricTone} delta={deltas.latency} />
        <Metric label="CPU" value={`${metrics.cpu}%`} tone={metricTone} delta={deltas.cpu} />
        <Metric label="DB Response" value={`${metrics.db} ms`} tone={metricTone} delta={deltas.db} />
        <Metric label="Traffic" value={metrics.traffic} tone={metricTone} delta={deltas.traffic} />
      </div>

      {active && (
        <Banner title="Critical Incident" desc="Production API latency increased" />
      )}
      {phase === 'resolved' && (
        <Banner title="Incident Resolved" desc="Infrastructure health has returned to normal." resolved />
      )}

      {phase !== 'normal' && phase !== 'critical' && (
        <div className="bg-ops-surface border border-ops-border rounded-lg p-4 mb-4">
          <div className="flex items-center gap-1.5 text-agent text-[12px] font-semibold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-agent" /> NIM AI Agent
          </div>
          {phase === 'investigating' && (
            <p className="text-ops-muted text-[14px]">Analyzing metrics and logs&hellip;</p>
          )}
          {(phase === 'recommended' || phase === 'fixing') && (
            <>
              <p className="text-[14px] leading-relaxed">{ANALYSIS_TEXT}</p>
              <div className="mt-3.5 flex flex-col gap-2">
                <div className="flex items-center gap-2.5 bg-ops-surface2 border border-ops-border rounded-md px-3 py-2.5 text-[13px]">
                  <span className="w-4 h-4 rounded-full bg-ok text-ops-bg text-[10px] flex items-center justify-center flex-shrink-0">
                    &#10003;
                  </span>
                  Scale API replicas &mdash; 2 &rarr; 4
                </div>
                <div className="flex items-center gap-2.5 bg-ops-surface2 border border-ops-border rounded-md px-3 py-2.5 text-[13px]">
                  <span className="w-4 h-4 rounded-full bg-ok text-ops-bg text-[10px] flex items-center justify-center flex-shrink-0">
                    &#10003;
                  </span>
                  Enable query caching
                </div>
              </div>
            </>
          )}
          {phase === 'resolved' && <p className="text-[14px] leading-relaxed">{RESOLVED_TEXT}</p>}
        </div>
      )}

      <div className="max-w-[260px] mb-4">
        <PrimaryButton onClick={btnAction} disabled={btnDisabled}>
          {btnLabel}
        </PrimaryButton>
      </div>

      <button onClick={reset} className="text-ops-muted text-[12px] underline">
        Reset demo
      </button>
    </div>
  );
}
