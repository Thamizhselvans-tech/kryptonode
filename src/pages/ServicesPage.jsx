import React, { useState } from 'react';
import { Globe, Smartphone, Cpu, Layers, Rocket, CheckCircle2, Calculator, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_LIST } from '../data/mockData';
import TechnologiesWeMaster from '../components/TechnologiesWeMaster';

export default function ServicesPage({ onOpenContactModal }) {
  // Estimator State
  const [estType, setEstType] = useState('web');
  const [estPages, setEstPages] = useState(5);
  const [estNeedAuth, setEstNeedAuth] = useState(true);
  const [estNeedDb, setEstNeedDb] = useState(true);
  const [estNeedAi, setEstNeedAi] = useState(false);

  // Estimator Calculations
  const calculateEstimate = () => {
    let baseCost = 25000;
    let baseDays = 14;

    if (estType === 'mobile') {
      baseCost = 45000;
      baseDays = 21;
    } else if (estType === 'ai') {
      baseCost = 55000;
      baseDays = 25;
    } else if (estType === 'mvp') {
      baseCost = 75000;
      baseDays = 30;
    }

    baseCost += estPages * 3500;
    if (estNeedAuth) baseCost += 10000;
    if (estNeedDb) baseCost += 15000;
    if (estNeedAi) {
      baseCost += 25000;
      baseDays += 7;
    }

    return {
      costMin: `₹${(baseCost * 0.9).toLocaleString('en-IN')}`,
      costMax: `₹${(baseCost * 1.25).toLocaleString('en-IN')}`,
      daysMin: baseDays,
      daysMax: baseDays + 10
    };
  };

  const estResult = calculateEstimate();

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
          KRYPTONODE DIGITAL SERVICES
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Comprehensive <span className="text-gradient-emerald">Technology Solutions</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          We construct tailored websites, Android apps, AI-powered automation platforms, wholesale management systems, and complete startup MVPs.
        </p>
      </div>

      {/* Services Grid Cards */}
      <div className="space-y-12">
        {SERVICES_LIST.map((srv) => (
          <div
            key={srv.id}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-6 hover:border-emerald-500/40 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  {srv.id === 'web-dev' && <Globe className="w-7 h-7" />}
                  {srv.id === 'app-dev' && <Smartphone className="w-7 h-7" />}
                  {srv.id === 'ai-solutions' && <Cpu className="w-7 h-7" />}
                  {srv.id === 'business-software' && <Layers className="w-7 h-7" />}
                  {srv.id === 'startup-dev' && <Rocket className="w-7 h-7" />}
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white">{srv.title}</h2>
                  <p className="text-xs font-mono text-emerald-400">{srv.subtitle}</p>
                </div>
              </div>

              <button
                onClick={() => onOpenContactModal(srv.projectType)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1.5 shadow-md"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
              {srv.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {srv.items.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TECHNOLOGIES WE MASTER SECTION */}
      <TechnologiesWeMaster onOpenEnquiryWithCategory={onOpenContactModal} />

      {/* INTERACTIVE ESTIMATOR WIDGET */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel-emerald border border-emerald-500/30 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold text-white">
              Interactive Scope & Timeline Estimator
            </h3>
            <p className="text-xs font-mono text-emerald-400">
              Configure parameters to estimate project budget and delivery timeline
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-4 text-xs text-slate-200">
            <div>
              <label className="block font-semibold mb-1 text-slate-300">Target Product Type</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'web', label: 'Website' },
                  { id: 'mobile', label: 'Mobile App' },
                  { id: 'ai', label: 'AI Product' },
                  { id: 'mvp', label: 'Full MVP' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setEstType(t.id)}
                    className={`p-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      estType === t.id
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-emerald-500/30'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-slate-300">Estimated Views / Components ({estPages})</label>
              <input
                type="range"
                min="1"
                max="20"
                value={estPages}
                onChange={(e) => setEstPages(parseInt(e.target.value))}
                className="w-full accent-emerald-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={estNeedAuth}
                  onChange={(e) => setEstNeedAuth(e.target.checked)}
                  className="accent-emerald-400"
                />
                <span>User Auth & Roles</span>
              </label>

              <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={estNeedDb}
                  onChange={(e) => setEstNeedDb(e.target.checked)}
                  className="accent-emerald-400"
                />
                <span>Database Sync</span>
              </label>

              <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={estNeedAi}
                  onChange={(e) => setEstNeedAi(e.target.checked)}
                  className="accent-emerald-400"
                />
                <span>AI API Engine</span>
              </label>
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-black/80 border border-emerald-500/40 text-center space-y-4">
            <div className="text-xs font-mono text-emerald-400 uppercase font-bold">
              ESTIMATED PROJECT METRICS
            </div>

            <div>
              <div className="text-3xl font-heading font-extrabold text-white">
                {estResult.costMin} - {estResult.costMax}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Estimated Budget Range</div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <div className="text-xl font-bold font-mono text-emerald-300">
                {estResult.daysMin} - {estResult.daysMax} Days
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Target Delivery Schedule</div>
            </div>

            <button
              onClick={() => onOpenContactModal('Startup MVP')}
              className="w-full py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lock In This Scope & Request Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
