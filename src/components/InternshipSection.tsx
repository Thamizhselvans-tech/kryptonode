import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, CheckCircle2, Award, BookOpen, Code, Terminal, Check } from 'lucide-react';
import { INTERNSHIP_TRACKS, INTERNSHIP_BENEFITS } from '../data/portfolioData';

interface InternshipSectionProps {
  onOpenInternshipModal: (track?: string) => void;
}

export const InternshipSection: React.FC<InternshipSectionProps> = ({ onOpenInternshipModal }) => {
  const journey = [
    { step: '01', phase: 'LEARN', desc: 'Core concept modules' },
    { step: '02', phase: 'PRACTICE', desc: 'Practical assignments' },
    { step: '03', phase: 'BUILD', desc: 'Real project features' },
    { step: '04', phase: 'REVIEW', desc: 'Code reviews' },
    { step: '05', phase: 'COMPLETE', desc: 'Final validation' },
    { step: '06', phase: 'CERTIFICATE', desc: 'Project Certificate' },
  ];

  return (
    <section id="internship" className="py-14 sm:py-16 bg-transparent relative overflow-hidden border-t border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald uppercase tracking-widest mb-2 font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>STUDENT DEVELOPMENT PROGRAM</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight font-sans">
              "Kryptonode Online Internship"
            </h2>
            <div className="text-xs sm:text-sm font-mono font-bold text-forest-900 mt-1.5">
              "Learn. Build. Experience."
            </div>
          </div>

          <button
            onClick={() => onOpenInternshipModal()}
            className="mt-4 md:mt-0 px-5 py-2.5 bg-forest-900 hover:bg-emerald text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-forest-subtle flex items-center gap-2 transition-all"
          >
            <span>Apply For Internship</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Description Copy */}
        <div className="p-5 sm:p-6 rounded-2xl bg-ivory-50 border border-forest-900/10 shadow-forest-card mb-8 sm:mb-10">
          <p className="text-base sm:text-lg text-charcoal leading-relaxed font-sans font-medium max-w-4xl">
            "Move beyond tutorials and learn by building practical technology projects. Our online internship experience is designed to help students understand development workflows, collaborate on projects and build work they can showcase in their portfolios."
          </p>
        </div>

        {/* Internship Journey Ribbon */}
        <div className="mb-6 sm:mb-7">
          <div className="text-[10px] font-mono font-bold text-charcoal uppercase tracking-wider mb-2.5">
            INTERNSHIP LEARNING JOURNEY
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-mono text-xs">
            {journey.map((j) => (
              <div key={j.step} className="p-2.5 rounded-xl bg-emerald-soft border border-forest-900/10">
                <div className="text-[9px] text-emerald-muted font-bold">Step {j.step}</div>
                <div className="font-bold text-forest-900 text-[11px] mt-0.5">{j.phase}</div>
                <div className="text-[10px] text-charcoal/80 mt-0.5 leading-snug">{j.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 Columns: Tracks & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Tracks List */}
          <div className="lg:col-span-6 bg-ivory-50 p-4 sm:p-5 rounded-2xl border border-forest-900/10 shadow-forest-subtle flex flex-col justify-between">
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-charcoal font-sans mb-3 flex items-center gap-2">
                <Code className="w-4 h-4 text-emerald" />
                Available Internship Tracks
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {INTERNSHIP_TRACKS.map((track) => (
                  <div
                    key={track}
                    onClick={() => onOpenInternshipModal(track)}
                    className="p-2.5 sm:p-3 rounded-xl bg-ivory-100 border border-forest-900/10 hover:border-emerald/40 cursor-pointer flex items-center justify-between group transition-all"
                  >
                    <span className="text-[11px] sm:text-xs font-bold text-charcoal font-sans group-hover:text-forest-900">
                      {track}
                    </span>
                    <ArrowRight className="w-3 h-3 text-emerald-muted group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="lg:col-span-6 bg-forest-900 text-white p-4 sm:p-5 rounded-2xl border border-forest-800 shadow-forest-card flex flex-col justify-between">
            <div>
              <h3 className="text-sm sm:text-base font-extrabold font-sans mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-light" />
                Program Benefits & Outcomes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans">
                {INTERNSHIP_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="p-2 sm:p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2 h-full">
                    <Check className="w-3.5 h-3.5 text-emerald-light shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-[10px] sm:text-[11px] leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/10 text-[9.5px] font-mono text-gray-300">
              Note: Practical project experience & completion certificate issued upon milestone review.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
