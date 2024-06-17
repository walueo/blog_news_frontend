import { auth } from '@/firebase';
import firebase from 'firebase/compat/app';

export const signup = async (email: string, password: string) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
    throw error;
  }
};