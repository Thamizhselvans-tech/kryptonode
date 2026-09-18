import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { Phone, MessageSquare, Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-14 sm:py-16 bg-transparent relative overflow-hidden border-t border-forest-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald uppercase tracking-widest mb-2 font-bold">
              <Users className="w-3.5 h-3.5" />
              <span>CORE DEVELOPERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight font-sans">
              "The People Behind Kryptonode"
            </h2>
            <div className="text-xs sm:text-sm font-mono font-bold text-forest-900 mt-1.5">
              "Three people. One vision — building useful technology."
            </div>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="card-ivory p-5 sm:p-6 rounded-2xl flex flex-col justify-between group shadow-forest-subtle"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[4/3.2] rounded-xl overflow-hidden mb-4 border border-forest-900/10 shadow-forest-subtle">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-charcoal tracking-tight font-sans mb-0.5">
                  {member.name}
                </h3>
                
                <div className="text-[11px] font-mono font-bold text-emerald uppercase tracking-wider mb-2.5">
                  {member.role}
                </div>

                <p className="text-xs text-charcoal/80 leading-relaxed font-sans mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Direct Call & WhatsApp Actions */}
              <div className="pt-4 border-t border-forest-900/10 space-y-2">
                <div className="text-[10px] sm:text-[11px] font-mono text-emerald-muted">Phone: {member.phone}</div>
                <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                  <a
                    href={`tel:${member.phone}`}
                    className="py-2 px-2.5 rounded-lg bg-forest-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-emerald transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>

                  <a
                    href={member.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-2.5 rounded-lg bg-emerald-soft text-forest-900 font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-forest-900 hover:text-white border border-forest-900/15 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
