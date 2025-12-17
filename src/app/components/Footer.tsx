"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <p
                className="footer-text"
                onClick={() => {
                    const email = "aHV3QGNhcnRlci5jaGF0";
                    const footerText = document.querySelector(".footer-text");
                    if (footerText) {
                        footerText.textContent = atob(email);
                    }
                }}
            >
                Contact me
            </p>
        </footer>
    );
}
