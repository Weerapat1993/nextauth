import { withAuth } from '@/middleware/withAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import { enable2FA } from '@/services/user';

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  await enable2FA(req.query.userId as string);
  res.status(200).json({ message: '2FA enabled' });
});

export default handler;
