import { connectToDatabase } from './_db';
import { sendProjectEnquiryEmails } from './_email';

export async function handleProjectEnquiry(reqData: any) {
  const {
    name,
    email,
    phone,
    company = '',
    companyName = '',
    projectType,
    budget = '',
    budgetRange = '',
    timeline = '',
    description,
    sourcePage = 'Website',
    website_hp = ''
  } = reqData;

  // 1. Anti-spam honeypot verification
  if (website_hp && website_hp.trim() !== '') {
    console.warn('[SECURITY] Honeypot triggered. Rejected submission.');
    return { status: 400, body: { success: false, message: 'Spam submission detected.' } };
  }

  // 2. Strict Server-Side Input Validation & Sanitization
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { status: 400, body: { success: false, message: 'Please provide a valid full name.' } };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { status: 400, body: { success: false, message: 'Please provide a valid email address.' } };
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
    return { status: 400, body: { success: false, message: 'Please provide a valid phone/WhatsApp number.' } };
  }

  if (!projectType || typeof projectType !== 'string') {
    return { status: 400, body: { success: false, message: 'Please select a project type.' } };
  }

  if (!description || typeof description !== 'string' || description.trim().length < 5) {
    return { status: 400, body: { success: false, message: 'Please provide a brief project description.' } };
  }

  // 3. Generate Unique Lead ID (Format: KN-YYYY-XXXXXX)
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const leadId = `KN-${year}-${randomSuffix}`;
  const now = new Date().toISOString();

  const finalCompany = (companyName || company).trim();
  const finalBudget = (budgetRange || budget || 'Need Guidance').trim();

  const enquiryRecord = {
    id: `lead-${Date.now()}`,
    leadId,
    referenceId: leadId, // Mapped for UI compatibility
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    companyName: finalCompany,
    company: finalCompany,
    projectType: projectType.trim(),
    budgetRange: finalBudget,
    budget: finalBudget,
    timeline: timeline ? timeline.trim() : 'Flexible',
    description: description.trim(),
    sourcePage: sourcePage.trim(),
    status: 'New',
    notes: `Initial Enquiry via ${sourcePage}`,
    createdAt: now,
    updatedAt: now
  };

  // 4. Save Record to MongoDB Atlas in "kryptonode.projectEnquiries"
  try {
    const { db } = await connectToDatabase();
    if (db) {
      await db.collection('projectEnquiries').insertOne(enquiryRecord);
      console.log(`[DB] Saved project enquiry ${leadId} to kryptonode.projectEnquiries.`);
    } else {
      console.warn(`[DB] MongoDB Atlas connection unavailable. Using fallback.`);
    }
  } catch (dbErr) {
    console.error('[DB] Failed to save project enquiry to MongoDB:', dbErr);
  }

  // 5. Send Email Notifications (Resend)
  const emailResults = await sendProjectEnquiryEmails({
    referenceId: leadId,
    name: enquiryRecord.name,
    email: enquiryRecord.email,
    phone: enquiryRecord.phone,
    company: enquiryRecord.companyName,
    projectType: enquiryRecord.projectType,
    budget: enquiryRecord.budgetRange,
    timeline: enquiryRecord.timeline,
    description: enquiryRecord.description,
    sourcePage: enquiryRecord.sourcePage
  });

  return {
    status: 200,
    body: {
      success: true,
      message: 'Your project enquiry has been received successfully.',
      leadId,
      referenceId: leadId,
      data: enquiryRecord,
      emailSent: emailResults.companyEmailSent
    }
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const result = await handleProjectEnquiry(req.body);
  return res.status(result.status).json(result.body);
}
