'use client';

import Link from 'next/link';
import { useState } from 'react';
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
  Layers,
  ChevronDown,
  Star,
  Zap,
  Shield,
  BarChart2,
  Clock,
  Database,
  X,
} from 'lucide-react';

// ── How-it-works steps (detailed) ────────────────────────────
const steps = [
  {
    icon: Activity,
    title: '1. Detect',
    body: 'Continuously monitor every layer of your infrastructure — CPU, memory, network I/O, error rates, and latency — in real time. NIM Lab AI surfaces anomalies the moment they appear, before they become outages.',
    tags: ['Real-time metrics', 'Anomaly detection', 'Multi-cloud'],
  },
  {
    icon: Search,
    title: '2. Investigate',
    body: 'AI correlates metrics, logs, traces, and service health across your entire stack to pinpoint the root cause automatically. No more jumping between dashboards — get a clear incident timeline in seconds.',
    tags: ['Root-cause analysis', 'Log correlation', 'Service map'],
  },
  {
    icon: Lightbulb,
    title: '3. Recommend',
    body: 'Receive prioritised, actionable remediation plans complete with confidence scores, estimated impact, and step-by-step runbooks. Every recommendation is explainable and audit-ready.',
    tags: ['Confidence scores', 'Runbooks', 'Impact estimation'],
  },
  {
    icon: CheckCircle2,
    title: '4. Resolve',
    body: 'Apply approved fixes with a single click or let NIM Lab AI execute safe automated remediations. After every resolution, a post-incident report is generated automatically for your team.',
    tags: ['One-click fixes', 'Auto-remediation', 'Post-incident report'],
  },
];

const benefits = [
  'Reduce downtime and resolve incidents faster',
  'Lower infrastructure costs with intelligent insights',
  'No more manual log digging or guesswork',
  'Designed for developers, by developers',
];

// ── Testimonials ──────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "NIM Lab AI cut our mean time to resolution from 45 minutes to under 3. It's like having a senior DevOps engineer on call 24/7 — one who never sleeps and never misses a signal.",
    name: 'Alex Chen',
    role: 'CTO, BuildFast',
    rating: 5,
    avatar: 'AC',
  },
  {
    quote:
      'The AI investigation is frighteningly accurate. It traced a cascading database failure to a single misconfigured connection pool in 8 seconds. We would have spent hours on that.',
    name: 'Sarah Kim',
    role: 'Engineering Lead, Cloudify',
    rating: 5,
    avatar: 'SK',
  },
  {
    quote:
      'Simple, powerful, and beautiful. The confidence scores on each recommendation give our on-call team the clarity they need to act fast — exactly what modern infrastructure teams need.',
    name: 'Daniel Park',
    role: 'Founder, DevScale',
    rating: 5,
    avatar: 'DP',
  },
];

// ── Pricing tiers ─────────────────────────────────────────────
const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for solo developers and small side projects.',
    cta: 'Get Started Free',
    ctaHref: '/dashboard',
    highlight: false,
    features: [
      { label: 'Up to 3 monitored services', included: true },
      { label: '7-day log & metric retention', included: true },
      { label: 'Basic anomaly detection', included: true },
      { label: 'Manual root-cause investigation', included: true },
      { label: 'Community support', included: true },
      { label: 'AI-powered root-cause analysis', included: false },
      { label: 'Automated remediation', included: false },
      { label: 'Post-incident reports', included: false },
      { label: 'Priority support', included: false },
      { label: 'Custom alert rules', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per month',
    description: 'For growing teams that need full AI-powered incident management.',
    cta: 'Start 14-day Free Trial',
    ctaHref: '/dashboard',
    highlight: true,
    badge: 'Most Popular',
    features: [
      { label: 'Unlimited monitored services', included: true },
      { label: '90-day log & metric retention', included: true },
      { label: 'Advanced anomaly detection', included: true },
      { label: 'AI-powered root-cause analysis', included: true },
      { label: 'Actionable remediation plans', included: true },
      { label: 'One-click & automated remediation', included: true },
      { label: 'Post-incident reports', included: true },
      { label: 'Custom alert rules & thresholds', included: true },
      { label: 'Slack & PagerDuty integration', included: true },
      { label: 'Priority email support', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For large organisations with advanced compliance and security needs.',
    cta: 'Contact Sales',
    ctaHref: 'mailto:sales@nimlab.ai',
    highlight: false,
    features: [
      { label: 'Everything in Pro', included: true },
      { label: 'Unlimited data retention', included: true },
      { label: 'SSO / SAML authentication', included: true },
      { label: 'Role-based access control', included: true },
      { label: 'Dedicated infrastructure', included: true },
      { label: 'On-premise deployment option', included: true },
      { label: 'Custom AI model fine-tuning', included: true },
      { label: 'SLA guarantee (99.99% uptime)', included: true },
      { label: 'Dedicated customer success manager', included: true },
      { label: '24/7 phone & on-call support', included: true },
    ],
  },
];

// ── GitHub repos ──────────────────────────────────────────────
// Ganti href dengan link repo kalian yang sebenarnya
const githubRepos = [
  {
    name: 'nimlabai/frontend',
    desc: 'NIM Lab AI – Next.js frontend',
    href: 'https://github.com/Tsyf02', // ← ganti ini
  },
  {
    name: 'nimlabai/backend',
    desc: 'NIM Lab AI – API & engine',
    href: 'https://github.com/nimrra02', // ← ganti ini
  },
];

// ── GitHub dropdown component ─────────────────────────────────
function GitHubMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-slate-400 hover:text-slate-700 transition-colors"
        aria-label="GitHub repositories"
      >
        <Github className="w-4 h-4" />
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute bottom-8 right-0 z-20 w-56 bg-white border border-slate-200 rounded-xl shadow-lg py-1 overflow-hidden">
            {githubRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                <Github className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[13px] font-medium text-slate-800">{repo.name}</div>
                  <div className="text-[11.5px] text-slate-500">{repo.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Video modal component ─────────────────────────────────────
function VideoModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label="Close video"
        >
          <X className="w-4 h-4 text-white" />
        </button>
        {/*
          ── HOW TO ADD YOUR VIDEO ────────────────────────────────
          Option A – YouTube embed:
            Replace the <div> placeholder below with:
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="NIM Lab AI Demo"
              allow="autoplay; fullscreen"
              allowFullScreen
            />

          Option B – Direct MP4 file (place in /public/demo.mp4):
            <video className="w-full aspect-video" controls autoPlay>
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          ────────────────────────────────────────────────────────
        */}
        <div className="w-full aspect-video bg-ops-bg flex flex-col items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center">
            <Play className="w-7 h-7 text-brand" />
          </div>
          <p className="text-ops-muted text-[13px]">
            Embed your demo video here — see comments in code for instructions.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Star rating helper ────────────────────────────────────────
function Stars({ count }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-brand text-brand" />
      ))}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────
export default function LandingPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <main className="bg-white text-slate-900">
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}

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
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-[13.5px] font-medium text-slate-600 hover:text-slate-900 hidden sm:block">
              Sign In
            </Link>
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
              recommends solutions, and helps engineering teams resolve incidents faster —
              so you can focus on shipping, not firefighting.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold text-[14px] px-5 py-3 rounded-lg hover:bg-brand-dark transition-colors"
              >
                Launch Dashboard <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 font-semibold text-[14px] px-5 py-3 rounded-lg text-slate-700 hover:border-slate-300 transition-colors"
              >
                <Play className="w-4 h-4" /> Watch Demo · 2:14
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

      {/* HOW IT WORKS — detailed feature breakdown */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand text-[12.5px] font-medium">How it works</span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium mt-2 mb-4">
            From alert to resolution in minutes
          </h2>
          <p className="text-slate-600 text-[15px]">
            NIM Lab AI turns complex infrastructure data into clear insights and actionable
            solutions — covering every phase of incident management.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.title} className="border border-slate-200 rounded-xl p-6 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-brand" />
              </div>
              <div className="font-semibold text-[15px] mb-2">{s.title}</div>
              <p className="text-slate-500 text-[13.5px] leading-relaxed mb-4 flex-1">{s.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] bg-brand-light text-brand font-medium px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT IN ACTION — video section */}
      <section className="bg-ops-bg">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          {/* Video card */}
          <div
            className="rounded-2xl bg-ops-surface border border-ops-border p-6 cursor-pointer group"
            onClick={() => setVideoOpen(true)}
          >
            <div className="text-ops-muted text-[12px] mb-4">NIM AI in action</div>
            <h3 className="text-ops-text font-display text-2xl font-medium mb-3">
              See how NIM Lab AI investigates and resolves real infrastructure issues.
            </h3>
            {/* Video thumbnail placeholder */}
            <div className="rounded-xl bg-ops-bg border border-ops-border overflow-hidden mt-4">
              <div className="aspect-video flex flex-col items-center justify-center gap-3">
                <span className="w-14 h-14 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center group-hover:bg-brand/30 transition-colors">
                  <Play className="w-6 h-6 text-brand" />
                </span>
                <span className="text-[13px] text-ops-muted">Watch Full Demo · 2:14 minutes</span>
              </div>
            </div>
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
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-brand text-[12.5px] font-medium">Social proof</span>
          <h2 className="font-display text-3xl font-medium mt-2">Loved by engineering teams</h2>
          <p className="text-slate-500 text-[14px] mt-3">
            See what real users say about using NIM Lab AI in production.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-slate-200 rounded-xl p-6 flex flex-col">
              <Stars count={t.rating} />
              <p className="text-slate-700 text-[14px] leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <span className="text-brand text-[12px] font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-[13.5px]">{t.name}</div>
                  <div className="text-slate-500 text-[12.5px]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-brand text-[12.5px] font-medium">Pricing</span>
            <h2 className="font-display text-3xl sm:text-4xl font-medium mt-2 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-slate-600 text-[15px]">
              Start free. Upgrade when you need more. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-7 flex flex-col ${
                  tier.highlight
                    ? 'border-brand bg-white shadow-xl shadow-brand/10 ring-2 ring-brand/20'
                    : 'border-slate-200 bg-white'
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-[15px]">{tier.name}</span>
                    {tier.badge && (
                      <span className="text-[11px] font-semibold bg-brand text-white px-2 py-0.5 rounded-full">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                    {tier.price !== 'Custom' && (
                      <span className="text-slate-400 text-[13px] mb-1">/ {tier.period}</span>
                    )}
                    {tier.price === 'Custom' && (
                      <span className="text-slate-400 text-[13px] mb-1">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-slate-500 text-[13px]">{tier.description}</p>
                </div>

                {/* CTA */}
                <a
                  href={tier.ctaHref}
                  className={`w-full text-center text-[13.5px] font-semibold py-2.5 rounded-lg mb-6 transition-colors ${
                    tier.highlight
                      ? 'bg-brand text-white hover:bg-brand-dark'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tier.cta}
                </a>

                {/* Feature list */}
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-2.5 text-[13px]">
                      {f.included ? (
                        <CheckCircle2 className="w-4 h-4 text-ok flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={f.included ? 'text-slate-700' : 'text-slate-400'}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-[12.5px] mt-8">
            All plans include a 14-day money-back guarantee. No credit card required for Free tier.
          </p>
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
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-start justify-between gap-6">
          {/* Brand & description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-md bg-brand flex items-center justify-center">
                <Layers className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-semibold text-[13.5px]">NIM Lab AI</span>
            </div>
            {/* Social media description / value proposition */}
            <p className="text-slate-500 text-[12.5px] leading-relaxed">
              NIM Lab AI is the AI-native infrastructure intelligence platform that detects
              anomalies, investigates root causes, and resolves incidents — so engineering teams
              ship faster with fewer outages.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 text-slate-400 mt-1">
            {/* GitHub – klik untuk lihat 2 repo kami */}
            <GitHubMenu />
            {/* Sosmed lain – uncomment & isi link kalian nanti */}
            {/* <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-4 h-4 hover:text-slate-700 transition-colors" /></a> */}
            {/* <a href="https://linkedin.com/company/YOUR_PAGE" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="w-4 h-4 hover:text-slate-700 transition-colors" /></a> */}
          </div>
        </div>
        <div className="text-center text-slate-400 text-[12px] pb-8">
          &copy; 2026 NIM Lab AI. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
