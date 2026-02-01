import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

import { SEO_KEYWORDS, FAQS } from "@/lib/seo-data";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

// ...

export const metadata: Metadata = {
    title: "Commercial Lease Calculator | Gross vs NNN vs Modified Gross",
    description: "Free Commercial Lease Calculator. Compare Gross, Triple Net (NNN), and Modified Gross leases. Instant analysis of Base Rent, CAM estimates, Expense Stops, and Effective Rent.",
    keywords: SEO_KEYWORDS,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.flatMap(cat => cat.questions).map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.a
            }
        }))
    };

    const appSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Commercial Lease Calculator",
        "url": "https://commercial-lease-calc.com",
        "description": "Calculate and compare Gross vs Triple Net (NNN) commercial leases. Features include Modified Gross, Load Factor, and NPV analysis.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    inter.variable
                )}
            >
                <Header />
                {children}
                <Footer />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([appSchema, faqSchema])
                    }}
                />
            </body>
        </html>
    );
}
