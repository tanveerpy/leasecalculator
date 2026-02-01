import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Commercial Lease Calculator",
    description: "Privacy Policy for Commercial Lease Calculator.",
};

export default function PrivacyPage() {
    return (
        <main className="container max-w-3xl mx-auto py-12 px-6 font-sans bg-slate-50 dark:bg-slate-950 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert space-y-6 text-slate-700 dark:text-slate-300">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-xl font-semibold text-primary">1. Information We Collect</h2>
                <p>
                    Commercial Lease Calculator ("us", "we", or "our") operates strictly as a client-side calculator.
                    We do not store your financial data on our servers. All calculations regarding rent, NNN charges, and lease terms happen locally in your browser.
                </p>

                <h2 className="text-xl font-semibold text-primary">2. Cookies and Web Beacons</h2>
                <p>
                    We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website.
                    These companies may use cookies and web beacons to collect non-personally identifiable information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                </p>
                <p>
                    If you would like more information about this practice and to know your choices about not having this information used by these companies, click here.
                </p>

                <h2 className="text-xl font-semibold text-primary">3. Google AdSense</h2>
                <p>
                    Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the advertising cookie enables it and its partners to serve ads to our users based on their visit to your sites and/or other sites on the Internet.
                    Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="nofollow">Google Ads Settings</a>.
                </p>
            </div>
        </main>
    );
}
