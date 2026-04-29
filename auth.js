/* ═══════════════════════════════════════════════════
   Civil At Hand · auth.js · Shared Firebase Auth
   ═══════════════════════════════════════════════════ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB5Tnxu44OmT72EJPAKl6QtdgO7-OtP3RI",
  authDomain: "civil-at-hand-3cc14.firebaseapp.com",
  projectId: "civil-at-hand-3cc14",
  storageBucket: "civil-at-hand-3cc14.firebasestorage.app",
  messagingSenderId: "399251861477",
  appId: "1:399251861477:web:a2711a99f8a9d9c398090c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, updateProfile };
