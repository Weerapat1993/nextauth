import { create } from 'zustand';
import { SignInData, SignUpData, ForgotPasswordData, ResetPasswordData, MagicLinkData, EmailVerificationData } from '@/@types/auth';
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  login: (data: SignInData) => Promise<void>;
  registerUser: (data: SignUpData) => Promise<void>;
  sendPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  requestMagicLink: (email: string) => Promise<void>;
  verifyEmail: (email: string, code: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async (data: SignInData) => {
    try {
      await axios.post('/api/auth/signin', data);
      set({ isAuthenticated: true });
    } catch (error) {
      console.error('Login failed', error);
    }
  },
  registerUser: async (data: SignUpData) => {
    try {
      await axios.post('/api/auth/signup', data);
      set({ isAuthenticated: true });
    } catch (error) {
      console.error('Registration failed', error);
    }
  },
  sendPasswordReset: async (email: string) => {
    try {
      await axios.post('/api/auth/forgot-password', { email });
    } catch (error) {
      console.error('Password reset request failed', error);
    }
  },
  resetPassword: async (token: string, password: string) => {
    try {
      await axios.post('/api/auth/reset-password', { token, password });
    } catch (error) {
      console.error('Password reset failed', error);
    }
  },
  requestMagicLink: async (email: string) => {
    try {
      await axios.post('/api/auth/request-magic-link', { email });
    } catch (error) {
      console.error('Magic link request failed', error);
    }
  },
  verifyEmail: async (email: string, code: string) => {
    try {
      await axios.post('/api/auth/verify-email', { email, code });
    } catch (error) {
      console.error('Email verification failed', error);
    }
  },
  logout: () => {
    set({ isAuthenticated: false });
  },
}));
