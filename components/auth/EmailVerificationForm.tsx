'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@/components/common';
import { EmailVerificationSchema } from '@/@types/auth';
import { useAuthStore } from '@/store/useAuthStore';

type EmailVerificationFormData = z.infer<typeof EmailVerificationSchema>;

const EmailVerificationForm: React.FC = () => {
  const { verifyEmail } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailVerificationFormData>({
    resolver: zodResolver(EmailVerificationSchema),
  });

  const onSubmit = async (data: EmailVerificationFormData) => {
    await verifyEmail(data.email, data.code);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Verification Code"
        {...register('code')}
        error={errors.code?.message}
      />
      <Button type="submit">Verify Email</Button>
    </form>
  );
};

export default EmailVerificationForm;
