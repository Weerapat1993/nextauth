import { create } from 'zustand';
import { SignInData } from '@/types/auth';
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  login: (data: SignInData) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async (data: SignInData) => {
    try {
      const response = await axios.post('/api/auth/signin', data);
      set({ isAuthenticated: true });
    } catch (error) {
      console.error('Login failed', error);
    }
  },
  logout: () => {
    set({ isAuthenticated: false });
  },
}));
