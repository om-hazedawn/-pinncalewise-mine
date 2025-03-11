# Firebase Setup Guide

## 1. Update Firebase Configuration

To fix the Firebase authentication errors, you need to update the Firebase configuration in `lib/firebase/firebase.ts` with your actual Firebase project details:

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Go to Project Settings (gear icon)
4. Scroll down to the "Your apps" section
5. Copy the configuration values

Then update the following values in `lib/firebase/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY", // Replace with your Firebase API key
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## 2. Install Required Type Definitions

The TypeScript errors are showing that you need type definitions for Node.js, React, and other dependencies. Run:

```bash
pnpm add -D @types/node @types/react @types/react-dom
```

## 3. Enable Authentication in Firebase Console

1. Go to your Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Navigate to "Authentication" in the left sidebar
3. Click "Get started"
4. Enable the "Email/Password" sign-in method
5. Save the changes

## 4. Test Firebase Connection

To verify your Firebase connection is working:

1. Update the Firebase configuration with your actual values
2. Try accessing the login page
3. Check your browser console for any Firebase-related errors

## 5. Authentication Flow Logic

Your authentication flow works like this:

1. User registers or logs in through the LoginForm/RegisterForm components
2. Authentication state is managed via the useAuthState hook from react-firebase-hooks
3. Protected routes (like dashboard) check for authentication
4. Navigation adapts based on auth state via the AuthNav component

## 6. For Production Use

For production, use environment variables instead of hardcoded values:

1. Create a `.env.local` file in the project root
2. Add your Firebase config values:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

3. Update `lib/firebase/firebase.ts` to use these environment variables:

```typescript
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
```
