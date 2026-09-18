import { connectToDatabase } from './_db';

export async function handleGeneralEnquiry(reqData: any) {
  const { name, email, phone = '', enquiryType = 'General', message, website_hp = '' } = reqData;

  // 1. Anti-spam honeypot
  if (website_hp && website_hp.trim() !== '') {
    return { status: 400, body: { success: false, message: 'Spam submission detected.' } };
  }

  // 2. Input validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { status: 400, body: { success: false, message: 'Please provide a valid name.' } };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return { status: 400, body: { success: false, message: 'Please provide a valid email address.' } };
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    return { status: 400, body: { success: false, message: 'Please provide your enquiry message.' } };
  }

  // 3. Generate Unique Enquiry ID (Format: KN-GEN-YYYY-XXXXXX)
  const year = new Date().getFullYear();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const enquiryId = `KN-GEN-${year}-${randomSuffix}`;
  const now = new Date().toISOString();

  const record = {
    id: `enquiry-${Date.now()}`,
    enquiryId,
    referenceId: enquiryId,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    enquiryType: enquiryType.trim(),
    message: message.trim(),
    status: 'New',
    createdAt: now,
    updatedAt: now
  };

  // 4. Save to MongoDB Atlas in "kryptonode.generalEnquiries"
  try {
    const { db } = await connectToDatabase();
    if (db) {
      await db.collection('generalEnquiries').insertOne(record);
      console.log(`[DB] Saved general enquiry ${enquiryId} to kryptonode.generalEnquiries.`);
    } else {
      console.warn(`[DB] MongoDB connection unavailable.`);
    }
  } catch (err) {
    console.error('[DB] Failed to save general enquiry to MongoDB:', err);
  }

  return {
    status: 200,
    body: {
      success: true,
      message: 'General enquiry received successfully.',
      enquiryId,
      referenceId: enquiryId,
      data: record
    }
  };
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const result = await handleGeneralEnquiry(req.body);
  return res.status(result.status).json(result.body);
}
