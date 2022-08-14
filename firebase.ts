// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDOP0ncdEH8UKKY0AUwTvYI2_ZoB30SHNg',
  authDomain: 'netflix-redesign-38f25.firebaseapp.com',
  projectId: 'netflix-redesign-38f25',
  storageBucket: 'netflix-redesign-38f25.appspot.com',
  messagingSenderId: '284068915539',
  appId: '1:284068915539:web:28a22fcd34556821bf59a6',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
