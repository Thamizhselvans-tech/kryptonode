import React, { useState } from 'react';
import { GraduationCap, ArrowRight, CheckCircle2, Code2, Layers, Award, Sparkles, BookOpen } from 'lucide-react';
import { INTERNSHIP_TRACKS } from '../data/mockData';

export default function InternshipPage({ onOpenFormWithTrack }) {
  const journeySteps = [
    { num: "01", name: "Learn", desc: "Targeted module refreshers & architecture best practices." },
    { num: "02", name: "Practice", desc: "Hands-on coding challenges & Git workflow assignments." },
    { num: "03", name: "Build", desc: "Develop real client-grade web, mobile, or AI project features." },
    { num: "04", name: "Review", desc: "Direct mentor pull request review and refactoring guidance." },
    { num: "05", name: "Complete Project", desc: "Deploy working application to cloud & test end-to-end." },
    { num: "06", name: "Certificate", desc: "Receive official Kryptonode Project Completion Certificate." }
  ];

  const benefits = [
    "100% Online Practical Program",
    "Real Client & Startup Level Project Experience",
    "Personal Mentor Guidance & Code Review",
    "Git & GitHub Professional Workflows",
    "Verified Portfolio Projects for Your Resume",
    "Collaborative Team Environment",
    "Weekly Live Milestone Standups",
    "Verified Project Completion Certificate"
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
          <GraduationCap className="w-4 h-4 text-emerald-400" />
          <span>Kryptonode Technology Internship Ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Learn. Build. <span className="text-gradient-emerald">Launch.</span>
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Accelerate your software engineering career with Kryptonode's online practical project internship. Work directly on production web applications, mobile apps, and custom AI tools.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onOpenFormWithTrack(INTERNSHIP_TRACKS[0])}
            className="px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-mint-400 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Apply For Online Internship</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Internship Journey Timeline */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
            THE INTERNSHIP PATHWAY
          </div>
          <h2 className="text-3xl font-heading font-bold text-white">
            6-Stage Learning & Building Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {journeySteps.map((s) => (
            <div key={s.num} className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-3 relative">
              <div className="text-2xl font-mono font-extrabold text-emerald-400">
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-white text-base">
                {s.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7 Specialized Tracks Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
            SPECIALIZATION TRACKS
          </div>
          <h2 className="text-3xl font-heading font-bold text-white">
            Choose Your Technology Track
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIP_TRACKS.map((track) => (
            <div
              key={track.id}
              className="p-7 rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    {track.duration}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {track.level}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white">
                  {track.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {track.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Track Skillset</span>
                  <div className="flex flex-wrap gap-1.5">
                    {track.skills.map((sk) => (
                      <span key={sk} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-emerald-300 border border-slate-800">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenFormWithTrack(track)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Apply For {track.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internship Benefits Grid */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel-emerald border border-emerald-500/30 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Program Key Benefits
          </h2>
          <p className="text-xs font-mono text-emerald-400">
            Why students choose Kryptonode Tech Solutions for project learning
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-black/60 border border-slate-800 text-xs text-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
