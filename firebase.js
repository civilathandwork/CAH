/* ═══════════════════════════════════════════════════════════════════
   CIVIL AT HAND — Firebase Config
   ─────────────────────────────────────────────────────────────────
   SECURITY NOTE: Firebase Web API keys are safe to expose in
   client-side code — they are restricted to your domain via
   Firebase Console > Authentication > Authorized Domains.
   Ensure your Firebase project has proper Security Rules set.
   ═══════════════════════════════════════════════════════════════════ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth }       from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey:            "AIzaSyB5Tnxu44OmT72EJPAKl6QtdgO7-OtP3RI",
  authDomain:        "civil-at-hand-3cc14.firebaseapp.com",
  projectId:         "civil-at-hand-3cc14",
  storageBucket:     "civil-at-hand-3cc14.firebasestorage.app",
  messagingSenderId: "399251861477",
  appId:             "1:399251861477:web:a2711a99f8a9d9c398090c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
