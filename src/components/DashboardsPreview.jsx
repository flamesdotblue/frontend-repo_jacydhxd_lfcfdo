import React from 'react';
import { User, Wallet, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';

function Stat({ label, value, positive = true }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/60 px-3 py-2 text-sm ring-1 ring-slate-200 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-800">
      <span className="text-slate-600 dark:text-slate-300">{label}</span>
      <span className={`font-semibold ${positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>{value}</span>
    </div>
  );
}

function RoleCard({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 transition hover:shadow-xl dark:bg-slate-900 dark:ring-slate-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/20 dark:text-sky-400">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}

export default function DashboardsPreview() {
  return (
    <section className="relative w-full bg-white py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dashboards that surface what matters</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Role-specific views keep everyone aligned and productive.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <RoleCard title="Member" icon={User}>
            <Stat label="Balance" value="KES 24,500" />
            <Stat label="Active Loans" value="1" />
            <Stat label="On-time Rate" value="96%" />
          </RoleCard>

          <RoleCard title="Treasurer" icon={Wallet}>
            <Stat label="Pending Approvals" value="2" positive={false} />
            <Stat label="Compliance" value="89%" />
            <Stat label="Today’s Inflows" value="KES 12,300" />
          </RoleCard>

          <RoleCard title="Administrator" icon={TrendingUp}>
            <Stat label="Active Groups" value="12" />
            <Stat label="Alerts" value="3" positive={false} />
            <Stat label="Monthly Growth" value="+14%" />
          </RoleCard>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-300">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Real-time updates
          <AlertTriangle className="h-4 w-4 text-amber-500" /> Smart alerts
        </div>
      </div>
    </section>
  );
}
