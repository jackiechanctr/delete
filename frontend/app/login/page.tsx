'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import api from '@/lib/api';
import { useAuthStore } from '@/store/auth-store';

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

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const [email, setEmail] = useState('admin@wealth-intelligence.com');
  const [password, setPassword] = useState('Admin@123');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await api.post('/api/v1/auth/login', { email, password });
      const { accessToken, refreshToken, user } = res.data.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      setUser(user);
      router.push('/dashboard');
    } catch {
      setError('Invalid credentials or server unavailable');
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
          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-slate-600 text-sm">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="text-sm font-semibold text-slate-900">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-2 w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 text-sm"
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

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-violet-600 hover:bg-violet-700 disabled:bg-slate-300 text-white font-semibold py-2.5 rounded-lg transition flex items-center justify-center gap-2"
            >
              {loading ? 'Signing in…' : 'Sign in'}
              {!loading && <ArrowRight className="h-4 w-4" />}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-5 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <Link href="/register" className="text-violet-600 font-semibold hover:text-violet-700">
              Create one
            </Link>
          </p>
        </div>

        </motion.div>
      </div>
    </div>
  );
}
