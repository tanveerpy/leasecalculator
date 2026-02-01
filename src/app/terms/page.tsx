import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use | Commercial Lease Calculator",
    description: "Terms and Conditions for using Commercial Lease Calculator.",
};

export default function TermsPage() {
    return (
        <main className="container max-w-3xl mx-auto py-12 px-6 font-sans bg-slate-50 dark:bg-slate-950 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
            <div className="prose dark:prose-invert space-y-6 text-slate-700 dark:text-slate-300">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-semibold text-primary">1. Agreement to Terms</h2>
                <p>
                    By accessing commercial-lease-calc.com, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these terms, you are prohibited from using or accessing this site.
                </p>

                <h2 className="text-xl font-semibold text-primary">2. Use License</h2>
                <p>
                    Permission is granted to temporarily use the materials (software and calculators) on Commercial Lease Calculator's website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-xl font-semibold text-primary">3. Limitations</h2>
                <p>
                    In no event shall Commercial Lease Calculator be liable for any damages (including, without limitation, damages for loss of profit or data) arising out of the use or inability to use the materials on this website.
                </p>

                <h2 className="text-xl font-semibold text-primary">4. Ads</h2>
                <p>
                    We use Google AdSense to serve advertisements. By using this site, you acknowledge that Google may place cookies on your browser to serve personalized ads based on your browsing history.
                </p>
            </div>
        </main>
    );
}
