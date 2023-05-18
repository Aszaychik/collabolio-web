// Initialize Firebase
import { app } from './config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { users } from './models/users';

import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
  GoogleAuthProvider,
  Auth,
  User,
} from 'firebase/auth';

console.log(`Check firebase app : ${app.name}`);

const auth: Auth = getAuth();
const SignInWithGoogle = document.getElementById('signInWithGoogle');

const SignOut = document.getElementById('signOut');

onAuthStateChanged(auth, async (user: User | null) => {
  if (!user) return;
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
  // const uid = user.uid;
  // ...
  const { uid } = user;
  const userData = doc(users, uid);
  const expensesData = await getDoc(userData).then((doc) => {
    if (!doc.exists) {
      console.log('No such document!');
      return;
    } else {
      console.log('Document data:', doc.data());
      return doc.data();
    }
  });

  const userTable = document.getElementById('userTable');
  userTable?.insertAdjacentHTML(
    'beforeend',
    `
    <thead>
      <tr>
        <th>Email</th>
        <th>Name</th>
        <th>Photo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${expensesData?.email}</td>
        <td>${expensesData?.displayName}</td>
        <td><img src="${expensesData?.photoURL}" alt=""></img></td>
      </tr>
    </tbody>
  `,
  );
});

SignInWithGoogle?.addEventListener('click', () => {
  signInWithRedirect(auth, new GoogleAuthProvider());
});

SignOut?.addEventListener('click', () => {
  signOut(auth);
});
