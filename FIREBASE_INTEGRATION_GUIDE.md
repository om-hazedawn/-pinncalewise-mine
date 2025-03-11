# Firebase Integration Guide for PinnCaleWise

## Issues Resolved

1. **Content Security Policy (CSP)**: Updated middleware.ts to allow connections to Firebase authentication services.
2. **Firebase Configuration**: Updated firebase.ts with clearer instructions for adding your Firebase project details.

## Next Steps to Complete Firebase Integration

### 1. Add Required TypeScript Definitions

You need to install the TypeScript type definitions for Node.js, React, and React DOM to fix TypeScript errors:

```bash
pnpm add -D @types/node @types/react @types/react-dom
```

### 2. Configure Your Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select your existing project
3. Go to the "Authentication" section and enable Email/Password authentication
4. Navigate to Project Settings (gear icon)
5. Scroll down to "Your apps" section
6. If you haven't added a web app yet, click "Add app" and select the web platform (</> icon)
7. Register your app with a nickname (e.g., "PinnCaleWise Web")
8. Copy the Firebase configuration values

### 3. Update Firebase Configuration

Replace the placeholders in `lib/firebase/firebase.ts` with your actual Firebase project details:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional if not using Analytics
};
```

### 4. Restart Your Next.js Development Server

After making these changes, restart your development server:

```bash
pnpm dev
```

## Authentication Features

Your application now includes the following authentication features:

1. **User Registration**: New users can create accounts with email and password
2. **User Login**: Existing users can sign in with email and password
3. **Password Reset**: Users can request a password reset via email
4. **User Profile Management**: Users can view and update their profile information
5. **Sign Out**: Users can sign out of their accounts

## Authentication Flow

1. Unauthenticated users will see Login/Register buttons in the navigation bar
2. After authentication, users will see their profile information and a Sign Out button
3. The dashboard page is protected and will redirect unauthenticated users
4. Authentication state is managed with Firebase Auth and react-firebase-hooks

## Troubleshooting

If you encounter any issues with Firebase authentication:

1. **Check Browser Console**: Look for any Firebase-related errors
2. **Verify Firebase Configuration**: Ensure your API key and other values are correct
3. **Check Content Security Policy**: Make sure middleware.ts is correctly configured
4. **Firebase Project Settings**: Verify that Email/Password authentication is enabled
5. **Deploy Rules**: Make sure Firestore security rules are properly configured if using Firestore

## For Production

For production environments, consider:

1. **Environment Variables**: Store Firebase configuration in .env.local file
2. **Security Rules**: Configure proper Firestore and Storage security rules
3. **Authentication Methods**: Add additional authentication providers as needed (Google, GitHub, etc.)
4. **Error Handling**: Implement more robust error handling for authentication operations
