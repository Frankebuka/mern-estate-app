// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-crud-firebase-b5dd1.firebaseapp.com",
  projectId: "auth-crud-firebase-b5dd1",
  storageBucket: "auth-crud-firebase-b5dd1.appspot.com",
  messagingSenderId: "331320886873",
  appId: "1:331320886873:web:f877e7ee3fd42057629348",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
