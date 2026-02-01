import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Disclaimer | Commercial Lease Calculator",
    description: "Financial Disclaimer for Commercial Lease Calculator.",
};

export default function DisclaimerPage() {
    return (
        <main className="container max-w-3xl mx-auto py-12 px-6 font-sans bg-slate-50 dark:bg-slate-950 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
            <div className="prose dark:prose-invert space-y-6 text-slate-700 dark:text-slate-300">
                <p>
                    The information provided by Commercial Lease Calculator ("we," "us," or "our") on this website is for general informational and educational purposes only.
                    All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
                </p>

                <h2 className="text-xl font-semibold text-primary">Not Financial or Legal Advice</h2>
                <p>
                    The Commercial Lease Calculator tool is intended to provide estimates based on user inputs. It does not constitute professional financial, real estate, or legal advice.
                    Commercial real estate transactions involve significant financial risk and complex legal obligations.
                </p>
                <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4">
                    <p className="font-medium text-amber-900 dark:text-amber-100">
                        We strongly recommend that you consult with a qualified real estate attorney, licensed commercial broker, or tax professional before signing any lease agreement.
                    </p>
                </div>

                <h2 className="text-xl font-semibold text-primary">No Liability</h2>
                <p>
                    Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
                </p>
            </div>
        </main>
    );
}
