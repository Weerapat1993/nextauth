import { NextApiRequest, NextApiResponse } from 'next';
import { resendEmailVerification } from '@/services/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  await resendEmailVerification(email);
  res.status(200).json({ message: 'Verification email resent' });
};

export default handler;
