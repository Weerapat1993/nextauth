import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export const captchaValidator = async (req: NextApiRequest, res: NextApiResponse, next: any) => {
  const token = req.body.token || req.query.token;

  if (!token) {
    return res.status(400).json({ message: 'No captcha token provided' });
  }

  const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    },
  });

  const { success } = response.data;

  if (!success) {
    return res.status(400).json({ message: 'Captcha verification failed' });
  }

  next();
};
