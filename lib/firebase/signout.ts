import { auth } from '../firebase';

export const signOut = async (): Promise<{ success: boolean; error?: string }> => {
  try {
    await auth.signOut();
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred'
    };
  }
};
