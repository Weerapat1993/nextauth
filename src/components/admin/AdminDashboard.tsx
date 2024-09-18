import React from 'react';
import { useAdminStore } from '@/store/admin';
import Spinner from '@/components/common/Spinner';

const AdminDashboard: React.FC = () => {
  const { stats, fetchStats } = useAdminStore();

  React.useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  if (!stats) return <Spinner />;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Total Users</h2>
        <p>{stats.totalUsers}</p>
      </div>
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Total Posts</h2>
        <p>{stats.totalPosts}</p>
      </div>
      <div className="p-4 border rounded">
        <h2 className="text-lg font-bold">Active Sessions</h2>
        <p>{stats.activeSessions}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
