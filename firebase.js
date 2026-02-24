import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9XUUg-s4G3bD1n6qsglXBKuz8mkakqM0",
  authDomain: "kronostudy-49e68.firebaseapp.com",
  projectId: "kronostudy-49e68",
  storageBucket: "kronostudy-49e68.firebasestorage.app",
  messagingSenderId: "422928129878",
  appId: "1:422928129878:web:f8974e3b6f862dd7f8c0f7",
  measurementId: "G-XL0PYJJK70"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

createUserWithEmailAndPassword(auth, email, password);

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

signInWithEmailAndPassword(auth, email, password);