import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles, AlertCircle, Copy, CheckCircle2 } from 'lucide-react';
import { addLead } from '../services/storageService';

export default function ContactPage({ onSuccess, team }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'General',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kryptonodetechsolutions@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      try {
        const lead = addLead({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: `General (${formData.enquiryType})`,
          message: formData.message,
          sourcePage: 'General Contact Page'
        });
        setSubmitting(false);
        onSuccess(`Enquiry ${lead.refId} submitted to kryptonodetechsolutions@gmail.com!`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          enquiryType: 'General',
          message: ''
        });
      } catch (err) {
        setSubmitting(false);
        setError('Submission failed. Please try again.');
      }
    }, 800);
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
          CONTACT KRYPTONODE TECH SOLUTIONS PVT LTD
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Let's Build Something <span className="text-gradient-emerald">Meaningful.</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Have an idea, project or business problem? Talk to the Kryptonode team.
        </p>
      </div>

      {/* Official Company Channel Banner */}
      <div className="p-8 rounded-3xl glass-panel-emerald border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              Official General Enquiry Email
            </div>
            <a
              href="mailto:kryptonodetechsolutions@gmail.com"
              className="text-lg sm:text-xl font-heading font-bold text-white hover:text-emerald-300 transition-colors"
            >
              kryptonodetechsolutions@gmail.com
            </a>
          </div>
        </div>

        <button
          onClick={handleCopyEmail}
          className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-2 shrink-0 shadow-md"
        >
          <Copy className="w-4 h-4" />
          <span>{copiedEmail ? 'Copied to Clipboard!' : 'Email Our Team'}</span>
        </button>
      </div>

      {/* Direct Team Contact Cards (Thamizhprabha, Danish Kumar, Sarveshkumar) */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
            DIRECT TEAM CONTACTS
          </div>
          <h2 className="text-2xl font-heading font-bold text-white">
            Connect Directly With Core Engineering Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="p-6 rounded-3xl glass-panel border border-slate-800 space-y-4 text-center">
              <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-emerald-500/40" />
              <div>
                <h3 className="font-heading font-bold text-white text-lg">{member.name}</h3>
                <div className="text-xs font-mono text-emerald-400">{member.role}</div>
                <div className="text-xs font-mono text-slate-300 font-semibold mt-1">📞 {member.phone}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800 font-mono text-xs">
                <a
                  href={`tel:${member.phone}`}
                  className="py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold border border-slate-800"
                >
                  Call
                </a>
                <a
                  href={`https://wa.me/91${member.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-300 font-bold border border-emerald-500/40"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* General Enquiry Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-4">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">
            Send General Enquiry
          </h3>

          {error && (
            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
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
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Enquiry Type *</label>
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 font-semibold focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
              >
                <option value="General">General</option>
                <option value="Project">Project Enquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Internship">Internship</option>
                <option value="Career">Career</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Message *</label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can Kryptonode Tech Solutions help your business or project?"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-xs sm:text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-mint-400 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Enquiry</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
