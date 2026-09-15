import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export default function TechnologiesWeMaster({ onOpenEnquiryWithCategory }) {
  const sliderRef = useRef(null);
  const [activeTechId, setActiveTechId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll loop effect (continuous smooth 60fps)
  useEffect(() => {
    let animationFrameId;

    const autoScroll = () => {
      if (sliderRef.current && !isPaused) {
        const slider = sliderRef.current;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2) {
          slider.scrollLeft = 0; // Seamless reset loop
        } else {
          slider.scrollLeft += 0.8; // Smooth 60fps velocity
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  // Tech items list
  const techList = [
    {
      id: "react",
      name: "React",
      category: "Frontend",
      color: "#61DAFB",
      tag: "100% Mastered",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="7" fill="#61DAFB" />
        </svg>
      )
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "Frontend",
      color: "#ffffff",
      tag: "Production",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="42" fill="#000" stroke="#fff" strokeWidth="4" />
          <path d="M35 32 L35 68 M35 32 L68 68 M65 32 L65 52" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Core Engine",
      color: "#F7DF1E",
      tag: "ES6+ Advanced",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="16" fill="#F7DF1E" />
          <path d="M52 75 C52 82 46 86 38 86 C30 86 24 81 24 74 L32 74 C32 78 35 80 38 80 C41 80 43 78 43 75 L43 45 L52 45 Z M76 75 C76 82 69 86 59 86 C48 86 43 79 43 71 L51 71 C51 76 55 80 59 80 C63 80 67 78 67 74 C67 70 64 68 58 66 L55 65 C47 62 44 57 44 51 C44 43 51 38 60 38 C68 38 74 43 74 51 L66 51 C66 47 63 44 60 44 C56 44 53 46 53 49 C53 52 56 54 61 56 L64 57 C72 60 76 65 76 75 Z" fill="#000" />
        </svg>
      )
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Typed Code",
      color: "#3178C6",
      tag: "Enterprise",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="16" fill="#3178C6" />
          <path d="M22 36 L52 36 M37 36 L37 78 M56 70 C56 76 62 80 70 80 C78 80 84 75 84 68 C84 60 78 57 70 54 L66 53 C60 50 57 47 57 43 C57 38 62 35 68 35 C75 35 80 38 80 44 L87 44 C87 35 79 30 68 30 C50 30 50 35 50 43 C50 50 55 54 63 56 L67 58 C74 60 77 63 77 68 C77 73 72 75 68 75 C62 75 58 72 58 67 Z" stroke="#fff" strokeWidth="4" fill="none" />
        </svg>
      )
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "Styling",
      color: "#38BDF8",
      tag: "Design System",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <path d="M20 40 C28 25 40 25 46 32 C52 40 56 48 68 48 C76 48 82 42 85 36 C77 51 65 51 59 44 C53 36 49 28 37 28 C29 28 23 34 20 40 Z M20 64 C28 49 40 49 46 56 C52 64 56 72 68 72 C76 72 82 66 85 60 C77 75 65 75 59 68 C53 60 49 52 37 52 C29 52 23 58 20 64 Z" fill="#38BDF8" />
        </svg>
      )
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "Backend Runtime",
      color: "#5FA04E",
      tag: "High Velocity",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <polygon points="50,10 90,32 90,78 50,100 10,78 10,32" fill="#5FA04E" />
          <polygon points="50,22 80,38 80,72 50,88 20,72 20,38" fill="#333" />
          <path d="M40 40 L50 35 L60 40 L60 55 L50 60 L40 55 Z" fill="#5FA04E" />
        </svg>
      )
    },
    {
      id: "express",
      name: "Express.js",
      category: "Microservices",
      color: "#ffffff",
      tag: "REST APIs",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="16" fill="#121820" stroke="#fff" strokeWidth="2" />
          <text x="50" y="62" fontSize="36" fontFamily="sans-serif" fontWeight="bold" fill="#fff" textAnchor="middle">ex</text>
        </svg>
      )
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      tag: "NoSQL Scale",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <path d="M50 10 C50 10 25 35 25 60 C25 75 35 88 50 92 C65 88 75 75 75 60 C75 35 50 10 50 10 Z" fill="#47A248" />
          <path d="M50 10 L50 92 C52 92 56 86 56 60 C56 35 50 10 50 10 Z" fill="#3F8A3F" />
        </svg>
      )
    },
    {
      id: "firebase",
      name: "Firebase",
      category: "BaaS & Auth",
      color: "#FFCA28",
      tag: "Realtime",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <path d="M25 80 L40 20 L55 50 Z" fill="#FFA000" />
          <path d="M50 90 L25 80 L55 50 Z" fill="#F57C00" />
          <path d="M50 90 L75 80 L55 50 Z" fill="#FFCA28" />
        </svg>
      )
    },
    {
      id: "java",
      name: "Java",
      category: "Backend",
      color: "#E76F00",
      tag: "Spring Boot",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <path d="M35 75 C35 75 45 80 55 80 C65 80 75 75 75 75 C75 75 65 88 50 88 C35 88 35 75 35 75 Z" fill="#5382A1" />
          <path d="M40 60 C40 60 48 64 55 64 C62 64 70 60 70 60 C70 60 62 70 52 70 C42 70 40 60 40 60 Z" fill="#E76F00" />
          <path d="M45 40 Q55 25 50 15 Q60 28 52 38" stroke="#E76F00" strokeWidth="4" fill="none" />
        </svg>
      )
    },
    {
      id: "python",
      name: "Python",
      category: "AI & ML",
      color: "#3776AB",
      tag: "FastAPI",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <path d="M48 10 C32 10 25 18 25 28 L25 38 L50 38 L50 42 L18 42 C8 42 0 50 0 65 C0 80 8 88 22 88 L32 88 L32 78 C32 64 42 55 55 55 L75 55 L75 42 C75 28 66 10 48 10 Z M38 20 A4 4 0 1 1 38 28 A4 4 0 1 1 38 20 Z" fill="#3776AB" />
          <path d="M52 90 C68 90 75 82 75 72 L75 62 L50 62 L50 58 L82 58 C92 58 100 50 100 35 C100 20 92 12 78 12 L68 12 L68 22 C68 36 58 45 45 45 L25 45 L25 58 C25 72 34 90 52 90 Z M62 80 A4 4 0 1 1 62 72 A4 4 0 1 1 62 80 Z" fill="#FFD43B" />
        </svg>
      )
    },
    {
      id: "openai",
      name: "OpenAI",
      category: "AI Integration",
      color: "#10A37F",
      tag: "GPT-4 / LLMs",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="50" cy="50" r="44" fill="#041813" stroke="#10A37F" strokeWidth="4" />
          <path d="M50 20 C60 20 70 30 70 40 C70 50 60 60 50 60 L50 80 M30 40 C30 30 40 20 50 20 L50 40 Z" fill="none" stroke="#10A37F" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="50" r="8" fill="#10A37F" />
        </svg>
      )
    },
    {
      id: "figma",
      name: "Figma",
      category: "UI/UX",
      color: "#F24E1E",
      tag: "Prototyping",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <circle cx="35" cy="25" r="15" fill="#F24E1E" />
          <circle cx="65" cy="25" r="15" fill="#FF7262" />
          <circle cx="35" cy="50" r="15" fill="#A259FF" />
          <circle cx="65" cy="50" r="15" fill="#1ABCFE" />
          <path d="M35 65 A15 15 0 1 1 35 95 A15 15 0 0 1 35 65 Z" fill="#0ACF83" />
        </svg>
      )
    },
    {
      id: "git",
      name: "Git",
      category: "DevOps",
      color: "#F05032",
      tag: "Version Control",
      icon: (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="70" height="70" rx="12" fill="#F05032" transform="rotate(45 50 50)" />
          <circle cx="35" cy="50" r="6" fill="#fff" />
          <circle cx="65" cy="35" r="6" fill="#fff" />
          <circle cx="65" cy="65" r="6" fill="#fff" />
          <path d="M35 50 L65 35 M35 50 L65 65" stroke="#fff" strokeWidth="4" />
        </svg>
      )
    }
  ];

  // Duplicated list for seamless marquee loop
  const displayItems = [...techList, ...techList];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 overflow-hidden">
      {/* Outer Banner Container matching exact screenshot layout */}
      <div className="relative rounded-3xl bg-[#03130e] border border-emerald-500/30 p-8 sm:p-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-10">
        
        {/* Top Floating Corner Annotations */}
        <div className="hidden md:flex items-center justify-between text-[10px] font-mono text-emerald-400/70 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>BUILD • INNOVATE • SCALE</span>
          </div>
          <div>
            <span>YOUR IDEA • OUR TECHNOLOGY • REAL PRODUCT</span>
          </div>
        </div>

        {/* Center Pill Header Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
          <span>KRYPTONODE TECH STACK</span>
        </div>

        {/* Main Section Heading */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
            Technologies We <span className="text-gradient-emerald">Master</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, robust, and future-proof solutions
          </p>
        </div>

        {/* Interactive & Auto-Moving Glowing Tech Node Slider */}
        <div
          className="relative pt-6 pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Connecting Glowing Vector Line across slider */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent pointer-events-none z-0" />
          
          {/* Glowing Node Dots on Line */}
          <div className="hidden sm:block absolute top-1/2 left-12 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] z-10 animate-pulse" />
          <div className="hidden sm:block absolute top-1/2 left-1/3 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] z-10 animate-pulse" />
          <div className="hidden sm:block absolute top-1/2 left-2/3 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] z-10 animate-pulse" />
          <div className="hidden sm:block absolute top-1/2 right-12 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] z-10 animate-pulse" />

          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#051a14] border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-white flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-110 transition-all"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#051a14] border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-white flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-110 transition-all"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Auto-Scroll Track */}
          <div
            ref={sliderRef}
            className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none px-12 py-6 relative z-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayItems.map((t, idx) => {
              const isActive = activeTechId === `${t.id}-${idx}`;
              return (
                <div
                  key={`${t.id}-${idx}`}
                  onClick={() => setActiveTechId(isActive ? null : `${t.id}-${idx}`)}
                  className={`shrink-0 relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl bg-[#061e18]/90 border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-2.5 p-3 select-none backdrop-blur-md group ${
                    isActive
                      ? 'border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.6)] scale-110 bg-[#0c362b]'
                      : 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:-translate-y-2 hover:scale-105'
                  }`}
                >
                  {/* Subtle Background Glow behind Icon */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none blur-md"
                    style={{ backgroundColor: t.color }}
                  />

                  {/* Icon Animation on hover */}
                  <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                    {t.icon}
                  </div>

                  {/* Name Label */}
                  <span className="text-xs font-mono font-bold text-slate-200 group-hover:text-emerald-300 transition-colors relative z-10">
                    {t.name}
                  </span>

                  {/* Interactive Badge on Hover */}
                  <div className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 opacity-70 group-hover:opacity-100 transition-opacity">
                    {t.tag}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Centered Subtitle Tag */}
        <div className="pt-4 flex items-center justify-center gap-4 text-[11px] font-mono font-bold text-emerald-400/80 tracking-widest uppercase">
          <span className="w-12 h-[1px] bg-emerald-500/40" />
          <span>POWERING BETTER PRODUCTS</span>
          <span className="w-12 h-[1px] bg-emerald-500/40" />
        </div>
      </div>
    </section>
  );
}
