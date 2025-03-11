// Import the functions you need from the SDKs you need
import { initializeApp, getApps, FirebaseApp, FirebaseError } from "firebase/app";
import { getAuth, Auth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, Firestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Log levels for structured logging
export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

/**
 * Structured logger for Firebase operations
 * @param level - Log level
 * @param message - Log message
 * @param data - Optional data to include in the log
 */
export const firebaseLogger = (level: LogLevel, message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    source: 'firebase',
    message,
    ...data && { data }
  };
  
  switch (level) {
    case LogLevel.ERROR:
      console.error(JSON.stringify(logEntry));
      break;
    case LogLevel.WARN:
      console.warn(JSON.stringify(logEntry));
      break;
    case LogLevel.INFO:
      console.info(JSON.stringify(logEntry));
      break;
    case LogLevel.DEBUG:
    default:
      console.log(JSON.stringify(logEntry));
  }
};

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
firebaseLogger(LogLevel.INFO, "Firebase configuration initialized", {
  apiKey: firebaseConfig.apiKey.substring(0, 5) + "...", // Show only first few chars for security
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  storageBucket: firebaseConfig.storageBucket
});

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

/**
 * Handles Firebase errors with enhanced logging
 * @param error - The error to handle
 * @param operation - The operation that failed
 */
const handleFirebaseError = (error: unknown, operation: string): void => {
  if (error instanceof FirebaseError) {
    firebaseLogger(LogLevel.ERROR, `Firebase ${operation} error`, {
      code: error.code,
      message: error.message,
      details: error.customData
    });
  } else if (error instanceof Error) {
    firebaseLogger(LogLevel.ERROR, `Error during Firebase ${operation}`, {
      message: error.message,
      stack: error.stack
    });
  } else {
    firebaseLogger(LogLevel.ERROR, `Unknown error during Firebase ${operation}`, {
      error: String(error)
    });
  }
};

// Ensure Firebase is only initialized once
if (!getApps().length) {
  try {
    firebaseLogger(LogLevel.INFO, "Initializing Firebase");
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    
    // Check if we're in a development environment to use emulators
    const isLocalhost = typeof window !== 'undefined' && 
      (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
    
    // Use Firebase emulators in development if available
    const useEmulators = isLocalhost && 
      typeof process !== 'undefined' && 
      process.env && 
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === 'true';
    
    if (useEmulators) {
      try {
        // Connect to auth emulator
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
        firebaseLogger(LogLevel.INFO, "Connected to Firebase Auth Emulator");
        
        // Connect to firestore emulator
        connectFirestoreEmulator(db, 'localhost', 8080);
        firebaseLogger(LogLevel.INFO, "Connected to Firestore Emulator");
      } catch (emulatorError) {
        handleFirebaseError(emulatorError, "emulator connection");
      }
    }
    
    firebaseLogger(LogLevel.INFO, "Firebase initialized successfully");
  } catch (error) {
    handleFirebaseError(error, "initialization");
    // Still throw the error to prevent the app from continuing with broken Firebase
    throw error;
  }
} else {
  app = getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
  firebaseLogger(LogLevel.INFO, "Using existing Firebase app instance");
}

// Initialize Analytics (only in browser environment)
export const getAnalyticsInstance = () => {
  if (typeof window !== 'undefined') {
    try {
      const analytics = getAnalytics(app);
      firebaseLogger(LogLevel.INFO, "Firebase Analytics initialized");
      return analytics;
    } catch (error) {
      handleFirebaseError(error, "analytics initialization");
      return null;
    }
  }
  return null;
};

// Ping Firestore to verify connection
(async () => {
  if (typeof window !== 'undefined') {
    try {
      const timestamp = new Date().toISOString();
      firebaseLogger(LogLevel.DEBUG, `Testing Firestore connection at ${timestamp}`);
      // You could add a actual test query here if needed
    } catch (error) {
      handleFirebaseError(error, "connection test");
    }
  }
})();

export { app, auth, db };
