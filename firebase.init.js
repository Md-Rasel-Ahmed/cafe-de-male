// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEwGcNjKgJq-krXC4-xUkXUM0bdOFAoCg",
  authDomain: "cafe-de-male.firebaseapp.com",
  projectId: "cafe-de-male",
  storageBucket: "cafe-de-male.firebasestorage.app",
  messagingSenderId: "528726957140",
  appId: "1:528726957140:web:3c4bb938a04e1e2e8821c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
