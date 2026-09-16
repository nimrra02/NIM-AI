'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Layers, Eye, EyeOff, AlertCircle, ShieldCheck, User } from 'lucide-react';

// Demo credential hint cards shown below the form
const DEMO_ACCOUNTS = [
  {
    role: 'Admin',
    email: 'admin@nimlab.ai',
    password: 'admin123',
    icon: ShieldCheck,
    color: 'text-brand',
    bg: 'bg-brand-light',
    border: 'border-brand/20',
    desc: 'Full access — manage users, view all data, configure settings.',
  },
  {
    role: 'User',
    email: 'user@nimlab.ai',
    password: 'user123',
    icon: User,
    color: 'text-slate-600',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    desc: 'Read-only access — view dashboard, monitoring, and logs.',
  },
];

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw]     = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Small artificial delay so the button feedback feels real
    await new Promise((r) => setTimeout(r, 400));

    const result = login({ email, password });
    setLoading(false);

    if (!result.success) {
      setError(result.error);
      return;
    }

    router.push('/dashboard');
  };

  // Clicking a hint card auto-fills the form
  const fillAccount = (acc) => {
    setEmail(acc.email);
    setPassword(acc.password);
    setError('');
  };

  return (
    <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-xl bg-brand flex items-center justify-center shadow-sm">
          <Layers className="w-4.5 h-4.5 text-white" />
        </div>
        <span className="font-semibold text-[16px] text-slate-900">NIM Lab AI</span>
      </a>

      {/* Card */}
      <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-lg shadow-brand/5 p-8">
        <h1 className="font-display text-2xl font-medium text-slate-900 mb-1">Welcome back</h1>
        <p className="text-slate-500 text-[13.5px] mb-7">Sign in to your NIM Lab AI account.</p>

        {/* Error banner */}
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-lg px-3 py-2.5 mb-5">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-[12.5px] font-medium text-slate-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@nimlab.ai"
              className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[12.5px] font-medium text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 pr-10 text-[13.5px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPw ? 'Hide password' : 'Show password'}
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand text-white font-semibold text-[14px] py-2.5 rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>

      {/* Demo accounts */}
      <div className="w-full max-w-sm mt-5">
        <p className="text-[11.5px] text-slate-400 text-center mb-3 uppercase tracking-wide">
          Demo accounts — click to fill
        </p>
        <div className="grid grid-cols-2 gap-3">
          {DEMO_ACCOUNTS.map((acc) => (
            <button
              key={acc.role}
              type="button"
              onClick={() => fillAccount(acc)}
              className={`text-left rounded-xl border ${acc.border} ${acc.bg} px-4 py-3 hover:shadow-sm transition-shadow`}
            >
              <div className={`flex items-center gap-1.5 mb-1 ${acc.color}`}>
                <acc.icon className="w-3.5 h-3.5" />
                <span className="text-[12px] font-semibold">{acc.role}</span>
              </div>
              <div className="text-[11px] text-slate-500 font-mono mb-1">{acc.email}</div>
              <div className="text-[11px] text-slate-400 leading-tight">{acc.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
