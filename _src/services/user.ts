import api from '@/lib/api';

export const getUser = async () => {
  const { data } = await api.get('/account/user');
  return data;
};

export const updateUser = async (userDetails: any) => {
  const { data } = await api.post('/account/update', userDetails);
  return data;
};

export const getSessions = async () => {
  const { data } = await api.get('/account/sessions');
  return data;
};

export const revokeSession = async (sessionId: string) => {
  await api.post('/account/revoke-session', { sessionId });
};
