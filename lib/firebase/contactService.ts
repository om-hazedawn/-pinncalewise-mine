import { addDoc, collection, serverTimestamp, DocumentReference } from 'firebase/firestore';
import { firestore } from './firebase';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service: string;
  createdAt?: any;
  status?: 'new' | 'contacted' | 'resolved';
}

export interface ContactResponse {
  success: boolean;
  id?: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

/**
 * Validates contact form data before submission
 * @param formData - The contact form data to validate
 * @returns boolean indicating if the data is valid
 */
const validateContactData = (formData: ContactFormData): boolean => {
  // Check required fields
  if (!formData.name || !formData.email || !formData.message || !formData.service) {
    return false;
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return false;
  }
  
  return true;
};

/**
 * Sanitizes contact form data for Firestore
 * @param formData - The contact form data to sanitize
 * @returns Sanitized data safe for Firestore
 */
const sanitizeForFirestore = (formData: ContactFormData): Record<string, any> => {
  // Create a new object with only the fields we want to store
  const sanitized: Record<string, any> = {
    name: formData.name?.trim(),
    email: formData.email?.trim().toLowerCase(),
    message: formData.message?.trim(),
    service: formData.service,
    createdAt: serverTimestamp(),
    status: 'new' as const,
  };
  
  // Add optional fields if they exist
  if (formData.phone) {
    sanitized.phone = formData.phone.trim();
  }
  
  if (formData.company) {
    sanitized.company = formData.company.trim();
  }
  
  // Remove any undefined or null values
  Object.keys(sanitized).forEach(key => {
    if (sanitized[key] === undefined || sanitized[key] === null) {
      delete sanitized[key];
    }
  });
  
  return sanitized;
};

/**
 * Submits a contact form to Firestore
 * @param formData - The contact form data
 * @returns Promise with the submission result
 */
export const submitContactForm = async (formData: ContactFormData): Promise<ContactResponse> => {
  // Check Firestore connection
  if (!firestore) {
    console.error('Firestore is not initialized');
    return {
      success: false,
      error: {
        code: 'firestore/not-initialized',
        message: 'Firestore is not properly initialized'
      }
    };
  }

  try {
    // Validate form data
    if (!validateContactData(formData)) {
      return {
        success: false,
        error: {
          code: 'validation/invalid-data',
          message: 'Invalid or incomplete form data'
        }
      };
    }
    
    // Sanitize data for Firestore
    const sanitizedData = sanitizeForFirestore(formData);
    
    // Log data being sent (for debugging)
    console.log('Submitting contact form with data:', JSON.stringify({
      ...sanitizedData,
      // Don't log the actual timestamp, just indicate it's included
      createdAt: '[SERVER_TIMESTAMP]'
    }));
    
    // Submit to Firestore with explicit collection path
    const contactsRef = collection(firestore, 'contacts');
    const docRef: DocumentReference = await addDoc(contactsRef, sanitizedData);
    
    console.log('Contact form submitted successfully with ID:', docRef.id);
    return { 
      success: true, 
      id: docRef.id 
    };
  } catch (error: any) {
    // Enhanced error handling with detailed error information
    console.error('Error submitting contact form:', error);
    
    let errorCode = 'unknown-error';
    let errorMessage = 'An unknown error occurred while submitting the form';
    
    // Extract more specific error information if available
    if (error.code) {
      errorCode = error.code;
    }
    
    if (error.message) {
      errorMessage = error.message;
    }
    
    return {
      success: false,
      error: {
        code: errorCode,
        message: errorMessage,
        details: error
      }
    };
  }
};

/**
 * Sends a notification email for new contact submissions
 * This would typically use a server function, but for now we'll
 * mock it until server integration is complete
 */
export const sendContactNotification = async (formData: ContactFormData): Promise<ContactResponse> => {
  try {
    // This function would typically call a server endpoint
    // For now, we'll just log the attempt
    console.log('Notification would be sent for:', formData.name, formData.email);
    
    // In a real implementation, you would call an API route:
    // const response = await fetch('/api/send-notification', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Content-Type': 'application/json' }
    // });
    // return response.json();
    
    return { success: true };
  } catch (error: any) {
    console.error('Error sending contact notification:', error);
    return {
      success: false,
      error: {
        code: 'notification/failed',
        message: 'Failed to send contact notification',
        details: error
      }
    };
  }
};
