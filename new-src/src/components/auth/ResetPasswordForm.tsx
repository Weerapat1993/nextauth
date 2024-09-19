import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@/components/common';
import { ResetPasswordSchema } from '@/types/auth';
import { useAuthStore } from '@/store/auth';

type ResetPasswordFormData = z.infer<typeof ResetPasswordSchema>;

const ResetPasswordForm: React.FC = () => {
  const { resetPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormData) => {
    await resetPassword(data.token, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="New Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit">Reset Password</Button>
    </form>
  );
};

export default ResetPasswordForm;
