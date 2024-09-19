import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link href="/account/settings" className='block py-2 px-4 hover:bg-gray-600'>
              Settings
            </Link>
          </li>
          <li>
            <Link href="/admin" className='block py-2 px-4 hover:bg-gray-600'>
              Admin Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
