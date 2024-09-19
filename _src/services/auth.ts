import api from '@/lib/api';

export const login = async (email: string, password: string) => {
  const { data } = await api.post('/auth/login', { email, password });
  return data;
};

export const registerUser = async (email: string, password: string, name: string) => {
  const { data } = await api.post('/auth/signup', { email, password, name });
  return data;
};

export const logout = async () => {
  await api.post('/auth/logout');
};
