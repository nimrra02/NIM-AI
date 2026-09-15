import Link from 'next/link';
import {
  Activity,
  Search,
  Lightbulb,
  CheckCircle2,
  Play,
  ArrowRight,
  AlertTriangle,
  TrendingDown,
  Wallet,
  Github,
  Twitter,
  Linkedin,
  Layers,
} from 'lucide-react';

const steps = [
  {
    icon: Activity,
    title: '1. Detect',
    body: 'Continuously monitor your infrastructure and identify issues early.',
  },
  {
    icon: Search,
    title: '2. Investigate',
    body: 'NIM Lab AI analyzes metrics, logs, and service health to find the root cause.',
  },
  {
    icon: Lightbulb,
    title: '3. Recommend',
    body: 'Get clear, actionable remediation plans with confidence scores.',
  },
  {
    icon: CheckCircle2,
    title: '4. Resolve',
    body: 'Apply approved fixes and verify that your systems are healthy again.',
  },
];

const benefits = [
  'Reduce downtime and resolve incidents faster',
  'Lower infrastructure costs with intelligent insights',
  'No more manual log digging or guesswork',
  'Designed for developers, by developers',
];

const testimonials = [
  {
    quote:
      'NIM Lab AI helped us resolve a critical issue in minutes. It\u2019s like having a DevOps expert available 24/7.',
    name: 'Alex Chen',
    role: 'CTO, BuildFast',
  },
  {
    quote:
      'The AI investigation is incredibly accurate. It saves us hours of manual debugging every week.',
    name: 'Sarah Kim',
    role: 'Engineering Lead, Cloudify',
  },
  {
    quote: 'Simple, powerful, and beautiful. Exactly what modern infrastructure teams need.',
    name: 'Daniel Park',
    role: 'Founder, DevScale',
  },
];

export default function LandingPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* NAV */}
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-brand flex items-center justify-center">
              <Layers className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-[15px]">NIM Lab AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] text-slate-600">
            <a href="#how-it-works" className="hover:text-slate-900">Product</a>
            <a href="#how-it-works" className="hover:text-slate-900">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900">How it Works</a>
            <a href="#testimonials" className="hover:text-slate-900">Use Cases</a>
            <a href="#" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hidden sm:block">
              Sign In
            </a>
            <Link
              href="/dashboard"
              className="bg-brand text-white text-[13.5px] font-semibold px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-3 py-1 text-[12px] font-medium text-brand mb-6">
              AI-powered infrastructure intelligence
            </span>
            <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] font-medium text-slate-900 mb-6">
              Your AI Infrastructure Engineer.
            </h1>
            <p className="text-slate-600 text-[16px] leading-relaxed max-w-md mb-8">
              NIM Lab AI detects infrastructure problems, investigates root causes,
              recommends solutions, and helps engineering teams resolve incidents faster.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold text-[14px] px-5 py-3 rounded-lg hover:bg-brand-dark transition-colors"
              >
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 bg-white border border-slate-200 font-semibold text-[14px] px-5 py-3 rounded-lg text-slate-700 hover:border-slate-300 transition-colors">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </div>
            <div className="flex gap-10">
              <div>
                <div className="text-2xl font-semibold text-brand">90%</div>
                <div className="text-[12.5px] text-slate-500">Faster incident resolution</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-brand">60%</div>
                <div className="text-[12.5px] text-slate-500">Lower operational costs</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-brand">99.9%</div>
                <div className="text-[12.5px] text-slate-500">More reliable systems</div>
              </div>
            </div>
          </div>

          {/* Dashboard preview mockup */}
          <div className="rounded-2xl bg-ops-bg border border-ops-border shadow-2xl shadow-brand/10 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ops-border">
              <span className="w-2.5 h-2.5 rounded-full bg-critical/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-warn/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-ok/60" />
            </div>
            <div className="p-5">
              <div className="rounded-xl bg-gradient-to-r from-brand to-brand-dark p-4 mb-4">
                <div className="text-white font-semibold text-[14px] mb-1">Good evening, Nimra</div>
                <div className="text-white/70 text-[12px]">Your infrastructure is in good hands.</div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="bg-ops-surface border border-ops-border rounded-lg p-3">
                  <div className="text-[10px] text-ops-muted mb-1">Running Services</div>
                  <div className="text-ops-text font-mono font-semibold text-[15px]">12</div>
                </div>
                <div className="bg-ops-surface border border-ops-border rounded-lg p-3">
                  <div className="text-[10px] text-ops-muted mb-1">Infra Health</div>
                  <div className="text-ok font-mono font-semibold text-[15px]">94%</div>
                </div>
                <div className="bg-ops-surface border border-ops-border rounded-lg p-3">
                  <div className="text-[10px] text-ops-muted mb-1">Monthly Cost</div>
                  <div className="text-ops-text font-mono font-semibold text-[15px]">$248.30</div>
                </div>
                <div className="bg-ops-surface border border-ops-border rounded-lg p-3">
                  <div className="text-[10px] text-ops-muted mb-1">Active Incidents</div>
                  <div className="text-critical font-mono font-semibold text-[15px]">1</div>
                </div>
              </div>
              <div className="bg-ops-surface border border-ops-border rounded-lg p-4">
                <div className="text-[11px] text-ops-muted mb-3">Recent AI Insights</div>
                <div className="flex items-center gap-2 text-[12px] text-ops-text mb-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-critical" /> API latency increased 280%
                </div>
                <div className="flex items-center gap-2 text-[12px] text-ops-text mb-2">
                  <TrendingDown className="w-3.5 h-3.5 text-warn" /> Database showing elevated load
                </div>
                <div className="flex items-center gap-2 text-[12px] text-ops-text">
                  <Wallet className="w-3.5 h-3.5 text-agent" /> Cost opportunity detected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand text-[12.5px] font-medium">How it works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium mt-2 mb-4">
            From alert to resolution in minutes
          </h2>
          <p className="text-slate-600 text-[15px]">
            NIM Lab AI turns complex infrastructure data into clear insights and actionable solutions.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.title} className="border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-brand" />
              </div>
              <div className="font-semibold text-[15px] mb-2">{s.title}</div>
              <p className="text-slate-500 text-[13.5px] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT IN ACTION */}
      <section className="bg-ops-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl bg-ops-surface border border-ops-border p-6">
            <div className="text-ops-muted text-[12px] mb-4">NIM AI in action</div>
            <h3 className="text-ops-text font-display text-2xl font-medium mb-3">
              See how NIM Lab AI investigates and resolves real infrastructure issues.
            </h3>
            <button className="mt-4 inline-flex items-center gap-3 text-ops-text">
              <span className="w-11 h-11 rounded-full bg-agent flex items-center justify-center">
                <Play className="w-4 h-4 text-ops-bg" />
              </span>
              <span className="text-[13.5px] text-ops-muted">Watch Full Demo &middot; 2:14 minutes</span>
            </button>
          </div>
          <div>
            <h3 className="font-display text-3xl font-medium text-white mb-5">
              Stop searching through dashboards. Let AI do the work.
            </h3>
            <p className="text-ops-muted text-[15px] mb-6 leading-relaxed">
              NIM Lab AI connects metrics, logs, and infrastructure signals automatically, so your
              team can focus on building, not firefighting.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ops-text text-[14px]">
                  <CheckCircle2 className="w-4 h-4 text-ok mt-0.5 flex-shrink-0" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl font-medium">Loved by engineering teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-slate-200 rounded-xl p-6">
              <p className="text-slate-700 text-[14px] leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="font-semibold text-[13.5px]">{t.name}</div>
              <div className="text-slate-500 text-[12.5px]">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <span className="text-white/50 text-[12.5px]">The future of infrastructure is intelligent</span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mt-3 mb-8">
            Ready to experience NIM Lab AI?
          </h2>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-white text-brand-dark font-semibold text-[14px] px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get Started for Free <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="text-white/40 text-[12px] mt-3">No credit card required</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
              <Layers className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-[13.5px]">NIM Lab AI</span>
            <span className="text-slate-400 text-[12.5px] ml-2">Intelligence for a smarter infrastructure</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Github className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
            <Linkedin className="w-4 h-4" />
          </div>
        </div>
        <div className="text-center text-slate-400 text-[12px] pb-8">
          &copy; 2026 NIM Lab AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
