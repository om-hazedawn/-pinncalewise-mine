import { NextResponse } from 'next/server';
import { registerUser } from '@/lib/authService';

export async function POST(request: Request) {
  try {
    const { DisplayName, Email, Password } = await request.json();
    
    // Validate inputs
    if (!Email || !Password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    if (Password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }
    
    // Register the user
    const user = await registerUser(Email, Password, DisplayName);
    
    return NextResponse.json(
      { 
        message: 'User registered successfully',
        userId: user.uid,
        displayName: user.displayName,
        email: user.email
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering user:', error);
    
    let errorMessage = 'Registration failed';
    let statusCode = 500;
    
    if (error instanceof Error) {
      // Handle specific Firebase auth errors
      if (error.message.includes('auth/email-already-in-use')) {
        errorMessage = 'Email is already in use';
        statusCode = 409;
      } else if (error.message.includes('auth/invalid-email')) {
        errorMessage = 'Invalid email format';
        statusCode = 400;
      } else if (error.message.includes('auth/weak-password')) {
        errorMessage = 'Password is too weak';
        statusCode = 400;
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
