import { useState, useEffect } from 'react';
import { auth } from '@/utils/firebase';
import firebase from 'firebase/compat/app';

// ... (rest of the file remains the same)

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

  return user;
};