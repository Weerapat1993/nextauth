import { useAuthStore } from '@/store/auth';

export const useAuth = () => {
  const { isAuthenticated, login, logout, registerUser } = useAuthStore();

  return {
    isAuthenticated,
    login,
    logout,
    registerUser,
  };
};
