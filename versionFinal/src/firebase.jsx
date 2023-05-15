// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWPYOQCvmlbFOgL5O1Ps5q3rHlletpJVE",
  authDomain: "login-firabase-67853.firebaseapp.com",
  projectId: "login-firabase-67853",
  storageBucket: "login-firabase-67853.appspot.com",
  messagingSenderId: "834846676588",
  appId: "1:834846676588:web:8bac52d55868f2f74bea49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };