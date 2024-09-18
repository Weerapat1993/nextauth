import nodemailer from 'nodemailer';
import { emailConfig } from '@/config/email';

const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  await transporter.sendMail({
    from: emailConfig.from,
    to,
    subject,
    text,
  });
};
