import { connectToDatabase } from './_db';
import { sendInternshipApplicationEmails } from './_email';

export async function handleInternshipApplication(reqData: any) {
  const {
    fullName,
    email,
    phone,
    college,
    degree = '',
    department = '',
    academicYear = '',
    internshipTrack,
    skills = '',
    existingSkills = '',
    github = '',
    githubUrl = '',
    portfolio = '',
    portfolioUrl = '',
    motivation = '',
    whyJoin = '',
    resumeUrl = '',
    website_hp = ''
  } = reqData;

  // 1. Anti-spam honeypot verification
  if (website_hp && website_hp.trim() !== '') {
    return { status: 400, body: { success: false, message: 'Spam submission detected.' } };
  }

  // 2. Server-side validation
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return { status: 400, body: { success: false, message: 'Please provide a valid full name.' } };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { status: 400, body: { success: false, message: 'Please provide a valid email address.' } };
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
    return { status: 400, body: { success: false, message: 'Please provide a valid contact number.' } };
  }

  if (!college || typeof college !== 'string' || college.trim().length < 2) {
    return { status: 400, body: { success: false, message: 'Please provide your college/institution name.' } };
  }

  if (!internshipTrack || typeof internshipTrack !== 'string') {
    return { status: 400, body: { success: false, message: 'Please select an internship track.' } };
  }

  const finalMotivation = (motivation || whyJoin || '').trim();
  const finalSkills = (skills || existingSkills || '').trim();
  const finalGithub = (github || githubUrl || '').trim();
  const finalPortfolio = (portfolio || portfolioUrl || '').trim();

  // 3. Generate Unique Application ID (Format: KN-INT-YYYY-XXXXXX)
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const applicationId = `KN-INT-${year}-${randomSuffix}`;
  const now = new Date().toISOString();

  const record = {
    id: `app-${Date.now()}`,
    applicationId,
    referenceId: applicationId,
    fullName: fullName.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    college: college.trim(),
    degree: degree.trim(),
    department: department.trim(),
    academicYear: academicYear.trim(),
    internshipTrack: internshipTrack.trim(),
    skills: finalSkills,
    existingSkills: finalSkills,
    github: finalGithub,
    githubUrl: finalGithub,
    portfolio: finalPortfolio,
    portfolioUrl: finalPortfolio,
    motivation: finalMotivation,
    whyJoin: finalMotivation,
    resumeUrl: (resumeUrl || '').trim(),
    status: 'New',
    createdAt: now,
    updatedAt: now
  };

  // 4. Save to MongoDB Atlas in "kryptonode.internshipApplications"
  try {
    const { db } = await connectToDatabase();
    if (db) {
      await db.collection('internshipApplications').insertOne(record);
      console.log(`[DB] Saved internship application ${applicationId} to kryptonode.internshipApplications.`);
    } else {
      console.warn(`[DB] MongoDB connection unavailable. Storing in local state.`);
    }
  } catch (err) {
    console.error('[DB] Failed to save internship application to MongoDB:', err);
  }

  // 5. Trigger email notification
  sendInternshipApplicationEmails(record).catch((err) => {
    console.error('[EMAIL] Failed sending internship application email:', err);
  });

  return {
    status: 200,
    body: {
      success: true,
      message: 'Internship application submitted successfully.',
      applicationId,
      referenceId: applicationId,
      data: record
    }
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const result = await handleInternshipApplication(req.body);
  return res.status(result.status).json(result.body);
}
