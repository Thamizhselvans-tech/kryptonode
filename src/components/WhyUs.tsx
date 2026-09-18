import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WHY_US_PRINCIPLES } from '../data/portfolioData';
import { ShieldAlert, ArrowRight, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="why-us" className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-4">
          <ShieldAlert className="w-4 h-4" />
          <span>[ 06 — OUR CORE PRINCIPLES ]</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-800 tracking-tight leading-none mb-16 font-sans">
          WHY TRUST US WITH YOUR{' '}
          <span className="text-deepblue underline decoration-electric/30 underline-offset-8">
            MISSION-CRITICAL CODE?
          </span>
        </h2>

        {/* Large Typography List with Subtle Micro-Interactions */}
        <div className="space-y-6">
          {WHY_US_PRINCIPLES.map((principle: { title: string; description: string; number?: string; subtitle?: string }, idx: number) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  isHovered
                    ? 'bg-navy-800 text-milk-100 border-electric shadow-floating transform -translate-y-1'
                    : 'bg-milk-100 text-navy-800 border-deepblue/10 hover:border-electric/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Number & Main Title */}
                  <div className="lg:col-span-6 flex items-baseline gap-6">
                    <span
                      className={`font-mono text-2xl sm:text-3xl font-extrabold transition-colors ${
                        isHovered ? 'text-electric' : 'text-deepblue'
                      }`}
                    >
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans">
                        {principle.title}
                      </h3>
                      {principle.subtitle && (
                        <p
                          className={`text-xs sm:text-sm font-mono mt-1 uppercase tracking-wider ${
                            isHovered ? 'text-gray-300' : 'text-muted'
                          }`}
                        >
                          {principle.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <div className="lg:col-span-6">
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-sans ${
                        isHovered ? 'text-gray-200' : 'text-muted'
                      }`}
                    >
                      {principle.description}
                    </p>
                  </div>

                </div>

                {/* Accent Corner Flash */}
                {isHovered && (
                  <motion.div
                    layoutId="whyUsGlow"
                    className="absolute top-0 right-0 w-32 h-32 bg-electric/20 rounded-full blur-2xl pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
