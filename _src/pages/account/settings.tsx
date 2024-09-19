import React from 'react';
import { useUserStore } from '@/store/user';
import { Button } from '@/components/common';

const AccountSettingsPage = () => {
  const { user, updateUser } = useUserStore();

  const handleSave = async () => {
    await updateUser(user);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <p>Email: {user?.email}</p>
      <p>Name: {user?.name}</p>
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
};

export default AccountSettingsPage;
