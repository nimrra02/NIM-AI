import { PageHeader } from '@/components/ui';

const suggestions = [
  {
    title: 'Right-size checkout-service instances',
    sub: 'Average CPU has stayed under 40% for 14 days',
    save: 'Save ~$310 / month',
  },
  {
    title: 'Enable autoscaling on notifications-service',
    sub: 'Fixed capacity is over-provisioned outside peak hours',
    save: 'Save ~$150 / month',
  },
  {
    title: 'Move staging database to reserved capacity',
    sub: 'On-demand pricing is being used for a stable, always-on workload',
    save: 'Save ~$220 / month',
  },
];

export default function CostPage() {
  return (
    <div>
      <PageHeader title="Cost Optimization" sub="Suggestions based on recent usage patterns" />
      <div className="flex flex-col gap-2.5">
        {suggestions.map((s) => (
          <div key={s.title} className="bg-ops-surface border border-ops-border rounded-lg px-4 py-3.5">
            <div className="font-semibold text-[13.5px]">{s.title}</div>
            <div className="text-ops-muted text-[12.5px]">{s.sub}</div>
            <div className="font-mono text-ok text-[13px] mt-1.5">{s.save}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
