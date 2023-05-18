// Initialize Firebase
import { app } from './config/firebase';

import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

console.log(`Check firebase app : ${app.name}`);

const auth = getAuth();
const SignInWithGoogle = document.getElementById('SignInWithGoogle');

onAuthStateChanged(auth, (user) => {
  if (!user) return;
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  // const uid = user.uid;
  // ...

  console.log(user);
});

SignInWithGoogle?.addEventListener('click', () => {
  signInWithRedirect(auth, new GoogleAuthProvider());
});
