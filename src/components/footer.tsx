import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-8 mt-20">
            <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} Commercial Lease Calculator. All rights reserved.
                </p>
                <nav className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="/privacy" className="hover:text-primary transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-primary transition-colors">
                        Terms of Use
                    </Link>
                    <Link href="/disclaimer" className="hover:text-primary transition-colors">
                        Disclaimer
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
