import { supabase } from './client'

export interface SupabaseContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export interface SupabaseSubmitResult {
  success: boolean
  error?: {
    message: string
  }
}

export async function submitContactFormToSupabase(data: SupabaseContactFormData): Promise<SupabaseSubmitResult> {
  try {
    // Validate Supabase configuration
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      throw new Error('Supabase configuration is missing')
    }

    // Add retry logic
    let attempts = 3
    let error = null

    while (attempts > 0) {
      try {
        const { error: supabaseError } = await supabase
          .from('contacts')
          .insert([{
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            company: data.company || null,
            service: data.service,
            message: data.message
          }])

        if (!supabaseError) {
          return { success: true }
        }

        error = supabaseError
      } catch (e) {
        error = e
      }

      attempts--
      if (attempts > 0) {
        await new Promise(resolve => setTimeout(resolve, 1000)) // Wait 1 second before retry
      }
    }

    throw error || new Error('Failed to submit after multiple attempts')
  } catch (error) {
    console.error('Error submitting to Supabase:', error)
    return {
      success: false,
      error: {
        message: error instanceof Error ? error.message : 'Failed to submit form to Supabase'
      }
    }
  }
}