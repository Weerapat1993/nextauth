import { NextApiRequest, NextApiResponse } from 'next';
import { sendMagicLink } from '@/services/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  await sendMagicLink(email);
  res.status(200).json({ message: 'Magic link sent' });
};

export default handler;
