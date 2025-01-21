import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata(
  'Professional Accounting Services in Hong Kong',
  'Expert accounting services for Hong Kong businesses. We offer bookkeeping, financial reporting, and business advisory services.',
  [
    'accounting services hong kong',
    'bookkeeping hong kong',
    'financial reporting',
    'business advisory',
    'hong kong accountant',
    'audit services',
    'corporate accounting',
    'sme accounting'
  ],
  '/accounting'
)
