export const authConfig = {
  jwtSecret: process.env.JWT_SECRET || 'default_secret',
  jwtExpiresIn: '1h',
};
