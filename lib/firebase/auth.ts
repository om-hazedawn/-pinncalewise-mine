import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword,
  User,
  UserCredential
} from 'firebase/auth';
import { auth } from '../firebase';

// For debugging
console.log("Auth service initialized, using Firebase auth from main configuration");

export interface AuthResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export const registerUser = async (
  email: string, 
  password: string, 
  displayName: string
): Promise<AuthResponse> => {
  try {
    console.log(`Attempting to register user with email: ${email.substring(0, 3)}***`);
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user's display name
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName
      });
    }
    
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred during registration'
    };
  }
};

export const loginUser = async (
  email: string, 
  password: string
): Promise<AuthResponse> => {
  try {
    console.log(`Attempting to login user with email: ${email.substring(0, 3)}***`);
    const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    console.error('Login error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred during login'
    };
  }
};

export const resetPassword = async (email: string): Promise<AuthResponse> => {
  try {
    console.log(`Attempting to send password reset email to: ${email.substring(0, 3)}***`);
    await sendPasswordResetEmail(auth, email);
    
    return {
      success: true
    };
  } catch (error) {
    console.error('Password reset error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred sending password reset email'
    };
  }
};

export const changeUserPassword = async (
  user: User, 
  newPassword: string
): Promise<AuthResponse> => {
  try {
    console.log(`Attempting to change password for user: ${user.email.substring(0, 3)}***`);
    await updatePassword(user, newPassword);
    
    return {
      success: true
    };
  } catch (error) {
    console.error('Password change error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred changing password'
    };
  }
};

export const updateUserProfile = async (
  user: User, 
  profile: { displayName?: string; photoURL?: string }
): Promise<AuthResponse> => {
  try {
    console.log(`Attempting to update profile for user: ${user.email.substring(0, 3)}***`);
    await updateProfile(user, profile);
    
    return {
      success: true,
      user
    };
  } catch (error) {
    console.error('Profile update error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred updating profile'
    };
  }
};
