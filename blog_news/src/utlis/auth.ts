 // src/utils/auth.ts
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const signup = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const login = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error)
    throw error
  }
}