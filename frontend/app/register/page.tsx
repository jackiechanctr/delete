'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import api from '@/lib/api';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] });

function NavBar() {
  return (
    <nav className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-violet-100 bg-white/95 px-4 py-2 shadow-[0_8px_25px_rgba(124,58,237,0.1)] backdrop-blur">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/ai.svg" alt="WEALTH IQ" width={28} height={28} className="h-7 w-7" />
        <span className={`${poppins.className} text-sm font-semibold tracking-wide text-violet-700`}>
          WEALTH IQ
        </span>
      </Link>

      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className={`${poppins.className} rounded-full border border-violet-200 px-3 py-1 text-sm font-medium text-violet-700 transition hover:bg-violet-50`}
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className={`${poppins.className} rounded-full bg-[#8b5cf6] px-3 py-1 text-sm font-medium text-white transition hover:opacity-90`}
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<'form' | 'email-verify'>('form');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'email-verify') {
      router.push('/login');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await api.post('/api/v1/auth/register', form);
      setStep('email-verify');
    } catch {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar />
      <div className="flex items-center justify-center px-6 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            {step === 'form' ? 'Create account' : 'Check your email'}
          </h1>
          <p className="mt-2 text-slate-600 text-sm">
            {step === 'form' ? 'Get started in 2 minutes' : 'We sent a verification link'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          {step === 'form' ? (
            <form onSubmit={onSubmit} className="space-y-5">
              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-900">First name</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="John"
                    className="mt-2 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-900">Last name</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Doe"
                    className="mt-2 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="text-sm font-semibold text-slate-900">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="mt-2 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 text-sm"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <label className="text-sm font-semibold text-slate-900">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Min. 8 characters"
                  className="mt-2 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 text-sm"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="mt-1.5 text-xs text-violet-600 hover:text-violet-700 font-medium"
                >
                  {showPassword ? 'Hide' : 'Show'} password
                </button>
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg"
                >
                  {error}
                </motion.div>
              )}

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-300 text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2"
              >
                {loading ? 'Creating account…' : 'Create account'}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          ) : (
            /* Email verification state */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <p className="text-slate-600 mb-6">
                Click the link in your email to verify, then sign in.
              </p>
              <button
                onClick={() => router.push('/login')}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-lg transition"
              >
                Go to sign in
              </button>
            </motion.div>
          )}

          {/* Sign In Link */}
          {step === 'form' && (
            <p className="mt-5 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="text-violet-600 font-semibold hover:text-violet-700">
                Sign in
              </Link>
            </p>
          )}
        </div>

        </motion.div>
      </div>
    </div>
  );
}
