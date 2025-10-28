import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import DashboardsPreview from './components/DashboardsPreview.jsx';
import InstallPWA from './components/InstallPWA.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-500"></div>
            <span className="text-sm font-semibold tracking-wide text-white">ChamaFlow</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#install" className="hover:text-white">Install</a>
          </nav>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Features />
        <DashboardsPreview />
        <InstallPWA />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ChamaFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
