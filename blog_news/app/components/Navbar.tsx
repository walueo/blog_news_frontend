// Navbar.tsx
"use client";

import Link from 'next/link';
import { useAuth } from '../utils/AuthContext';

const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          News Blog
        </Link>
        <div>
          {user ? (
            <button onClick={handleLogout} className="text-white">
              Sign Out
            </button>
          ) : (
            <>
              <Link href="/login" className="text-white mr-4">
                Login
              </Link>
              <Link href="/register" className="text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;