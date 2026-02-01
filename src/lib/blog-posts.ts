import { BlogPost } from "./types";

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "gross-vs-nnn-lease-complete-guide",
        title: "Gross vs. NNN Lease: The Complete Guide for Tenants (2025)",
        excerpt: "Stop overpaying. Learn the critical differences between Gross, Modified Gross, and Triple Net (NNN) leases before you sign.",
        date: "February 2, 2025",
        author: "LeaseCalc Team",
        category: "Lease Basics",
        readTime: "12 min read",
        keywords: ["gross lease vs nnn", "commercial lease types", "triple net lease explained"],
        image: "/blog/gross_vs_nnn.png",
        content: `
            <div>
                <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                    <h3 class="!mt-0 text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Key Takeaways</h3>
                    <ul class="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200 mb-0">
                        <li><strong>Gross Lease:</strong> All-inclusive rent. Higher rate, but predictable.</li>
                        <li><strong>NNN Lease:</strong> Base Rent + Operating Expenses. Lower base rate, but variable risk.</li>
                        <li><strong>Risk Shift:</strong> NNN shifts building maintenance risk to the tenant.</li>
                        <li><strong>Load Factor:</strong> Always check if you are paying for Usable or Rentable square footage.</li>
                    </ul>
                </div>

                <p class="lead">Choosing between a Gross Lease and a Triple Net (NNN) lease is the single most important financial decision you will make when renting commercial space. Get it wrong, and you could be on the hook for thousands of dollars in unexpected "operating expenses" (OpEx).</p>

                <h2>1. What is a Gross Lease?</h2>
                <p>A <strong>Gross Lease</strong> (often called a Full Service Lease) is the simplest commercial lease structure. It mimics a residential lease: you pay one flat fee to the landlord, and the landlord pays for everything else.</p>
                <p>Typically, the landlord covers:</p>
                <ul>
                    <li>Property Taxes</li>
                    <li>Building Insurance</li>
                    <li>Common Area Maintenance (CAM)</li>
                    <li>Utilities (often, but not always)</li>
                </ul>

                <h3>Pros and Cons of Gross Leases</h3>
                <div class="overflow-x-auto my-6">
                    <table>
                        <thead>
                            <tr>
                                <th>Pros for Tenant</th>
                                <th>Cons for Tenant</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Predictable monthly costs (easier budgeting).</td>
                                <td>Base rent is significantly higher (premium for stability).</td>
                            </tr>
                            <tr>
                                <td>No surprise bills for a new roof or HVAC repair.</td>
                                <td>Landlord may neglect maintenance since they pay for it.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>2. What is a Triple Net (NNN) Lease?</h2>
                <p>A <strong>Triple Net Lease</strong> isolates the "Base Rent" from the "Operating Expenses." You pay the landlord a net amount for the space, PLUS you pay your share of the building's three primary expenses:</p>
                <ol>
                    <li><strong>N</strong>et Property Taxes</li>
                    <li><strong>N</strong>et Building Insurance</li>
                    <li><strong>N</strong>et Common Area Maintenance (CAM)</li>
                </ol>
                <p>This structure is standard for retail spaces and standalone buildings. It shifts the operational risk from the landlord to the tenant.</p>

                <h3>NNN Calculation Example</h3>
                <p>Let's say you lease 2,000 SF with a Base Rent of $20/SF and NNN charges of $8/SF.</p>
                <div class="bg-slate-100 dark:bg-slate-900 p-4 rounded-md font-mono text-sm my-4">
                    Base Rent: $20.00 <br>
                    NNN fees:  $ 8.00 <br>
                    -----------------<br>
                    Total:     $28.00 / SF / Year<br>
                    <br>
                    Annual Cost = 2,000 SF * $28.00 = $56,000<br>
                    Monthly Cost = $56,000 / 12 = $4,666.67
                </div>

                <h2>3. The Hidden Danger: CAM Charges</h2>
                <p>Common Area Maintenance (CAM) is the most contentious part of an NNN lease. It includes landscaping, parking lot lighting, security, and administrative fees. In a poorly negotiated lease, "Administrative Fees" can be a profit center for the landlord.</p>
                <p><strong>Pro Tip:</strong> Always ask for a "Cap on Controllable CAM Expenses." This ensures your CAM costs can't rise by more than 3-5% annually, regardless of what the landlord spends.</p>

                <h2>4. Summary Comparison</h2>
                <p>Use our calculator to run the numbers, but keep this rule of thumb in mind:</p>
                <ul>
                    <li><strong>Choose Gross</strong> if you want stability and lack the cash reserves to handle a sudden $10,000 assessment for a new roof.</li>
                    <li><strong>Choose NNN</strong> if you are confident in the property's condition and want the lowest possible base entry rate.</li>
                </ul>
            </div>
        `
    },
    {
        slug: "understanding-cam-charges",
        title: "Understanding CAM Charges: What Are You Actually Paying For?",
        excerpt: "Common Area Maintenance (CAM) charges can increase your rent by 30%. Learn what's legal, what's negotiable, and how to audit them.",
        date: "February 3, 2025",
        author: "LeaseCalc Team",
        category: "Financial Analysis",
        readTime: "8 min read",
        keywords: ["cam charges explained", "commercial lease audit", "operating expenses"],
        image: "/blog/cam_charges.png",
        content: `
            <div>
                <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500 mb-8">
                    <h3 class="!mt-0 text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Warning Signs</h3>
                    <p class="text-sm text-amber-800 dark:text-amber-200">
                        Landlords often hide "Management Fees" and "Capital Improvements" inside CAM charges. Always review the detailed definition of Operating Expenses in your lease.
                    </p>
                </div>

                <h2>What falls under CAM?</h2>
                <p>CAM stands for <strong>Common Area Maintenance</strong>. In a shopping center or office park, you share the cost of maintaining shared spaces.</p>
                <h3>Standard CAM Items:</h3>
                <ul class="grid md:grid-cols-2 gap-4">
                    <li class="bg-slate-50 dark:bg-slate-800 p-2 rounded">✓ Landscaping & Snow Removal</li>
                    <li class="bg-slate-50 dark:bg-slate-800 p-2 rounded">✓ Parking Lot Repair</li>
                    <li class="bg-slate-50 dark:bg-slate-800 p-2 rounded">✓ Security Guards</li>
                    <li class="bg-slate-50 dark:bg-slate-800 p-2 rounded">✓ Hallway Lighting & HVAC</li>
                </ul>

                <h2>Controllable vs. Uncontrollable Expenses</h2>
                <p>This distinction is critical for negotiation.</p>
                <div class="overflow-x-auto my-6">
                    <table>
                        <thead>
                            <tr>
                                <th>Uncontrollable (Pass-through)</th>
                                <th>Controllable (Capped)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Property Taxes</td>
                                <td>Janitorial Services</td>
                            </tr>
                            <tr>
                                <td>Building Insurance</td>
                                <td>Landscaping</td>
                            </tr>
                            <tr>
                                <td>Utilities (Rates)</td>
                                <td>Management Fees</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><strong>Strategy:</strong> You cannot negotiate tax rates, but you CAN negotiate a "Cap" on the controllable items (e.g., "Controllable CAM shall not increase by more than 5% year-over-year").</p>
                
                <h2>Audit Rights</h2>
                <p>Never sign a lease without an "Audit Right" clause. This gives you the legal right to inspect the landlord's receipts. If you find an error greater than 3-5%, the landlord typically has to pay for the cost of the audit.</p>
            </div>
        `
    },
    {
        slug: "negotiating-commercial-lease-escalations",
        title: "Negotiating Commercial Lease Escalations: A Complete Analysis (3% vs CPI)",
        excerpt: "Rent steps up every year. Should you agree to a fixed 3% increase or tie it to the CPI index? We analyze the math behind 5-year and 10-year terms.",
        date: "February 3, 2025",
        author: "LeaseCalc Team",
        category: "Financial Analysis",
        readTime: "15 min read",
        keywords: ["rent escalation", "cpi lease adjustment", "lease steps"],
        image: "/blog/escalations.png",
        content: `
            <div>
                 <p class="lead">Most tenants obsess over the "Base Rent" in Year 1, but they ignore the Escalation Clause. This is a fatal mistake. In a 10-year lease, a bad escalation clause can cost you more than the initial brokerage fee.</p>

                 <h2>1. The Power of Compounding Rent</h2>
                 <p>Commercial leases are rarely flat. Landlords require rent to increase annually to keep up with inflation and property value appreciation. The mechanism for this increase is the "Escalation Clause."</p>
                 <p>Small differences in percentage have massive long-term effects.</p>

                 <div class="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg my-8">
                     <h3 class="!mt-0">The Math: 10-Year Term @ $30/SF Base</h3>
                     <table class="mt-4">
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>3% Annual Increase</th>
                                <th>4% Annual Increase</th>
                                <th>Difference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Year 1</td>
                                <td>$30.00</td>
                                <td>$30.00</td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>Year 5</td>
                                <td>$33.77</td>
                                <td>$35.09</td>
                                <td>+$1.32/SF</td>
                            </tr>
                            <tr>
                                <td>Year 10</td>
                                <td>$39.14</td>
                                <td>$42.70</td>
                                <td>+$3.56/SF</td>
                            </tr>
                        </tbody>
                     </table>
                     <p class="text-sm mt-4 text-muted-foreground">On a 5,000 SF space, that $3.56 difference in Year 10 equals <strong>$17,800/year</strong> in extra rent just from a 1% difference in compounding.</p>
                 </div>

                 <h2>2. Fixed Percentage Increases (The Standard)</h2>
                 <p>Most commercial leases use a fixed annual increase, typically between <strong>2.5% and 4%</strong>. This is predictable for both parties.</p>
                 <p><strong>Pros for Tenant:</strong> You know exactly what your rent will be in Year 7. You can budget aggressively.</p>
                 <p><strong>Cons for Tenant:</strong> If inflation drops to 1% (as it did for many years pre-2020), you are overpaying relative to the market.</p>

                 <h2>3. CPI (Consumer Price Index) Adjustments</h2>
                 <p>Some landlords propose tying rent increases to the CPI (inflation). This sounds fair—"I'll only pay more if the cost of living goes up"—but it is dangerous.</p>
                 <h3>Why CPI Clauses are Risky:</h3>
                 <ul>
                     <li><strong>Uncapped Risk:</strong> In 2022, inflation hit 8-9%. If your lease was tied to CPI without a cap, your rent effectively doubled its growth rate overnight.</li>
                     <li><strong>Calculation Disputes:</strong> Which CPI index? CPI-U? CPI-W? For which region? The definitions matter immensely.</li>
                     <li><strong>No Downward Adjustment:</strong> Almost all CPI clauses say "CPI or X%, whichever is GREATER," or they have a floor. Rent never goes down even if deflation occurs.</li>
                 </ul>
                 
                 <div class="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500 mb-8">
                    <h3 class="!mt-0 text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">Negotiation Strategy</h3>
                    <p>If a landlord insists on CPI, you MUST demand a <strong>"Cap."</strong> For example: "CPI increases, not to exceed 4% in any single year." This gives you the benefit of low inflation while protecting you from hyperinflation.</p>
                 </div>

                 <h2>4. Step Up Leases (Flat for Years)</h2>
                 <p>Another structure is the "Step Up," where rent stays flat for specific periods.</p>
                 <p><em>Example: Years 1-3 @ $30.00, Years 4-5 @ $33.00.</em></p>
                 <p>This is excellent for startups that need to burn cash on growth in early years. The "catch-up" happens later when revenue is (hopefully) higher.</p>
                 
                 <h2>5. Mid-Term Rent Reset (Fair Market Value)</h2>
                 <p>In very long leases (10+ years), landlords often insert a "Fair Market Value (FMV) Reset" at Year 6 or Year 11.</p>
                 <p><strong>The Trap:</strong> The landlord's definition of FMV is often subjective. They might hire an appraiser who selects "comparable" buildings that are much nicer than yours to justify a hike.</p>
                 <p><strong>The Fix:</strong> "Three Broker Method." If you can't agree on FMV, you pick a broker, landlord picks a broker, and those two pick a third. The average of the three determines the rent. This prevents the landlord from dictating the price.</p>
            </div>
        `
    },
    {
        slug: "hidden-costs-commercial-real-estate",
        title: "7 Hidden Costs in Commercial Real Estate Leases You Must Know",
        excerpt: "From 'Load Factors' to 'Admin Fees', these 7 hidden charges can bloat your budget unexpectedly. A forensic look at the fine print.",
        date: "February 3, 2025",
        author: "LeaseCalc Team",
        category: "Financial Analysis",
        readTime: "12 min read",
        keywords: ["hidden lease costs", "phantom rent", "commercial lease fees"],
        image: "/blog/hidden_costs.png",
        content: `
            <div>
                <p class="lead">The Base Rent is just the tip of the iceberg. In Commercial Real Estate, the "effective rent" is often 20-30% higher than the advertised price due to hidden fees buried in the 50-page lease document.</p>

                <h2>1. The Load Factor (Phantom Space)</h2>
                <p>Did you know you pay rent for space you can't stand in? Landlords charge for "Rentable Square Footage" (RSF), which includes a share of the lobby, elevators, and hallways.</p>
                <p>The difference between what you occupy (Usable SF) and what you pay for (RSF) is the <strong>Load Factor</strong>.</p>
                <ul>
                    <li><strong>Market Standard:</strong> 12-15% for multi-tenant floors.</li>
                    <li><strong>The Trap:</strong> Some buildings measure aggressively, pushing this to 20-25%. Always ask: "What is the Loss Factor?"</li>
                </ul>

                <h2>2. Administrative Fees on CAM</h2>
                <p>We know we have to pay for CAM (Maintenance). But did you know the landlord charges a fee <em>for managing the maintenance?</em></p>
                <p>Administrative Fees are typically <strong>3% to 5%</strong> of the total CAM bill. Some landlords try to charge 10% or charge admin fees on <em>Insurance and Tax</em> bills too, which requires almost no management effort.</p>
                <p><strong>Negotiation Payoff:</strong> Exclude Tax and Insurance from the Admin Fee calculation. That takes 5 minutes to ask and saves thousands over 5 years.</p>

                <h2>3. Capital Expenditures (CapEx) passed as OpEx</h2>
                <p>If the AC unit on the roof dies, that is a Capital Expenditure. It adds long-term value to the building. It should be the landlord's cost.</p>
                <p>However, shady leases try to define "Replacement of HVAC" as an "Operating Expense," forcing tenants to pay for a new roof or AC system that lasts 20 years, even if they only have 2 years left on their lease.</p>
                <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500 my-6">
                    <strong>Critical Clause:</strong> "Capital Expenditures shall be amortized over their useful life."
                    <br>
                    Translation: If the landlord buys a $100,000 roof with a 20-year life, you only pay 1/20th of that cost per year. You definitely don't pay the full $100k.
                </div>

                <h2>4. Restoration Clauses (Make Good)</h2>
                <p>You assume that when you leave, you just sweep the floor. Wrong.</p>
                <p>Many leases require you to "Restore the premises to its original condition." If you built walls, added heavy power, or installed a kitchen, you might have to <strong>pay to demo it all</strong> before you leave.</p>
                <p><strong>The Fix:</strong> Ask for a clause stating: "Tenant shall not be required to remove initial Tenant Improvements approved by Landlord."</p>

                <h2>5. Holdover Penalties</h2>
                <p>If you stay one day past your lease expiration (maybe your new office isn't ready), you are "holding over."</p>
                <p>Standard holdover rent is <strong>150% to 200%</strong> of your last month's rent. If you don't negotiate this, a one-week delay could cost you double rent for a whole month.</p>

                <h2>6. After-Hours HVAC</h2>
                <p>Office leases often provide AC only from 8 AM to 6 PM. If you work late or come in on weekends, you have to push a button for override AC.</p>
                <p>The cost? $50 to $100 <strong>per hour</strong>. A startup working weekends could rack up $5,000/mo in overtime AC bills.</p>

                <h2>7. Signage Removal and Facade Repair</h2>
                <p>If you have a sign on the building, you obviously pay for the sign. But the lease might require you to patch and repaint the entire facade section when you remove the sign, ensuring "no visible difference" in paint color. This can require painting a huge section of the wall to match the fade.</p>
            </div>
        `
    },
    // Stubs
    {
        slug: "modified-gross-lease-explained",
        title: "What is a Modified Gross Lease? The Hybrid Model",
        excerpt: "The middle ground between Gross and NNN. Learn how Modified Gross leases split expenses and why they are popular for office space.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Lease Basics",
        readTime: "7 min read",
        keywords: ["modified gross", "industrial lease"],
        image: "/blog/modified_gross.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "load-factor-usable-vs-rentable",
        title: "The Truth About Load Factors: Usable vs. Rentable SF",
        excerpt: "You pay for the lobby, even if you don't sleep there. Understanding the 15-20% markup known as the Load Factor.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Math & Metrics",
        readTime: "6 min read",
        keywords: ["load factor", "rentable square footage"],
        image: "/blog/load_factor.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "lease-termination-clauses",
        title: "Commercial Lease Termination Clauses: How to Get Out",
        excerpt: "Business failed? Need to move? Without a termination clause or sublease rights, you are on the hook for the full term.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Legal Risks",
        readTime: "8 min read",
        keywords: ["lease termination", "break clause"],
        image: "/blog/termination.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "tenant-improvement-allowance",
        title: "Tenant Improvement (TI) Allowances: Negotiating Your Build-Out",
        excerpt: "How to get the landlord to pay for your new walls, floors, and paint. Turnkey vs. Tenant Improvement Allowance.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Negotiation",
        readTime: "11 min read",
        keywords: ["ti allowance", "commercial build out"],
        image: "/blog/ti_allowance.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "retail-office-industrial-diffs",
        title: "Retail vs. Office vs. Industrial: Key Lease Differences",
        excerpt: "Percentage rent for retail? Environmental audits for industrial? 24/7 HVAC for office? The sector matters.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Lease Basics",
        readTime: "10 min read",
        keywords: ["retail lease", "industrial lease types"],
        image: "/blog/retail_office_industrial.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "personal-guarantees-commercial-lease",
        title: "Personal Guarantees: Protecting Your Personal Assets",
        excerpt: "Why landlords ask for them and how to limit them to a 'Good Guy Guarantee' or a rolling time limit.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Legal Risks",
        readTime: "7 min read",
        keywords: ["personal guarantee", "good guy clause"],
        image: "/blog/personal_guarantee.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "subleasing-process-commercial",
        title: "Subleasing Your Commercial Space: A Step-by-Step Guide",
        excerpt: "Stuck in a lease? Subleasing might be your only exit. Learn the approval process and how to pricing your space.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Strategies",
        readTime: "8 min read",
        keywords: ["sublease agreement", "commercial sublet"],
        image: "/blog/subleasing.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "lease-options-renewal-expansion",
        title: "Renewal Options and Right of First Refusal",
        excerpt: "Lock in your future rent today. Why you need a pre-negotiated renewal option to protect your business growth.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Negotiation",
        readTime: "6 min read",
        keywords: ["renewal option", "expansion rights"],
        image: "/blog/renewal_options.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "insurance-requirements-commercial",
        title: "Commercial Lease Insurance: What You Need to Carry",
        excerpt: "General Liability, Property, Business Interruption. What limits will the landlord require?",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Operations",
        readTime: "7 min read",
        keywords: ["lease insurance", "coi requirements"],
        image: "/blog/insurance_requirements.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "hvac-responsibilities-nnn",
        title: "Who Pays for the HVAC? A NNN Lease Nightmare",
        excerpt: "The air conditioner is the most expensive item to break. Avoid the 'Repair vs. Replace' trap.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Operations",
        readTime: "9 min read",
        keywords: ["hvac lease responsibility", "commercial hvac repair"],
        image: "/blog/hvac_responsibilities.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "ada-compliance-checklist",
        title: "ADA Compliance: Is Your Landlord Liable or You?",
        excerpt: "Americans with Disabilities Act lawsuits are common. Who pays for the ramp? The answer might surprise you.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Legal Risks",
        readTime: "8 min read",
        keywords: ["ada compliance", "commercial tenant laws"],
        image: "/blog/ada_compliance.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "signage-rights-commercial",
        title: "Signage Rights: Maximizing Your Visibility",
        excerpt: "Can you put a sign on the pylon? On the building? Negotiate your visibility before you sign.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Marketing",
        readTime: "5 min read",
        keywords: ["pylon sign", "monument signage"],
        image: "/blog/signage_rights.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "loi-letter-of-intent-guide",
        title: "The Letter of Intent (LOI): The Blueprint of Your Lease",
        excerpt: "Don't skip the LOI. This non-binding document sets the stage for everything. Get the big wins here first.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Lease Basics",
        readTime: "9 min read",
        keywords: ["loi template", "letter of intent"],
        image: "/blog/loi_guide.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "lease-audit-rights",
        title: "How to Conduct a Commercial Lease Audit",
        excerpt: "Think you're overpaying for CAM? Here is how to demand the books and find the errors.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Financial Analysis",
        readTime: "10 min read",
        keywords: ["lease audit", "cam reconciliation"],
        image: "/blog/lease_audit.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "commercial-lease-commission",
        title: "Who Pays the Broker Commission?",
        excerpt: "Good news for tenants: The landlord almost always pays. Why you should never represent yourself.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Strategies",
        readTime: "6 min read",
        keywords: ["tenant rep broker", "commission split"],
        image: "/blog/broker_commission.png",
        content: "<p>Coming Soon.</p>"
    },
    {
        slug: "exclusive-use-clauses",
        title: "Exclusive Use Clauses: Blocking the Competition",
        excerpt: "Opening a coffee shop? Make sure the landlord can't lease the space next door to Starbucks.",
        date: "Coming Soon",
        author: "LeaseCalc Team",
        category: "Strategies",
        readTime: "7 min read",
        keywords: ["exclusive use", "non-compete real estate"],
        image: "/blog/exclusive_use.png",
        content: "<p>Coming Soon.</p>"
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find(post => post.slug === slug);
}
