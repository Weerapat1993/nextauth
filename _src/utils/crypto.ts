import crypto from 'crypto';

export const generateToken = (length: number = 32) => {
  return crypto.randomBytes(length).toString('hex');
};
