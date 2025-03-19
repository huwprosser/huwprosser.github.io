"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faYoutube,
    faTiktok,
    faGithub,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import BlogTab from "../components/tabs/BlogTab";
import ProjectsTab from "../components/tabs/ProjectsTab";
import OpenSourceTab from "../components/tabs/OpenSourceTab";
import ArchiveTab from "../components/tabs/ArchiveTab";

type TabId = "blog" | "projects" | "opensource" | "archive";

export default function Home() {
    const [activeTab, setActiveTab] = useState<TabId>("blog");
    const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>(
        {}
    );
    const tabsRef = useRef<Record<TabId, HTMLDivElement | null>>({
        blog: null,
        projects: null,
        opensource: null,
        archive: null,
    });

    const updateUnderline = (tabId: TabId) => {
        const tabElement = tabsRef.current[tabId];
        if (tabElement) {
            setUnderlineStyle({
                width: `${tabElement.offsetWidth}px`,
                left: `${tabElement.offsetLeft}px`,
            });
        }
    };

    useEffect(() => {
        updateUnderline(activeTab);
        const handleResize = () => updateUnderline(activeTab);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [activeTab]);

    const handleTabClick = (tabId: TabId) => {
        setActiveTab(tabId);
        updateUnderline(tabId);
    };

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
                                href="carter-app://home?pet=cat"
                                target="_blank"
                                rel="noopener"
                            >
                                Carter Labs M
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="social-grid">
                <a
                    href="https://tiktok.com/@huwprosser"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <FontAwesomeIcon icon={faTiktok} size="xl" />
                </a>
                <a
                    href="https://x.com/@huwprosser_"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <FontAwesomeIcon icon={faXTwitter} size="xl" />
                </a>
                <a
                    href="https://www.instagram.com/huwprosser?igsh=Y3N1YzlpaHZsaWNz"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
                <a
                    href="https://www.youtube.com/@huwprosser"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <FontAwesomeIcon icon={faYoutube} size="xl" />
                </a>
                <a
                    href="https://github.com/huwprosser"
                    className="bio-link"
                    target="_blank"
                    rel="noopener"
                >
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
            </div>

            <div className="content">
                <div className="tabs-container">
                    <div className="tabs-header">
                        <div
                            className={`tab ${
                                activeTab === "blog" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("blog")}
                            ref={(el) => {
                                tabsRef.current.blog = el;
                            }}
                        >
                            BLOG
                        </div>
                        <div
                            className={`tab ${
                                activeTab === "projects" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("projects")}
                            ref={(el) => {
                                tabsRef.current.projects = el;
                            }}
                        >
                            PROJECTS
                        </div>
                        <div
                            className={`tab ${
                                activeTab === "opensource" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("opensource")}
                            ref={(el) => {
                                tabsRef.current.opensource = el;
                            }}
                        >
                            OPEN SOURCE
                        </div>
                        <div
                            className={`tab ${
                                activeTab === "archive" ? "active" : ""
                            }`}
                            onClick={() => handleTabClick("archive")}
                            ref={(el) => {
                                tabsRef.current.archive = el;
                            }}
                        >
                            ARCHIVE
                        </div>
                        <div className="tab-underline" style={underlineStyle} />
                    </div>

                    <div
                        className={`tab-content ${
                            activeTab === "blog" ? "active" : ""
                        }`}
                    >
                        <BlogTab />
                    </div>

                    <div
                        className={`tab-content ${
                            activeTab === "projects" ? "active" : ""
                        }`}
                    >
                        <ProjectsTab />
                    </div>

                    <div
                        className={`tab-content ${
                            activeTab === "opensource" ? "active" : ""
                        }`}
                    >
                        <OpenSourceTab />
                    </div>

                    <div
                        className={`tab-content ${
                            activeTab === "archive" ? "active" : ""
                        }`}
                    >
                        <ArchiveTab />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
