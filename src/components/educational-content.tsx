"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FAQS } from "@/lib/seo-data";

export function EducationalContent() {
    const [activeTab, setActiveTab] = useState<"compare" | "glossary" | "strategies" | "faq">("compare");

    return (
        <div id="faq-section" className="w-full max-w-5xl mt-12 space-y-8 scroll-mt-20">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Understanding Commercial Leases</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Make informed decisions by understanding the key differences between Triple Net (NNN) and Gross leases.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                <Button
                    variant={activeTab === "compare" ? "default" : "secondary"}
                    onClick={() => setActiveTab("compare")}
                >
                    Gross vs NNN
                </Button>
                <Button
                    variant={activeTab === "glossary" ? "default" : "secondary"}
                    onClick={() => setActiveTab("glossary")}
                >
                    Glossary
                </Button>
                <Button
                    variant={activeTab === "strategies" ? "default" : "secondary"}
                    onClick={() => setActiveTab("strategies")}
                >
                    Negotiation Tips
                </Button>
                <Button
                    variant={activeTab === "faq" ? "default" : "secondary"}
                    onClick={() => setActiveTab("faq")}
                >
                    Common Questions
                </Button>
            </div>

            <Card className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
                <CardContent className="p-8">

                    {activeTab === "compare" && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <h3 className="text-2xl font-bold text-primary">Gross Lease vs. Triple Net (NNN)</h3>
                            <div className="grid md:grid-cols-2 gap-8 mt-4">
                                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900">
                                    <h4 className="font-bold text-lg mb-2">Gross / Full Service Lease</h4>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        The tenant pays a single flat fee. The landlord pays building expenses.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li><strong>Tenant Pays:</strong> Flat rent only.</li>
                                        <li><strong>Landlord Pays:</strong> Taxes, Insurance, Maintenance (CAM).</li>
                                        <li><strong>Pro:</strong> Predictable monthly costs.</li>
                                        <li><strong>Con:</strong> Often higher base rent to cover landlord risk.</li>
                                    </ul>
                                </div>

                                <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900">
                                    <h4 className="font-bold text-lg mb-2">Triple Net (NNN) Lease</h4>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        The tenant pays base rent plus all property operating expenses.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-sm">
                                        <li><strong>Tenant Pays:</strong> Base Rent + Taxes + Insurance + CAM.</li>
                                        <li><strong>Landlord Pays:</strong> Structural repairs (usually).</li>
                                        <li><strong>Pro:</strong> Lower base rent; transparency.</li>
                                        <li><strong>Con:</strong> Variable costs; risk of expense spikes.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "glossary" && (
                        <div className="space-y-4 animate-in fade-in">
                            <h3 className="text-2xl font-bold">Commercial Real Estate Glossary</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-bold">CAM (Common Area Maintenance)</h4>
                                    <p className="text-sm text-muted-foreground">Fees paid by tenants for the upkeep of shared areas like hallways, elevators, parking lots, and landscaping.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Base Rent</h4>
                                    <p className="text-sm text-muted-foreground">The minimum rent due, excluding any additional operating expenses or percentage rent.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Usable vs Rentable SqFt</h4>
                                    <p className="text-sm text-muted-foreground">Usable is space you occupy. Rentable includes a share of common areas (lobbies, amenities). You pay on Rentable.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold">Escalation Clause</h4>
                                    <p className="text-sm text-muted-foreground">A provision for rent increases over the lease term, often fixed (e.g., 3% / year) or tied to inflation (CPI).</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "strategies" && (
                        <div className="space-y-4 animate-in fade-in">
                            <h3 className="text-2xl font-bold">Negotiation Strategies</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3">
                                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold h-fit mt-1">TIP</span>
                                    <p className="text-sm"><strong>Cap CAM Charges:</strong> Negotiate a cap on how much Controllable Operating Expenses can increase per year (e.g., max 5%).</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold h-fit mt-1">TIP</span>
                                    <p className="text-sm"><strong>Defined Audit Rights:</strong> Ensure you have the right to audit the landlord's books to verify NNN expenses are accurate.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold h-fit mt-1">TIP</span>
                                    <p className="text-sm"><strong>Tenant Improvement (TI) Allowance:</strong> Ask for specific dollar amounts per SqFt to renovate the space to your needs.</p>
                                </li>
                            </ul>
                        </div>
                    )}

                    {activeTab === "faq" && (
                        <div className="space-y-8 animate-in fade-in">
                            {FAQS.map((category, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h3 className="text-2xl font-bold">{category.category}</h3>
                                    <div className="grid gap-3">
                                        {category.questions.map((item, qIdx) => (
                                            <details key={qIdx} className="group border border-slate-200 dark:border-slate-800 rounded-lg open:bg-slate-50 dark:open:bg-slate-900 transition-colors duration-200">
                                                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg">
                                                    {item.q}
                                                    <span className="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                                    </span>
                                                </summary>
                                                <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {item.a}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </CardContent>
            </Card>
        </div>
    );
}
