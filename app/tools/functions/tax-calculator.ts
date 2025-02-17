export interface TaxCalculatorInput {
  income: number;
  deductions?: number;
  allowances?: number;
}

export interface TaxCalculatorResult {
  taxableIncome: number;
  taxPayable: number;
  effectiveRate: number;
}

export function calculateProfitsTax(input: TaxCalculatorInput): TaxCalculatorResult {
  const { income, deductions = 0, allowances = 0 } = input;
  
  // Calculate taxable income
  const taxableIncome = Math.max(0, income - deductions - allowances);
  
  // Hong Kong standard profits tax rate (16.5% for corporations)
  const taxRate = 0.165;
  const taxPayable = taxableIncome * taxRate;
  
  // Calculate effective tax rate
  const effectiveRate = income > 0 ? (taxPayable / income) * 100 : 0;
  
  return {
    taxableIncome,
    taxPayable,
    effectiveRate
  };
}
