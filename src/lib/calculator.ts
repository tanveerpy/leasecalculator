import { LeaseInput, LeaseResult, LeaseType, YearlyData } from "./types";

export function calculateLease(input: LeaseInput): LeaseResult {
    const {
        squareFootage,
        baseRentPerSf,
        leaseType,
        nnnExpensesPerSf = 0,
        leaseTermYears,
        annualEscalationPercent = 0,
        freeRentMonths = 0,
        tiAllowancePerSf = 0,
        commissionPercent = 0,
        discountRate = 0,
        // [NEW]
        isUsableSquareFootage = false,
        loadFactorPercent = 0,
        expenseStopPerSf = 0
    } = input;

    let yearlyData: YearBreakdown[] = [];
    let totalBaseRent = 0;
    let totalExpenses = 0;

    // [NEW] Calculate Rentable SF
    // If user provided Usable, we add the Load Factor.
    // If user provided Rentable (default), we just use it.
    const rentableSquareFootage = isUsableSquareFootage
        ? squareFootage * (1 + (loadFactorPercent / 100))
        : squareFootage;

    let currentBaseRate = baseRentPerSf;
    // [NEW] Expenses also escalate in the real world (typically 2-3%), we'll use the same rate
    // to demonstrate the value of a "Base Year Stop".
    let currentExpenseRate = nnnExpensesPerSf;

    let totalFreeRentValue = 0;

    // TI is based on Rentable SF usually
    const totalTIValue = rentableSquareFootage * tiAllowancePerSf;

    // Iterate through years
    for (let year = 1; year <= leaseTermYears; year++) {

        // Base Rent uses Rentable SF
        const annualBaseRentRaw = currentBaseRate * rentableSquareFootage;
        let annualBaseRent = annualBaseRentRaw;

        // Handle Free Rent
        let freeRentDeduction = 0;
        const monthsInYear = 12;
        const startMonth = (year - 1) * 12 + 1;
        const endMonth = year * 12;

        if (freeRentMonths >= startMonth) {
            const freeMonthsInThisYear = Math.min(freeRentMonths, endMonth) - startMonth + 1;
            const monthlyBaseRent = annualBaseRentRaw / 12;
            freeRentDeduction = freeMonthsInThisYear * monthlyBaseRent;
            annualBaseRent -= freeRentDeduction;

            totalFreeRentValue += freeRentDeduction;
        }

        // Expenses Logic
        // 1. Calculate Total Operating Expense for the space (Rentable SF * Rate)
        const totalOpsPotential = currentExpenseRate * rentableSquareFootage;

        let annualExpenses = 0;

        if (leaseType === "NNN") {
            // Tenant pays all
            annualExpenses = totalOpsPotential;
        } else if (leaseType === "MODIFIED_GROSS") {
            // Tenant pays increases over the Stop
            const stopAmount = (expenseStopPerSf * rentableSquareFootage);
            annualExpenses = Math.max(0, totalOpsPotential - stopAmount);
        } else {
            // Gross: Tenant pays 0 (included in Base)
            annualExpenses = 0;
        }

        const annualTotal = annualBaseRent + annualExpenses;

        yearlyData.push({
            year,
            baseRent: annualBaseRentRaw,
            expenses: annualExpenses,
            freeRentDedcution: freeRentDeduction,
            total: annualTotal
        });

        totalBaseRent += annualBaseRent; // This is NET base rent (paid)
        totalExpenses += annualExpenses;

        // Escalate Rates
        const escalator = (1 + (annualEscalationPercent / 100));
        currentBaseRate = currentBaseRate * escalator;
        currentExpenseRate = currentExpenseRate * escalator; // Escalate expenses too
    }

    const totalCostObv = totalBaseRent + totalExpenses;

    // Commission logic uses Rentable SF implicitly via total rents
    const totalRawBaseRent = yearlyData.reduce((acc, y) => acc + y.baseRent, 0);
    const totalCommission = totalRawBaseRent * (commissionPercent / 100);

    // NPV Logic
    let npv = -totalTIValue;
    const r = discountRate / 100;
    yearlyData.forEach((yd) => {
        const pv = yd.total / Math.pow(1 + r, yd.year);
        npv += pv;
    });

    const netCost = totalCostObv - totalTIValue;
    const effectiveAnnualRate = (netCost / leaseTermYears) / rentableSquareFootage; // Divide by Rentable
    const effectiveMonthlyRate = (netCost / leaseTermYears) / 12;
    const netEffectiveRentPerSf = effectiveAnnualRate;

    return {
        yearlyData,
        totalBaseRent,
        totalExpenses,
        totalCost: totalCostObv,
        effectiveAnnualRate,
        effectiveMonthlyRate,
        totalFreeRentValue,
        totalTIValue,
        totalCommission,
        npvValue: npv,
        netEffectiveRentPerSf
    };
}
