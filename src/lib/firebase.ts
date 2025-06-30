// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr3XiRwsnJYnlcxUYU8y43QYCQhQhJy_E",
  authDomain: "referkart-1c26c.firebaseapp.com",
  projectId: "referkart-1c26c",
  storageBucket: "referkart-1c26c.firebasestorage.app",
  messagingSenderId: "1080733556491",
  appId: "1:1080733556491:web:bfa512e7da5066ca108c0e",
  googleClientId: "1080733556491-97bgc7h6vnn7191brcjj62ii6cp30u17.apps.googleusercontent.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
