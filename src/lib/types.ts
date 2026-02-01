export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML/Markdown string
    date: string;
    author: string;
    category: string;
    readTime: string;
    keywords: string[];
    image: string;
}
