'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@/components/common';
import { PhoneVerificationSchema } from '@/@types/auth';
import { useAuthStore } from '@/store/useAuthStore';

type PhoneVerificationFormData = z.infer<typeof PhoneVerificationSchema>;

const PhoneVerificationForm: React.FC = () => {
  const { verifyPhone } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneVerificationFormData>({
    resolver: zodResolver(PhoneVerificationSchema),
  });

  const onSubmit = async (data: PhoneVerificationFormData) => {
    await verifyPhone(data.phone, data.code);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Phone Number"
        {...register('phone')}
        error={errors.phone?.message}
      />
      <Input
        label="Verification Code"
        {...register('code')}
        error={errors.code?.message}
      />
      <Button type="submit">Verify Phone</Button>
    </form>
  );
};

export default PhoneVerificationForm;
