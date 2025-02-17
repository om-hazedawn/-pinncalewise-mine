"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "../../components/page-header";
import { AnimatedBackground } from "../../components/animated-background";
import { calculateProfitsTax } from "../functions/tax-calculator";

export default function TaxCalculatorPage() {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [allowances, setAllowances] = useState("");
  const [result, setResult] = useState<{
    taxableIncome: number;
    taxPayable: number;
    effectiveRate: number;
  } | null>(null);

  const handleCalculate = () => {
    const calculationResult = calculateProfitsTax({
      income: Number(income) || 0,
      deductions: Number(deductions) || 0,
      allowances: Number(allowances) || 0,
    });
    setResult(calculationResult);
  };

  return (
    <AnimatedBackground variant="subtle">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="利得稅計算器"
          description="快速計算您的應納稅額"
          accent
        />

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>輸入計算資料</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="income">年度收入 (HKD)</Label>
                <Input
                  id="income"
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deductions">可扣除支出 (HKD)</Label>
                <Input
                  id="deductions"
                  type="number"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="allowances">免稅額 (HKD)</Label>
                <Input
                  id="allowances"
                  type="number"
                  value={allowances}
                  onChange={(e) => setAllowances(e.target.value)}
                  placeholder="0"
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 text-white hover:from-indigo-600 hover:to-rose-600"
                onClick={handleCalculate}
              >
                計算稅額
              </Button>

              {result && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2">計算結果</h3>
                    <div className="space-y-2">
                      <p>應課稅收入：HKD {result.taxableIncome.toLocaleString()}</p>
                      <p>應納稅額：HKD {result.taxPayable.toLocaleString()}</p>
                      <p>實際稅率：{result.effectiveRate.toFixed(2)}%</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedBackground>
  );
}
