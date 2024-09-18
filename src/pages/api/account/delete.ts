import { withAuth } from '@/middleware/withAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import { deleteUser } from '@/services/user';

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  await deleteUser(req.query.userId as string);
  res.status(200).json({ message: 'Account deleted' });
});

export default handler;
