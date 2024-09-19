'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/store/auth';
import { Button, Input } from '@/components/common';
import { SignInSchema } from '@/types/auth';
import Link from 'next/link';

type SignInFormData = z.infer<typeof SignInSchema>;

const SignInForm: React.FC = () => {
  const { login } = useAuthStore();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    await login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        {...register('email')}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
      />
      <div className='flex flex-wrap gap-2'>
        <Link href="/auth/signup">
          <Button type="button">Sign Up</Button>
        </Link>
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
};

export default SignInForm;
