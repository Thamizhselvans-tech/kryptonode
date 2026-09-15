import React from 'react';
import Logo from './Logo';
import { Mail, ArrowUpRight, Shield, Phone, MessageSquare } from 'lucide-react';

export default function Footer({ setActivePage, onOpenAdminModal, onOpenEnquiryWithCategory }) {
  const scrollToTop = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const teamShortcuts = [
    { name: "Thamizhprabha", phone: "8668109481" },
    { name: "Danish Kumar", phone: "9361215922" },
    { name: "Sarveshkumar", phone: "9150185160" }
  ];

  return (
    <footer className="relative bg-[#04060a] text-slate-400 border-t border-emerald-500/15 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Kryptonode Tech Solutions Pvt Ltd is a modern technology company transforming bold ideas into high-impact websites, mobile applications, AI platforms, and enterprise digital solutions.
            </p>
            <div className="text-xs font-mono font-bold text-emerald-400">
              "From Idea to Product. From Product to Growth."
            </div>
            <div className="pt-2">
              <a
                href="mailto:kryptonodetechsolutions@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>kryptonodetechsolutions@gmail.com</span>
                <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-70" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Core Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenEnquiryWithCategory('Website')} className="hover:text-emerald-400 transition-colors">
                  Websites
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiryWithCategory('Web Application')} className="hover:text-emerald-400 transition-colors">
                  Web Applications
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiryWithCategory('Mobile App')} className="hover:text-emerald-400 transition-colors">
                  Mobile Apps
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiryWithCategory('AI Application')} className="hover:text-emerald-400 transition-colors">
                  AI Products & Workflows
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiryWithCategory('Business Software')} className="hover:text-emerald-400 transition-colors">
                  Business Systems
                </button>
              </li>
              <li>
                <button onClick={() => onOpenEnquiryWithCategory('Startup MVP')} className="hover:text-emerald-400 transition-colors">
                  Startup MVPs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Featured Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToTop('projects')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>Doctor AI Platform</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300">AI</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('projects')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>EWOS Wholesale System</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">B2B</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTop('projects')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span>SkillTracker Portal</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">EdTech</span>
                </button>
              </li>
              <li className="pt-2">
                <button onClick={() => scrollToTop('internship')} className="text-emerald-300 font-semibold hover:underline">
                  Online Internship Program →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Founding Team Contacts & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Direct Team Contacts
            </h4>
            <div className="space-y-2 text-xs">
              {teamShortcuts.map((t) => (
                <div key={t.name} className="flex items-center justify-between text-slate-300">
                  <span className="font-medium">{t.name}:</span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <a href={`tel:${t.phone}`} className="text-emerald-400 hover:underline">Call</a>
                    <span>•</span>
                    <a href={`https://wa.me/91${t.phone}`} target="_blank" rel="noreferrer" className="text-emerald-300 hover:underline">WA</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 space-y-1.5">
              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Legal & Policies
              </h4>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <button onClick={() => scrollToTop('privacy')} className="hover:text-slate-200">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToTop('terms')} className="hover:text-slate-200">
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToTop('internship-terms')} className="hover:text-slate-200">
                    Internship Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">Kryptonode Tech Solutions Pvt Ltd</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenAdminModal}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>Admin Dashboard</span>
            </button>
            <span>•</span>
            <span className="text-slate-400">YOUR IDEA. OUR TECHNOLOGY. REAL PRODUCT.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
