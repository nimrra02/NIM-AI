'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Bot,
  AlertCircle,
  Activity,
  Wallet,
  ScrollText,
  Settings,
  Layers,
} from 'lucide-react';
import { useIncident } from '@/lib/incident-context';

const topItem = { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard };

const infraItems = [
  { href: '/dashboard/ai-agent', label: 'AI Agent', icon: Bot, badge: true },
  { href: '/dashboard/incidents', label: 'Incidents', icon: AlertCircle },
  { href: '/dashboard/monitoring', label: 'Monitoring', icon: Activity },
  { href: '/dashboard/cost', label: 'Cost Optimization', icon: Wallet },
  { href: '/dashboard/logs', label: 'Logs', icon: ScrollText },
];

function NavLink({ href, label, icon: Icon, badge, active, sub }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-[13.5px] transition-colors mb-0.5 ${
        sub ? 'pl-5' : ''
      } ${active ? 'bg-ops-surface2 text-ops-text font-medium' : 'text-ops-muted hover:text-ops-text'}`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
      {badge && <span className="w-1.5 h-1.5 rounded-full bg-critical ml-auto" />}
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { active } = useIncident();

  return (
    <div className="w-56 flex-shrink-0 bg-ops-surface border-r border-ops-border flex flex-col p-3 sticky top-0 h-screen">
      <div className="flex items-center gap-2 px-2 py-2 mb-4">
        <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
          <Layers className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="font-semibold text-[14.5px] text-ops-text">NIM Lab AI</span>
      </div>

      <nav className="flex-1">
        <NavLink {...topItem} active={pathname === topItem.href} />
        <div className="text-[11px] text-slate-500 px-2.5 pt-4 pb-1">Infrastructure</div>
        {infraItems.map((item) => (
          <NavLink
            key={item.href}
            {...item}
            sub
            active={pathname === item.href}
            badge={item.badge && active}
          />
        ))}
      </nav>

      <NavLink
        href="/dashboard/settings"
        label="Settings"
        icon={Settings}
        active={pathname === '/dashboard/settings'}
      />
    </div>
  );
}
