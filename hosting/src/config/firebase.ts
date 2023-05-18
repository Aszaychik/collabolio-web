// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBXcrnGeKvLEsjR_8VVLOfxdAdLkev1AGk',
  authDomain: 'collabolio-dev.firebaseapp.com',
  projectId: 'collabolio-dev',
  storageBucket: 'collabolio-dev.appspot.com',
  messagingSenderId: '915431608659',
  appId: '1:915431608659:web:d5715c651dd36eb8dd91a6',
  measurementId: 'G-P7GGJXZ4R9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
