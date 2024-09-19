'use client';

import React from 'react';
import { useAuthStore } from '@/store/auth';
import Link from 'next/link';
import Button from '@/components/common/Button';

const Header: React.FC = () => {
  // const { isAuthenticated, logout } = useAuthStore();

  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link href="/" className='text-xl font-bold'>
        MyApp
      </Link>
      <nav>
        <Link href="/auth/signin">
          <Button variant="primary">Sign In</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
