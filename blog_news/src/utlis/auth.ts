// src/utils/auth.ts
import firebase from 'firebase/compat/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import 'firebase/compat/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCVdzeI4RdNJO6dsMLr83OdUgFiOprqerw",

  authDomain: "blognews-27398.firebaseapp.com",

  projectId: "blognews-27398",

  storageBucket: "blognews-27398.appspot.com",

  messagingSenderId: "997865938638",

  appId: "1:997865938638:web:9bda6fc004b5b346063a9f",

  measurementId: "G-XPE1DBEJK7"
})

const auth = getAuth(firebaseApp)

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