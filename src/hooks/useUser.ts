import { useUserStore } from '@/store/user';

export const useUser = () => {
  const { user, updateUser, fetchUser, sessions, fetchSessions, revokeSession } = useUserStore();

  return {
    user,
    updateUser,
    fetchUser,
    sessions,
    fetchSessions,
    revokeSession,
  };
};
