import React, { useEffect, useState } from 'react';
import { Download, Check } from 'lucide-react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    const installedHandler = () => setInstalled(true);
    window.addEventListener('appinstalled', installedHandler);

    if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const onInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  return (
    <section id="install" className="relative w-full bg-slate-900 py-14 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-8 text-center shadow-xl sm:flex-row sm:text-left">
          <div>
            <h3 className="text-2xl font-bold">Install the app for a faster, offline experience</h3>
            <p className="mt-1 text-emerald-50">
              Add to your home screen and manage your chama anywhere, even without internet.
            </p>
          </div>
          {installed ? (
            <span className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold ring-1 ring-white/30">
              <Check className="h-4 w-4" /> Installed
            </span>
          ) : (
            <button
              onClick={onInstall}
              disabled={!deferredPrompt}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Download className="h-4 w-4" /> Install App
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
