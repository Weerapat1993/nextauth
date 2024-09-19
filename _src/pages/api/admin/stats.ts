import { withRole } from '@/middleware/withRole';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAdminStats } from '@/services/admin';

const handler = withRole('admin', async (req: NextApiRequest, res: NextApiResponse) => {
  const stats = await getAdminStats();
  res.status(200).json(stats);
});

export default handler;
