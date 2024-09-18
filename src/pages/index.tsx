import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to MyApp</h1>
      <p>This is the home page of MyApp.</p>
      <Link href="/protected">
        <a className="text-blue-500 hover:underline">Go to protected content</a>
      </Link>
    </div>
  );
};

export default HomePage;
