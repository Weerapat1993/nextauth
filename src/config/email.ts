export const emailConfig = {
  service: process.env.EMAIL_SERVICE || 'smtp',
  user: process.env.EMAIL_USER || '',
  pass: process.env.EMAIL_PASS || '',
  from: process.env.EMAIL_FROM || 'noreply@myapp.com',
};
