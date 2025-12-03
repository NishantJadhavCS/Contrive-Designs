import { useState, useEffect, useRef } from "react";
import "./css/Navbar.css";
import logo from "../assets/logo.png";

const bannerItems = [
    "Free site visit · Book now",
    "40-day delivery guarantee",
    "New: 2 BHK signature package live",
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true); // true = visible
    const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
    const ticking = useRef(false);

    const whatsappNumber = "+919820555659";
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=Hi%20Contrive%20Designs`;
    const tagline = "Welcome to Contrive Designs";

    useEffect(() => {
        const THRESHOLD = 10; // minimum px change to trigger
        const handleScroll = () => {
            const currentY = window.scrollY || 0;

            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const delta = currentY - lastY.current;

                    if (currentY <= 0) {
                        // at top -> always show
                        setShowHeader(true);
                    } else if (delta > THRESHOLD) {
                        // scrolling down
                        setShowHeader(false);
                    } else if (delta < -THRESHOLD) {
                        // scrolling up
                        setShowHeader(true);
                    }
                    lastY.current = currentY;
                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* ===== HEADER ===== */}
            <header className={`site-header ${showHeader ? "" : "site-header--hidden"}`}>
                <div className="header-inner container">
                    {/* MOBILE: HAMBURGER */}
                    <button className="menu-toggle-mobile" onClick={() => setOpen(true)}>
                        <svg width="26" height="20" viewBox="0 0 20 14">
                            <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* LOGO (center on mobile, normal on desktop) */}
                    <a href="/" className="brand">
                        <img src={logo} alt="Contrive Designs" className="brand-logo" />
                    </a>

                    {/* DESKTOP NAV */}
                    <nav className="header-center desktop-only">
                        <ul className="nav-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#packages">Packages</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                        </ul>
                    </nav>

                    {/* RIGHT: Desktop Contact Button */}
                    <div className="header-right desktop-only">
                        <a className="btn-contact" href={whatsappLink} target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </div>
                </div>
            </header>

            {/* Overlay for drawer */}
            <div className={`nav-overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

            {/* Mobile drawer */}
            <aside className={`mobile-drawer ${open ? "open" : ""}`}>
                <button className="drawer-close-btn" onClick={() => setOpen(false)}>✕</button>

                <ul className="drawer-links">
                    <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                    <li><a href="#packages" onClick={() => setOpen(false)}>Packages</a></li>
                    <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                    <li><a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a></li>
                </ul>

                <a href={whatsappLink} target="_blank" className="drawer-contact-btn" rel="noopener noreferrer">Contact Us</a>
            </aside>

            {/* Tagline banner — when header is hidden, banner rises to top */}
            <div className={`tagline-banner ${showHeader ? "" : "tagline-banner--top"}`}>
                <div className="tagline-banner__inner">
                    <span className="tagline-banner__text">
                        Your static tagline goes here — interior design made easy.
                    </span>
                </div>
            </div>
        </>
    );
}
