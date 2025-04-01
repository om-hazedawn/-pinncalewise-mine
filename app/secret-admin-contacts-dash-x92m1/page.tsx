"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase/client";
import { useLanguage } from "@/app/context/language-context";

interface ContactFormData {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string;
  message: string;
}

const translations = {
  en: {
    loading: "Loading...",
    error: "Error",
    title: "Contact Form Submissions",
    email: "Email:",
    phone: "Phone:",
    company: "Company:",
    service: "Service:",
    message: "Message:",
    noSubmissions: "No submissions yet",
  },
  zh: {
    loading: "載入中...",
    error: "錯誤",
    title: "聯絡表單提交記錄",
    email: "電郵：",
    phone: "電話：",
    company: "公司：",
    service: "服務：",
    message: "訊息：",
    noSubmissions: "尚無提交記錄",
  }
};

export default function ContactSubmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    async function fetchSubmissions() {
      try {
        // First check current session
        const { data: { session }, error: authError } = await supabase.auth.getSession();
        
        if (authError) {
          console.error('Auth check failed:', authError);
          throw new Error('Failed to check authentication status');
        }

        // If no session, try to authenticate
        if (!session) {
          console.log('No session found, attempting to sign in...');
          const { error: signInError } = await supabase.auth.signInWithPassword({
            email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@example.com',
            password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'your_password_here'
          });

          if (signInError) {
            console.error('Sign in failed:', signInError);
            throw new Error('Authentication failed - please check admin credentials');
          }
        }

        // Fetch contacts after authentication
        console.log('Fetching contacts...');
        const { data, error: fetchError } = await supabase
          .from('contacts')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) {
          console.error('Fetch failed:', fetchError);
          throw fetchError;
        }

        console.log('Fetched contacts:', {
          count: data?.length || 0,
        });

        setSubmissions(data || []);
      } catch (err) {
        console.error('Operation failed:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch submissions');
      } finally {
        setLoading(false);
      }
    }

    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <h1 className="text-xl text-gray-600">{t.loading}</h1>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-xl font-medium text-red-800">{t.error}</h3>
              <p className="mt-2 text-red-700">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
        <div className="text-sm text-gray-500">
          {submissions.length} {submissions.length === 1 ? 'submission' : 'submissions'}
        </div>
      </div>
      
      <div className="grid gap-6">
        {submissions.map((submission) => (
          <Card key={submission.id} className="border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="pb-4">
              <CardTitle>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-900">{submission.name}</span>
                    {/* {submission.company && (
                      <span className="text-sm text-gray-500">| {submission.company}</span>
                    )} */}
                  </div>
                  <time className="text-sm text-gray-500" dateTime={submission.created_at}>
                    {new Date(submission.created_at).toLocaleString(language === 'zh' ? 'zh-HK' : 'en-US')}
                  </time>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-md">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.email}</p>
                    <p className="font-medium">{submission.email}</p>
                  </div>
                  {submission.phone && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t.phone}</p>
                      <p className="font-medium">{submission.phone}</p>
                    </div>
                  )}
                  {submission.company && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t.company}</p>
                      <p className="font-medium">{submission.company}</p>
                    </div>
                  )}
                  {submission.service && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t.service}</p>
                      <p className="font-medium">{submission.service}</p>
                    </div>
                  )}
                </div>
                

                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">{t.message}</p>
                  <div className="bg-white p-4 rounded-md border border-gray-100">
                    <p className="whitespace-pre-wrap text-gray-800">{submission.message}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {submissions.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">{t.noSubmissions}</p>
          </div>
        )}
      </div>
    </div>
  );
}