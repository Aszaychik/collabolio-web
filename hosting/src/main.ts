// Initialize Firebase
import { app } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { users } from './models/users';

import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
  Auth,
  User,
} from 'firebase/auth';

console.log(`Check firebase app : ${app.name}`);

const auth: Auth = getAuth();
const SignInWithGoogle = document.getElementById('SignInWithGoogle');

onAuthStateChanged(auth, async (user: User | null) => {
  if (!user) return;
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  // const uid = user.uid;
  // ...
  const { uid } = user;
  const userData = doc(users, uid);
  await getDoc(userData).then((doc) => {
    if (!doc.exists) {
      console.log('No such document!');
      return;
    } else {
      console.log('Document data:', doc.data());
      return doc.data();
    }
  });
});

SignInWithGoogle?.addEventListener('click', () => {
  signInWithRedirect(auth, new GoogleAuthProvider());
});
