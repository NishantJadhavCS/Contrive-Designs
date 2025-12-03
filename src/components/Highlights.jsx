import React, { useEffect, useState } from "react";
import "./css/Highlights.css";

// Import GIF assets (adjust path if needed)
import ClockGif from "../assets/clock.gif";
import WalletGif from "../assets/wallet.gif";
import PalleteGif from "../assets/pallete.gif";
import PackageGif from "../assets/package.gif";

export default function Highlights() {
    const items = [
        {
            id: "delivery",
            icon: ClockGif,
            title: "40-Day Delivery Guarantee",
            desc: "On-time delivery or your money back.",
        },
        {
            id: "budget-overview",
            icon: PackageGif,
            title: "Packages & Budgets",
            desc: "Clear package scopes with budget-friendly options — pick what fits and know exactly what’s included.",
        },
        {
            id: "curated",
            icon: PalleteGif,
            title: "Professional Designs",
            desc: "Designs created by experienced interior stylists for practical, beautiful homes.",
        },
    ];

    // keep simple responsive behavior (if you need different layout on mobile)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 599);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section className="highlights" aria-label="Highlights Section">
            {/* Heading */}
            <div className="highlights-heading">
                <h2 className="hi-title">Why Choose Us</h2>
                <p className="hi-subtitle">Experience a seamless and professional interior design process.</p>
            </div>

            <div className="highlights-inner">
                {/* Render static cards (no scrolling animation) */}
                <div className={`cards-grid ${isMobile ? "mobile" : "desktop"}`} role="list">
                    {items.map((it) => (
                        <article className="highlight-card" role="listitem" key={it.id}>
                            <div className="icon-wrap">
                                <img src={it.icon} alt="" className="hi-gif" />
                            </div>

                            <div className="card-text">
                                <h3 className="card-title">{it.title}</h3>
                                <p className="card-desc">{it.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
