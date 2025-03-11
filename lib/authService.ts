import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  UserCredential,
  updateProfile
} from 'firebase/auth';
import { auth } from './firebase';

// Register a new user
export const registerUser = async (
  email: string,
  password: string,
  displayName?: string
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile if displayName is provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName
      });
    }
    
    return userCredential.user;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

// Login existing user
export const loginUser = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Logout current user
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
};

// Reset password
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error('Error during password reset:', error);
    throw error;
  }
};

// Get current user
export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
