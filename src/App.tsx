import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { StartupSection } from './components/StartupSection';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { TechnologySection } from './components/TechnologySection';
import { InternshipSection } from './components/InternshipSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';
import { InternshipModal } from './components/InternshipModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';

export function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | undefined>(undefined);

  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);
  const [selectedInternshipTrack, setSelectedInternshipTrack] = useState<string | undefined>(undefined);

  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);

  const handleOpenProjectEnquiry = (category?: string) => {
    setSelectedServiceCategory(category);
    setIsProjectModalOpen(true);
  };

  const handleOpenInternshipModal = (track?: string) => {
    setSelectedInternshipTrack(track);
    setIsInternshipModalOpen(true);
  };

  const handleOpenAdminPortal = () => {
    setIsAdminPortalOpen(true);
  };

  return (
    <div className="min-h-screen bg-forest-grid text-charcoal font-sans selection:bg-forest-900 selection:text-white">
      {/* Navbar */}
      <Navbar
        onOpenProjectEnquiry={handleOpenProjectEnquiry}
        onOpenInternshipModal={handleOpenInternshipModal}
        onOpenAdminPortal={handleOpenAdminPortal}
      />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenProjectEnquiry={handleOpenProjectEnquiry} />
        <About />
        <Services onOpenProjectEnquiry={handleOpenProjectEnquiry} />
        <StartupSection onOpenProjectEnquiry={handleOpenProjectEnquiry} />
        <Process />
        <Work onOpenProjectEnquiry={handleOpenProjectEnquiry} />
        <TechnologySection />
        <InternshipSection onOpenInternshipModal={handleOpenInternshipModal} />
        <TeamSection />
        <ContactSection initialServiceCategory={selectedServiceCategory} />
        <CTA
          onOpenProjectEnquiry={handleOpenProjectEnquiry}
          onOpenInternshipModal={handleOpenInternshipModal}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenProjectEnquiry={handleOpenProjectEnquiry}
        onOpenInternshipModal={handleOpenInternshipModal}
        onOpenAdminPortal={handleOpenAdminPortal}
      />

      {/* Modals & Portals */}
      <ProjectEnquiryModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        preselectedType={selectedServiceCategory}
      />

      <InternshipModal
        isOpen={isInternshipModalOpen}
        onClose={() => setIsInternshipModalOpen(false)}
        preselectedTrack={selectedInternshipTrack}
      />

      <AdminDashboardModal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
      />
    </div>
  );
}

export default App;
