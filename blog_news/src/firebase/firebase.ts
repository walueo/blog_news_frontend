// src/firebase.ts
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  // Your Firebase configuration goes here
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export default firebase