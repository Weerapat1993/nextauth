'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@/components/common';
import { MagicLinkSchema } from '@/@types/auth';
import { useAuthStore } from '@/store/useAuthStore';

type MagicLinkFormData = z.infer<typeof MagicLinkSchema>;

const MagicLinkForm: React.FC = () => {
  const { requestMagicLink } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MagicLinkFormData>({
    resolver: zodResolver(MagicLinkSchema),
  });

  const onSubmit = async (data: MagicLinkFormData) => {
    await requestMagicLink(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Button type="submit">Send Magic Link</Button>
    </form>
  );
};

export default MagicLinkForm;
