import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Layers, Cpu, Code, Rocket, CheckCircle2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenProjectEnquiry: (serviceType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProjectEnquiry }) => {
  return (
    <section id="home" className="relative pt-24 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-transparent">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-soft/60 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-forest-900/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-soft border border-emerald/20 text-forest-900 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-forest-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
              KRYPTONODE TECH SOLUTIONS PVT LTD
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight leading-[1.1] mb-4 font-sans">
              "We Build Ideas Into{' '}
              <span className="text-gradient-forest underline decoration-emerald/30 underline-offset-8">
                Real Products."
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal mb-6 max-w-2xl font-sans">
              Kryptonode Tech Solutions helps startups, businesses and creators turn ideas into modern websites, mobile applications, AI-powered solutions and scalable digital products.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <button
                onClick={() => onOpenProjectEnquiry()}
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold tracking-wide text-white bg-forest-900 hover:bg-emerald rounded-xl shadow-forest-subtle hover:shadow-forest-glow transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-charcoal bg-ivory-100 hover:bg-emerald-soft border border-forest-900/15 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-emerald-muted group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Sub-line */}
            <div className="pt-4 border-t border-forest-900/10 text-xs font-mono font-semibold text-emerald-muted tracking-wide uppercase">
              Websites • Apps • AI • Business Systems • Startup Solutions
            </div>
          </motion.div>

          {/* Right Hero Product-System Visual (IDEA → DESIGN → BUILD → LAUNCH) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[500px] p-6 rounded-3xl bg-ivory-100 border border-forest-900/15 shadow-forest-card">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-forest-900/10">
                <span className="text-xs font-mono font-bold text-forest-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald" />
                  PRODUCT DEVELOPMENT SYSTEM
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 bg-emerald-soft text-forest-900 rounded-full font-bold">
                  Kryptonode Workflow
                </span>
              </div>

              {/* 4 Interactive Process Steps Visualization */}
              <div className="space-y-4">
                {[
                  { step: '01', phase: 'IDEA', title: 'Problem Discovery & Feature Scope', icon: Layers, status: 'Completed' },
                  { step: '02', phase: 'DESIGN', title: 'User Flows & UI Wireframes', icon: Code, status: 'Validated' },
                  { step: '03', phase: 'BUILD', title: 'Full Stack Code & Integrations', icon: Cpu, status: 'Active Code' },
                  { step: '04', phase: 'LAUNCH', title: 'Cloud Production & Growth', icon: Rocket, status: 'Ready' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className="p-4 rounded-2xl bg-ivory-50 border border-forest-900/10 hover:border-emerald/40 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-forest-900 text-white flex items-center justify-center font-mono text-xs font-bold group-hover:bg-emerald transition-colors">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold text-emerald uppercase">
                              {item.phase}
                            </span>
                            <span className="text-[10px] text-emerald-muted">• Step {item.step}</span>
                          </div>
                          <div className="text-xs font-bold text-charcoal font-sans">
                            {item.title}
                          </div>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                    </div>
                  );
                })}
              </div>

              {/* Connecting System Flow Indicator */}
              <div className="mt-6 pt-4 border-t border-forest-900/10 flex items-center justify-between text-xs font-mono text-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                  Your Problem First. Technology Second.
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
