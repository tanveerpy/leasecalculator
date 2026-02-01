import { getBlogPost, BLOG_POSTS } from "@/lib/blog-posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
    params: {
        slug: string;
    };
}

// Generate static params for all posts
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getBlogPost(params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | LeaseCalc Blog`,
        description: post.excerpt,
        keywords: post.keywords,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = getBlogPost(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="container max-w-4xl mx-auto py-12 px-6 font-sans">
            <div className="mb-8">
                <Link href="/blog">
                    <Button variant="ghost" className="pl-0 hover:pl-0 text-muted-foreground hover:text-primary">
                        ← Back to Articles
                    </Button>
                </Link>
            </div>

            <article>
                <header className="mb-10 space-y-6 text-center">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mt-8">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </header>

                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <hr className="my-12 border-slate-200 dark:border-slate-800" />

            <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Ready to Run the Numbers?</h3>
                <Link href="/">
                    <Button size="lg" className="text-lg px-8">
                        Open Lease Calculator
                    </Button>
                </Link>
            </div>
        </main>
    );
}
