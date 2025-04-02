"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useLanguage } from "../context/language-context";

const content = {
  en: {
    title: "Company Dissolution",
    dissolutionServiceTitle: "Company Dissolution Service",
    dissolutionServiceDescription: "We provide professional company dissolution services to help you legally terminate your company's operations.",
    servicePoints: {
      point1: "Professional Guidance",
      point2: "Complete Process Handling",
      point3: "Reasonable Fees",
      point4: "Confidential Service"
    },
    learnMore: "Learn More",
    methodTitle: "Dissolution Methods",
    deregistrationTitle: "Deregistration",
    deregistrationDescription: "Suitable for companies preparing to end operations, companies without debts. Processing time is approximately 4-5 months.",
    processTitle: "Dissolution Process",
    processList: {
      step1: "Evaluate Company Status",
      step2: "Choose Dissolution Method",
      step3: "Prepare Required Documents",
      step4: "Submit Application",
      step5: "Complete Dissolution"
    }
  },
  zh: {
    title: "註銷公司",
    dissolutionServiceTitle: "公司註銷服務",
    dissolutionServiceDescription: "我們提供專業的公司註銷服務，協助您合法地結束公司業務。",
    servicePoints: {
      point1: "專業指導",
      point2: "完整程序處理",
      point3: "合理收費",
      point4: "保密服務"
    },
    learnMore: "了解更多",
    methodTitle: "註銷方式",
    deregistrationTitle: "撤銷註冊",
    deregistrationDescription: "適用於準備結束及停止營運的公司、沒有負債的公司，處理時間約4-5個月。",
    processTitle: "註銷流程",
    processList: {
      step1: "評估公司狀況",
      step2: "選擇註銷方式",
      step3: "準備所需文件",
      step4: "提交申請",
      step5: "完成註銷"
    }
  }
};

export default function CompanyDissolutionPage() {
  const { language } = useLanguage();
  const currentContent = content[language];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{currentContent.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>{currentContent.dissolutionServiceTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{currentContent.dissolutionServiceDescription}</p>
            <ul className="space-y-2 mb-6">
              <li>✓ {currentContent.servicePoints.point1}</li>
              <li>✓ {currentContent.servicePoints.point2}</li>
              <li>✓ {currentContent.servicePoints.point3}</li>
              <li>✓ {currentContent.servicePoints.point4}</li>
            </ul>
            <Link href="/auth/login">
              <Button className="w-full">{currentContent.learnMore}</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{currentContent.methodTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">{currentContent.deregistrationTitle}</h3>
                <p className="text-gray-600">{currentContent.deregistrationDescription}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">{currentContent.processTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <p>{currentContent.processList.step1}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <p>{currentContent.processList.step2}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p>{currentContent.processList.step3}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <p>{currentContent.processList.step4}</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <p>{currentContent.processList.step5}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
