 import { NextResponse } from 'next/server';
import { formService } from '@/lib/formService';
import { getAnalyticsInstance } from '@/lib/firebase';

// This is a placeholder for email service integration
// You would typically use a service like SendGrid, Mailchimp, etc.
async function sendEmail(to: string, subject: string, body: string) {
  console.log(`Sending email to ${to} with subject: ${subject}`);
  // Integration with email service would go here
  return { success: true };
}

// CRM form submission handler
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, formType, userId } = data;

    // Validate required fields
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Submit form data to Firebase
    const formResponse = await formService.SubmitForm({
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
      FormType: formType,
      UserId: userId
    });

    if (!formResponse.Success) {
      return NextResponse.json(
        { error: formResponse.Message },
        { status: 400 }
      );
    }

    // Capture form submission as an event in Firebase Analytics
    if (typeof window !== 'undefined') {
      const analytics = getAnalyticsInstance();
      if (analytics) {
        // Import is done dynamically to prevent SSR issues
        const { logEvent } = require('firebase/analytics');
        logEvent(analytics, 'form_submission', {
          form_type: formType,
          user_id: userId || 'anonymous'
        });
      }
    }

    // Handle different form types for email notifications
    switch (formType) {
      case 'contact':
        // Send greeting email
        await sendEmail(
          email,
          'Thank you for contacting us',
          `Hello ${name},\n\nThank you for reaching out to us. We've received your message and will get back to you shortly.\n\nBest regards,\nPinncalewise Team`
        );
        
        // Send notification to admin
        await sendEmail(
          process.env.ADMIN_EMAIL || 'admin@example.com',
          'New Contact Form Submission',
          `New contact from: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message || 'Not provided'}`
        );
        break;
        
      case 'booking':
        // Send booking confirmation
        await sendEmail(
          email,
          'Your Booking Confirmation',
          `Hello ${name},\n\nThank you for booking with us. We have received your request and will confirm the details shortly.\n\nBest regards,\nPinncalewise Team`
        );
        
        // Send notification to admin
        await sendEmail(
          process.env.ADMIN_EMAIL || 'admin@example.com',
          'New Booking Request',
          `New booking request from: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nDetails: ${message || 'Not provided'}`
        );
        break;
        
      default:
        // Generic form submission
        await sendEmail(
          email,
          'Thank you for your submission',
          `Hello ${name},\n\nThank you for your submission. We'll process your request and get back to you if needed.\n\nBest regards,\nPinncalewise Team`
        );
    }

    // Return successful response with the formId
    return NextResponse.json({
      message: 'Form submitted successfully',
      formId: formResponse.Data?.Id
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
