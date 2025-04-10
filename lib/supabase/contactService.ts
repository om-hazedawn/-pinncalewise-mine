import { createClient } from '@supabase/supabase-js'

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
    // Create a fresh client for each request to avoid any session/auth issues
    const supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: false // Don't persist the session
        },
        global: {
          headers: {
            'X-Client-Info': 'contact-form'
          }
        }
      }
    )

    // Direct insert without any session management
    const { error: insertError } = await supabaseClient
      .from('contacts')
      .insert([{
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || '',
        message: data.message,
        created_at: new Date().toISOString()
      }])

    if (insertError) {
      console.error('Insert error:', insertError)
      return {
        success: false,
        error: {
          message: insertError.message
        }
      }
    }

    return { success: true }
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