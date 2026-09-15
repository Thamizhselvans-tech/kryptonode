import React from 'react';
import { ExternalLink, Github, CheckCircle2, Cpu, ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="group glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(5,150,105,0.15)] flex flex-col justify-between">
      {/* Project Banner Image / Cover */}
      <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent" />
        
        {/* Top Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-lg">
            {project.badge || project.category}
          </span>
        </div>

        {/* Action Overlay buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/60 text-slate-300 hover:text-emerald-400 hover:bg-black/90 transition-all border border-white/10"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <button
              onClick={() => onOpenModal(project)}
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md"
              title="Live Interactive Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-emerald-300 transition-colors">
            {project.name}
          </h3>
          <p className="text-xs font-mono text-emerald-400 mt-1 mb-3">
            {project.tagline}
          </p>

          <div className="space-y-3 text-xs text-slate-300">
            <div>
              <strong className="text-slate-100 font-semibold block text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                The Problem
              </strong>
              <p className="line-clamp-2 text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div>
              <strong className="text-emerald-300 font-semibold block text-[11px] uppercase tracking-wider mb-1">
                The Solution
              </strong>
              <p className="line-clamp-2 text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-1.5 pt-2 border-t border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Key Capabilities</span>
            <ul className="grid grid-cols-1 gap-1 text-xs text-slate-300">
              {project.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Badges */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-slate-900 text-emerald-300 border border-slate-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom CTA to view Case Study & Sandbox */}
        <div className="pt-2">
          <button
            onClick={() => onOpenModal(project)}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>Explore Case Study & Interactive Demo</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
