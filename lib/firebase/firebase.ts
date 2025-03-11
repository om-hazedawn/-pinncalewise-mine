// This file re-exports the Firebase services from the main Firebase configuration file
// to ensure consistent Firebase instances across the application

import { app, auth, db, firebaseConfig, getAnalyticsInstance } from '../firebase';

// Re-export everything from the main Firebase config
export const firestore = db; // Rename db to firestore for compatibility with existing imports
export { app, auth, firebaseConfig, getAnalyticsInstance };

// Log that this bridge file is being used
console.log("Firebase bridge file loaded - using main Firebase configuration");
