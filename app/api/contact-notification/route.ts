import { NextResponse } from 'next/server';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { firestore } from '@/lib/firebase/firebase';

/**
 * API Route for sending contact form notifications
 * Can be extended to send email notifications using a service like SendGrid, Mailgun, etc.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically integrate with an email service like SendGrid
    // For example:
    // await sendgrid.send({
    //   to: 'your-email@example.com',
    //   from: 'no-reply@pinnaclewise.com',
    //   subject: `New Contact Form Submission: ${service || 'General Inquiry'}`,
    //   text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
    // });

    console.log('Would send notification email for:', { name, email, service });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in contact notification API:', error);
    return NextResponse.json(
      { error: 'Failed to process notification' },
      { status: 500 }
    );
  }
}

/**
 * API Route for retrieving latest contact submissions
 * This can be used for an admin dashboard or notification system
 */
export async function GET(request: Request) {
  try {
    // Only allow this endpoint in development or with proper authentication in production
    if (process.env.NODE_ENV === 'production') {
      // In production, you would verify authentication here
      // if (!isAuthenticated(request)) {
      //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      // }
    }

    // Get the latest 10 contact submissions
    const contactsRef = collection(firestore, 'contacts');
    const q = query(
      contactsRef,
      orderBy('createdAt', 'desc'),
      limit(10)
    );

    const querySnapshot = await getDocs(q);
    const contacts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({ contacts });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submissions' },
      { status: 500 }
    );
  }
}
