import fs from "fs";
import path from "path";
import { globby } from "globby";

async function generateSitemap() {
    // Get all MDX files from the blog directory
    const pages = await globby([
        "src/content/blog/*.mdx",
        "src/app/**/page.tsx",
        "!src/app/**/[*", // Exclude dynamic routes from the initial glob
    ]);

    const baseUrl = "https://huwprosser.github.io";

    // Filter out dynamic routes and duplicates
    const processedPages = pages
        .filter((page) => !page.includes("[") && !page.includes("]"))
        .map((page) => {
            // Convert file path to URL path
            let path = page
                .replace("src/content/blog/", "/blog/")
                .replace("src/app/", "/")
                .replace("/page.tsx", "")
                .replace(".mdx", "");

            // Remove index from path
            return path === "/index" ? "" : path;
        });

    // Remove duplicates
    const uniquePaths = [...new Set(processedPages)];

    // Create sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Main pages -->
    <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    ${uniquePaths
        .filter((path) => path !== "") // Remove empty paths since we already have the root URL
        .map(
            (path) => `
    <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`
        )
        .join("")}
</urlset>`;

    // Write sitemap to the public directory
    fs.writeFileSync("public/sitemap.xml", sitemap);
    console.log("Sitemap generated successfully!");
}

generateSitemap();
