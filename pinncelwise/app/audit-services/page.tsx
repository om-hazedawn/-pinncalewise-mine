import { generateMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { AuditServicesPage } from '@/components/audit-services-page'

export const metadata: Metadata = generateMetadata(
  'Audit Services | Pinnaclewise - Professional Audit Services in Hong Kong',
  'Professional audit services in Hong Kong. Expert auditors providing comprehensive financial audits, compliance checks, and audit reports with 24-hour response guarantee.',
  [
    'Hong Kong audit services',
    'financial audit',
    'audit report',
    'compliance audit',
    'statutory audit',
    'company audit',
    'audit firm Hong Kong',
    'professional auditor',
    'audit consulting',
    'financial statement audit'
  ],
  '/audit-services'
)

export default function Page() {
  return <AuditServicesPage />
}
