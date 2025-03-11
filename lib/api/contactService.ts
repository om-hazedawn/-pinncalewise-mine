/**
 * Contact form service using the secure .NET API backend
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

/**
 * Base URL for the API, configurable based on environment
 */
const API_BASE_URL = typeof window !== 'undefined' && window.__NEXT_DATA__?.env?.NEXT_PUBLIC_API_URL 
  ? window.__NEXT_DATA__.env.NEXT_PUBLIC_API_URL 
  : 'http://localhost:5125';

/**
 * Submits contact form data to the .NET API backend
 * @param formData - The contact form data to submit
 * @returns Promise with the submission result
 */
export const submitContactForm = async (formData: ContactFormData): Promise<ApiResponse<string>> => {
  try {
    // Log data being sent (for debugging)
    console.info('Submitting contact form to API:', JSON.stringify(formData));
    
    // Submit to .NET API
    const response = await fetch(`${API_BASE_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    // Parse the response
    const responseData: ApiResponse<string> = await response.json();
    
    if (response.ok) {
      console.info('Contact form submitted successfully with ID:', responseData.data);
      return responseData;
    } else {
      console.error('Error submitting contact form:', responseData.error);
      return responseData;
    }
  } catch (error: any) {
    console.error('Exception submitting contact form:', error);
    
    return {
      success: false,
      error: {
        code: 'request_failed',
        message: error.message || 'Failed to submit contact form',
        details: error
      }
    };
  }
};
