# Firebase Configuration Guide

## Issues Fixed

1. **Content Security Policy (CSP)**: Updated middleware.ts to allow connections to:
   - Firebase authentication services (identitytoolkit.googleapis.com)
   - Firebase storage and database (firebaseio.com, firebase.googleapis.com)
   - Google Analytics (google-analytics.com)

2. **Import Path Inconsistencies**: Fixed incorrect import paths in:
   - lib/authService.ts - Now correctly imports from './firebase'
   - lib/firebase/signout.ts

## Important File Structure

The application has the following Firebase-related files:

```
lib/
├── firebase.ts              <- Main Firebase configuration file
├── authService.ts           <- Authentication service (imports from ./firebase)
└── firebase/                <- Directory with additional Firebase utilities
    └── signout.ts           <- Sign out utility (imports from ../firebase)
```

Make sure all import paths correctly reference the Firebase configuration according to their relative locations.

## Remaining Issue: Firebase Project Configuration

The error `auth/configuration-not-found` indicates that your Firebase project configuration doesn't match an actual project in Firebase. This typically happens when:

1. The project ID is incorrect
2. The project exists but the API key is invalid
3. The Firebase project hasn't been properly set up for authentication

## Steps to Fix Firebase Configuration

1. **Go to the [Firebase Console](https://console.firebase.google.com/)**

2. **Verify your project exists**:
   - Look for a project named "pinnaclewise-210af" 
   - If it doesn't exist, create a new project

3. **Enable Authentication**:
   - In your Firebase project, go to "Authentication" in the left menu
   - Click "Get Started" if not already set up
   - Enable "Email/Password" sign-in method

4. **Get your correct web app configuration**:
   - Go to Project Settings (gear icon in top left)
   - Scroll to "Your apps" section and find your web app
   - If you don't have a web app, click "Add app" and select the web platform (</>)
   - Copy the entire configuration object

5. **Update your firebase.ts file**:
   - Replace the current configuration in lib/firebase.ts with the copied values
   - Make sure all values match exactly, including:
     - apiKey
     - authDomain
     - projectId
     - storageBucket
     - messagingSenderId
     - appId

## TypeScript Type Definitions

To resolve TypeScript errors, you need to install the following packages:

```bash
# If you're using npm
npm install --save-dev @types/node @types/react @types/react-dom

# If you're using yarn
yarn add --dev @types/node @types/react @types/react-dom

# If you're using pnpm (but having path issues with WSL)
# Try running these commands from a Windows terminal in the same directory:
pnpm add --save-dev @types/node @types/react @types/react-dom
```

## For Firebase Type Definitions

Make sure Firebase is properly installed:

```bash
# If you're using npm
npm install firebase

# If you're using yarn
yarn add firebase

# If you're using pnpm (but having path issues with WSL)
# Try running from a Windows terminal:
pnpm add firebase
```

## Testing Your Firebase Configuration

After making these changes:

1. Restart your Next.js development server
2. Try to register a new user
3. Check the browser console for any remaining errors

If you continue to see the `auth/configuration-not-found` error, double-check that:
- You've created a Firebase project in the Firebase Console
- You've enabled Email/Password authentication
- Your configuration values match exactly what's in your Firebase Console
