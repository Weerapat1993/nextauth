import { withRole } from '@/middleware/withRole';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = withRole('admin', async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'Admin access granted' });
});

export default handler;
