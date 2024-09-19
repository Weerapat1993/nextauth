import { create } from 'zustand';
import axios from 'axios';
import { User } from '@/@types';
import { PasswordResetForm } from '@/components/profile/password-reset-form';

interface State {
  data: User
  loading: boolean;
  error: string | null;
}

interface Actions {
  updateProfile: (data: User) => Promise<User>;
  resetPassword: (data: PasswordResetForm) => Promise<User>;
}

export const useEditProfileStore = create<State & Actions>((set) => ({
  loading: false,
  error: null,
  updateProfile: async (data): Promise<User | null> => {
    set({ loading: true });
    try {
      const response = await axios({
        method: 'PATCH',
        url: '/api/profile',
        data,
    });
      set({ data: response.data.user, loading: false });
      return response.data.user;
    } catch (error: any) {
        set({ error: error.message, loading: false });
        return null
    }
  },
  resetPassword: async (data): Promise<User | null> => {
    set({ loading: true });
    try {
      const response = await axios({
        method: 'PATCH',
        url: '/api/profile/reset-password',
        data,
    });
      set({ data: response.data.user, loading: false });
      return response.data.user;
    } catch (error: any) {
        set({ error: error.message, loading: false });
        return null
    }
  },
}));