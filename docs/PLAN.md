# Implementation Plan - Commercial Lease Calculator

## Goal Description
Build the "All-In-One" Commercial Lease Calculator: a premium, user-centric web application for comparing Gross vs. Triple Net (NNN) leases. The tool will feature a calm, professional design (Light Gray/Royal Blue), comprehensive calculation logic (multiple spaces, escalations, currencies), and embedded educational content to drive SEO.

> [!NOTE]
> Based on the research findings from 15 competitor sites, this tool aims to supersede them by combining advanced functionality (AI inputs, escalations) with superior UX/UI.

## User Review Required
> [!IMPORTANT]
> **Approval Needed**: Please review the tech stack and feature scope below.
> - **Tech Stack**: Next.js 14 (App Router), Tailwind CSS, Shadcn/UI (for premium feel), Recharts (for visualization).
> - **AI Feature**: The "AI Assistant" for form filling will initially be a mock/implementation of a parser unless an API key (OpenAI/Gemini) is provided. confirming scope?
> - **Currency**: Initial support for USD with formatting hooks for others (EUR, GBP).

## Proposed Changes

### architecture
#### [NEW] [PLAN.md](file:///d:/lease calculator/docs/PLAN.md)
This file serves as the master blueprint.

### frontend
#### [NEW] [app](file:///d:/lease calculator/app)
The Next.js application structure.
- `app/page.tsx`: Main landing page with the calculator.
- `app/calculator/`: Component logic for the calculator.
- components/ui`: Shadcn/UI components.

### logic
### logic
#### [NEW] [lib/calculator.ts](file:///d:/lease calculator/lib/calculator.ts)
Core calculation engine.
- `calculateGrossLease()`
- `calculateNNN()`
- `calculateModifiedGross()`
- Handling of "Escalations" (Fixed, Step-up, Index).
- **[NEW] Free Rent (Abatement)**: Logic to deduct months of rent from total cost / effective rate.
- **[NEW] Tenant Improvement (TI)**: Logic to offset total cost by TI allowance ($/SF).
- **[NEW] Commissions**: Calculate broker fees (percentage of total rent).
- **[NEW] NPV (Net Present Value)**: Calculate Time Value of Money using Discount Rate.
- **[NEW] Rent Schedule**: Generate detailed Year-by-Year table (Base, Exp, Free Rent, Total).
- **[NEW] Load Factor**: Calculate Rentable SF from Usable SF + Loss Factor %.
- **[NEW] Expense Stops**: Support "Modified Gross" leases where Tenant pays increases over a Base Year stop.

### frontend
#### [NEW] [src/components/lease-table.tsx](file:///d:/lease calculator/src/components/lease-table.tsx)
Tabular view of the lease cash flow.

#### [NEW] [src/components/ai-input.tsx](file:///d:/lease calculator/src/components/ai-input.tsx)
Natural language input field ("Describe your lease...") to auto-fill the form (Mock/Regex initially).

### logic
#### [NEW] Updated calculator.ts
- Logic for `Modified Gross` (Base Year Stop).
- Logic for `Rentable SF` derivation.


### content
#### [NEW] [content/articles](file:///d:/lease calculator/content/articles)
Markdown-based blog/guides for SEO.
- `gross-vs-nnn.md`
- `commercial-lease-glossary.md`

## Verification Plan

### Automated Tests
- **Unit Tests**: Jest/Vitest for `lib/calculator.ts` to verify math accuracy (e.g., $30 base + $10 NNN = $40 total).
- **Component Tests**: React Testing Library for form interaction.

### Manual Verification
- **Visual Check**: Verify "Royal Blue" accent and "Light Gray" background.
- **Functional Check**: Input "1000 sqft, $30 base, $10 NNN" -> Expect "$40,000 annual" (or appropriate validation).
- **Responsive Check**: Mobile view for form compactness.
