import { toast } from 'react-toastify';

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    if (type === 'success') {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return { showToast };
};
