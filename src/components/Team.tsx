import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { Users, Linkedin, Github, Twitter, HeartHandshake } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-milk-100 relative overflow-hidden border-t border-deepblue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-electric uppercase tracking-widest mb-3">
              <Users className="w-4 h-4" />
              <span>[ 07 — HUMAN FOUNDATIONS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-800 tracking-tight font-sans">
              The engineers and craftspeople{' '}
              <span className="text-deepblue underline decoration-electric/30 underline-offset-4">
                behind the systems.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-muted max-w-md font-sans">
            No account managers or sales proxies. You collaborate directly with senior founders and staff engineers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-milk-100 rounded-3xl border border-deepblue/10 hover:border-electric/40 p-5 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Team Imagery with Subtle Scale */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 border border-deepblue/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quirk Pill Overlay */}
                  {member.quirk && (
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-milk-100/90 backdrop-blur-md border border-deepblue/10 text-[11px] font-sans text-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                      <span className="font-semibold text-electric">Personal detail: </span>
                      {member.quirk}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-navy-800 tracking-tight font-sans group-hover:text-deepblue transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-xs font-mono font-bold text-electric uppercase tracking-wider mt-0.5 mb-3">
                  {member.role}
                </div>

                <p className="text-xs text-muted leading-relaxed font-sans mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Social Links Row */}
              <div className="pt-4 border-t border-deepblue/10 flex items-center gap-3 text-muted">
                {member.socials?.linkedin && (
                  <a href={member.socials.linkedin} className="hover:text-deepblue transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials?.github && (
                  <a href={member.socials.github} className="hover:text-deepblue transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.socials?.twitter && (
                  <a href={member.socials.twitter} className="hover:text-deepblue transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
