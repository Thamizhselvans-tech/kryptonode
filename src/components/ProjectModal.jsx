import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Play, Code2, Layers, Award, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenEnquiryWithCategory }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'demo' | 'casestudy'
  const [demoInput, setDemoInput] = useState('');
  const [demoResponse, setDemoResponse] = useState(null);
  const [demoLoading, setDemoLoading] = useState(false);

  if (!project) return null;

  const handleSimulateDemo = (e) => {
    e.preventDefault();
    setDemoLoading(true);
    setTimeout(() => {
      setDemoLoading(false);
      if (project.id === 'doctor-ai') {
        setDemoResponse({
          title: "AI Clinical Assessment & Triage Output",
          triage: "Mild Respiratory Symptom Pattern",
          priority: "Low / Non-Emergency",
          summary: `Parsed query "${demoInput || 'Persistent mild cough and sore throat for 2 days'}". System generated initial non-prescription comfort guidance and flagged option to book virtual tele-consultation with on-call physician.`,
          metrics: "Response Latency: 120ms | Model: Medical LLM-V2 | Confidence: 96.4%"
        });
      } else if (project.id === 'ewos') {
        setDemoResponse({
          title: "EWOS Wholesale Order & Stock Reservation Output",
          orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
          discountTier: "Platinum Distributor (18% Bulk Discount Applied)",
          summary: `Calculated wholesale order for SKU line items matching "${demoInput || '500 units General Consumables'}". Reserved stock across Warehouse 1 (Chennai) and Warehouse 2 (Bengaluru).`,
          metrics: "Stock Reserved | Tax Invoiced | Dispatch Queue Updated"
        });
      } else {
        setDemoResponse({
          title: "SkillTracker Verified Learning Milestone Output",
          user: "Developer Intern",
          verifiedCommits: 24,
          skillDelta: "+15% React State & Custom Hooks Mastery",
          summary: `Parsed progress log for "${demoInput || 'Building MERN Stack Admin Dashboard'}". Verified repository pull request #14 and updated candidate skill radar.`,
          metrics: "Verification Status: Passed | Certificate Hash: 0x8F92A...BC"
        });
      }
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#090d14] rounded-3xl border border-emerald-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#06090f]/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-slate-900 text-slate-300 border border-slate-700">
                Status: {project.status || 'Active'}
              </span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-white">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 bg-[#06090f]/40">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 ${
              activeTab === 'overview'
                ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Project Overview & Tech
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Interactive Live Sandbox</span>
          </button>
          <button
            onClick={() => setActiveTab('casestudy')}
            className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 ${
              activeTab === 'casestudy'
                ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Case Study & Impact
          </button>
        </div>

        {/* Modal Body Scroll Container */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Cover Image & Links */}
              <div className="relative rounded-2xl overflow-hidden h-64 bg-slate-900 border border-slate-800">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6 justify-between">
                  <div className="space-y-1">
                    <p className="text-emerald-300 font-mono text-xs">{project.tagline}</p>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 border border-slate-700"
                      >
                        <Github className="w-4 h-4" />
                        <span>Repository</span>
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Site</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Problem & Solution Dual Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider block mb-2">
                    01. Problem Statement
                  </span>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {project.problem}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/20">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                    02. Implemented Solution
                  </span>
                  <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Implemented Core Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <span>Technology & Infrastructure</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl text-xs font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROJECT CONVERSION SECTION */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-500/30 space-y-3 text-center">
                <h4 className="text-lg font-heading font-bold text-white">
                  Want Something Similar For Your Business?
                </h4>
                <p className="text-xs text-slate-300 max-w-lg mx-auto">
                  Kryptonode Tech Solutions Pvt Ltd can architect, design, and engineer custom solutions tailored to your unique workflow.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquiryWithCategory(project.category);
                    }}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discuss Your Project</span>
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenEnquiryWithCategory(project.category);
                    }}
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-500/40 transition-all flex items-center gap-2"
                  >
                    <span>Talk to Kryptonode</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE DEMO SANDBOX */}
          {activeTab === 'demo' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <strong className="text-emerald-300 block font-semibold">Live Sandbox Simulation</strong>
                  <span className="text-slate-400">Test how the {project.name} processing pipeline operates in real time.</span>
                </div>
              </div>

              <form onSubmit={handleSimulateDemo} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Simulate Input Query / Workflow Action:
                  </label>
                  <input
                    type="text"
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder={
                      project.id === 'doctor-ai'
                        ? "e.g. Mild headache, fever 99F and throat irritation..."
                        : project.id === 'ewos'
                        ? "e.g. Order 200 boxes of Wholesale Item #A40"
                        : "e.g. Complete React state management milestone task"
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={demoLoading}
                  className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 shadow-lg"
                >
                  {demoLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Executing Workflow Engine...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-slate-950" />
                      <span>Run Interactive Test</span>
                    </>
                  )}
                </button>
              </form>

              {demoResponse && (
                <div className="p-5 rounded-2xl bg-black/80 border border-emerald-500/40 space-y-3 font-mono text-xs animate-fadeIn">
                  <div className="flex items-center justify-between text-emerald-400 border-b border-emerald-500/20 pb-2">
                    <span className="font-bold">{demoResponse.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">SUCCESS 200 OK</span>
                  </div>

                  <p className="text-slate-200 leading-relaxed font-sans text-xs">
                    {demoResponse.summary}
                  </p>

                  <div className="pt-2 text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-800">
                    <span>{demoResponse.metrics}</span>
                    <span className="text-emerald-400">System Ready</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CASE STUDY */}
          {activeTab === 'casestudy' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Award className="w-5 h-5" />
                  <h3 className="font-heading font-bold text-lg text-white">
                    Measured Business Impact & Results
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.caseStudy}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 font-mono text-center">
                  <div className="p-3 rounded-xl bg-black/40 border border-slate-800">
                    <div className="text-xl font-bold text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase mt-1">Uptime Reliability</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-slate-800">
                    <div className="text-xl font-bold text-emerald-400">3x</div>
                    <div className="text-[10px] text-slate-400 uppercase mt-1">Workflow Velocity</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-slate-800">
                    <div className="text-xl font-bold text-emerald-400">&lt; 150ms</div>
                    <div className="text-[10px] text-slate-400 uppercase mt-1">Avg Response Latency</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#06090f]/80 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Kryptonode Tech Solutions Pvt Ltd Project Showcase
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
