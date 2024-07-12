"use client"; // Add this line

import { useState, useEffect } from 'react';
import { auth } from './firebase';
import firebase from 'firebase/compat/app';
import { logout } from './auth';

export const useAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return { user, handleLogout };
};