import React from 'react';

export default function Logo({ className = "h-9", showText = true }) {
  return (
    <div className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}>
      {/* K+N Node Visual Monogram Icon */}
      <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#031b15] via-[#082920] to-[#0f3d30] border border-emerald-500/30 group-hover:border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300">
        <svg viewBox="0 0 100 100" className="w-6 h-6 transform group-hover:scale-105 transition-transform duration-300">
          <defs>
            <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Node Connections */}
          <line x1="20" y1="20" x2="20" y2="80" stroke="url(#emeraldGrad)" strokeWidth="8" strokeLinecap="round" />
          <line x1="20" y1="50" x2="50" y2="20" stroke="url(#emeraldGrad)" strokeWidth="8" strokeLinecap="round" />
          <line x1="20" y1="50" x2="50" y2="80" stroke="url(#emeraldGrad)" strokeWidth="8" strokeLinecap="round" />
          
          {/* N Node lines */}
          <line x1="50" y1="20" x2="80" y2="80" stroke="#6ee7b7" strokeWidth="8" strokeLinecap="round" />
          <line x1="80" y1="20" x2="80" y2="80" stroke="#6ee7b7" strokeWidth="8" strokeLinecap="round" />
          
          {/* Connected Glowing Nodes */}
          <circle cx="20" cy="20" r="6" fill="#6ee7b7" filter="url(#glow)" />
          <circle cx="20" cy="80" r="6" fill="#6ee7b7" filter="url(#glow)" />
          <circle cx="50" cy="20" r="6" fill="#34d399" filter="url(#glow)" />
          <circle cx="50" cy="80" r="6" fill="#34d399" filter="url(#glow)" />
          <circle cx="80" cy="20" r="6" fill="#10b981" filter="url(#glow)" />
          <circle cx="80" cy="80" r="6" fill="#10b981" filter="url(#glow)" />
        </svg>

        {/* Ambient subtle glow pulse */}
        <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Brand Name Text */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-bold text-lg leading-tight tracking-tight text-white group-hover:text-emerald-300 transition-colors">
            Kryptonode
          </span>
          <span className="text-[10px] font-medium tracking-widest text-emerald-400 uppercase -mt-0.5">
            Tech Solutions
          </span>
        </div>
      )}
    </div>
  );
}
