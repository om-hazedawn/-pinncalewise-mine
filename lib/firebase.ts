// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAKhg6h4XLZKvn9ARDPxR6eX73C_a0dLZI",
  authDomain: "pinnaclewise-210af.firebaseapp.com",
  projectId: "pinnaclewise-210af",
  storageBucket: "pinnaclewise-210af.firebasestorage.app", // Reverted to original value
  messagingSenderId: "905963491649",
  appId: "1:905963491649:web:cfe860c8bdba8bb611d1c0",
  measurementId: "G-JDVQ1PY258"
};

// For debugging
console.log("Firebase Config:", {
  apiKey: firebaseConfig.apiKey.substring(0, 5) + "...", // Show only first few chars for security
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  storageBucket: firebaseConfig.storageBucket
});

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

// Ensure Firebase is only initialized once
if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("Firebase initialized successfully in firebase.ts");
  } catch (error) {
    console.error("Firebase initialization error:", error);
    throw error;
  }
} else {
  app = getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
}

// Initialize Analytics (only in browser environment)
export const getAnalyticsInstance = () => {
  if (typeof window !== 'undefined') {
    return getAnalytics(app);
  }
  return null;
};

export { app, auth, db };
