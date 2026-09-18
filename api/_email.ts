import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const companyEmail = process.env.COMPANY_EMAIL || 'kryptonodetechsolutions@gmail.com';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export interface ProjectEnquiryEmailPayload {
  referenceId: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  sourcePage?: string;
}

export async function sendProjectEnquiryEmails(payload: ProjectEnquiryEmailPayload) {
  if (!resend) {
    console.warn('[EMAIL] RESEND_API_KEY is not configured. Email notifications skipped.');
    return { companyEmailSent: false, clientEmailSent: false };
  }

  let companyEmailSent = false;
  let clientEmailSent = false;

  // 1. Send Alert Email to Kryptonode Team
  try {
    await resend.emails.send({
      from: 'Kryptonode Web Portal <onboarding@resend.dev>',
      to: [companyEmail],
      subject: `NEW PROJECT ENQUIRY — ${payload.name} (${payload.projectType})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8;">
          <div style="max-w: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e0e0e0;">
            <h2 style="color: #0b3c26; margin-top: 0;">NEW PROJECT ENQUIRY</h2>
            <p style="color: #666; font-size: 14px;"><strong>Reference ID:</strong> ${payload.referenceId}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 8px 0; color: #555;"><strong>Client Name:</strong></td><td style="padding: 8px 0; font-weight: bold;">${payload.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Phone / WhatsApp:</strong></td><td style="padding: 8px 0;"><a href="tel:${payload.phone}">${payload.phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Company Name:</strong></td><td style="padding: 8px 0;">${payload.company || 'N/A'}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Project Type:</strong></td><td style="padding: 8px 0; color: #0b3c26; font-weight: bold;">${payload.projectType}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Budget Range:</strong></td><td style="padding: 8px 0;">${payload.budget}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Timeline:</strong></td><td style="padding: 8px 0;">${payload.timeline}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
              <strong style="color: #0b3c26;">Project Description:</strong>
              <p style="margin: 10px 0 0 0; color: #333; line-height: 1.6;">${payload.description}</p>
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 25px; text-align: center;">Kryptonode Tech Solutions Pvt Ltd • Client Acquisition Portal</p>
          </div>
        </div>
      `
    });
    companyEmailSent = true;
  } catch (err) {
    console.error('[EMAIL] Failed to send company alert email via Resend:', err);
  }

  // 2. Send Receipt Confirmation Email to Client
  try {
    await resend.emails.send({
      from: 'Kryptonode Tech Solutions <onboarding@resend.dev>',
      to: [payload.email],
      subject: `Your Project Enquiry — Kryptonode Tech Solutions (${payload.referenceId})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8;">
          <div style="max-w: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e0e0e0;">
            <h2 style="color: #0b3c26; margin-top: 0;">Thanks for reaching out. 🚀</h2>
            <p style="color: #333; line-height: 1.6;">Hi <strong>${payload.name}</strong>,</p>
            <p style="color: #333; line-height: 1.6;">We've received your project enquiry for <strong>${payload.projectType}</strong> and our engineering team is currently reviewing your requirements.</p>
            <div style="margin: 20px 0; padding: 15px; background: #edf7f2; border-left: 4px solid #10b981; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px; color: #0b3c26;"><strong>Reference ID:</strong> ${payload.referenceId}</p>
            </div>
            <p style="color: #333; line-height: 1.6;">We will get back to you shortly via phone or email to discuss the next steps.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0;">Direct Contacts:</p>
            <p style="color: #666; font-size: 13px; margin: 4px 0 0 0;">• Email: <a href="mailto:${companyEmail}">${companyEmail}</a><br />• Phone: +91 8668109481 / +91 9361215922 / +91 9150185160</p>
            <p style="font-size: 12px; color: #888; margin-top: 25px; text-align: center;">Kryptonode Tech Solutions Pvt Ltd • "We Build Ideas Into Real Products."</p>
          </div>
        </div>
      `
    });
    clientEmailSent = true;
  } catch (err) {
    console.error('[EMAIL] Failed to send client confirmation email via Resend:', err);
  }

  return { companyEmailSent, clientEmailSent };
}

export interface InternshipApplicationEmailPayload {
  referenceId: string;
  fullName: string;
  email: string;
  phone: string;
  college: string;
  degree?: string;
  department?: string;
  academicYear?: string;
  internshipTrack: string;
  existingSkills?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  whyJoin: string;
  resumeUrl?: string;
}

export async function sendInternshipApplicationEmails(payload: InternshipApplicationEmailPayload) {
  if (!resend) {
    console.warn('[EMAIL] RESEND_API_KEY is not configured. Email notifications skipped.');
    return { companyEmailSent: false, clientEmailSent: false };
  }

  let companyEmailSent = false;
  let clientEmailSent = false;

  // 1. Send Alert Email to Kryptonode Team
  try {
    await resend.emails.send({
      from: 'Kryptonode Web Portal <onboarding@resend.dev>',
      to: [companyEmail],
      subject: `New Internship Application — Kryptonode Tech Solutions`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8;">
          <div style="max-w: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e0e0e0;">
            <h2 style="color: #0b3c26; margin-top: 0;">New Internship Application — Kryptonode Tech Solutions</h2>
            <p style="color: #666; font-size: 14px;"><strong>Application ID:</strong> ${payload.referenceId}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr><td style="padding: 6px 0; color: #555;"><strong>Student Name:</strong></td><td style="padding: 6px 0; font-weight: bold;">${payload.fullName}</td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 6px 0;"><a href="mailto:${payload.email}">${payload.email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>Phone:</strong></td><td style="padding: 6px 0;"><a href="tel:${payload.phone}">${payload.phone}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>College:</strong></td><td style="padding: 6px 0;">${payload.college}</td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>Degree & Dept:</strong></td><td style="padding: 6px 0;">${payload.degree || ''} (${payload.department || ''}) - ${payload.academicYear || ''}</td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>Internship Track:</strong></td><td style="padding: 6px 0; color: #0b3c26; font-weight: bold;">${payload.internshipTrack}</td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>Skills:</strong></td><td style="padding: 6px 0;">${payload.existingSkills || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>GitHub:</strong></td><td style="padding: 6px 0;">${payload.githubUrl ? `<a href="${payload.githubUrl}">${payload.githubUrl}</a>` : 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #555;"><strong>Resume/Portfolio:</strong></td><td style="padding: 6px 0;">${payload.resumeUrl || payload.portfolioUrl ? `<a href="${payload.resumeUrl || payload.portfolioUrl}">${payload.resumeUrl || payload.portfolioUrl}</a>` : 'N/A'}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #edf7f2; border-radius: 8px; border: 1px solid #ccebdc;">
              <strong style="color: #0b3c26;">Student Motivation:</strong>
              <p style="margin: 8px 0 0 0; color: #333; line-height: 1.5;">${payload.whyJoin}</p>
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 25px; text-align: center;">Kryptonode Tech Solutions Pvt Ltd • Online Internship Portal</p>
          </div>
        </div>
      `
    });
    companyEmailSent = true;
  } catch (err) {
    console.error('[EMAIL] Failed to send internship company alert email via Resend:', err);
  }

  // 2. Send Receipt Confirmation Email to Student
  try {
    await resend.emails.send({
      from: 'Kryptonode Tech Solutions <onboarding@resend.dev>',
      to: [payload.email],
      subject: `Application Received — Kryptonode Online Internship (${payload.referenceId})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f6f8;">
          <div style="max-w: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e0e0e0;">
            <h2 style="color: #0b3c26; margin-top: 0;">Application Submitted Successfully! 🚀</h2>
            <p style="color: #333; line-height: 1.6;">Hi <strong>${payload.fullName}</strong>,</p>
            <p style="color: #333; line-height: 1.6;">Thank you for applying to the <strong>Kryptonode Online Internship Program</strong> for the <strong>${payload.internshipTrack}</strong> track.</p>
            <div style="margin: 20px 0; padding: 15px; background: #edf7f2; border-left: 4px solid #10b981; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px; color: #0b3c26;"><strong>Application ID:</strong> ${payload.referenceId}</p>
            </div>
            <p style="color: #333; line-height: 1.6;">Our team will review your profile and contact you regarding the onboarding schedule.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
            <p style="color: #666; font-size: 13px; margin: 0;">Contact Support:</p>
            <p style="color: #666; font-size: 13px; margin: 4px 0 0 0;">• Email: <a href="mailto:${companyEmail}">${companyEmail}</a><br />• Founders: Thamizhprabha (8668109481) | Danish Kumar (9361215922) | Sarveshkumar (9150185160)</p>
            <p style="font-size: 12px; color: #888; margin-top: 25px; text-align: center;">Kryptonode Tech Solutions Pvt Ltd • "Learn. Build. Experience."</p>
          </div>
        </div>
      `
    });
    clientEmailSent = true;
  } catch (err) {
    console.error('[EMAIL] Failed to send student confirmation email via Resend:', err);
  }

  return { companyEmailSent, clientEmailSent };
}
