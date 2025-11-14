import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogTabProps {
    posts: BlogPost[];
}

export default function BlogTab({ posts }: BlogTabProps) {
    return (
        <div className="blog-posts">
            {posts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="blog-post-link"
                >
                    <div className="blog-post">
                        <h3>{post.title}</h3>
                        <p className="blog-post-date">
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        <p className="blog-post-excerpt">{post.excerpt}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
