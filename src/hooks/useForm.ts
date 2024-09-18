import { useForm as useReactHookForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodSchema } from 'zod';

export const useForm = <T>(schema: ZodSchema<T>, options?: UseFormProps<T>) => {
  return useReactHookForm<T>({
    resolver: zodResolver(schema),
    ...options,
  });
};
