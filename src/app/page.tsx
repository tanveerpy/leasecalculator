import { Calculator } from "@/components/calculator";
import { GuideSection } from "@/components/guide-section";
import { EducationalContent } from "@/components/educational-content";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:px-24 md:py-12 bg-slate-50 dark:bg-slate-950">
            <div className="z-10 max-w-5xl w-full flex flex-col gap-12 font-sans">

                <div className="text-center space-y-4 mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
                        Commercial Lease Calculator
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Compare Gross vs Triple Net (NNN) leases with precision.
                    </p>
                </div>

                <Calculator />
                <GuideSection />
                <EducationalContent />
            </div>
        </main>
    );
}
