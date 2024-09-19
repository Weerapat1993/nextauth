import { NextApiRequest, NextApiResponse } from 'next';
import { resendPhoneVerification } from '@/services/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { phone } = req.body;
  await resendPhoneVerification(phone);
  res.status(200).json({ message: 'Phone verification resent' });
};

export default handler;
