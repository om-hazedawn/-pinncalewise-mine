"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "../../components/page-header";
import { AnimatedBackground } from "../../components/animated-background";
import { validateBRCertificate } from "../functions/business-registration";
import { CheckCircle, XCircle } from "lucide-react";

export default function BusinessRegistrationPage() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);

  const handleValidate = async () => {
    if (!certificateNumber.trim()) return;

    setIsValidating(true);
    try {
      const result = await validateBRCertificate(certificateNumber);
      setValidationResult(result);
    } catch (error) {
      console.error("Validation failed:", error);
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <AnimatedBackground variant="subtle">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="商業登記證查詢"
          description="驗證商業登記證"
          accent
        />

        <div className="max-w-2xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>輸入商業登記證號碼</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="例如：12345678-000-00-00-0"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleValidate()}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    請輸入完整的商業登記證號碼，包括連字符
                  </p>
                </div>
                <Button
                  onClick={handleValidate}
                  disabled={isValidating}
                  className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600"
                >
                  驗證
                </Button>
              </div>
            </CardContent>
          </Card>

          {validationResult && (
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  {validationResult.isValid ? (
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-500" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">
                      {validationResult.isValid ? "有效的商業登記證" : "無效的商業登記證"}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {validationResult.message || "驗證完成"}
                    </p>
                  </div>
                </div>

                {validationResult.isValid && (
                  <div className="space-y-2 text-sm text-gray-600 border-t pt-4">
                    <p>商業登記證號碼：{validationResult.certificateNumber}</p>
                    <p>商業名稱：{validationResult.businessName}</p>
                    <p>到期日期：{validationResult.expiryDate}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {isValidating && (
            <div className="text-center py-8">
              <p>正在驗證...</p>
            </div>
          )}
        </div>
      </div>
    </AnimatedBackground>
  );
}
