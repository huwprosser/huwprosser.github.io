import { getAllBlogPosts } from "@/lib/blog";
import HomeClient from "./HomeClient";

export default async function Home() {
    const blogPosts = await getAllBlogPosts();
    return <HomeClient blogPosts={blogPosts} />;
}
