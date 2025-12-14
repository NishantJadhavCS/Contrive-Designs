import React, { useEffect, useState } from "react";
import "./css/Highlights.css";

import ClockGif from "../assets/clock.gif";
import PalleteGif from "../assets/pallete.gif";
import PackageGif from "../assets/package.gif";
import RupeeGif from "../assets/rupee.gif";

export default function Highlights() {
    const items = [
        {
            id: "delivery",
            icon: ClockGif,
            title: "40-Day Delivery Guarantee",
            desc: "On-time delivery or your money back. Your project moves fast, without compromise."
        },
        {
            id: "budget-overview",
            icon: PackageGif,
            title: "Honest Packages",
            desc: "Clear package scopes with no hidden conditions, pick what fits and know exactly what’s included.",
        },
        {
            id: "curated",
            icon: PalleteGif,
            title: "Branded Fittings",
            desc: "Premium fittings and materials for a refined, long-lasting finish."
        },
        {
            id: "budget-friendly",
            icon: RupeeGif,
            title: "Budget Friendly",
            desc: "Standard and customize packages with budget-friendly deals",

        }
    ];

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
