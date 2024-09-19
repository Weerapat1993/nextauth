import { create } from 'zustand';
import axios from 'axios';

interface AdminStats {
  totalUsers: number;
  totalPosts: number;
  activeSessions: number;
}

interface AdminState {
  stats: AdminStats | null;
  fetchStats: () => Promise<void>;
}

export const useAdminStore = create<AdminState>((set) => ({
  stats: null,
  fetchStats: async () => {
    try {
      const response = await axios.get('/api/admin/stats');
      set({ stats: response.data });
    } catch (error) {
      console.error('Failed to fetch admin stats', error);
    }
  },
}));
