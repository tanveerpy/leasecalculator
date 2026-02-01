"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Logo } from "./logo";

export function Header() {
    const pathname = usePathname();

    const isHome = pathname === "/";

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/75 dark:bg-slate-950/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex gap-2 items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Logo className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl tracking-tight text-primary">LeaseCalc</span>
                    </Link>
                </div>

                <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
                    <Link
                        href="/"
                        className={cn(
                            "transition-colors hover:text-primary",
                            isHome ? "text-foreground" : "text-muted-foreground"
                        )}
                    >
                        Calculator
                    </Link>
                    <Link
                        href="#guide"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                document.getElementById("guide-section")?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        Guide
                    </Link>
                    <Link
                        href="/blog"
                        className={cn(
                            "transition-colors hover:text-primary",
                            pathname.startsWith("/blog") ? "text-foreground" : "text-muted-foreground"
                        )}
                    >
                        Blog
                    </Link>
                    <Link
                        href="#faq"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                document.getElementById("faq-section")?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                    >
                        FAQ
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="mailto:contact@commercial-lease-calc.com">
                            Contact
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
