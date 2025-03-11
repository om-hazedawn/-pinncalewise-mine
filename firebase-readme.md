# Firebase Authentication Integration

This document provides instructions for setting up Firebase Authentication with your Next.js application.

## Setup Instructions

### 1. Firebase Project Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Navigate to the "Authentication" section
4. Enable the Email/Password authentication method

### 2. Firebase Configuration

Create a `.env.local` file in the root of your project with the following environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

You can find these values in your Firebase project settings under "Your apps" > "SDK setup and configuration".

### 3. Install Required Dependencies

```bash
npm install firebase react-firebase-hooks
npm install --save-dev @types/node @types/react @types/react-dom
```

## Authentication Features

The following authentication features have been implemented:

1. **User Registration**: Users can create an account with email and password
2. **User Login**: Users can sign in with their credentials
3. **Password Reset**: Users can request a password reset via email
4. **Profile Management**: Users can update their display name and change their password
5. **Authentication State**: Navigation adapts based on the user's authentication state

## Authentication Components

- `AuthNav`: Navigation component that changes based on authentication state
- `SignOutButton`: Button component for signing out
- `Dashboard`: Protected page that shows user information
- `Profile`: Page for updating user profile information
- `ResetPassword`: Page for requesting password reset

## File Structure

```
/lib/firebase/
  ├── firebase.ts    # Firebase initialization
  ├── auth.ts        # Authentication utility functions
  └── signout.ts     # Sign out functionality

/components/auth/
  ├── AuthNav.tsx    # Authentication navigation
  └── SignOutButton.tsx # Sign out button component

/app/
  ├── dashboard/     # User dashboard (protected)
  └── (auth)/auth/   # Authentication pages
      ├── login/     # Login page
      ├── register/  # Registration page
      ├── profile/   # Profile management
      └── reset-password/ # Password reset
```

## Authentication Flow

1. User registers or logs in
2. Auth state is maintained via Firebase Auth
3. Protected routes check for authentication
4. Navigation adapts based on auth state

## Security Considerations

- Client-side authentication is implemented using Firebase Auth
- Sensitive operations are secured with Firebase security rules
- Environment variables protect Firebase configuration
- Auth state is checked before rendering protected content
