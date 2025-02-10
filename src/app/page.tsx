import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main>
            <table className="header">
                <tbody>
                    <tr>
                        <td colSpan={2} rowSpan={2}>
                            <h1 className="title">Huw Prosser</h1>
                            <p className="subtitle minor-text">
                                Building things with AI since 2008
                            </p>
                        </td>
                        <th>Age</th>
                        <td className="minor-text">26</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td className="minor-text">London, UK</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td className="minor-text">
                            Machine Learning Engineer, Founder, Content Creator
                        </td>
                        <th>Current</th>
                        <td className="minor-text">
                            <a
                                href="https://carter.chat"
                                target="_blank"
                                rel="noopener"
                            >
                                Carter Labs
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="social-grid">
                <a
                    href="https://www.instagram.com/huwprosser?igsh=Y3N1YzlpaHZsaWNz"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <div>
                        <FontAwesomeIcon icon={faInstagram} /> instagram
                    </div>
                </a>
                <a
                    href="https://www.youtube.com/@huwprosser"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <div>
                        <FontAwesomeIcon icon={faYoutube} /> youtube
                    </div>
                </a>
                <a
                    href="https://tiktok.com/@huwprosser"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <div>
                        <FontAwesomeIcon icon={faTiktok} /> tiktok
                    </div>
                </a>
                <a
                    href="https://github.com/huwprosser"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <div>
                        <FontAwesomeIcon icon={faGithub} /> github
                    </div>
                </a>
                <a
                    href="https://www.xiaohongshu.com/user/profile/67858376000000000803d733"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <div>
                        <FontAwesomeIcon icon={faBook} /> rednote
                    </div>
                </a>
            </div>

            <div className="content">
                <p className="subtitle projects-title">PROJECTS</p>

                {/* Carter Labs */}
                <table className="project">
                    <colgroup>
                        <col span={5} width="16.67%" />
                        <col width="16.67%" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th colSpan={5}>
                                <h4 className="project-title">Carter Labs</h4>
                            </th>
                            <td colSpan={1}>
                                <p className="project-description pad-5">
                                    Est. 2022
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                <div className="project-content">
                                    <p className="project-description">
                                        A UK-based startup founded in 2022
                                        (pre-ChatGPT) to explore how AI could be
                                        used in video games via an API. Gaining
                                        fast prosumer adoption we raised a{" "}
                                        <a
                                            href="https://www.uktech.news/ai/carter-pre-seed-20221220"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            $2-million pre-seed
                                        </a>
                                        . We discovered that AI characters were
                                        an incredibly compelling experience
                                        outside of games too. Our latest
                                        direct-to-consumer app and website,
                                        carter.chat allows users to create, meet
                                        and share characters powered by
                                        state-of-the-art AI.
                                    </p>
                                    <a
                                        className="button"
                                        target="_blank"
                                        rel="noopener"
                                        href="https://carter.chat?utm_source=huwprosser.github.io"
                                    >
                                        VISIT SITE
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Jarvis */}
                <table className="project">
                    <colgroup>
                        <col span={5} width="16.67%" />
                        <col width="16.67%" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th colSpan={5}>
                                <h4 className="project-title">
                                    J.A.R.V.I.S - In Real Life
                                </h4>
                            </th>
                            <td colSpan={1}>
                                <p className="project-description pad-5">
                                    Est. 2008
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                <div className="project-content">
                                    <p className="project-description">
                                        In 2008 Tony Stark's Jarvis appeared in
                                        the first Iron Man movie. I've been
                                        working on a real-life version ever
                                        since. In 2020 I began documenting this
                                        passion on TikTok. This quickly led to
                                        viral success as people shared their
                                        interest in the project. If I'm being
                                        honest, despite recent advancements in
                                        AI, this is a project I just can't put
                                        down.
                                    </p>
                                    <a
                                        className="button"
                                        target="_blank"
                                        rel="noopener"
                                        href="https://tiktok.com/@huwprosser"
                                    >
                                        WATCH NOW
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p className="subtitle projects-title">OPEN SOURCE PROJECTS</p>
                <div className="os-projects">
                    <table className="os-project">
                        <tbody>
                            <tr className="os-title-box">
                                <th>Jarvis MLX</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-content">
                                        <p className="project-description">
                                            A basic starter project for people
                                            wanting to build an AI assistant on
                                            Apple Silicon. It includes ASR, LLM
                                            & TTS.
                                        </p>
                                        <a
                                            className="os-button"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://github.com/huwprosser/jarvis-mlx"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="os-project">
                        <tbody>
                            <tr className="os-title-box">
                                <th>Clap Detection</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-content">
                                        <p className="project-description">
                                            A clap detection model using a
                                            ConvNet. Designed to replicate the
                                            functionality seen in Iron Man 2.
                                            Built{" "}
                                            <a
                                                href="https://youtu.be/OBodG-6YEMo?si=HplOFHEMJWN87rOo"
                                                target="_blank"
                                                rel="noopener"
                                            >
                                                LIVE on TikTok
                                            </a>
                                            .
                                        </p>
                                        <a
                                            className="os-button"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://github.com/huwprosser/clap-detection"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="os-project">
                        <tbody>
                            <tr className="os-title-box">
                                <th>Cluster-Fk</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-content">
                                        <p className="project-description">
                                            Image clustering with KNN. Used for
                                            face recognition projects and image
                                            sorting.
                                        </p>
                                        <a
                                            className="os-button"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://github.com/huwprosser/cluster-fk"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="os-project">
                        <tbody>
                            <tr className="os-title-box">
                                <th>Web Whisper</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="project-content">
                                        <p className="project-description">
                                            Whisper ASR in the browser. Using a
                                            FastAPI server, Websockets and voice
                                            activity detection.
                                        </p>
                                        <a
                                            className="os-button"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://github.com/huwprosser/web-whisper"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="subtitle projects-title">OLDER PROJECTS</p>
                <table className="project">
                    <colgroup>
                        <col span={5} width="16.67%" />
                        <col width="16.67%" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th colSpan={5}>
                                <h4 className="project-title">
                                    Blooware Technologies
                                </h4>
                            </th>
                            <td colSpan={1}>
                                <p className="project-description pad-5">
                                    Est. 2016
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                <div className="project-content">
                                    <p className="project-description">
                                        At age 17, I started Blooware to
                                        automate SMEs in the UK with Machine
                                        Learning. We worked with companies in
                                        E-commerce, consumer apps, sports,
                                        construction logistics, construction and
                                        UXO. Blooware wrapped up in 2021. We
                                        successfully worked over multiple years
                                        with 10+ companies.
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Blog Posts Section */}
                <p className="subtitle projects-title">BLOG</p>
                <div className="blog-posts">
                    <Link href="/blog/why" className="blog-post-link">
                        <div className="blog-post">
                            <h3>Why?</h3>
                            <p className="blog-post-date">December 18, 2023</p>
                            <p className="blog-post-excerpt">
                                Thoughts on building in public and sharing
                                knowledge.
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
                                The journey of building a real-life Jarvis AI
                                assistant.
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
                                Why we're focusing on browser-based AI
                                experiences.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
