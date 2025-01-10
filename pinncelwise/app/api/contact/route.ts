import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Here you'll want to integrate with your preferred email service
    // Example using a basic email service (you'll need to implement this)
    // await sendEmail({ name, email, subject, message });

    // For now, we'll just log the data
    console.log('Contact form submission:', { name, email, subject, message });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form:', error);
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
