import { withAuth } from '@/middleware/withAuth';
import { NextApiRequest, NextApiResponse } from 'next';
import { revokeSession } from '@/services/user';

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  const { sessionId } = req.body;
  await revokeSession(sessionId);
  res.status(200).json({ message: 'Session revoked' });
});

export default handler;
