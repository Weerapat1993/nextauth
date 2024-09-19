import api from '@/lib/api';

export const getAdminStats = async () => {
  const { data } = await api.get('/admin/stats');
  return data;
};
