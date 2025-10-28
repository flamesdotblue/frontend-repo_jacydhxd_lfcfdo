import React from 'react';
import { Shield, Smartphone, Brain, BarChart3, Bell, CreditCard, Database, Users } from 'lucide-react';

const features = [
  {
    title: 'M-Pesa Integration',
    desc: 'Automated C2B capture, webhook reconciliation, and instant confirmations.',
    icon: CreditCard,
  },
  {
    title: 'Secure & Compliant',
    desc: 'JWT auth, OTP, RBAC, and encryption — built for safety.',
    icon: Shield,
  },
  {
    title: 'Offline-First PWA',
    desc: 'Works reliably with unstable connectivity and syncs in the background.',
    icon: Smartphone,
  },
  {
    title: 'AI Insights',
    desc: 'Forecast contributions and assess default risk with smart models.',
    icon: Brain,
  },
  {
    title: 'Live Dashboards',
    desc: 'Role-based views for members, treasurers, and admins.',
    icon: BarChart3,
  },
  {
    title: 'Notifications',
    desc: 'SMS, email, and in-app reminders to keep everyone on track.',
    icon: Bell,
  },
  {
    title: 'Robust Data',
    desc: 'PostgreSQL transactions with Redis-powered speed.',
    icon: Database,
  },
  {
    title: 'Chama-Centric',
    desc: 'Built for Kenyan savings groups with local validation rules.',
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-50 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything your chama needs</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Streamlined operations from contributions to loans — fast, secure, and insightful.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
