# Firebase Project Verification Guide

## Issue: "auth/configuration-not-found" Error

The error `auth/configuration-not-found` indicates that there's an issue with your Firebase project configuration. This guide will help you verify and fix the issue.

## 1. Verify Firebase Project Exists

1. Go to the [Firebase Console](https://console.firebase.google.com)
2. Check if the project "pinnaclewise-210af" exists in your project list
3. If it doesn't exist, you'll need to create a new Firebase project

## 2. Enable Authentication

1. In your Firebase project, go to the Authentication section
2. Click on "Sign-in methods"
3. Enable Email/Password authentication
4. Save your changes

## 3. Check API Key Restrictions

1. Go to the [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. Navigate to "APIs & Services" → "Credentials"
4. Find your API key (AIzaSyAKhg6h4XLZKvn9ARDPxR6eX73C_a0dLZI)
5. Check if there are any restrictions that might be blocking authentication
6. If necessary, remove restrictions or add your application domain to the allowed domains

## 4. Create a New Firebase Project (if needed)

If you can't access the existing project or continue to have issues:

1. Create a new Firebase project
2. Add a Web app to the project
3. Enable Email/Password authentication
4. Update your configuration in `lib/firebase.ts` with the new details:

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_NEW_API_KEY",
  authDomain: "YOUR_NEW_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_NEW_PROJECT_ID",
  storageBucket: "YOUR_NEW_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_NEW_MESSAGING_SENDER_ID",
  appId: "YOUR_NEW_APP_ID",
  measurementId: "YOUR_NEW_MEASUREMENT_ID"
};
```

## 5. Verify Your Firebase Project Settings

Make sure your Firebase project has:

1. **Web App Platform Added**: Your project needs a registered web application
2. **Authentication Enabled**: Email/Password authentication must be enabled
3. **Correct API Key**: Make sure the API key is active and not restricted

## 6. Update Firebase Configuration

After verifying or creating a new project, update your configuration in both:
- `lib/firebase.ts`
- Ensure the bridge file `lib/firebase/firebase.ts` properly imports from the main configuration

## Important Notes

- The storage bucket format should be `your-project-id.appspot.com` (not .firebasestorage.app)
- Make sure you're logged into the correct Google account in Firebase Console
- If you're using the free plan (Spark), check that you haven't exceeded free tier limits
