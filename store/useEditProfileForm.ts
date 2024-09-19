import { create } from 'zustand';
import axios from 'axios';
import { User } from '@/app/@types';

interface EditProfileState {
    data: User
    loading: boolean;
    error: string | null;
    updateProfile: (data: User) => any;
}

export const useProductStore = create<EditProfileState>((set) => ({
  loading: false,
  error: null,
  updateProfile: async (data) => {
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
        return error;
    }
  },
}));