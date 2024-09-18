import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export const withAuth = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    return handler(req, res);
  };
};
