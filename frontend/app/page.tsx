'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Caveat, Satisfy, Poppins } from 'next/font/google';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Building2,
  Users,
  Headphones,
  Circle,
  Rocket,
  Hexagon,
  Network,
  TrendingUp,
  Zap,
  Bell,
} from 'lucide-react';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] });

/* ----------------------------------------------------------------
   ORIGINAL NAVBAR  (untouched)
   ---------------------------------------------------------------- */
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

/* ----------------------------------------------------------------
   ORIGINAL HERO  (untouched)
   ---------------------------------------------------------------- */
function HeroSection() {
  return (
    <section className="mx-auto mt-16 max-w-6xl">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="max-w-xl">
          <h1 className={`${caveat.className} text-4xl font-medium leading-tight text-slate-900 sm:text-5xl`}>
            Build your next-gen wealth experience with
            <span className="text-violet-700"> confidence</span>
          </h1>

          <p className={`${satisfy.className} mt-4 text-base leading-7 text-slate-600 sm:text-lg`}>
            Clean architecture, fast onboarding, and a beautiful client experience.
          </p>
        </div>

        <div className="flex h-80 items-center justify-center overflow-hidden rounded-2xl">
          <img src="/Hero.gif" alt="Hero" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { icon: <Rocket className="h-5 w-5" />, title: 'Onboard in Minutes', desc: 'Create your workspace, invite your team, and map your first data source — live in under 60 seconds.', tone: 'bg-[#efe9fb] after:border-t-[#e1d6fb]' },
    { icon: <Users className="h-5 w-5" />, title: 'Unify Identities', desc: 'PAN, email, mobile, and external IDs are automatically stitched into one verified investor profile.', tone: 'bg-[#e8f2ff] after:border-t-[#d8e9ff]' },
    { icon: <BarChart3 className="h-5 w-5" />, title: 'Aggregate Assets', desc: 'Real-time API connectors sync with every broker, AMC, bank, and alternative investment provider.', tone: 'bg-[#e8f8f2] after:border-t-[#d7f0e6]' },
    { icon: <Building2 className="h-5 w-5" />, title: 'Visualize Wealth', desc: 'Interactive dashboards with allocation pies, net-worth trends, risk regimes, and SIP trajectories.', tone: 'bg-[#fff2e6] after:border-t-[#ffe6d2]' },
    { icon: <Headphones className="h-5 w-5" />, title: 'Go Live', desc: 'Deploy via SDK, launch your client portal, and monitor health — all with 24/7 fifth-line support.', tone: 'bg-[#f3ecff] after:border-t-[#e6dbff]' },
  ];

  return (
    <section className="mx-auto mt-28 max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
          <Rocket className="h-3.5 w-3.5" />
          How It Works
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">From Zero to Live in Minutes</h2>
        <p className="mt-3 text-slate-500">Five steps to enterprise-grade wealth experience</p>
      </motion.div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 + i * 0.06 }}
            whileHover={{ y: -4 }}
            className={`group relative min-h-[240px] rounded-sm border border-slate-200/50 p-7 shadow-[7px_9px_0_0_rgba(148,163,184,0.18)] after:absolute after:right-0 after:bottom-0 after:h-0 after:w-0 after:border-t-[28px] after:border-l-[28px] after:border-l-transparent ${step.tone}`}
          >
            <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-gradient-to-b from-slate-300 to-slate-500 shadow-md" />
            <div className="text-violet-700">{step.icon}</div>
            <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-700">
              <Circle className="h-2.5 w-2.5" /> Step {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="mt-2.5 text-lg font-bold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{step.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function LandingPage() {
  const journey = [
    {
      step: '01',
      title: 'Identity Unification',
      desc: 'Seamlessly connect PAN, email, mobile, and external IDs into one verified investor profile.',
    },
    {
      step: '02',
      title: 'Asset Aggregation',
      desc: 'Pull real-time data from brokers, AMCs, banks, and alternative investment platforms.',
    },
    {
      step: '03',
      title: 'Wealth Intelligence',
      desc: 'Advanced analytics, performance tracking, and intelligent asset allocation insights.',
    },
    {
      step: '04',
      title: 'Real-time Operations',
      desc: 'Instant WebSocket alerts, proactive health monitoring, and automated incident resolution.',
    },
    {
      step: '05',
      title: 'Enterprise Scale',
      desc: 'Built for 10K+ concurrent users with horizontal scaling on Kubernetes.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">

        {/* -- ORIGINAL NAVBAR (untouched) --------------------------- */}
        <NavBar />

        {/* -- ORIGINAL HERO (untouched) ------------------------------ */}
        <HeroSection />

        {/* -- ORIGINAL TIMELINE -------------------------------------- */}
        <section className="mx-auto mt-24 max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">How Unified Wealth Powers Your Growth</h2>
            <p className="mt-3 text-slate-600">A clear path from onboarding to enterprise scale</p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl space-y-12">
            {journey.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <article className="relative w-full max-w-md rounded-[28px] border border-violet-200/60 bg-gradient-to-br from-white to-violet-50/80 p-6 shadow-md shadow-violet-200/35">
                  <div className="absolute -top-3 left-6 rounded-full border border-violet-300 bg-white px-3 py-1 text-xs font-extrabold tracking-wide text-violet-700">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </article>

                {index < journey.length - 1 && (
                  <svg
                    className={`pointer-events-none absolute -bottom-10 h-16 w-44 text-violet-500 ${index % 2 === 0 ? 'right-16' : 'left-16 scale-x-[-1]'}`}
                    viewBox="0 0 176 64"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M6 10C60 8 86 30 132 40C145 43 156 45 170 45" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M156 35L170 45L156 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <HowItWorksSection />

      </div>
      <footer className="border-t border-slate-200 py-6 text-center">
        <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Wealth IQ. All rights reserved.</p>
      </footer>
    </main>
  );
}


