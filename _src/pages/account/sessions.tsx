import React from 'react';
import SessionList from '@/components/user/SessionList';

const AccountSessionsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Active Sessions</h1>
      <SessionList />
    </div>
  );
};

export default AccountSessionsPage;
