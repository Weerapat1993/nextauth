import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export const withRole = (role: string, handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session || session.user.role !== role) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return handler(req, res);
  };
};
