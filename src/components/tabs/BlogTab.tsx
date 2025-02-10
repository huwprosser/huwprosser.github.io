import Link from "next/link";

export default function BlogTab() {
    return (
        <div className="blog-posts">
            <Link href="/blog/why" className="blog-post-link">
                <div className="blog-post">
                    <h3>Why?</h3>
                    <p className="blog-post-date">December 18, 2023</p>
                    <p className="blog-post-excerpt">
                        Thoughts on building in public and sharing knowledge.
                    </p>
                </div>
            </Link>
            <Link
                href="/blog/building-jarvis-in-real-life"
                className="blog-post-link"
            >
                <div className="blog-post">
                    <h3>Building Jarvis in Real Life</h3>
                    <p className="blog-post-date">December 18, 2023</p>
                    <p className="blog-post-excerpt">
                        The journey of building a real-life Jarvis AI assistant.
                    </p>
                </div>
            </Link>
            <Link
                href="/blog/betting-on-the-browser"
                className="blog-post-link"
            >
                <div className="blog-post">
                    <h3>Betting on the Browser</h3>
                    <p className="blog-post-date">December 18, 2023</p>
                    <p className="blog-post-excerpt">
                        Why we're focusing on browser-based AI experiences.
                    </p>
                </div>
            </Link>
        </div>
    );
}
