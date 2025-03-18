"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "../context/language-context"
import { companyFormationTranslations } from "./lang"
import Link from "next/link"

export default function CompanyFormationPage() {
  const { language } = useLanguage()
  const t = companyFormationTranslations[language as keyof typeof companyFormationTranslations]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{t.pageTitle}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>{t.registrationServices.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t.registrationServices.description}</p>
            <ul className="space-y-2 mb-6">
              <li>{t.registrationServices.benefits.fast}</li>
              <li>{t.registrationServices.benefits.professional}</li>
              <li>{t.registrationServices.benefits.oneStop}</li>
              <li>{t.registrationServices.benefits.reasonable}</li>
            </ul>
            <Link href="/contact">
            <Button className="w-full">{t.registrationServices.applyButton}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.requiredDocuments.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>{t.requiredDocuments.list.identity}</li>
              <li>{t.requiredDocuments.list.address}</li>
              <li>{t.requiredDocuments.list.companyName}</li>
              <li>{t.requiredDocuments.list.registrationAddress}</li>
              <li>{t.requiredDocuments.list.businessNature}</li>
              <li>{t.requiredDocuments.list.secretaryId}</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.registrationProcess.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>{t.registrationProcess.steps.submitDocuments}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>{t.registrationProcess.steps.verifyInfo}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>{t.registrationProcess.steps.submitRegistry}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>{t.registrationProcess.steps.collectDocuments}</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.secretaryServices.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t.secretaryServices.requirements.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.secretaryServices.requirements.description}</p>
              <ul className="space-y-2">
                <li>{t.secretaryServices.requirements.list.hongKongAddress}</li>
                <li>{t.secretaryServices.requirements.list.idCard}</li>
                <li>{t.secretaryServices.requirements.list.corporateBody}</li>
                <li>{t.secretaryServices.requirements.list.compliance}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.secretaryServices.ourServices.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.secretaryServices.ourServices.description}</p>
              <ul className="space-y-2 mb-6">
                <li>{t.secretaryServices.ourServices.list.address}</li>
                <li>{t.secretaryServices.ourServices.list.documents}</li>
                <li>{t.secretaryServices.ourServices.list.annualReturns}</li>
                <li>{t.secretaryServices.ourServices.list.records}</li>
                <li>{t.secretaryServices.ourServices.list.advice}</li>
              </ul>
              <Button className="w-full">{t.secretaryServices.ourServices.learnMoreButton}</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary/5 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{t.whyChooseUs.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">{t.whyChooseUs.reasons.professional.title}</h3>
            <p>{t.whyChooseUs.reasons.professional.description}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">{t.whyChooseUs.reasons.convenient.title}</h3>
            <p>{t.whyChooseUs.reasons.convenient.description}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">{t.whyChooseUs.reasons.costEffective.title}</h3>
            <p>{t.whyChooseUs.reasons.costEffective.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
