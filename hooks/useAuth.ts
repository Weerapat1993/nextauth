import { useAuthStore } from '@/store/useAuthStore';

export const useAuth = () => {
  const { isAuthenticated, login, logout, registerUser } = useAuthStore();

  return {
    isAuthenticated,
    login,
    logout,
    registerUser,
  };
};
