// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMh8g_ABxa7_bySycD_NL8Eqy7H8ai4PE",
  authDomain: "twitter-clone-simple.firebaseapp.com",
  projectId: "twitter-clone-simple",
  storageBucket: "twitter-clone-simple.appspot.com",
  messagingSenderId: "401281744286",
  appId: "1:401281744286:web:2daf229b475ab7ea45aa8f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
