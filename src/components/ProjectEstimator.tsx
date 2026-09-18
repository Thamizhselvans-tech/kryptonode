import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, DollarSign, Cpu, Layers, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenContactWithScope?: (scopeDetails: { service: string; budget: string; timeframe: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenContactWithScope }) => {
  const [projectType, setProjectType] = useState<'fullapp' | 'web' | 'mobile' | 'ai' | 'cloud'>('fullapp');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated' | 'sprint'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['design-system', 'telemetry']);

  const projectTypes = [
    { id: 'fullapp', label: 'Full Product Engineering', baseCost: 35000, baseWeeks: 6, icon: Layers, desc: 'Zero-to-one full stack web platform' },
    { id: 'web', label: 'High-Craft Web Experience', baseCost: 18000, baseWeeks: 3, icon: Zap, desc: 'Editorial website with micro-interactions' },
    { id: 'mobile', label: 'Cross-Platform Mobile App', baseCost: 28000, baseWeeks: 5, icon: Cpu, desc: 'iOS & Android app with offline sync' },
    { id: 'ai', label: 'AI & Neural Automation', baseCost: 32000, baseWeeks: 4, icon: Calculator, desc: 'Custom LLM pipeline & vector search' },
    { id: 'cloud', label: 'Cloud Architecture & DevOps', baseCost: 20000, baseWeeks: 3, icon: ShieldCheck, desc: 'Kubernetes multi-region deployment' },
  ];

  const addonsList = [
    { id: 'design-system', label: 'Bespoke UI Design System', cost: 6000, weeks: 1 },
    { id: 'soc2', label: 'SOC-2 Type II Compliance Hardening', cost: 8000, weeks: 1 },
    { id: 'telemetry', label: '24/7 Telemetry & Analytics Pipeline', cost: 4000, weeks: 0 },
    { id: 'ai-finetune', label: 'Private Model Fine-Tuning Layer', cost: 9000, weeks: 1 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  const addonTotalCost = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find((a) => a.id === id);
    return sum + (item ? item.cost : 0);
  }, 0);

  const addonTotalWeeks = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find((a) => a.id === id);
    return sum + (item ? item.weeks : 0);
  }, 0);

  const speedMultiplier = timelineSpeed === 'sprint' ? 1.35 : timelineSpeed === 'accelerated' ? 1.15 : 1;
  const timeMultiplier = timelineSpeed === 'sprint' ? 0.6 : timelineSpeed === 'accelerated' ? 0.8 : 1;

  const finalEstimatedCost = Math.round((selectedTypeObj.baseCost + addonTotalCost) * speedMultiplier);
  const finalEstimatedWeeks = Math.max(2, Math.round((selectedTypeObj.baseWeeks + addonTotalWeeks) * timeMultiplier));

  const formattedCostRange = `$${(finalEstimatedCost / 1000).toFixed(0)}k - $${((finalEstimatedCost + 8000) / 1000).toFixed(0)}k`;

  const handleBookEstimate = () => {
    if (onOpenContactWithScope) {
      onOpenContactWithScope({
        service: selectedTypeObj.label,
        budget: formattedCostRange,
        timeframe: `${finalEstimatedWeeks} Weeks (${timelineSpeed.toUpperCase()})`
      });
    }
  };

  return (
    <section className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-3">
              <Calculator className="w-4 h-4" />
              <span>[ 09 — INTERACTIVE SCOPE ESTIMATOR ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 tracking-tight font-sans">
              Instant project cost &{' '}
              <span className="text-deepblue underline decoration-electric/30 underline-offset-4">
                delivery calculator.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-muted max-w-md font-sans">
            Transparent pricing without endless discovery calls. Select project parameters to calculate live timelines and resource investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-milk-100 p-6 sm:p-8 rounded-3xl border border-deepblue/10 shadow-subtle">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-navy-800 uppercase tracking-wider mb-3">
                1. Select Core Product Scope
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => {
                  const isSelected = projectType === pt.id;
                  const Icon = pt.icon;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => setProjectType(pt.id as any)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all duration-200 ${
                        isSelected
                          ? 'bg-deepblue text-milk-100 border-electric shadow-card'
                          : 'bg-softblue/40 text-navy-800 border-deepblue/10 hover:border-electric/30'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-electric' : 'text-deepblue'}`} />
                        <span className="text-sm font-bold font-sans">{pt.label}</span>
                      </div>
                      <p className={`text-xs ${isSelected ? 'text-gray-300' : 'text-muted'}`}>
                        {pt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Pace / Delivery Speed */}
            <div>
              <label className="block text-xs font-mono font-bold text-navy-800 uppercase tracking-wider mb-3">
                2. Delivery Velocity Pace
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard', sub: 'Balanced Velocity' },
                  { id: 'accelerated', label: 'Accelerated', sub: 'Dual Sprint (+15%)' },
                  { id: 'sprint', label: 'Startup Sprint', sub: 'Dedicated Pod (+35%)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setTimelineSpeed(s.id as any)}
                    className={`p-3 rounded-xl text-center border text-xs font-sans transition-all ${
                      timelineSpeed === s.id
                        ? 'bg-electric text-milk-100 font-bold border-electric shadow-subtle'
                        : 'bg-softblue/30 text-navy-800 border-deepblue/10 hover:bg-softblue'
                    }`}
                  >
                    <div className="font-bold">{s.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{s.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Add-on Infrastructure */}
            <div>
              <label className="block text-xs font-mono font-bold text-navy-800 uppercase tracking-wider mb-3">
                3. Architectural Enhancements & Add-ons
              </label>
              <div className="space-y-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl cursor-pointer border flex items-center justify-between text-xs font-sans transition-all ${
                        isChecked
                          ? 'bg-softblue text-deepblue border-electric font-semibold'
                          : 'bg-milk-100 text-navy-800 border-deepblue/10 hover:bg-softblue/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isChecked ? 'bg-deepblue border-deepblue text-milk-100' : 'border-deepblue/30'
                        }`}>
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="font-mono text-muted text-[11px]">+${(addon.cost / 1000).toFixed(0)}k</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-navy-800 text-milk-100 border border-electric/30 rounded-3xl p-8 shadow-floating sticky top-28">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <span className="text-xs font-mono text-electric uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4" />
                ESTIMATED ARCHITECTURE BUDGET
              </span>
              <span className="text-[10px] font-mono px-2.5 py-1 bg-electric/20 text-electric rounded-md border border-electric/30">
                100% Fixed Scope
              </span>
            </div>

            <div className="mb-6">
              <div className="text-xs text-gray-300 font-mono uppercase tracking-wider mb-1">Estimated Price Range</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-milk-100 font-sans tracking-tight text-gradient-electric">
                {formattedCostRange}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <div>
                <div className="text-[10px] text-gray-400 font-mono uppercase">Target Timeline</div>
                <div className="text-xl font-bold text-electric font-sans flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4" />
                  ~{finalEstimatedWeeks} Weeks
                </div>
              </div>
              <div>
                <div className="text-[10px] text-gray-400 font-mono uppercase">Engineering Pod</div>
                <div className="text-xl font-bold text-milk-100 font-sans mt-0.5">
                  2-4 Senior Staff
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8 text-xs text-gray-300 font-sans">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-electric shrink-0" />
                <span>Includes complete source code ownership & IP transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-electric shrink-0" />
                <span>30-day post-launch warranty & telemetry support</span>
              </div>
            </div>

            <button
              onClick={handleBookEstimate}
              className="w-full py-4 rounded-2xl bg-electric hover:bg-electric-glow text-milk-100 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-electric-glow transition-all group"
            >
              Book Scope Review With Estimate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
