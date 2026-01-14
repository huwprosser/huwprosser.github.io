import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { getAllBlogPosts } from "@/lib/blog";

// Function to get blog post content
async function getBlogPost(slug: string) {
    try {
        const filePath = path.join(
            process.cwd(),
            "src/content/blog",
            `${slug}.md`
        );
        const fileContents = await fs.promises.readFile(filePath, "utf8");
        const { data, content } = matter(fileContents);
        const processedContent = await remark().use(html).process(content);
        return {
            content: processedContent.toString(),
            title:
                data.title ||
                slug
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" "),
            date: data.date || new Date().toISOString().split("T")[0],
            video: data.video,
        };
    } catch {
        return null;
    }
}

// Function to get all blog post slugs for static paths
export async function generateStaticParams() {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPost({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="post-container">
            <Link href="/" className="back-link">
                ← Back to home
            </Link>
            <div className="post-header">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            </div>
            {post.video && (
                <div className="w-full aspect-video ">
                    <iframe
                        style={{
                            width: "100%",
                            borderRadius: "0.5rem",
                            maxWidth: "none",
                            aspectRatio: "16/9",
                        }}
                        src={`https://www.youtube.com/embed/${
                            post.video.split("v=")[1]
                        }`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}
