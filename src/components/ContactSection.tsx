import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_INFO, TEAM_MEMBERS, saveLead } from '../data/portfolioData';

interface ContactSectionProps {
  initialServiceCategory?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceCategory }) => {
  const [activePath, setActivePath] = useState<'project' | 'general'>('project');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Path 1 Form State
  const [projectForm, setProjectForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialServiceCategory || 'Web Application',
    budget: '₹25,000 – ₹50,000',
    timeline: '1–2 Months',
    description: '',
    website_hp: ''
  });

  // Path 2 Form State
  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'General',
    message: '',
    website_hp: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const saved = saveLead({
      name: projectForm.name,
      email: projectForm.email,
      phone: projectForm.phone,
      company: projectForm.company,
      projectType: projectForm.projectType,
      budget: projectForm.budget,
      timeline: projectForm.timeline,
      description: projectForm.description,
      sourcePage: 'Contact Section - Path 1 Project',
      notes: `Target Project Type: ${projectForm.projectType}`
    });

    try {
      const res = await fetch('/api/project-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...projectForm, sourcePage: 'Contact Section - Path 1 Project' })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedRef(data.referenceId || saved.referenceId);
      } else {
        setSubmittedRef(saved.referenceId);
      }
    } catch (err) {
      setSubmittedRef(saved.referenceId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const saved = saveLead({
      name: generalForm.name,
      email: generalForm.email,
      phone: generalForm.phone,
      projectType: `General (${generalForm.enquiryType})`,
      budget: 'N/A',
      timeline: 'N/A',
      description: generalForm.message,
      sourcePage: 'Contact Section - Path 2 General',
      notes: `General Enquiry Type: ${generalForm.enquiryType}`
    });

    try {
      const res = await fetch('/api/general-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(generalForm)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedRef(data.referenceId || saved.referenceId);
      } else {
        setSubmittedRef(saved.referenceId);
      }
    } catch (err) {
      setSubmittedRef(saved.referenceId);
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Website',
    'Web Application',
    'Mobile App',
    'AI Application',
    'Business Software',
    'E-commerce',
    'Startup MVP',
    'Custom Software',
    'Other'
  ];

  return (
    <section id="contact" className="py-14 sm:py-16 bg-transparent relative overflow-hidden border-t border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald uppercase tracking-widest mb-2 font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight font-sans">
            "Have Something In Mind?{' '}
            <span className="text-gradient-forest underline decoration-emerald/30 underline-offset-4">
              Let's Talk."
            </span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-charcoal/80 max-w-2xl font-sans">
            Whether you need a website, app, AI solution, business system or want to discuss a startup idea, tell us what you're building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Form Box (2 Paths) */}
          <div className="lg:col-span-7 bg-ivory-50 p-5 sm:p-6 rounded-2xl border border-forest-900/10 shadow-forest-card">
            
            {/* Path Selector Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-ivory-200 rounded-xl mb-6 border border-forest-900/10">
              <button
                onClick={() => setActivePath('project')}
                className={`flex-1 py-2.5 text-xs font-mono font-bold rounded-lg transition-all ${
                  activePath === 'project'
                    ? 'bg-forest-900 text-white shadow-forest-subtle'
                    : 'text-charcoal hover:text-forest-900'
                }`}
              >
                PATH 1: START A PROJECT
              </button>

              <button
                onClick={() => setActivePath('general')}
                className={`flex-1 py-2.5 text-xs font-mono font-bold rounded-lg transition-all ${
                  activePath === 'general'
                    ? 'bg-forest-900 text-white shadow-forest-subtle'
                    : 'text-charcoal hover:text-forest-900'
                }`}
              >
                PATH 2: GENERAL ENQUIRY
              </button>
            </div>

            {submittedRef ? (
              <div className="p-6 rounded-2xl bg-emerald-soft text-center space-y-3 my-4 border border-forest-900/10">
                <div className="w-12 h-12 rounded-full bg-forest-900 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-light" />
                </div>
                <h3 className="text-xl font-extrabold text-charcoal font-sans">
                  Thanks for reaching out. 🚀
                </h3>
                <p className="text-xs text-charcoal/80 max-w-md mx-auto font-sans leading-relaxed">
                  Your enquiry has been received. The Kryptonode team will review your requirements and get back to you.
                </p>
                <div className="p-2.5 rounded-lg bg-ivory-100 text-xs font-mono text-forest-900 font-bold inline-block border border-forest-900/10">
                  Reference: {submittedRef}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-5 py-2 bg-forest-900 text-white font-bold text-xs rounded-lg"
                  >
                    Submit Another Scope
                  </button>
                </div>
              </div>
            ) : activePath === 'project' ? (
              /* PATH 1: START A PROJECT FORM */
              <form onSubmit={handleProjectSubmit} className="space-y-3.5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={projectForm.name}
                      onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                      placeholder="Name"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={projectForm.email}
                      onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={projectForm.phone}
                      onChange={(e) => setProjectForm({ ...projectForm, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={projectForm.company}
                      onChange={(e) => setProjectForm({ ...projectForm, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Project Type *
                    </label>
                    <select
                      value={projectForm.projectType}
                      onChange={(e) => setProjectForm({ ...projectForm, projectType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs font-bold"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Estimated Budget
                    </label>
                    <select
                      value={projectForm.budget}
                      onChange={(e) => setProjectForm({ ...projectForm, budget: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs font-bold"
                    >
                      <option>Just Exploring</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000+</option>
                      <option>Need Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Timeline
                    </label>
                    <select
                      value={projectForm.timeline}
                      onChange={(e) => setProjectForm({ ...projectForm, timeline: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs font-bold"
                    >
                      <option>ASAP</option>
                      <option>1–2 Months</option>
                      <option>2–3 Months</option>
                      <option>3–6 Months</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={3.5}
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    placeholder="Tell us what you're building, key features, and your target goals..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-forest-900 hover:bg-emerald text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-forest-subtle flex items-center justify-center gap-2"
                >
                  Send Project Enquiry →
                </button>
              </form>
            ) : (
              /* PATH 2: GENERAL ENQUIRY FORM */
              <form onSubmit={handleGeneralSubmit} className="space-y-3.5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={generalForm.name}
                      onChange={(e) => setGeneralForm({ ...generalForm, name: e.target.value })}
                      placeholder="Name"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={generalForm.email}
                      onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={generalForm.phone}
                      onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                      placeholder="Phone Number"
                      className="w-full px-3.5 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                      Enquiry Type *
                    </label>
                    <select
                      value={generalForm.enquiryType}
                      onChange={(e) => setGeneralForm({ ...generalForm, enquiryType: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs font-bold"
                    >
                      <option>General</option>
                      <option>Partnership</option>
                      <option>Internship</option>
                      <option>Career</option>
                      <option>Collaboration</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-charcoal uppercase mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3.5}
                    value={generalForm.message}
                    onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                    placeholder="Enter your message..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-ivory-100 border border-forest-900/15 text-charcoal text-xs focus:outline-none focus:border-emerald resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-forest-900 hover:bg-emerald text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-forest-subtle flex items-center justify-center gap-2"
                >
                  Send General Enquiry →
                </button>
              </form>
            )}

          </div>

          {/* Right Direct Contacts Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Company Email Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-forest-900 text-white border border-forest-800 shadow-forest-card space-y-3">
              <div className="text-[11px] font-mono font-bold text-emerald-light uppercase tracking-wider">
                OFFICIAL COMPANY CONTACT
              </div>

              <div>
                <h3 className="text-lg font-bold font-sans">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-[11px] text-gray-300 font-mono mt-0.5">
                  Primary channel for overall & general enquiries
                </p>
              </div>

              <div className="space-y-2 pt-1 font-mono text-xs text-emerald-light">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline">
                    {COMPANY_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 shrink-0" />
                  <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                    Instagram (@krypotnode_)
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 shrink-0" />
                  <a href={COMPANY_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="py-2.5 bg-emerald-light hover:bg-emerald text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 shadow-forest-glow transition-all font-mono"
                >
                  <Mail className="w-3 h-3" />
                  <span>Email</span>
                </a>
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 border border-white/20 transition-all font-mono"
                >
                  <Instagram className="w-3 h-3 text-emerald-light" />
                  <span>Insta</span>
                </a>
                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold rounded-lg flex items-center justify-center gap-1 border border-white/20 transition-all font-mono"
                >
                  <Linkedin className="w-3 h-3 text-emerald-light" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Direct Founder Contacts */}
            <div className="p-5 sm:p-6 rounded-2xl bg-ivory-50 border border-forest-900/10 shadow-forest-subtle space-y-3">
              <div className="text-[11px] font-mono font-bold text-emerald uppercase tracking-wider">
                DIRECT FOUNDER CONTACTS
              </div>

              <div className="space-y-2.5">
                {TEAM_MEMBERS.map((member) => (
                  <div key={member.id} className="p-3 rounded-xl bg-ivory-100 border border-forest-900/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-xs text-charcoal font-sans">{member.name}</div>
                      <div className="text-[10px] font-mono text-emerald-muted">{member.phone}</div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <a
                        href={`tel:${member.phone}`}
                        className="px-2.5 py-1 bg-forest-900 text-white rounded-md font-bold text-[11px] flex items-center gap-1 hover:bg-emerald transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                      <a
                        href={member.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 bg-emerald-soft text-forest-900 rounded-md font-bold text-[11px] flex items-center gap-1 border border-forest-900/10 hover:bg-forest-900 hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
