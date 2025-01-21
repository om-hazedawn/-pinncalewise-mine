import type { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'

export const metadata: Metadata = generateMetadata(
  'Professional Tax Services in Hong Kong',
  'Comprehensive tax services including profits tax, salaries tax, and property tax. Expert tax planning and filing services in Hong Kong.',
  [
    'tax services hong kong',
    'hong kong tax filing',
    'profits tax hong kong',
    'salaries tax',
    'property tax hong kong',
    'tax planning',
    'tax advisory',
    'tax compliance'
  ],
  '/tax-services'
)
