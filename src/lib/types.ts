export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML/Markdown string
    date: string;
    author: string;
    category: string;
    readTime: string;
    keywords: string[];
    image: string;
}

export type LeaseType = 'GROSS' | 'NNN' | 'MODIFIED_GROSS';

export interface LeaseInput {
    squareFootage: number;
    baseRentPerSf: number;
    leaseType: LeaseType;
    nnnExpensesPerSf?: number;
    leaseTermYears: number;
    annualEscalationPercent?: number;
    freeRentMonths?: number;
    tiAllowancePerSf?: number;
    commissionPercent?: number;
    discountRate?: number;
    isUsableSquareFootage?: boolean;
    loadFactorPercent?: number;
    expenseStopPerSf?: number;
}

export interface YearlyData {
    year: number;
    baseRent: number;
    expenses: number;
    freeRentDedcution: number;
    total: number;
}

export interface LeaseResult {
    netEffectiveRentPerSf: number;
    effectiveAnnualRate: number;
    effectiveMonthlyRate: number;
    totalCost: number;
    totalBaseRent: number;
    totalExpenses: number;
    totalTIValue: number;
    totalFreeRentValue: number;
    npvValue: number;
    totalCommission: number;
    yearlyData: YearlyData[];
}
