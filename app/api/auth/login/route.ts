import { NextResponse } from 'next/server';
import { loginUser } from '@/lib/authService';

export async function POST(request: Request) {
  try {
    const { Email, Password } = await request.json();
    
    // Validate inputs
    if (!Email || !Password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Login the user
    const userCredential = await loginUser(Email, Password);
    const user = userCredential.user;
    
    return NextResponse.json(
      { 
        message: 'User logged in successfully',
        userId: user.uid,
        displayName: user.displayName,
        email: user.email
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error logging in user:', error);
    
    let errorMessage = 'Login failed';
    let statusCode = 500;
    
    if (error instanceof Error) {
      // Handle specific Firebase auth errors
      if (error.message.includes('auth/user-not-found') || 
          error.message.includes('auth/wrong-password')) {
        errorMessage = 'Invalid email or password';
        statusCode = 401;
      } else if (error.message.includes('auth/invalid-email')) {
        errorMessage = 'Invalid email format';
        statusCode = 400;
      } else if (error.message.includes('auth/too-many-requests')) {
        errorMessage = 'Too many unsuccessful login attempts. Please try again later';
        statusCode = 429;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
