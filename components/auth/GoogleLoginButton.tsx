import React from 'react';
import { signIn } from 'next-auth/react';
import Button from '@/components/common/Button';

const GoogleLoginButton: React.FC = () => {
  const handleLogin = () => {
    signIn('google');
  };

  return (
    <Button onClick={handleLogin} variant="primary">
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
