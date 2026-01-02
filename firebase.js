// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { firebaseConfig } from "./firebaseConfig";
const firebaseConfig = {
  apiKey: "AIzaSyBEwGcNjKgJq-krXC4-xUkXUM0bdOFAoCg",
  authDomain: "cafe-de-male.firebaseapp.com",
  projectId: "cafe-de-male",
  storageBucket: "cafe-de-male.firebasestorage.app",
  messagingSenderId: "528726957140",
  appId: "1:528726957140:web:3c4bb938a04e1e2e8821c1",
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export default app;
