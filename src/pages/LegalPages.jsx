import React from 'react';
import { Shield, FileText, Lock, RefreshCw } from 'lucide-react';

export default function LegalPages({ type }) {
  // type: 'privacy' | 'terms' | 'internship-terms' | 'refund-policy'

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8 text-slate-300 text-xs sm:text-sm">
      
      {/* PRIVACY POLICY */}
      {type === 'privacy' && (
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Shield className="w-6 h-6 text-emerald-400" />
            <div>
              <h1 className="text-2xl font-heading font-bold text-white">Privacy Policy</h1>
              <p className="text-xs font-mono text-emerald-400">Kryptonode Tech Solutions Pvt Ltd</p>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              At <strong>Kryptonode Tech Solutions Pvt Ltd</strong>, accessible from kryptonodetechsolutions@gmail.com, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information collected and how it is used.
            </p>
            
            <h3 className="text-base font-bold text-white pt-2">1. Information We Collect</h3>
            <p>
              When you submit a project inquiry or an internship application form on our website, we may collect personal details such as your full name, email address, phone number, college/organization, and technical project requirements.
            </p>

            <h3 className="text-base font-bold text-white pt-2">2. How We Use Your Information</h3>
            <p>
              We use the collected information to respond to client project inquiries, schedule technical scoping calls, process internship applications, evaluate candidate code profiles, and improve our services.
            </p>

            <h3 className="text-base font-bold text-white pt-2">3. Data Security</h3>
            <p>
              Kryptonode Tech Solutions Pvt Ltd employs industry-standard encryption protocols and administrative safeguards to protect your personal information. We do not sell or rent client data to third-party advertisers.
            </p>
          </div>
        </div>
      )}

      {/* TERMS & CONDITIONS */}
      {type === 'terms' && (
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <FileText className="w-6 h-6 text-emerald-400" />
            <div>
              <h1 className="text-2xl font-heading font-bold text-white">Terms & Conditions</h1>
              <p className="text-xs font-mono text-emerald-400">Kryptonode Tech Solutions Pvt Ltd</p>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              Welcome to <strong>Kryptonode Tech Solutions Pvt Ltd</strong>. By accessing our website, engaging our services, or submitting project deliverables, you agree to comply with the following Terms and Conditions.
            </p>

            <h3 className="text-base font-bold text-white pt-2">1. Client Project Engagements</h3>
            <p>
              All software development projects, website builds, mobile app developments, and AI solutions are governed by mutually agreed project scope documents, milestone deadlines, and payment schedules.
            </p>

            <h3 className="text-base font-bold text-white pt-2">2. Intellectual Property Rights</h3>
            <p>
              Upon final milestone payment clearance, all client-custom source code, database structures, graphics, and custom algorithms developed by Kryptonode are fully transferred to the client.
            </p>

            <h3 className="text-base font-bold text-white pt-2">3. Accuracy of Content</h3>
            <p>
              We strive to keep technical project details and website pricing metrics accurate and up to date.
            </p>
          </div>
        </div>
      )}

      {/* INTERNSHIP TERMS */}
      {type === 'internship-terms' && (
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <Lock className="w-6 h-6 text-emerald-400" />
            <div>
              <h1 className="text-2xl font-heading font-bold text-white">Internship Terms & Guidelines</h1>
              <p className="text-xs font-mono text-emerald-400">Kryptonode Tech Solutions Pvt Ltd</p>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              The <strong>Kryptonode Online Technology Internship Program</strong> is designed as a practical learning, skill verification, and project-building experience for students and emerging software engineers.
            </p>

            <h3 className="text-base font-bold text-white pt-2">1. Educational & Practical Purpose</h3>
            <p>
              This program provides structured technical track mentorship, project milestone evaluations, and practical code development opportunities.
            </p>

            <h3 className="text-base font-bold text-white pt-2">2. Code Integrity & Originality</h3>
            <p>
              Interns must commit original code to assigned repositories and follow Git code review standards. Plagiarism or unauthorized copying of third-party proprietary code is strictly prohibited.
            </p>

            <h3 className="text-base font-bold text-white pt-2">3. Certification Issuance</h3>
            <p>
              An official Kryptonode Project Completion Certificate is granted only upon successful completion and verification of assigned project milestones.
            </p>
          </div>
        </div>
      )}

      {/* REFUND & CANCELLATION */}
      {type === 'refund-policy' && (
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
            <RefreshCw className="w-6 h-6 text-emerald-400" />
            <div>
              <h1 className="text-2xl font-heading font-bold text-white">Refund & Cancellation Policy</h1>
              <p className="text-xs font-mono text-emerald-400">Kryptonode Tech Solutions Pvt Ltd</p>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed">
            <p>
              <strong>Kryptonode Tech Solutions Pvt Ltd</strong> maintains transparent policies regarding service retainers and project milestone payments.
            </p>

            <h3 className="text-base font-bold text-white pt-2">1. Client Project Cancellations</h3>
            <p>
              If a client cancels a custom project prior to milestone development commencement, deposit retainers minus administrative scoping costs will be refunded within 7 working days.
            </p>

            <h3 className="text-base font-bold text-white pt-2">2. Delivered Milestone Work</h3>
            <p>
              Completed and approved milestone software deliverables are non-refundable once handed over to the client repository.
            </p>

            <h3 className="text-base font-bold text-white pt-2">3. Contacting Us</h3>
            <p>
              For refund or cancellation requests, email us directly at <strong>kryptonodetechsolutions@gmail.com</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
