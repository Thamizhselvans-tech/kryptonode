import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { number: '01', title: 'Discover', desc: 'Understand the idea, users and business goals.' },
    { number: '02', title: 'Define', desc: 'Convert the idea into clear features and priorities.' },
    { number: '03', title: 'Design', desc: 'Create user flows and interfaces.' },
    { number: '04', title: 'Develop', desc: 'Build frontend, backend, database and integrations.' },
    { number: '05', title: 'Test', desc: 'Validate functionality, usability and responsiveness.' },
    { number: '06', title: 'Launch', desc: 'Deploy the product.' },
    { number: '07', title: 'Evolve', desc: 'Improve and scale the product over time.' },
  ];

  return (
    <section id="process" className="py-14 sm:py-16 bg-transparent relative overflow-hidden border-t border-forest-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald uppercase tracking-widest mb-2 font-bold">
              <GitBranch className="w-3.5 h-3.5" />
              <span>OUR METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight font-sans">
              "From Problem To{' '}
              <span className="text-gradient-forest underline decoration-emerald/30 underline-offset-4">
                Product."
              </span>
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-xs sm:text-sm text-charcoal/80 max-w-md font-sans leading-relaxed">
            A disciplined 7-step engineering process designed to take products cleanly from concept to scalable operation.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Steps List */}
          <div className="lg:col-span-5 space-y-2">
            {steps.map((step, idx) => {
              const isSelected = idx === activeStep;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl cursor-pointer border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-forest-900 text-white border-forest-900 shadow-sm translate-x-1 sm:translate-x-1.5'
                      : 'bg-ivory-50 text-charcoal border-forest-900/10 hover:border-emerald/30 hover:bg-emerald-soft'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-emerald-light' : 'text-emerald-muted'}`}>
                      {step.number}
                    </span>
                    <h4 className="text-sm font-bold font-sans">
                      {step.title}
                    </h4>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-light animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Active Step Detail Inspector */}
          <div className="lg:col-span-7 bg-ivory-50 border border-forest-900/15 p-5 sm:p-6 rounded-2xl shadow-sm relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-forest-900/10">
                <span className="text-[11px] font-mono font-bold text-emerald uppercase tracking-wider">
                  STAGE {steps[activeStep].number} — {steps[activeStep].title.toUpperCase()}
                </span>
                <span className="text-[11px] font-mono text-charcoal/60">
                  Step {activeStep + 1} of 7
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-charcoal tracking-tight font-sans mb-3">
                {steps[activeStep].title} Phase
              </h3>

              <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-sans mb-5">
                {steps[activeStep].desc}
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-soft border border-forest-900/10 space-y-1.5 text-xs font-sans text-charcoal">
                <div className="font-bold text-forest-900 flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald" />
                  Stage Commitment
                </div>
                <p>• Transparent communication and regular development updates</p>
                <p>• Code reviews, test verification, and documentation</p>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-forest-900/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-emerald-muted">Sequential milestone progression</span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-forest-900 hover:bg-emerald text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                Next Stage
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
