import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const blogDirectory = path.join(process.cwd(), "src/content/blog");
    const files = fs.readdirSync(blogDirectory);

    const posts = files
        .filter((file) => file.endsWith(".md") && file !== "test.md")
        .map((file) => {
            const slug = file.replace(/\.md$/, "");
            const filePath = path.join(blogDirectory, file);
            const fileContents = fs.readFileSync(filePath, "utf8");

            // Try to parse frontmatter, fallback to defaults
            const { data, content } = matter(fileContents);

            // Extract title from frontmatter, first heading, or slug
            let title =
                data.title ||
                content.match(/^#+\s+(.+)$/m)?.[1]?.trim() ||
                slug
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ");

            // Extract date from frontmatter or use file modification time
            const date =
                data.date ||
                fs.statSync(filePath).mtime.toISOString().split("T")[0];

            // Extract excerpt from frontmatter or first paragraph
            const excerpt =
                data.excerpt ||
                content
                    .split("\n\n")
                    .find((para) => para.trim() && !para.trim().startsWith("#"))
                    ?.replace(/^#+\s+/, "")
                    .trim()
                    .substring(0, 150) ||
                "Read more...";

            return {
                slug,
                title,
                date,
                excerpt: excerpt.length > 150 ? excerpt + "..." : excerpt,
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

    return posts;
}
