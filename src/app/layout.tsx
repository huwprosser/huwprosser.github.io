import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React from "react";

config.autoAddCss = false;

export const metadata: Metadata = {
    metadataBase: new URL("https://huwprosser.github.io"),
    title: "Huw Prosser",
    description: "Building things with AI since 2008",
    openGraph: {
        title: "Huw Prosser",
        description: "Building things with AI since 2008",
        url: "https://huwprosser.github.io/",
        siteName: "huwprosser.github.io",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Huw Prosser",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
