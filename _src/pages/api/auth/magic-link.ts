import { NextApiRequest, NextApiResponse } from 'next';
import { loginWithMagicLink } from '@/services/auth';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { token } = req.query;
  const user = await loginWithMagicLink(token as string);
  res.status(200).json(user);
};

export default handler;
