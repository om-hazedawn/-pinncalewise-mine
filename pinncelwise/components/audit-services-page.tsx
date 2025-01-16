'use client'

import { AuditServiceForm } from './audit-service-form'

export function AuditServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <article className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold mb-6">Professional Audit Services in Hong Kong</h1>
          <div className="text-lg text-muted-foreground mb-8">
            Expert audit services tailored to your business needs. Our professional team ensures compliance and accuracy in all financial reporting.
          </div>
          <AuditServiceForm language="zh" />
        </article>
      </div>
    </div>
  )
}
