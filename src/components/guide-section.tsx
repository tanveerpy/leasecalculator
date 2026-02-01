"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function GuideSection() {
    return (
        <div id="guide-section" className="w-full max-w-5xl mt-12 space-y-8 scroll-mt-20">
            <Card className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">How to Calculate Commercial Lease Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">1. Gross Lease Calculation</h3>
                            <p className="text-sm text-muted-foreground">In a Gross Lease, the rate includes most expenses.</p>
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-mono">
                                Annual Rent = Rentable SF × Annual Base Rate
                                <br />
                                <span className="text-green-600 dark:text-green-400">Example:</span> 2,000 sf × $30/sf = $60,000/yr
                                <br />
                                <br />
                                Monthly Rent = Annual Rent ÷ 12
                                <br />
                                <span className="text-green-600 dark:text-green-400">Example:</span> $60,000 ÷ 12 = $5,000/mo
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-primary">2. Triple Net (NNN) Calculation</h3>
                            <p className="text-sm text-muted-foreground">You pay Base Rent PLUS your share of OpEx (Taxes, Insurance, CAM).</p>
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-mono">
                                Total Rate = Base Rate + NNN Expenses
                                <br />
                                <span className="text-green-600 dark:text-green-400">Example:</span> $20 (Base) + $8 (NNN) = $28/sf
                                <br />
                                <br />
                                Annual Cost = 2,000 sf × $28 = $56,000/yr
                                <br />
                                Monthly Cost = $56,000 ÷ 12 = $4,666/mo
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                        <h3 className="text-xl font-semibold mb-3">3. Other Critical Calculations</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-2">
                                <h4 className="font-medium">Rentable Square Footage</h4>
                                <p className="text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                    Usable SF × (1 + Load Factor)
                                    <br />
                                    2,000 × 1.15 = 2,300 RSF
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium">Rent Abatement (Free Rent)</h4>
                                <p className="text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                    Effective Rate = Total Rent over Term ÷ Months / SF
                                    <br />
                                    Lowers your average cost significantly.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium">Escalation (3% Annual)</h4>
                                <p className="text-xs text-muted-foreground bg-slate-100 dark:bg-slate-800 p-2 rounded">
                                    Year 2 Rate = Year 1 Rate × 1.03
                                    <br />
                                    Compounding increases over long terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
