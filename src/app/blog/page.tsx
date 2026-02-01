import { BLOG_POSTS } from "@/lib/blog-posts";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Commercial Lease Blog | Expert Advice & Guides",
    description: "Read our comprehensive guides on Commercial Real Estate (CRE) leases, negotiation tips, and financial analysis.",
};

export default function BlogIndex() {
    return (
        <main className="container max-w-6xl mx-auto py-12 px-6 font-sans">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
                    LeaseCalc Insights
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Expert articles to help you negotiate better leases and avoid hidden costs.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <Card className="h-full hover:shadow-lg transition-shadow border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
                            <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-900">
                                <Image
                                    src={`/leasecalculator${post.image}`}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-center mb-2">
                                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
                                        {post.category}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </CardContent>
                            <CardFooter className="text-xs text-muted-foreground pt-4 border-t border-slate-100 dark:border-slate-900 mt-auto">
                                {post.date} • By {post.author}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </main>
    );
}
