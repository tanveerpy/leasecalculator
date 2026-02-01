export const SEO_KEYWORDS = [
    "commercial lease calculator",
    "NNN lease calculator",
    "gross vs triple net lease",
    "base rent per square foot",
    "triple net expenses",
    "property tax insurance maintenance",
    "CAM charges",
    "common area maintenance",
    "operating expenses NNN",
    "modified gross lease",
    "lease escalation rate",
    "commercial rent per square foot",
    "free rent abatement",
    "tenant improvement allowance",
    "occupancy cost calculator",
    "lease term escalation schedule",
    "commercial lease negotiation",
    "effective rent rate",
    "rentable vs usable square footage",
    "load factor calculator"
];

export const FAQS = [
    {
        category: "Lease Types",
        questions: [
            { q: "What’s the difference between a gross lease and a triple net (NNN) lease?", a: "In a Gross Lease, the tenant pays a flat fee and the landlord covers expenses. In a NNN lease, the tenant pays base rent plus their share of property taxes, insurance, and maintenance (CAM)." },
            { q: "What is a Modified Gross Lease?", a: "A hybrid lease where the tenant pays a base rent that includes operating expenses up to a 'Base Year' stop. Any increases in expenses over the base year are paid by the tenant." },
            { q: "What are single net and double net leases?", a: "Single Net: Tenant pays rent + property tax. Double Net (NN): Tenant pays rent + tax + insurance. Triple Net (NNN): Tenant pays rent + tax + insurance + maintenance." },
            { q: "What is an absolute net lease?", a: "A lease where the tenant carries ALL risks and costs, including structural repairs and roof replacement. Common in single-tenant retail (e.g., Walgreens)." },
            { q: "What costs are included in a gross (full-service) lease?", a: "Base rent usually covers taxes, insurance, CAM, utilities, and janitorial services. The tenant pays one check." },
            { q: "What is a percentage lease?", a: "Common in retail, the tenant pays a base rent plus a percentage of their gross sales over a certain breakpoint." },
        ]
    },
    {
        category: "Costs & Expenses (NNN/CAM)",
        questions: [
            { q: "What are NNN expenses?", a: "Triple Net expenses include Property Taxes, Property Insurance, and Common Area Maintenance (CAM)." },
            { q: "What is CAM (common area maintenance)?", a: "CAM charges cover the upkeep of shared areas like parking lots, lobbies, elevators, landscaping, and security." },
            { q: "Should I negotiate a CAM cap?", a: "Yes. A CAM cap limits how much your controllable operating expenses can increase each year (typically capped at 3-5%)." },
            { q: "What is a CAM reconciliation?", a: "An end-of-year accounting where the landlord attempts to balance actual expenses against what the tenant paid. If you overpaid, you get a credit; if underpaid, you owe a lump sum." },
            { q: "What expenses should be excluded from CAM charges?", a: "Capital improvements (like a new roof), landlord marketing costs, executive salaries, and costs related to other specific tenants should often be excluded." },
            { q: "Can NNN expenses be capped or audited?", a: "Yes. Always negotiate for audit rights to inspect the landlord's books and verify expenses are legitimate." },
            { q: "Who pays insurance in a NNN lease?", a: "The tenant pays for the property insurance (reimbursing the landlord), plus their own liability and contents insurance." },
            { q: "Are utilities included in NNN leases?", a: "Usually no. Utilities are typically separately metered and paid directly by the tenant." },
            { q: "How often can NNN expenses change?", a: "They fluctuate annually based on actual costs. Taxes and insurance can exact-match, while CAM is usually estimated and reconciled." },
        ]
    },
    {
        category: "Calculations & math",
        questions: [
            { q: "How do I calculate commercial rent per square foot?", a: "Multiply the Annual Rent per SF by the Rentable Square Footage. Example: $20/sf * 2,000 sf = $40,000/year. Divide by 12 for monthly." },
            { q: "How do I calculate the total monthly cost in a NNN lease?", a: "Add (Base Rent per SF + NNN Charges per SF) * Rentable SF / 12. Example: ($20 base + $8 NNN) = $28 * 2,000 / 12 = $4,666/mo." },
            { q: "How do I convert annual rent into monthly rent?", a: "Annual Rent / 12 = Monthly Rent." },
            { q: "How do I calculate annual commercial lease cost?", a: "Monthly Rent * 12, or (Rate/SF * SqFt)." },
            { q: "What is an effective rent rate in commercial leasing?", a: "The average rate paid over the term after deducting free rent and cash allowances. It's the 'real' cost calculated by NPV." },
            { q: "How do rent escalation clauses work?", a: "They increase the base rent annually, either by a fixed percentage (e.g., 3%) or by CPI (inflation)." },
            { q: "What is a typical lease escalation percentage?", a: "Typically 2% to 4% annually." },
            { q: "What is a blended or effective lease rate?", a: "An average rate that accounts for different rates over time (e.g., a term with $20/sf for 2 years and $25/sf for 3 years)." },
        ]
    },
    {
        category: "Definitions & Concepts",
        questions: [
            { q: "What is base rent?", a: "The minimum rent required by the lease, excluding operating expenses (NNN) or percentage rent." },
            { q: "What is operating expense pass-through?", a: "The process of passing the building's operating costs (taxes, insurance, maintenance) through to the tenants." },
            { q: "What is free rent or rent abatement?", a: "A concession where the landlord grants a period of $0 rent (e.g., first 3 months free) to sign the deal." },
            { q: "How does free rent affect effective rent?", a: "It lowers the effective rent significantly. 3 months free on a 5-year lease reduces the average cost by 5%." },
            { q: "What is tenant improvement (TI) allowance?", a: "Cash given by the landlord to build out the space. It effectively lowers the total occupancy cost." },
            { q: "How does TI allowance affect total lease cost?", a: "It offsets the initial capital required. If you get $20/sf TI, that is $40k you don't have to spend on construction." },
            { q: "What is occupancy cost?", a: "The total cost to occupy a space: Rent + NNN + Utilities + Janitorial." },
            { q: "What does NNN stand for?", a: "Net, Net, Net: Property Taxes, Insurance, and Common Area Maintenance." },
        ]
    },
    {
        category: "Strategy & Comparison",
        questions: [
            { q: "How do I compare gross lease vs NNN lease costs?", a: "Convert everything to a 'Total Cost per Occupied SF' basis. Add NNN estimates to the Base Rent to compare with Gross." },
            { q: "Which lease type is better for budgeting predictability?", a: "Gross Lease. Your costs are fixed even if the building needs a new roof or taxes spike." },
            { q: "Which lease type is better for retail tenants?", a: "NNN is standard for retail because it gives the landlord consistent income while the tenant maintains their specific storefront." },
            { q: "Which lease type is better for office tenants?", a: "Gross or Modified Gross is standard for office, simplifying accounting for tenants sharing a large building." },
            { q: "What hidden costs should I watch for?", a: "Admin fees on CAM (often 15%), capital expenditures disguised as maintenance, and gross-up clauses." },
            { q: "How do landlord calculate base rent?", a: "Based on market comps, building value, and their required Return on Investment (ROI)." },
        ]
    }
];
