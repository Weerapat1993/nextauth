import React from 'react';
import { getSession } from 'next-auth/react';

const ProtectedPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Protected Content</h1>
      <p>Only authenticated users can see this page.</p>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default ProtectedPage;
