import React, { useState, useEffect } from 'react';
import { 
  X, Shield, Lock, LayoutDashboard, Users, FileText, Briefcase, 
  Settings, CheckCircle2, Clock, Trash2, Edit3, Plus, Search, Filter, RefreshCw, Phone, Mail, ExternalLink
} from 'lucide-react';

import { 
  getLeads, updateLeadStatus, 
  getApplicants, updateApplicantStatus, 
  getProjects, saveProject, deleteProject, 
  getTeam, saveTeamMember, deleteTeamMember, 
  getSiteContent, saveSiteContent,
  isAdminAuthenticated, setAdminSession 
} from '../services/storageService';

export default function AdminDashboardModal({ onClose }) {
  const [authed, setAuthed] = useState(isAdminAuthenticated());
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  
  const [activeTab, setActiveTab] = useState('analytics');

  // Data states
  const [leads, setLeads] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);
  const [cmsContent, setCmsContent] = useState({});

  // Filter states
  const [leadFilter, setLeadFilter] = useState('All');
  const [applicantFilter, setApplicantFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Editing states
  const [editingProject, setEditingProject] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [activeLeadNotes, setActiveLeadNotes] = useState({});

  const loadData = () => {
    setLeads(getLeads());
    setApplicants(getApplicants());
    setProjects(getProjects());
    setTeam(getTeam());
    setCmsContent(getSiteContent());
  };

  useEffect(() => {
    if (authed) {
      loadData();
    }
  }, [authed]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'kryptonode2026' || password === 'admin') {
      setAdminSession(true);
      setAuthed(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Password. Use demo password: kryptonode2026');
    }
  };

  const handleLogout = () => {
    setAdminSession(false);
    setAuthed(false);
  };

  // Lead status update handler
  const handleUpdateLeadStatus = (id, newStatus) => {
    updateLeadStatus(id, newStatus, activeLeadNotes[id] || null);
    setLeads(getLeads());
  };

  // Applicant status update handler
  const handleUpdateApplicantStatus = (id, newStatus) => {
    updateApplicantStatus(id, newStatus);
    setApplicants(getApplicants());
  };

  // Project save handler
  const handleSaveProjectForm = (e) => {
    e.preventDefault();
    saveProject(editingProject);
    setEditingProject(null);
    setProjects(getProjects());
  };

  // Team member save handler
  const handleSaveTeamForm = (e) => {
    e.preventDefault();
    saveTeamMember(editingMember);
    setEditingMember(null);
    setTeam(getTeam());
  };

  // CMS Content save handler
  const handleSaveCms = (e) => {
    e.preventDefault();
    saveSiteContent(cmsContent);
    alert('Site content settings updated successfully!');
  };

  // LOGIN SCREEN
  if (!authed) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
        <div className="relative w-full max-w-md bg-[#090d14] rounded-3xl border border-emerald-500/30 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] space-y-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-950 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white">
              Admin Portal Login
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Kryptonode Tech Solutions Pvt Ltd
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs text-center font-medium">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Admin Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm font-mono"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute right-3.5 top-3.5" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Authenticate & Enter Portal
            </button>

            <button
              type="button"
              onClick={() => {
                setPassword('kryptonode2026');
                setAdminSession(true);
                setAuthed(true);
              }}
              className="w-full py-2 text-xs font-mono text-emerald-400 hover:underline text-center"
            >
              [One-Click Demo Access: Fill Credentials]
            </button>
          </form>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  const filteredLeads = leads.filter(l => {
    const matchesFilter = leadFilter === 'All' || l.status === leadFilter;
    const matchesSearch = !searchTerm || l.name.toLowerCase().includes(searchTerm.toLowerCase()) || l.company?.toLowerCase().includes(searchTerm.toLowerCase()) || l.refId?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filteredApplicants = applicants.filter(a => {
    const matchesFilter = applicantFilter === 'All' || a.track === applicantFilter || a.status === applicantFilter;
    const matchesSearch = !searchTerm || a.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || a.college.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-[#080c14] rounded-3xl border border-emerald-500/30 shadow-[0_25px_70px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col h-[92vh]">
        
        {/* Admin Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#05080f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-heading font-bold text-white">
                  Kryptonode Control Center
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  LIVE SECURE
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Leads, Internship Applicants, Project CMS & Content System
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-800"
            >
              Sign Out
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-1 px-5 pt-3 border-b border-slate-800 bg-[#06090f]/70 overflow-x-auto">
          {[
            { id: 'analytics', label: 'Analytics Dashboard', icon: LayoutDashboard },
            { id: 'leads', label: `Lead Pipeline (${leads.length})`, icon: FileText },
            { id: 'applicants', label: `Intern Applicants (${applicants.length})`, icon: Users },
            { id: 'projects', label: `Projects CMS (${projects.length})`, icon: Briefcase },
            { id: 'team', label: `Team Manager (${team.length})`, icon: Users },
            { id: 'cms', label: 'Site Content CMS', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-b-2 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'border-emerald-400 text-emerald-300 bg-emerald-950/40'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-900/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-emerald-400" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard Main Content Panel */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-200">
          
          {/* TAB 1: ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">Total Enquiries</div>
                  <div className="text-3xl font-bold font-heading text-emerald-400 mt-2">{leads.length}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{leads.filter(l => l.status === 'New').length} New Unprocessed</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">Active Discussions</div>
                  <div className="text-3xl font-bold font-heading text-emerald-400 mt-2">
                    {leads.filter(l => l.status === 'Discussion' || l.status === 'Proposal Sent').length}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">In Proposal & Scoping Phase</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">Internship Applicants</div>
                  <div className="text-3xl font-bold font-heading text-emerald-400 mt-2">{applicants.length}</div>
                  <div className="text-[11px] text-slate-400 mt-1">{applicants.filter(a => a.status === 'New').length} Pending Review</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase">Published Products</div>
                  <div className="text-3xl font-bold font-heading text-emerald-400 mt-2">{projects.length}</div>
                  <div className="text-[11px] text-slate-400 mt-1">Doctor AI, EWOS, SkillTracker</div>
                </div>
              </div>

              {/* Quick Summary Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="font-heading font-bold text-white text-sm flex items-center justify-between">
                    <span>Recent Client Enquiries</span>
                    <button onClick={() => setActiveTab('leads')} className="text-xs text-emerald-400 hover:underline">View Pipeline →</button>
                  </h3>
                  <div className="space-y-2">
                    {leads.slice(0, 3).map((l) => (
                      <div key={l.id} className="p-3 rounded-xl bg-black/40 border border-slate-800 text-xs flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white flex items-center gap-2">
                            <span>{l.name}</span>
                            <span className="font-mono text-[10px] text-emerald-400">{l.refId || 'KN-LEAD'}</span>
                          </div>
                          <div className="text-slate-400 font-mono text-[11px]">{l.projectType} • {l.budgetRange}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          l.status === 'New' ? 'bg-amber-950 text-amber-400 border border-amber-500/30' : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                        }`}>
                          {l.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="font-heading font-bold text-white text-sm flex items-center justify-between">
                    <span>Recent Internship Applicants</span>
                    <button onClick={() => setActiveTab('applicants')} className="text-xs text-emerald-400 hover:underline">View Applicants →</button>
                  </h3>
                  <div className="space-y-2">
                    {applicants.slice(0, 3).map((a) => (
                      <div key={a.id} className="p-3 rounded-xl bg-black/40 border border-slate-800 text-xs flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-white">{a.fullName}</div>
                          <div className="text-slate-400 font-mono text-[11px]">{a.track} • {a.college}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-emerald-300">
                          {a.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LEADS & ENQUIRIES */}
          {activeTab === 'leads' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search by name, company, or KN-RefId..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-xs text-slate-400 font-mono">Status:</span>
                  {['All', 'New', 'Contacted', 'Discussion', 'Proposal Sent', 'Won', 'Lost'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setLeadFilter(st)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                        leadFilter === st
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredLeads.map((lead) => (
                  <div key={lead.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-extrabold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                            {lead.refId || 'KN-LEAD'}
                          </span>
                          <h4 className="font-bold text-white text-base">{lead.name}</h4>
                          {lead.company && <span className="text-xs text-emerald-400">({lead.company})</span>}
                        </div>
                        <div className="text-xs font-mono text-slate-400 mt-1">
                          📧 {lead.email} • 📞 {lead.phone || 'No Phone'} • Date: {lead.date} • Source: {lead.sourcePage || 'Web'}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {lead.phone && (
                          <a
                            href={`tel:${lead.phone}`}
                            className="p-2 rounded-xl bg-slate-950 text-slate-300 hover:text-emerald-400 border border-slate-800 text-xs font-mono"
                            title="Call Lead"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                        )}
                        <a
                          href={`mailto:${lead.email}`}
                          className="p-2 rounded-xl bg-slate-950 text-slate-300 hover:text-emerald-400 border border-slate-800 text-xs font-mono"
                          title="Email Lead"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>

                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                          className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-emerald-300 font-semibold focus:outline-none"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Discussion">Discussion</option>
                          <option value="Proposal Sent">Proposal Sent</option>
                          <option value="Won">Won</option>
                          <option value="Lost">Lost</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-black/50 border border-slate-800 space-y-1.5">
                        <strong className="text-emerald-300 font-mono text-[11px] uppercase block">
                          Scope & Requirements ({lead.projectType})
                        </strong>
                        <div><strong>Budget:</strong> {lead.budgetRange || 'N/A'} • <strong>Timeline:</strong> {lead.timeline || 'Flexible'}</div>
                        {lead.projectName && <div><strong>Project Name:</strong> {lead.projectName}</div>}
                        <p className="text-slate-300 leading-relaxed pt-1">{lead.message || lead.idea}</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-black/50 border border-slate-800 space-y-2">
                        <strong className="text-slate-400 font-mono text-[11px] uppercase block">
                          Internal Admin Notes
                        </strong>
                        <textarea
                          rows={2}
                          placeholder="Add team internal notes..."
                          value={activeLeadNotes[lead.id] !== undefined ? activeLeadNotes[lead.id] : (lead.notes || '')}
                          onChange={(e) => setActiveLeadNotes({ ...activeLeadNotes, [lead.id]: e.target.value })}
                          className="w-full p-2 rounded-lg bg-slate-900 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                        />
                        <button
                          onClick={() => handleUpdateLeadStatus(lead.id, lead.status)}
                          className="px-3 py-1 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-[11px] font-mono text-emerald-300 border border-emerald-500/30"
                        >
                          Save Notes
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INTERNSHIP APPLICANTS */}
          {activeTab === 'applicants' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Search applicant name or college..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-xs text-slate-400 font-mono">Status:</span>
                  {['All', 'New', 'Reviewed', 'Shortlisted', 'Accepted', 'Rejected', 'Completed'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setApplicantFilter(st)}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                        applicantFilter === st
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {filteredApplicants.map((app) => (
                  <div key={app.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-emerald-400 font-bold">{app.refId || 'KN-APP'}</span>
                          <h4 className="font-bold text-white text-sm">{app.fullName}</h4>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                            {app.track}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-slate-400 mt-0.5">
                          {app.email} • {app.phone} • {app.college} ({app.degree}, {app.year})
                        </div>
                      </div>

                      <select
                        value={app.status}
                        onChange={(e) => handleUpdateApplicantStatus(app.id, e.target.value)}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-emerald-300 font-semibold focus:outline-none"
                      >
                        <option value="New">New</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-black/40 border border-slate-800">
                        <strong className="text-slate-400 block font-mono text-[10px] uppercase mb-1">Declared Skills & Portfolio</strong>
                        <div>{app.skills || 'Not specified'}</div>
                        {app.github && (
                          <a href={app.github} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline block mt-1 font-mono">
                            {app.github}
                          </a>
                        )}
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-slate-800">
                        <strong className="text-slate-400 block font-mono text-[10px] uppercase mb-1">Resume & Motivation</strong>
                        <div className="text-slate-300 line-clamp-2">{app.reason || 'No statement submitted.'}</div>
                        <div className="mt-1 text-[11px] text-emerald-400 font-mono">
                          Attached: {app.resumeName || 'Simulated_Resume.pdf'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS CMS */}
          {activeTab === 'projects' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-white text-sm">Portfolio Project Management</h3>
                <button
                  onClick={() => setEditingProject({
                    id: '',
                    name: '',
                    tagline: '',
                    category: 'Web Applications',
                    problem: '',
                    solution: '',
                    features: [],
                    techStack: [],
                    github: '',
                    liveDemo: '',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
                    badge: 'New Project',
                    status: 'Production Ready',
                    featured: false,
                    caseStudy: ''
                  })}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Project</span>
                </button>
              </div>

              {editingProject && (
                <form onSubmit={handleSaveProjectForm} className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-4">
                  <h4 className="font-bold text-white text-sm border-b border-slate-800 pb-2">
                    {editingProject.id ? 'Edit Project' : 'Create New Project'}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1">Project Name</label>
                      <input
                        type="text"
                        required
                        value={editingProject.name}
                        onChange={(e) => setEditingProject({...editingProject, name: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Tagline</label>
                      <input
                        type="text"
                        required
                        value={editingProject.tagline}
                        onChange={(e) => setEditingProject({...editingProject, tagline: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1">Category</label>
                      <select
                        value={editingProject.category}
                        onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      >
                        <option value="AI Applications">AI Applications</option>
                        <option value="Business Software">Business Software</option>
                        <option value="Web Applications">Web Applications</option>
                        <option value="Mobile Apps">Mobile Apps</option>
                        <option value="Startup MVP">Startup MVP</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={editingProject.image}
                        onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="text-xs space-y-3">
                    <div>
                      <label className="block text-slate-300 mb-1">Problem Statement</label>
                      <textarea
                        rows={2}
                        value={editingProject.problem}
                        onChange={(e) => setEditingProject({...editingProject, problem: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Solution Description</label>
                      <textarea
                        rows={2}
                        value={editingProject.solution}
                        onChange={(e) => setEditingProject({...editingProject, solution: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs">
                      Save Project
                    </button>
                    <button type="button" onClick={() => setEditingProject(null)} className="px-4 py-2 text-xs text-slate-400">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={proj.image} alt={proj.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <div className="font-bold text-white text-sm">{proj.name}</div>
                        <div className="text-xs text-emerald-400 font-mono">{proj.category} • {proj.tagline}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingProject(proj)}
                        className="p-2 rounded-xl bg-slate-950 text-slate-300 hover:text-emerald-400 border border-slate-800"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete project ${proj.name}?`)) {
                            deleteProject(proj.id);
                            setProjects(getProjects());
                          }
                        }}
                        className="p-2 rounded-xl bg-rose-950/60 text-rose-400 hover:bg-rose-900 border border-rose-500/30"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: TEAM MANAGER */}
          {activeTab === 'team' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-heading font-bold text-white text-sm">Founding Team Members & Phone Contact Controls</h3>
              
              {editingMember && (
                <form onSubmit={handleSaveTeamForm} className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-3 text-xs">
                  <h4 className="font-bold text-white text-sm">Edit Team Member</h4>
                  <div>
                    <label className="block text-slate-300 mb-1">Member Name</label>
                    <input
                      type="text"
                      required
                      value={editingMember.name}
                      onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-slate-300 mb-1">Role / Focus</label>
                      <input
                        type="text"
                        required
                        value={editingMember.role}
                        onChange={(e) => setEditingMember({...editingMember, role: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Phone Number</label>
                      <input
                        type="text"
                        required
                        value={editingMember.phone || ''}
                        onChange={(e) => setEditingMember({...editingMember, phone: e.target.value})}
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-emerald-300 font-mono"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-300 mb-1">Bio</label>
                    <textarea
                      rows={2}
                      value={editingMember.bio}
                      onChange={(e) => setEditingMember({...editingMember, bio: e.target.value})}
                      className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white"
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold">
                      Save Changes
                    </button>
                    <button type="button" onClick={() => setEditingMember(null)} className="text-slate-400">
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {team.map((m) => (
                  <div key={m.id} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                    <div className="flex items-center gap-3">
                      <img src={m.image} alt={m.name} className="w-12 h-12 rounded-full object-cover border border-emerald-500/40" />
                      <div>
                        <h4 className="font-bold text-white text-sm">{m.name}</h4>
                        <div className="text-xs text-emerald-400 font-mono">{m.role}</div>
                        <div className="text-xs text-slate-300 font-mono">📞 {m.phone}</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">{m.bio}</p>
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => setEditingMember(m)}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 text-xs font-semibold text-emerald-300 border border-slate-700"
                      >
                        Edit Member Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: SITE CONTENT CMS */}
          {activeTab === 'cms' && (
            <form onSubmit={handleSaveCms} className="space-y-5 animate-fadeIn max-w-2xl text-xs">
              <h3 className="font-heading font-bold text-white text-base">Site CMS Copy Settings</h3>
              
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company Hero Headline</label>
                <input
                  type="text"
                  value={cmsContent.heroHeadline || ''}
                  onChange={(e) => setCmsContent({...cmsContent, heroHeadline: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Hero Subtitle</label>
                <textarea
                  rows={3}
                  value={cmsContent.heroSubtitle || ''}
                  onChange={(e) => setCmsContent({...cmsContent, heroSubtitle: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Primary Official Email</label>
                <input
                  type="email"
                  value={cmsContent.contactEmail || 'kryptonodetechsolutions@gmail.com'}
                  onChange={(e) => setCmsContent({...cmsContent, contactEmail: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-emerald-300 font-mono"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
                >
                  Save CMS Changes
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
