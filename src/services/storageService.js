import { INITIAL_PROJECTS, INITIAL_TEAM, INITIAL_LEADS, INITIAL_APPLICANTS } from '../data/mockData';

const KEYS = {
  PROJECTS: 'kryptonode_projects_v2',
  TEAM: 'kryptonode_team_v2',
  LEADS: 'kryptonode_leads_v2',
  APPLICANTS: 'kryptonode_applicants_v2',
  SITE_CONTENT: 'kryptonode_site_content_v2',
  ADMIN_AUTH: 'kryptonode_admin_session_v2'
};

export const initStorage = () => {
  if (!localStorage.getItem(KEYS.PROJECTS)) {
    localStorage.setItem(KEYS.PROJECTS, JSON.stringify(INITIAL_PROJECTS));
  }
  if (!localStorage.getItem(KEYS.TEAM)) {
    localStorage.setItem(KEYS.TEAM, JSON.stringify(INITIAL_TEAM));
  }
  if (!localStorage.getItem(KEYS.LEADS)) {
    localStorage.setItem(KEYS.LEADS, JSON.stringify(INITIAL_LEADS));
  }
  if (!localStorage.getItem(KEYS.APPLICANTS)) {
    localStorage.setItem(KEYS.APPLICANTS, JSON.stringify(INITIAL_APPLICANTS));
  }
  if (!localStorage.getItem(KEYS.SITE_CONTENT)) {
    localStorage.setItem(KEYS.SITE_CONTENT, JSON.stringify({
      heroHeadline: "We Build Ideas Into Real Products.",
      heroSubtitle: "Kryptonode Tech Solutions helps startups, businesses and creators transform ideas into modern websites, mobile apps, AI-powered products and scalable digital solutions.",
      contactEmail: "kryptonodetechsolutions@gmail.com",
      companyName: "Kryptonode Tech Solutions Pvt Ltd",
      mission: "Make technology practical, accessible and impactful.",
      vision: "Build products that solve real-world problems and help ideas become scalable businesses."
    }));
  }
};

// Generate Reference ID (KN-XXXXXX)
export const generateRefId = () => {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `KN-${randomDigits}`;
};

// Projects API
export const getProjects = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(KEYS.PROJECTS)) || INITIAL_PROJECTS;
  } catch (e) {
    return INITIAL_PROJECTS;
  }
};

export const saveProject = (project) => {
  const list = getProjects();
  const index = list.findIndex(p => p.id === project.id);
  let updated;
  if (index >= 0) {
    updated = list.map(p => p.id === project.id ? { ...p, ...project } : p);
  } else {
    const newProject = {
      ...project,
      id: project.id || `proj-${Date.now()}`,
      published: true,
      featured: project.featured || false
    };
    updated = [newProject, ...list];
  }
  localStorage.setItem(KEYS.PROJECTS, JSON.stringify(updated));
  return updated;
};

export const deleteProject = (id) => {
  const updated = getProjects().filter(p => p.id !== id);
  localStorage.setItem(KEYS.PROJECTS, JSON.stringify(updated));
  return updated;
};

// Team API
export const getTeam = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(KEYS.TEAM)) || INITIAL_TEAM;
  } catch (e) {
    return INITIAL_TEAM;
  }
};

export const saveTeamMember = (member) => {
  const list = getTeam();
  const index = list.findIndex(m => m.id === member.id);
  let updated;
  if (index >= 0) {
    updated = list.map(m => m.id === member.id ? { ...m, ...member } : m);
  } else {
    const newMember = {
      ...member,
      id: member.id || `team-${Date.now()}`,
      published: true
    };
    updated = [...list, newMember];
  }
  localStorage.setItem(KEYS.TEAM, JSON.stringify(updated));
  return updated;
};

export const deleteTeamMember = (id) => {
  const updated = getTeam().filter(m => m.id !== id);
  localStorage.setItem(KEYS.TEAM, JSON.stringify(updated));
  return updated;
};

// Leads API
export const getLeads = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(KEYS.LEADS)) || INITIAL_LEADS;
  } catch (e) {
    return INITIAL_LEADS;
  }
};

export const addLead = (leadData) => {
  const list = getLeads();
  const refId = generateRefId();
  const newLead = {
    ...leadData,
    id: `lead-${Date.now()}`,
    refId,
    status: 'New',
    sourcePage: leadData.sourcePage || 'General Form',
    date: new Date().toISOString().split('T')[0],
    notes: leadData.notes || ''
  };
  const updated = [newLead, ...list];
  localStorage.setItem(KEYS.LEADS, JSON.stringify(updated));
  return newLead;
};

export const updateLeadStatus = (id, status, notes = null) => {
  const list = getLeads();
  const updated = list.map(l => {
    if (l.id === id) {
      return {
        ...l,
        status,
        ...(notes !== null ? { notes } : {})
      };
    }
    return l;
  });
  localStorage.setItem(KEYS.LEADS, JSON.stringify(updated));
  return updated;
};

// Applicants API
export const getApplicants = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(KEYS.APPLICANTS)) || INITIAL_APPLICANTS;
  } catch (e) {
    return INITIAL_APPLICANTS;
  }
};

export const addApplicant = (applicantData) => {
  const list = getApplicants();
  const refId = generateRefId();
  const newApp = {
    ...applicantData,
    id: `app-${Date.now()}`,
    refId,
    status: 'New',
    date: new Date().toISOString().split('T')[0],
    notes: ''
  };
  const updated = [newApp, ...list];
  localStorage.setItem(KEYS.APPLICANTS, JSON.stringify(updated));
  return newApp;
};

export const updateApplicantStatus = (id, status, notes = null) => {
  const list = getApplicants();
  const updated = list.map(a => {
    if (a.id === id) {
      return {
        ...a,
        status,
        ...(notes !== null ? { notes } : {})
      };
    }
    return a;
  });
  localStorage.setItem(KEYS.APPLICANTS, JSON.stringify(updated));
  return updated;
};

// Site Content CMS API
export const getSiteContent = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(KEYS.SITE_CONTENT)) || {};
  } catch (e) {
    return {};
  }
};

export const saveSiteContent = (content) => {
  const current = getSiteContent();
  const updated = { ...current, ...content };
  localStorage.setItem(KEYS.SITE_CONTENT, JSON.stringify(updated));
  return updated;
};

// Admin Session API
export const isAdminAuthenticated = () => {
  return localStorage.getItem(KEYS.ADMIN_AUTH) === 'true';
};

export const setAdminSession = (status) => {
  if (status) {
    localStorage.setItem(KEYS.ADMIN_AUTH, 'true');
  } else {
    localStorage.removeItem(KEYS.ADMIN_AUTH);
  }
};
