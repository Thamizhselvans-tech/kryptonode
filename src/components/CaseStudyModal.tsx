import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-navy-900/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-milk-100 rounded-3xl border border-deepblue/20 shadow-floating overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 sm:px-8 border-b border-deepblue/10 bg-softblue/40 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-electric px-3 py-1 bg-milk-100 rounded-full border border-electric/30">
                PROJECT {project.number}
              </span>
              <span className="text-xs font-mono text-muted uppercase tracking-wider hidden sm:inline">
                {project.industry} — {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-milk-100 text-navy-800 hover:bg-softblue border border-deepblue/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Title & Client */}
            <div>
              <div className="text-xs font-mono text-muted uppercase tracking-wider mb-1">
                Client: {project.client}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-800 tracking-tight font-sans">
                {project.title}
              </h2>
              <p className="mt-3 text-lg font-medium text-deepblue leading-relaxed font-sans">
                {project.tagline}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-deepblue/10 shadow-card">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
            </div>

            {/* Metrics Row */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-navy-800 text-milk-100">
                {project.metrics.map((m: { label: string; value: string }, idx: number) => (
                  <div key={idx} className="text-center sm:text-left">
                    <div className="text-2xl sm:text-3xl font-extrabold text-electric font-sans">
                      {m.value}
                    </div>
                    <div className="text-xs text-gray-300 font-mono uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Story */}
            <div className="prose max-w-none text-navy-800 font-sans leading-relaxed space-y-4">
              <h3 className="text-xl font-bold text-navy-800 tracking-tight font-sans">
                Architectural Approach & Delivered Story
              </h3>
              {project.fullStory && (
                <p className="text-muted text-base">
                  {project.fullStory}
                </p>
              )}
              <p className="text-muted text-base">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold text-navy-800 uppercase tracking-wider mb-3">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.technology || []).map((t: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-softblue text-deepblue font-mono text-xs font-semibold rounded-xl border border-deepblue/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-6 sm:px-8 bg-milk-100 border-t border-deepblue/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <span className="text-xs text-muted font-sans">
              Need a similar engineering transformation for your business?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-deepblue hover:bg-electric text-milk-100 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-subtle transition-all"
            >
              Start Similar Project
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
