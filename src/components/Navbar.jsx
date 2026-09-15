import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Shield, ArrowRight, Sparkles, GraduationCap, Sun, Moon } from 'lucide-react';

export default function Navbar({ 
  activePage, 
  setActivePage, 
  onOpenContactModal, 
  onOpenInternshipModal, 
  onOpenAdminModal,
  themeMode,
  toggleThemeMode
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Products & Projects' },
    { id: 'startup', label: 'Startup MVP' },
    { id: 'internship', label: 'Internship' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || themeMode === 'navy-light'
          ? themeMode === 'light'
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md'
            : themeMode === 'navy-light'
            ? 'bg-[#0b1021] backdrop-blur-xl border-b border-emerald-500/30 py-3 shadow.lg bg-navy-grid'
            : 'bg-[#06090f]/90 backdrop-blur-xl border-b border-emerald-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div onClick={() => handleNavClick('home')}>
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full backdrop-blur-md transition-colors ${
          themeMode === 'light'
            ? 'bg-slate-100/90 border border-slate-200'
            : themeMode === 'navy-light'
            ? 'bg-[#070b18]/90 border border-emerald-500/30'
            : 'bg-black/40 border border-white/10'
        }`}>
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : themeMode === 'light'
                    ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Action Group & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Theme Mode Switcher */}
          <button
            onClick={toggleThemeMode}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border flex items-center gap-1.5 ${
              themeMode === 'light'
                ? 'bg-slate-200 text-slate-800 border-slate-300 hover:bg-slate-300'
                : themeMode === 'navy-light'
                ? 'bg-[#070b18] text-emerald-400 border-emerald-500/40 hover:bg-emerald-950/60'
                : 'bg-slate-900 text-emerald-400 border-slate-800 hover:border-emerald-500/40'
            }`}
            title={`Current Theme: ${
              themeMode === 'navy-light'
                ? 'Midnight Navy Grid + White Body'
                : themeMode === 'dark'
                ? 'Full Dark Blueprint Grid'
                : 'Full Light Mode'
            }. Click to change.`}
          >
            {themeMode === 'navy-light' && <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
            {themeMode === 'dark' && <Moon className="w-3.5 h-3.5 text-emerald-400" />}
            {themeMode === 'light' && <Sun className="w-3.5 h-3.5 text-amber-500" />}
            <span className="capitalize">{themeMode === 'navy-light' ? 'Navy Grid' : themeMode}</span>
          </button>

          <button
            onClick={onOpenAdminModal}
            className={`p-2 rounded-xl border transition-all ${
              themeMode === 'light'
                ? 'text-slate-600 hover:text-emerald-600 border-slate-200'
                : 'text-slate-400 hover:text-emerald-400 border-transparent hover:border-emerald-500/30'
            }`}
            title="Admin Portal"
          >
            <Shield className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              setActivePage('internship');
              onOpenInternshipModal();
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              themeMode === 'light'
                ? 'text-emerald-700 bg-emerald-50 border-emerald-300 hover:bg-emerald-100'
                : 'text-emerald-300 bg-emerald-950/60 border-emerald-500/30 hover:bg-emerald-900/50'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span>Join Internship</span>
          </button>

          <button
            onClick={onOpenContactModal}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 via-emerald-500 to-mint-400 hover:from-emerald-300 hover:to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleThemeMode}
            className="p-2 rounded-lg text-emerald-400 border border-slate-800"
          >
            {themeMode === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenAdminModal}
            className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 border border-slate-800"
            title="Admin Portal"
          >
            <Shield className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 p-6 shadow-2xl border-b animate-fadeIn ${
          themeMode === 'light'
            ? 'bg-white/95 backdrop-blur-2xl border-slate-200 text-slate-900'
            : 'bg-[#06090f]/95 backdrop-blur-2xl border-emerald-500/20 text-slate-100'
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all ${
                  activePage === link.id
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActivePage('internship');
                  onOpenInternshipModal();
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for Internship</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
