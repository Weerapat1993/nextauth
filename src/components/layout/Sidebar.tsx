import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <nav>
        <ul>
          <li>
            <Link href="/account/settings">
              <a className="block py-2 px-4 hover:bg-gray-600">Settings</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a className="block py-2 px-4 hover:bg-gray-600">Admin Dashboard</a>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
