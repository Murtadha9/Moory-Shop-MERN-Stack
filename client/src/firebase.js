// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "moory-shop.firebaseapp.com",
  projectId: "moory-shop",
  storageBucket: "moory-shop.appspot.com",
  messagingSenderId: "1038709262502",
  appId: "1:1038709262502:web:74898b80fb544e77250c67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);