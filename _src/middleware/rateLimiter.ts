import { redisClient } from '@/config/redis';
import { NextApiRequest, NextApiResponse } from 'next';

const RATE_LIMIT = 100; // max requests
const TIME_WINDOW = 60 * 60; // in seconds

export const rateLimiter = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const requests = await redisClient.incr(ip as string);

  if (requests === 1) {
    await redisClient.expire(ip as string, TIME_WINDOW);
  }

  if (requests > RATE_LIMIT) {
    return res.status(429).json({ message: 'Rate limit exceeded' });
  }

  next();
};
