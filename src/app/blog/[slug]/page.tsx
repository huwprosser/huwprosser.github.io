import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import { remark } from "remark";
import html from "remark-html";

// Function to get blog post content
async function getBlogPost(slug: string) {
    try {
        const filePath = path.join(
            process.cwd(),
            "src/content/blog",
            `${slug}.mdx`
        );
        const content = await fs.promises.readFile(filePath, "utf8");
        const processedContent = await remark().use(html).process(content);
        return processedContent.toString();
    } catch {
        return null;
    }
}

// Function to get all blog post slugs for static paths
export async function generateStaticParams() {
    const posts = [
        "why",
        "building-jarvis-in-real-life",
        "betting-on-the-browser",
    ];
    return posts.map((slug) => ({ slug }));
}

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPost({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const content = await getBlogPost(slug);

    if (!content) {
        notFound();
    }

    const title = slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <article className="post-container">
            <Link href="/" className="back-link">
                ← Back to home
            </Link>
            <div className="post-header">
                <h1 className="post-title">{title}</h1>
                <p className="post-date">December 18, 2023</p>
            </div>
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </article>
    );
}
