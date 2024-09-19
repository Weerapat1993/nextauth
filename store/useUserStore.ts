import { create } from 'zustand';
import axios from 'axios';

interface UserState {
  user: { id: string; email: string; name: string } | null;
  sessions: { id: string; device: string }[] | null;
  fetchUser: () => Promise<void>;
  fetchSessions: () => Promise<void>;
  revokeSession: (sessionId: string) => Promise<void>;
  updateUser: (data: any) => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  sessions: null,
  fetchUser: async () => {
    try {
      const response = await axios.get('/api/account/user');
      set({ user: response.data });
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  },
  fetchSessions: async () => {
    try {
      const response = await axios.get('/api/account/sessions');
      set({ sessions: response.data });
    } catch (error) {
      console.error('Failed to fetch sessions', error);
    }
  },
  revokeSession: async (sessionId: string) => {
    try {
      await axios.post('/api/account/revoke-session', { sessionId });
      set((state) => ({
        sessions: state.sessions?.filter((session) => session.id !== sessionId),
      }));
    } catch (error) {
      console.error('Failed to revoke session', error);
    }
  },
  updateUser: async (data) => {
    try {
      await axios.post('/api/account/update', data);
    } catch (error) {
      console.error('Failed to update user data', error);
    }
  },
}));
