// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA407ktRNTVwCEXfFFAj16e0bxtpa26-Ws",
  authDomain: "anon-message-6f8d1.firebaseapp.com",
  projectId: "anon-message-6f8d1",
  storageBucket: "anon-message-6f8d1.firebasestorage.app",
  messagingSenderId: "202527166546",
  appId: "1:202527166546:web:ab02f3c115d7c5a21e4f8b",
  measurementId: "G-NW158DKTBS"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);