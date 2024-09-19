import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export type SignInData = z.infer<typeof SignInSchema>;

export const SignUpSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export type SignUpData = z.infer<typeof SignUpSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export type ResetPasswordData = z.infer<typeof ResetPasswordSchema>;

export const MagicLinkSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export type MagicLinkData = z.infer<typeof MagicLinkSchema>;

export const EmailVerificationSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  code: z.string().min(6, { message: 'Code must be at least 6 characters' }),
});

export type EmailVerificationData = z.infer<typeof EmailVerificationSchema>;
