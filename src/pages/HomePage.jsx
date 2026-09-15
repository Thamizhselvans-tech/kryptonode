import React, { useState } from 'react';
import NodeCanvas from '../components/NodeCanvas';
import ProjectCard from '../components/ProjectCard';
import TechnologiesWeMaster from '../components/TechnologiesWeMaster';
import { 
  Sparkles, ArrowRight, CheckCircle2, Cpu, Rocket, Globe, 
  Smartphone, Layers, GraduationCap, Code2, ChevronRight, MessageSquare,
  Target, Eye, Phone, Mail, Clock, Send, Linkedin, Github, Quote, Zap, Heart, Award
} from 'lucide-react';
import { WHAT_WE_BUILD, HOW_WE_BUILD } from '../data/mockData';
import { addLead } from '../services/storageService';

export default function HomePage({ 
  projects, 
  team, 
  onOpenEnquiryWithCategory, 
  onOpenInternshipModal, 
  onOpenProjectModal, 
  setActivePage 
}) {
  const featuredProjects = projects.filter(p => p.featured || p.published).slice(0, 3);

  // Contact form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Startup MVP',
    budgetRange: '₹25,000 - ₹50,000',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const trustCheckmarks = [
    "Custom Development",
    "AI-Powered Solutions",
    "Startup MVPs",
    "End-to-End Support"
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    addLead({
      name: formData.fullName,
      email: formData.email,
      projectType: formData.projectType,
      budget: formData.budgetRange,
      message: formData.message,
      sourcePage: 'Homepage Contact Section'
    });

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        projectType: 'Startup MVP',
        budgetRange: '₹25,000 - ₹50,000',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 lg:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Radial Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>BUILD • INNOVATE • GROW</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              We Build Ideas <br />
              Into <span className="text-gradient-emerald">Real Products.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-xl">
              Kryptonode Tech Solutions helps startups, businesses and creators transform ideas into modern websites, mobile apps, AI-powered products and scalable digital solutions.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenEnquiryWithCategory('Startup MVP')}
                className="px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-mint-400 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActivePage('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3.5 rounded-2xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Hero Trust Badges Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 font-medium">
              {trustCheckmarks.map((point, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Visual: Canvas Node System with Handwriting annotation */}
          <div className="lg:col-span-6 relative">
            <NodeCanvas />
            
            {/* Handwriting annotation arrow matching master image */}
            <div className="absolute -bottom-6 right-6 hidden sm:flex items-center gap-2 font-mono text-xs text-emerald-400/80 italic transform rotate-[-3deg]">
              <span>Turn your idea into reality</span>
              <span className="text-lg">➔</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT WE BUILD" - 6 CARDS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Trusted by innovators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Technology That Solves <span className="text-gradient-emerald">Real Problems.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md text-left md:text-right">
            From concept to deployment, we build complete digital solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_BUILD.map((card) => (
            <div
              key={card.id}
              className="p-7 rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  {card.id === 'web-sites' && <Globe className="w-6 h-6" />}
                  {card.id === 'web-apps' && <Code2 className="w-6 h-6" />}
                  {card.id === 'mobile-apps' && <Smartphone className="w-6 h-6" />}
                  {card.id === 'ai-products' && <Cpu className="w-6 h-6" />}
                  {card.id === 'business-systems' && <Layers className="w-6 h-6" />}
                  {card.id === 'startup-mvps' && <Rocket className="w-6 h-6" />}
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-2">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiryWithCategory(card.projectType)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Build My {card.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "OUR DEVELOPMENT PROCESS" - 7 CONNECTED CIRCLE NODES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              OUR DEVELOPMENT PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              From Idea to <span className="text-gradient-emerald">Impact.</span>
            </h2>
          </div>

          <button
            onClick={() => onOpenEnquiryWithCategory('Startup MVP')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 7 Numbered Connected Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative">
          {HOW_WE_BUILD.map((st) => (
            <div
              key={st.step}
              className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-3 hover:border-emerald-500/40 transition-all relative group"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 font-mono font-extrabold text-xs flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">
                {st.step}
              </div>
              <h3 className="font-heading font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">
                {st.title}
              </h3>
              <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "ABOUT KRYPTONODE" - TEAM PHOTO & PURPOSE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 space-y-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Side: Team Photo */}
            <div className="lg:col-span-5 relative group">
              <img
                src="/team_photo.jpg"
                alt="Kryptonode Founders"
                className="rounded-2xl object-cover w-full h-[320px] sm:h-[380px] border border-emerald-500/30 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#06090f] via-transparent to-transparent opacity-60" />
            </div>

            {/* Right Side: Purpose & Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                ABOUT KRYPTONODE
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                A Team That Builds <br />
                <span className="text-gradient-emerald">With Purpose.</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Kryptonode Tech Solutions Pvt Ltd is a technology-focused company passionate about building real-world digital products. We combine creativity, technology and problem-solving to turn ideas into scalable solutions.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Innovation", "Quality", "Learning", "Customer Focus"].map((b, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                    ✓ {b}
                  </span>
                ))}
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">3</div>
                  <div className="text-[11px] font-mono text-slate-400">Team Members</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">10+</div>
                  <div className="text-[11px] font-mono text-slate-400">Projects</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">Multiple</div>
                  <div className="text-[11px] font-mono text-slate-400">Technologies</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">Endless</div>
                  <div className="text-[11px] font-mono text-slate-400">Possibilities</div>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase">Our Mission</div>
                  <p className="text-xs text-slate-300">Make technology practical, accessible and impactful.</p>
                </div>
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase">Our Vision</div>
                  <p className="text-xs text-slate-300">Build products that solve real-world problems and help ideas become scalable businesses.</p>
                </div>
              </div>

              <div className="text-xs font-mono font-bold text-emerald-400 tracking-wider pt-2">
                "Your Idea. Our Technology. Real Product."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "FEATURED PROJECTS" SHOWCASE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
              FEATURED PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Real Projects. <span className="text-gradient-emerald">Real Impact.</span>
            </h2>
          </div>

          <button
            onClick={() => {
              setActivePage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenProjectModal}
            />
          ))}
        </div>
      </section>

      {/* 6. "TECHNOLOGIES WE WORK WITH" - SLIDER & BADGES */}
      <TechnologiesWeMaster onOpenEnquiryWithCategory={onOpenEnquiryWithCategory} />

      {/* 7. "LET'S BUILD YOUR STARTUP" - ROCKET LAUNCH SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#031b15] via-[#052e24] to-[#0a4d3c] border border-emerald-500/40 shadow-[0_20px_50px_rgba(5,150,105,0.25)] relative overflow-hidden space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                <Rocket className="w-4 h-4 text-emerald-400" />
                <span>HAVE AN IDEA?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Let's Build Your <span className="text-gradient-emerald">Startup.</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                From idea validation to product launch, we help you at every step.
              </p>

              <button
                onClick={() => onOpenEnquiryWithCategory('Startup MVP')}
                className="px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss My Idea</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Glowing Rocket Launch Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                {/* Outer Pulsing Aura Ring */}
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl animate-ping" />
                <div className="w-40 h-40 rounded-full bg-emerald-950/80 border-2 border-emerald-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.5)] transform -rotate-45">
                  <Rocket className="w-20 h-20 text-emerald-400 animate-bounce" />
                </div>
              </div>

              <div className="font-mono text-xs font-bold text-emerald-300 mt-2 tracking-wider">
                Idea ➔ Startup ➔ Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "KRYPTONODE ONLINE INTERNSHIP" */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 space-y-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>LEARN • BUILD • GROW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                Kryptonode Online Internship
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Gain real-world experience with practical projects, mentor guidance and portfolio building.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setActivePage('internship');
                    onOpenInternshipModal();
                  }}
                  className="px-6 py-3 rounded-2xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setActivePage('internship');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 rounded-2xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all cursor-pointer"
                >
                  <span>View Details</span>
                </button>
              </div>
            </div>

            {/* Internship Tracks Pills Right */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Internship Tracks
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full-Stack Development", "MERN Stack", "Java Development",
                  "AI Application Development", "UI/UX Design", "Mobile App Development"
                ].map((track, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                    {track}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Icons Strip */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <LaptopIcon />
              <span>Online Learning</span>
            </div>
            <div className="flex items-center gap-2">
              <CodeIcon />
              <span>Real Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <MentorIcon />
              <span>Mentor Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CertificateIcon />
              <span>Completion Certificate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. "LET'S BUILD A BETTER TOMORROW" - MOUNTAIN LANDSCAPE BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[320px] sm:h-[380px] border border-emerald-500/30 flex items-center justify-center text-center p-8">
          <img
            src="/mountain_bg.jpg"
            alt="Build a Better Tomorrow"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031b15]/90 via-[#06090f]/80 to-[#031b15]/90" />

          {/* Top Corner Tag */}
          <div className="absolute top-6 right-6 hidden sm:block font-mono text-xs font-bold text-emerald-300/80 tracking-widest uppercase">
            BIGGER IDEAS • BRIGHTER FUTURE
          </div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40">
              TECHNOLOGY • PEOPLE • IMPACT
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Let's Build a <span className="text-gradient-emerald">Better Tomorrow.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300">
              Join hands with Kryptonode and turn your ideas into real-world solutions.
            </p>

            <button
              onClick={() => onOpenEnquiryWithCategory('Startup MVP')}
              className="px-6 py-3 rounded-2xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. "MEET OUR TEAM" */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              MEET OUR TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Three minds. <span className="text-gradient-emerald">One mission.</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Passionate about technology, innovation and building impactful products.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('team');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all flex items-center gap-2 cursor-pointer self-start md:self-auto"
          >
            <span>Join Our Team</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.id} className="p-6 rounded-3xl glass-panel border border-slate-800 hover:border-emerald-500/40 transition-all text-center space-y-4 group">
              <div className="relative w-24 h-24 mx-auto">
                <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500/40 shadow-lg group-hover:scale-105 transition-transform" />
                <div className="absolute -bottom-1 -right-1 flex gap-1">
                  <a href={m.linkedin || "#"} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 text-[10px]">in</a>
                  <a href={m.github || "#"} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-emerald-400 text-[10px]">gh</a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-emerald-300 transition-colors">{m.name}</h3>
                <div className="text-xs font-mono text-emerald-400 mt-0.5">{m.role}</div>
                {m.phone && (
                  <div className="text-xs font-mono text-slate-300 font-semibold mt-1">
                    📞 {m.phone}
                  </div>
                )}
              </div>
              
              {m.phone && (
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-center gap-2">
                  <a
                    href={`tel:${m.phone}`}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-200 border border-slate-800 transition-all"
                  >
                    Call
                  </a>
                  <a
                    href={`https://wa.me/91${m.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-xs font-mono text-emerald-300 border border-emerald-500/30 transition-all"
                  >
                    WhatsApp
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. "WHAT DRIVES US" */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              WHAT DRIVES US
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">
              Ideas Turned Into <span className="text-gradient-emerald">Impact.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 italic pt-2 font-mono">
              "Technology is most powerful when it solves real problems and creates real value."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm">🧩</div>
              <h3 className="font-heading font-bold text-white text-base">Problem Solving</h3>
              <p className="text-xs text-slate-400">We focus on real-world challenges.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm">🔄</div>
              <h3 className="font-heading font-bold text-white text-base">Continuous Learning</h3>
              <p className="text-xs text-slate-400">We stay curious and keep improving.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm">🌱</div>
              <h3 className="font-heading font-bold text-white text-base">Long-Term Impact</h3>
              <p className="text-xs text-slate-400">We build for a better tomorrow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. "HAVE A PROJECT IN MIND? LET'S TALK." + INTERACTIVE CONTACT FORM */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 space-y-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact Info & Direct Phone Links */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
                  HAVE A PROJECT IN MIND?
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                  Let's <span className="text-gradient-emerald">Talk.</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Tell us about your idea. We'll get back to you and discuss how we can bring it to life.
                </p>
              </div>

              {/* Contact Pills */}
              <div className="space-y-3 pt-2">
                <a
                  href="mailto:kryptonodetechsolutions@gmail.com"
                  className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex items-center gap-3 text-xs text-slate-200"
                >
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">Email Our Team</div>
                    <div className="font-semibold">kryptonodetechsolutions@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918668109481"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/50 transition-all flex items-center gap-3 text-xs text-emerald-300"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] text-emerald-400 uppercase">Chat on WhatsApp</div>
                    <div className="font-semibold">Direct Response</div>
                  </div>
                </a>

                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 text-xs text-slate-200">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-mono text-[10px] text-slate-400 uppercase">Call Us</div>
                    <div className="font-semibold">Mon - Sat, 9AM - 8PM</div>
                  </div>
                </div>
              </div>

              {/* Direct Team Phone Numbers List */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/20 space-y-3">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase">Direct Team Contacts</div>
                {team.map(t => (
                  <div key={t.id} className="flex items-center justify-between text-xs text-slate-300 border-b border-slate-900 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium">{t.name}</span>
                    <a href={`tel:${t.phone}`} className="font-mono text-emerald-400 hover:underline">📞 {t.phone}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">Send Us a Message</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">Our team will review your message and contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Thamizh"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="thamizh@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Project Type</label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Startup MVP</option>
                        <option>Website Development</option>
                        <option>Web Application</option>
                        <option>Mobile App</option>
                        <option>AI Solution</option>
                        <option>Business System</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Budget Range</label>
                      <select
                        value={formData.budgetRange}
                        onChange={e => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option>Under ₹25,000</option>
                        <option>₹25,000 - ₹50,000</option>
                        <option>₹50,000 - ₹1,00,000</option>
                        <option>₹1,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Message</label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your idea or requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper SVG Icon Components
function LaptopIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
      <line x1="2" y1="20" x2="22" y2="20" strokeWidth="2" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <polyline points="16 18 22 12 16 6" strokeWidth="2" />
      <polyline points="8 6 2 12 8 18" strokeWidth="2" />
    </svg>
  );
}

function MentorIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
      <circle cx="9" cy="7" r="4" strokeWidth="2" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="7" strokeWidth="2" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" strokeWidth="2" />
    </svg>
  );
}
