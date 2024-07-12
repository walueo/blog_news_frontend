import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVdzeI4RdNJO6dsMLr83OdUgFiOprqerw",
  authDomain: "blognews-27398.firebaseapp.com",
  projectId: "blognews-27398",
  storageBucket: "blognews-27398.appspot.com",
  messagingSenderId: "997865938638",
  appId: "1:997865938638:web:9bda6fc004b5b346063a9f",
  measurementId: "G-XPE1DBEJK7"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;