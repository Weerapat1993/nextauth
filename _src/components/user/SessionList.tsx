import React, { useEffect } from 'react';
import { useUserStore } from '@/store/user';
import Spinner from '@/components/common/Spinner';

const SessionList: React.FC = () => {
  const { sessions, fetchSessions, revokeSession } = useUserStore();

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const handleRevoke = (sessionId: string) => {
    revokeSession(sessionId);
  };

  if (!sessions) return <Spinner />;

  return (
    <ul className="space-y-4">
      {sessions.map((session) => (
        <li key={session.id} className="flex justify-between items-center p-4 border rounded">
          <span>{session.device}</span>
          <button
            onClick={() => handleRevoke(session.id)}
            className="text-red-500 hover:text-red-700"
          >
            Revoke
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SessionList;
