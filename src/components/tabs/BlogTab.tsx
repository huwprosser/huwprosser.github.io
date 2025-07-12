import Link from "next/link";

export default function BlogTab() {
    return (
        <div className="blog-posts">
            <Link href="/blog/vr-is-cooked" className="blog-post-link">
                <div className="blog-post">
                    <h3>VR is Cooked</h3>
                    <p className="blog-post-date">July 13, 2025</p>
                    <p className="blog-post-excerpt">
                        The VR industry is stuck in a loop, rehashing the same
                        concepts. Let's stop playing god and build something
                        people would actually use.
                    </p>
                </div>
            </Link>
            <Link
                href="/blog/betting-on-the-browser"
                className="blog-post-link"
            >
                <div className="blog-post">
                    <h3>Betting on the Browser</h3>
                    <p className="blog-post-date">October 18, 2023</p>
                    <p className="blog-post-excerpt">
                        Why we're focusing on browser-based AI experiences.
                    </p>
                </div>
            </Link>
            <Link href="/blog/why" className="blog-post-link">
                <div className="blog-post">
                    <h3>Why?</h3>
                    <p className="blog-post-date">Novemeber 12, 2023</p>
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
                    <p className="blog-post-date">October 23, 2022</p>
                    <p className="blog-post-excerpt">
                        The journey of building a real-life Jarvis AI assistant.
                    </p>
                </div>
            </Link>
        </div>
    );
}
