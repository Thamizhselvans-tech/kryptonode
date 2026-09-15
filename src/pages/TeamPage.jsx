import React from 'react';
import { Github, Linkedin, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function TeamPage({ team, onOpenEnquiryWithCategory }) {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
          FOUNDING & CORE TEAM
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
          Meet The <span className="text-gradient-emerald">Engineers Behind Kryptonode</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Kryptonode Tech Solutions Pvt Ltd is spearheaded by product builders focused on shipping production-grade digital software.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="p-8 rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4 text-center">
              <div className="relative inline-block mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover border-2 border-emerald-500/40 shadow-xl"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950" title="Active Core Founder" />
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-white">{member.name}</h3>
                <p className="text-xs font-mono text-emerald-400 mt-1">{member.role}</p>
                {member.phone && (
                  <p className="text-xs font-mono text-slate-300 font-semibold mt-1.5">
                    📞 {member.phone}
                  </p>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {member.bio}
              </p>

              {member.skills && (
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5 justify-center">
                  {member.skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900 text-emerald-300 border border-slate-800">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Contact Actions & Social Links */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              {member.phone && (
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-800 text-center font-bold"
                  >
                    Call ({member.phone})
                  </a>
                  <a
                    href={`https://wa.me/91${member.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-xs font-mono text-emerald-300 border border-emerald-500/40 text-center font-bold"
                  >
                    WhatsApp
                  </a>
                </div>
              )}

              <div className="flex items-center justify-center gap-3">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel-emerald border border-emerald-500/30 text-center space-y-4">
        <h3 className="text-2xl font-heading font-bold text-white">
          Want To Build A Digital Product With Our Team?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          We collaborate directly with founders, enterprises, and startups to execute custom tech builds.
        </p>
        <button
          onClick={() => onOpenEnquiryWithCategory('Startup MVP')}
          className="px-6 py-3 rounded-xl font-bold text-xs text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all inline-flex items-center gap-2 shadow-lg"
        >
          <span>Get In Touch With The Team</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
