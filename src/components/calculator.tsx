"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { calculateLease } from "@/lib/calculator";
import { LeaseInput, LeaseResult, LeaseType } from "@/lib/types";
import dynamic from 'next/dynamic';

const LeaseChart = dynamic(() => import('./lease-chart'), {
    ssr: false,
    loading: () => <div className="h-[300px] w-full animate-pulse bg-muted rounded-lg" />
});

export function Calculator() {
    const [input, setInput] = useState<LeaseInput>({
        squareFootage: 2000,
        baseRentPerSf: 25,
        leaseType: "NNN",
        nnnExpensesPerSf: 8,
        leaseTermYears: 5,
        annualEscalationPercent: 3,
        freeRentMonths: 0,
        tiAllowancePerSf: 0,
    });

    const [result, setResult] = useState<LeaseResult | null>(null);

    useEffect(() => {
        const res = calculateLease(input);
        setResult(res);
    }, [input]);

    const handleChange = (field: keyof LeaseInput, value: any) => {
        setInput(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* INPUT SECTION */}
                <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="pb-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-2xl text-slate-800 dark:text-slate-100 font-bold tracking-tight">Lease Terms</CardTitle>
                                <CardDescription className="text-slate-500">Define the core financial parameters.</CardDescription>
                            </div>
                            <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full px-3">PRO MODE</span>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-6">

                        {/* AI ASSISTANT PLACEHOLDER */}
                        <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                            <Label className="text-indigo-900 font-bold mb-2 flex items-center gap-2">
                                <span className="text-lg">✨</span> AI Smart Fill
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="e.g. 5 year NNN lease for 2500sf at $28/sf with 3 months free"
                                    className="bg-white border-indigo-200 focus:ring-indigo-500"
                                />
                                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Auto-Fill</Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <Label htmlFor="sqft" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        {input.isUsableSquareFootage ? "Usable SqFt" : "Rentable SqFt"}
                                    </Label>
                                    <div className="flex items-center gap-2">
                                        <Label htmlFor="usable-toggle" className="text-xs text-slate-400 cursor-pointer">Use Load Factor?</Label>
                                        <Input
                                            type="checkbox"
                                            id="usable-toggle"
                                            className="w-4 h-4 accent-blue-600"
                                            checked={input.isUsableSquareFootage || false}
                                            onChange={(e) => handleChange("isUsableSquareFootage", e.target.checked)}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Input
                                        id="sqft"
                                        type="number"
                                        value={input.squareFootage}
                                        onChange={(e) => handleChange("squareFootage", Number(e.target.value))}
                                        className="bg-white dark:bg-slate-950 border-slate-300 focus:ring-primary text-lg flex-1"
                                    />
                                    {input.isUsableSquareFootage && (
                                        <div className="w-24 relative">
                                            <Input
                                                placeholder="Load %"
                                                type="number"
                                                value={input.loadFactorPercent || 0}
                                                onChange={(e) => handleChange("loadFactorPercent", Number(e.target.value))}
                                                className="bg-slate-50 border-slate-200 text-sm"
                                            />
                                            <span className="absolute right-2 top-2.5 text-xs text-slate-400 font-bold">% Add-on</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="baseRent" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Base Rent ($/SF/Yr)</Label>
                                <Input
                                    id="baseRent"
                                    type="number"
                                    value={input.baseRentPerSf}
                                    onChange={(e) => handleChange("baseRentPerSf", Number(e.target.value))}
                                    className="bg-white dark:bg-slate-950 border-slate-300 focus:ring-primary text-lg font-bold text-slate-900"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Lease Model</Label>
                            <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-x-auto">
                                <Button
                                    variant={input.leaseType === 'GROSS' ? 'default' : 'ghost'}
                                    onClick={() => handleChange('leaseType', 'GROSS')}
                                    className={`flex-1 min-w-[100px] text-xs md:text-sm rounded-lg transition-all duration-300 ${input.leaseType === 'GROSS' ? 'shadow-md' : 'hover:bg-white/50'}`}
                                >
                                    Full Service
                                </Button>
                                <Button
                                    variant={input.leaseType === 'MODIFIED_GROSS' ? 'default' : 'ghost'}
                                    onClick={() => handleChange('leaseType', 'MODIFIED_GROSS')}
                                    className={`flex-1 min-w-[100px] text-xs md:text-sm rounded-lg transition-all duration-300 ${input.leaseType === 'MODIFIED_GROSS' ? 'bg-amber-100 text-amber-900 shadow-md' : 'hover:bg-white/50'}`}
                                >
                                    Modified Gross
                                </Button>
                                <Button
                                    variant={input.leaseType === 'NNN' ? 'default' : 'ghost'}
                                    onClick={() => handleChange('leaseType', 'NNN')}
                                    className={`flex-1 min-w-[100px] text-xs md:text-sm rounded-lg transition-all duration-300 ${input.leaseType === 'NNN' ? 'shadow-md' : 'hover:bg-white/50'}`}
                                >
                                    Triple Net (NNN)
                                </Button>
                            </div>
                        </div>

                        {/* NNN or MODIFIED Inputs */}
                        <div className={`space-y-2 transition-all duration-500 overflow-hidden ${input.leaseType !== 'GROSS' ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-4 bg-amber-50/50 dark:bg-amber-950/30 rounded-xl border border-amber-100 dark:border-amber-900/50 space-y-4">
                                <div>
                                    <Label htmlFor="nnn" className="text-amber-700 dark:text-amber-500 font-bold mb-2 block">
                                        {input.leaseType === 'MODIFIED_GROSS' ? "Total OpEx Estimate ($/SF)" : "NNN Expenses ($/SF)"}
                                    </Label>
                                    <Input
                                        id="nnn"
                                        type="number"
                                        value={input.nnnExpensesPerSf || 0}
                                        onChange={(e) => handleChange("nnnExpensesPerSf", Number(e.target.value))}
                                        className="bg-white dark:bg-black/20 border-amber-200 focus:ring-amber-500"
                                    />
                                </div>

                                {input.leaseType === 'MODIFIED_GROSS' && (
                                    <div className="pt-2 border-t border-amber-200/50">
                                        <Label htmlFor="stop" className="text-amber-800 dark:text-amber-400 font-bold mb-2 block flex justify-between">
                                            <span>Expense Stop ($/SF)</span>
                                            <span className="text-xs font-normal text-amber-600 self-center">Landlord Pays First...</span>
                                        </Label>
                                        <Input
                                            id="stop"
                                            type="number"
                                            value={input.expenseStopPerSf || 0}
                                            onChange={(e) => handleChange("expenseStopPerSf", Number(e.target.value))}
                                            className="bg-white/80 border-amber-200 focus:ring-amber-500"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="term" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Lease Term (Years)</Label>
                                <Input
                                    id="term"
                                    type="number"
                                    value={input.leaseTermYears}
                                    onChange={(e) => handleChange("leaseTermYears", Number(e.target.value))}
                                    className="bg-white dark:bg-slate-950 border-slate-300 focus:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="escalation" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Annual Escalation (%)</Label>
                                <Input
                                    id="escalation"
                                    type="number"
                                    value={input.annualEscalationPercent || 0}
                                    onChange={(e) => handleChange("annualEscalationPercent", Number(e.target.value))}
                                    className="bg-white dark:bg-slate-950 border-slate-300 focus:ring-primary"
                                />
                            </div>
                        </div>

                        {/* NEW CONCESSIONS & ADVANCED SECTION */}
                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                            <Label className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-4 block">Advanced Deal Terms</Label>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="freeRent" className="text-sm font-medium text-slate-600">Free Rent (Months)</Label>
                                    <Input
                                        id="freeRent"
                                        type="number"
                                        value={input.freeRentMonths || 0}
                                        onChange={(e) => handleChange("freeRentMonths", Number(e.target.value))}
                                        className="bg-white border-slate-300 focus:ring-green-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="ti" className="text-sm font-medium text-slate-600">TI Allowance ($/SF)</Label>
                                    <Input
                                        id="ti"
                                        type="number"
                                        value={input.tiAllowancePerSf || 0}
                                        onChange={(e) => handleChange("tiAllowancePerSf", Number(e.target.value))}
                                        className="bg-white border-slate-300 focus:ring-green-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="comm" className="text-sm font-medium text-slate-600">Broker Fee (%)</Label>
                                    <Input
                                        id="comm"
                                        type="number"
                                        value={input.commissionPercent || 0}
                                        onChange={(e) => handleChange("commissionPercent", Number(e.target.value))}
                                        className="bg-white border-slate-300 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="discount" className="text-sm font-medium text-slate-600">Discount Rate (%)</Label>
                                    <Input
                                        id="discount"
                                        type="number"
                                        value={input.discountRate || 0}
                                        onChange={(e) => handleChange("discountRate", Number(e.target.value))}
                                        className="bg-white border-slate-300 focus:ring-purple-500"
                                    />
                                </div>
                            </div>
                        </div>

                    </CardContent>
                </Card>

                {/* RESULT SECTION */}
                <Card className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <CardHeader className="border-b border-slate-200 dark:border-slate-800 pb-4 bg-white dark:bg-slate-950">
                        <CardTitle className="text-2xl text-slate-800">Financial Analysis</CardTitle>
                        <CardDescription>Full term cost breakdown including concessions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-6">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white rounded-lg border border-slate-200">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Eff. Rent / SF / Yr</p>
                                <p className="text-3xl font-bold text-slate-900">
                                    ${result?.netEffectiveRentPerSf.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                                </p>
                                <p className="text-xs text-green-600 mt-1 font-medium">Net of TI & Free Rent</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg border border-slate-200">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-1">Total Contract Value</p>
                                <p className="text-3xl font-bold text-slate-900">
                                    ${result?.totalCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex justify-between items-center p-3 bg-white rounded border border-slate-100">
                                <span className="text-slate-500">TI Allowance Value</span>
                                <span className="font-bold text-green-600">-${result?.totalTIValue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded border border-slate-100">
                                <span className="text-slate-500">Free Rent Value</span>
                                <span className="font-bold text-green-600">-${result?.totalFreeRentValue.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="w-full mt-4 bg-white rounded-xl p-4 border border-slate-200" style={{ height: '320px' }}>
                            <LeaseChart
                                data={result?.yearlyData || []}
                                leaseType={input.leaseType}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
                            <div className="flex justify-between items-center p-3 bg-purple-50 rounded border border-purple-100">
                                <span className="text-purple-700 font-medium">Net Present Value (NPV)</span>
                                <span className="font-bold text-purple-900">${result?.npvValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-100">
                                <span className="text-blue-700 font-medium">Broker Commission</span>
                                <span className="font-bold text-blue-900">${result?.totalCommission.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                            </div>
                        </div>

                        {/* RENT SCHEDULE TABLE */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Rent Schedule</h3>
                            <div className="overflow-x-auto rounded-lg border border-slate-200">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 text-slate-600 font-semibold uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3">Year</th>
                                            <th className="px-4 py-3">Base Rent</th>
                                            <th className="px-4 py-3">Expenses</th>
                                            <th className="px-4 py-3 text-green-600">Total Abatement</th>
                                            <th className="px-4 py-3 text-right">Annual Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {result?.yearlyData.map((year) => (
                                            <tr key={year.year} className="bg-white hover:bg-slate-50 transition-colors">
                                                <td className="px-4 py-3 font-medium text-slate-900">Year {year.year}</td>
                                                <td className="px-4 py-3">${year.baseRent.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                                                <td className="px-4 py-3 text-slate-500">${year.expenses.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                                                <td className="px-4 py-3 text-green-600">
                                                    {year.freeRentDedcution > 0 ? `-$${year.freeRentDedcution.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : '-'}
                                                </td>
                                                <td className="px-4 py-3 text-right font-bold text-slate-900">${year.total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
