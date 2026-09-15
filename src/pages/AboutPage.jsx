import React from 'react';
import { Target, Eye, ShieldCheck, Zap, Heart, Award, ArrowRight } from 'lucide-react';

export default function AboutPage({ onOpenContactModal }) {
  const values = [
    { title: "Innovation", desc: "Pushing boundaries with modern web frameworks, clean architecture, and practical AI integrations." },
    { title: "Transparency", desc: "Open communication, honest timelines, clear project milestone pricing, and direct code access." },
    { title: "Quality", desc: "Zero-compromise engineering standards, responsive design, production stability, and fast performance." },
    { title: "Learning", desc: "Fostering continuous learning through student internships, technical mentorship, and product R&D." },
    { title: "Customer Focus", desc: "Building exactly what solves the user problem and accelerates client business growth." },
    { title: "Ownership", desc: "Taking full accountability for design, frontend, backend, database security, and cloud deployment." }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
          ABOUT KRYPTONODE TECH SOLUTIONS PVT LTD
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          We Build Ideas Into <span className="text-gradient-emerald">Real Products.</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Kryptonode Tech Solutions Pvt Ltd is a technology-focused company dedicated to transforming ideas into useful digital products for startups, businesses, students, and organizations worldwide.
        </p>
      </div>

      {/* Mission & Vision Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-emerald border border-emerald-500/30 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Target className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            OUR MISSION
          </div>
          <h2 className="text-2xl font-heading font-bold text-white">
            "Make technology practical, accessible and impactful."
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our mission is to eliminate technical friction for founders and organizations by delivering reliable, elegant web, mobile, and AI solutions that drive real-world outcomes.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Eye className="w-6 h-6" />
          </div>
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            OUR VISION
          </div>
          <h2 className="text-2xl font-heading font-bold text-white">
            "Build products that solve real-world problems and help ideas become scalable businesses."
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            We envision an ecosystem where ambitious creators and companies can seamlessly validate, engineer, and deploy high-performing digital platforms built for long-term growth.
          </p>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
            OPERATING PRINCIPLES
          </div>
          <h2 className="text-3xl font-heading font-bold text-white">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <h3 className="font-heading font-bold text-lg text-white">{v.title}</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-white">
          Ready to Work With Kryptonode?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Whether you need a custom website, Android application, AI workflow, or complete startup MVP, we are ready to build it.
        </p>
        <button
          onClick={onOpenContactModal}
          className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all inline-flex items-center gap-2 shadow-lg"
        >
          <span>Start Your Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
