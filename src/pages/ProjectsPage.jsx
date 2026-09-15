import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage({ projects, onOpenProjectModal }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI Solutions', 'Business Software', 'Web Development', 'Mobile App', 'Startup MVP'];

  const filteredProjects = projects.filter(p => {
    if (!p.published) return false;
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
          PRODUCTS & PORTFOLIO SHOWCASE
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Engineered Digital <span className="text-gradient-emerald">Products</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Inspect our flagship products including Doctor AI, EWOS Wholesale System, SkillTracker, and custom startup applications.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === cat
                ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)] scale-105'
                : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-emerald-500/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={onOpenProjectModal}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-slate-400 text-sm font-mono">
          No projects found under category "{filter}".
        </div>
      )}
    </div>
  );
}
