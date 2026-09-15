import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import InternshipPage from './pages/InternshipPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import LegalPages from './pages/LegalPages';

// Modals & Notifications
import ProjectModal from './components/ProjectModal';
import InternshipFormModal from './components/InternshipFormModal';
import ContactModal from './components/ContactModal';
import GeneralEnquiryModal from './components/GeneralEnquiryModal';
import AdminDashboardModal from './components/AdminDashboardModal';
import ToastNotification from './components/ToastNotification';

// Storage service
import { initStorage, getProjects, getTeam } from './services/storageService';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Theme mode state ('dark' | 'navy-light' | 'light')
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('kryptonode_theme_mode') || 'dark';
  });

  // Modals state
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [generalEnquiryOpen, setGeneralEnquiryOpen] = useState(false);
  const [internshipModalOpen, setInternshipModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [preselectedTrack, setPreselectedTrack] = useState(null);
  const [preselectedCategory, setPreselectedCategory] = useState('Startup MVP');

  // Toast state
  const [toastMessage, setToastMessage] = useState(null);

  // Storage data
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    initStorage();
    setProjects(getProjects());
    setTeam(getTeam());
  }, []);

  // Sync theme mode class on root document
  useEffect(() => {
    document.documentElement.classList.remove('light-mode', 'theme-navy-grid-light');
    if (themeMode === 'light') {
      document.documentElement.classList.add('light-mode');
    } else if (themeMode === 'navy-light') {
      document.documentElement.classList.add('theme-navy-grid-light');
    }
    localStorage.setItem('kryptonode_theme_mode', themeMode);
  }, [themeMode]);

  const toggleThemeMode = () => {
    setThemeMode((prev) => {
      if (prev === 'navy-light') return 'dark';
      if (prev === 'dark') return 'light';
      return 'navy-light';
    });
  };

  const handleOpenEnquiryWithCategory = (category = 'Startup MVP') => {
    setPreselectedCategory(category);
    setContactModalOpen(true);
  };

  const handleOpenInternshipWithTrack = (track) => {
    setPreselectedTrack(track);
    setInternshipModalOpen(true);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      themeMode === 'light'
        ? 'bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white'
        : themeMode === 'navy-light'
        ? 'bg-white text-slate-900 selection:bg-emerald-500 selection:text-white'
        : 'bg-[#06090f] text-slate-100 selection:bg-emerald-500 selection:text-white bg-grid-pattern'
    }`}>
      
      {/* Fixed Top Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenContactModal={() => handleOpenEnquiryWithCategory('Startup MVP')}
        onOpenInternshipModal={() => setInternshipModalOpen(true)}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        themeMode={themeMode}
        toggleThemeMode={toggleThemeMode}
      />

      {/* Main Page Render Body */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            projects={projects}
            team={team}
            onOpenEnquiryWithCategory={handleOpenEnquiryWithCategory}
            onOpenInternshipModal={() => setInternshipModalOpen(true)}
            onOpenProjectModal={(proj) => setSelectedProjectModal(proj)}
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'about' && (
          <AboutPage onOpenContactModal={() => handleOpenEnquiryWithCategory('Startup MVP')} />
        )}

        {activePage === 'services' && (
          <ServicesPage onOpenContactModal={() => handleOpenEnquiryWithCategory('Startup MVP')} />
        )}

        {(activePage === 'projects' || activePage === 'web-dev' || activePage === 'app-dev' || activePage === 'ai-solutions') && (
          <ProjectsPage
            projects={projects}
            onOpenProjectModal={(proj) => setSelectedProjectModal(proj)}
          />
        )}

        {activePage === 'startup' && (
          <ServicesPage onOpenContactModal={() => handleOpenEnquiryWithCategory('Startup MVP')} />
        )}

        {activePage === 'internship' && (
          <InternshipPage onOpenFormWithTrack={handleOpenInternshipWithTrack} />
        )}

        {activePage === 'team' && (
          <TeamPage
            team={team}
            onOpenEnquiryWithCategory={handleOpenEnquiryWithCategory}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage onSuccess={showToast} team={team} />
        )}

        {['privacy', 'terms', 'internship-terms', 'refund-policy'].includes(activePage) && (
          <LegalPages type={activePage} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        onOpenEnquiryWithCategory={handleOpenEnquiryWithCategory}
      />

      {/* MODALS */}
      {selectedProjectModal && (
        <ProjectModal
          project={selectedProjectModal}
          onClose={() => setSelectedProjectModal(null)}
          onOpenEnquiryWithCategory={handleOpenEnquiryWithCategory}
        />
      )}

      {internshipModalOpen && (
        <InternshipFormModal
          preselectedTrack={preselectedTrack}
          onClose={() => {
            setInternshipModalOpen(false);
            setPreselectedTrack(null);
          }}
          onSuccess={showToast}
        />
      )}

      {contactModalOpen && (
        <ContactModal
          initialProjectType={preselectedCategory}
          onClose={() => setContactModalOpen(false)}
          onSuccess={showToast}
        />
      )}

      {generalEnquiryOpen && (
        <GeneralEnquiryModal
          onClose={() => setGeneralEnquiryOpen(false)}
          onSuccess={showToast}
        />
      )}

      {adminModalOpen && (
        <AdminDashboardModal
          onClose={() => setAdminModalOpen(false)}
        />
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <ToastNotification
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
