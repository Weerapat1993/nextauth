import { withAuth } from '@/middleware/withAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSessionsForUser } from '@/services/user';

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  const sessions = await getSessionsForUser(req.query.userId as string);
  res.status(200).json(sessions);
});

export default handler;
