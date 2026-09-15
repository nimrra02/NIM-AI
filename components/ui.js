'use client';

export function PageHeader({ title, sub }) {
  return (
    <div className="mb-5">
      <h2 className="text-[18px] font-semibold text-ops-text">{title}</h2>
      <div className="text-[13px] text-ops-muted mt-0.5">{sub}</div>
    </div>
  );
}

export function Stat({ label, value, tone }) {
  const toneClass = tone === 'critical' ? 'text-critical' : tone === 'ok' ? 'text-ok' : 'text-ops-text';
  return (
    <div className="bg-ops-surface border border-ops-border rounded-lg p-3.5">
      <div className="text-[11px] text-ops-muted mb-2">{label}</div>
      <div className={`font-mono font-semibold text-[19px] ${toneClass}`}>{value}</div>
    </div>
  );
}

export function Metric({ label, value, tone, delta }) {
  const toneClass = tone === 'critical' ? 'text-critical' : tone === 'ok' ? 'text-ok' : 'text-ops-text';
  return (
    <div className="bg-ops-surface border border-ops-border rounded-lg p-3.5 text-center">
      <div className="text-[11px] text-ops-muted mb-2">{label}</div>
      <div className={`font-mono font-semibold text-[20px] ${toneClass}`}>{value}</div>
      <div className="font-mono text-[11px] text-ops-muted mt-1">{delta || '\u00A0'}</div>
    </div>
  );
}

export function StatusPill({ children, tone }) {
  const cls =
    tone === 'critical'
      ? 'text-critical border-critical/40 bg-critical/10'
      : tone === 'working'
      ? 'text-agent border-agent/40 bg-agent/10'
      : 'text-ok border-ok/35';
  return (
    <span className={`font-mono text-[12px] px-2.5 py-1 rounded-md border inline-block ${cls}`}>
      {children}
    </span>
  );
}

export function Banner({ title, desc, resolved, children }) {
  return (
    <div
      className={`rounded-lg px-4 py-3.5 mb-4 border-l-[3px] ${
        resolved ? 'border-ok bg-ok/10' : 'border-critical bg-critical/10'
      }`}
    >
      <div className={`font-semibold text-[14px] mb-0.5 ${resolved ? 'text-ok' : 'text-critical'}`}>
        {title}
      </div>
      <div className="text-[13px] text-ops-muted">{desc}</div>
      {children}
    </div>
  );
}

export function StageTracker({ stageInfo }) {
  const stages = ['detect', 'investigate', 'recommend', 'approve', 'fix', 'verify'];
  const labels = { detect: 'Detect', investigate: 'Investigate', recommend: 'Recommend', approve: 'Approve', fix: 'Fix', verify: 'Verify' };
  return (
    <div className="flex items-center gap-1 mb-5 p-3 bg-ops-surface border border-ops-border rounded-lg">
      {stages.map((s) => {
        const isActive = stageInfo.active === s;
        const isDone = stageInfo.done.includes(s);
        return (
          <div
            key={s}
            className={`flex-1 text-center text-[11px] font-medium py-1.5 rounded-md ${
              isActive ? 'bg-agent text-ops-bg' : isDone ? 'text-ok' : 'text-ops-muted'
            }`}
          >
            {labels[s]}
          </div>
        );
      })}
    </div>
  );
}

export function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-agent text-ops-bg font-semibold text-[14px] py-2.5 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
    >
      {children}
    </button>
  );
}

export function CriticalButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-critical text-ops-bg font-semibold text-[14px] py-2.5 rounded-lg hover:opacity-90 transition-opacity"
    >
      {children}
    </button>
  );
}
