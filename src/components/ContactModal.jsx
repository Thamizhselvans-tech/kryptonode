import React, { useState } from 'react';
import { X, Sparkles, Send, AlertCircle, CheckCircle2, Rocket, ArrowRight, Copy } from 'lucide-react';
import { addLead } from '../services/storageService';

export default function ContactModal({ initialProjectType = 'Startup MVP', onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialProjectType || 'Startup MVP',
    projectName: '',
    idea: '',
    features: '',
    targetUsers: '',
    stage: 'Concept Validation',
    budgetRange: '₹50,000 – ₹1,00,000',
    timeline: '1–2 Months',
    referenceLink: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submittedLead, setSubmittedLead] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || (!formData.idea && !formData.message)) {
      setError('Please fill in your name, email, and project idea description.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      try {
        const leadRecord = addLead({
          ...formData,
          message: formData.idea || formData.message,
          sourcePage: `Start Project Modal (${formData.projectType})`
        });
        setSubmitting(false);
        setSubmittedLead(leadRecord);
      } catch (err) {
        setSubmitting(false);
        setError('Failed to record enquiry. Please try again.');
      }
    }, 800);
  };

  const handleCopyRef = () => {
    if (submittedLead?.refId) {
      navigator.clipboard.writeText(submittedLead.refId);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#080c14] rounded-3xl border border-emerald-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#05080f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-white">
                {submittedLead ? "Enquiry Confirmed" : "Tell Us About Your Project"}
              </h2>
              <p className="text-xs font-mono text-emerald-400">
                Kryptonode Tech Solutions Pvt Ltd — Client Project Intake
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SUCCESS VIEW */}
        {submittedLead ? (
          <div className="p-8 text-center space-y-6 animate-fadeIn my-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
              <Rocket className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                We've Received Your Idea 🚀
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{submittedLead.name}</strong>! Your project enquiry has been logged into the Kryptonode engineering pipeline.
              </p>
            </div>

            {/* Reference ID Card */}
            <div className="p-4 rounded-2xl bg-black/80 border border-emerald-500/40 max-w-sm mx-auto space-y-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                Project Reference ID
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-mono font-extrabold text-emerald-400 tracking-wider">
                  {submittedLead.refId}
                </span>
                <button
                  onClick={handleCopyRef}
                  className="p-1.5 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs"
                  title="Copy Reference ID"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              {copied && <div className="text-[10px] text-emerald-300 font-mono">Copied to clipboard!</div>}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 max-w-lg mx-auto text-left space-y-1">
              <div><strong>Project Type:</strong> {submittedLead.projectType}</div>
              <div><strong>Target Budget:</strong> {submittedLead.budgetRange}</div>
              <div><strong>Official Contact Email:</strong> <a href="mailto:kryptonodetechsolutions@gmail.com" className="text-emerald-400 underline">kryptonodetechsolutions@gmail.com</a></div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-lg"
            >
              Done & Close
            </button>
          </div>
        ) : (
          /* FORM VIEW */
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-200">
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* 1. PERSONAL INFORMATION */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-1">
                1. Personal & Company Information
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Thamizhprabha S"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Startup or Organization Name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* 2. PROJECT TYPE */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-1">
                2. Project Classification
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-semibold focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  >
                    <option value="Website">Website</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="AI Application">AI Application</option>
                    <option value="Business Software">Business Software</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Startup MVP">Startup MVP</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Current Stage</label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  >
                    <option value="Just an Idea">Just an Idea</option>
                    <option value="Concept Validation">Concept Validation</option>
                    <option value="Wireframes / Design Ready">Wireframes / Design Ready</option>
                    <option value="Existing App Needs Rebuild">Existing App Needs Rebuild</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3. PROJECT DETAILS */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-1">
                3. Project Details & Vision
              </span>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Name (Optional)</label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="e.g. HealthTrack AI"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Describe Your Idea & Target Problem *</label>
                <textarea
                  name="idea"
                  required
                  rows={3}
                  value={formData.idea}
                  onChange={handleChange}
                  placeholder="Tell us what problem this project solves, key features needed, and your target audience..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* 4. BUDGET & TIMELINE */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-1">
                4. Budget & Delivery Timeline
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Budget Allocation</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  >
                    <option value="Just Exploring">Just Exploring</option>
                    <option value="Under ₹25,000">Under ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                    <option value="Need Guidance">Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Target Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                  >
                    <option value="ASAP">ASAP (Urgent)</option>
                    <option value="1–2 Months">1–2 Months</option>
                    <option value="2–3 Months">2–3 Months</option>
                    <option value="3–6 Months">3–6 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Reference Website / App Link (Optional)</label>
                <input
                  type="url"
                  name="referenceLink"
                  value={formData.referenceLink}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-mint-400 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Project Intake...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Project Enquiry</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
