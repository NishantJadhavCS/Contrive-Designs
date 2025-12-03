// PackageModal.jsx
import React, { useEffect, useRef } from "react";
import "./css/PackageModal.css";

const PHONE = "+919820555659"; // keep same number as other code
const whatsappBase = (msg) =>
    `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

const PACKAGE_LIST = [
    {
        id: 0,
        title: "1 BHK — Standard Package",
        description: "Smart, space-saving preset themes: Modern · Minimal · Cozy — optimized for compact living.",
        price: "₹4,00,000",
        tableRows: [
            { item: "Wardrobe", measurements: "W: 120cm H: 210cm", size: "2-door", materials: "Engineered wood, laminate" },
            { item: "TV Unit", measurements: "W: 150cm H: 60cm", size: "Low console", materials: "Plywood, veneer" },
            { item: "Kitchen Counter", measurements: "L: 240cm H: 90cm", size: "L-shape", materials: "Granite top, modular base" },
            { item: "Dining Table", measurements: "W: 80cm L: 120cm", size: "2-seater", materials: "Solid wood" },
            { item: "Bedframe", measurements: "Queen", size: "160x200cm", materials: "Solid wood, veneer" },
            { item: "Study Desk", measurements: "W: 100cm H: 75cm", size: "Single", materials: "Plywood" },
            { item: "Storage Shelves", measurements: "Custom", size: "Wall-mounted", materials: "Engineered wood" },
            { item: "Lighting", measurements: "As per layout", size: "Mixed", materials: "LED fixtures" },
        ],
    },
    {
        id: 1,
        title: "2 BHK — Signature Package",
        description: "Turnkey preset designs curated by our team — built for style, function and fast delivery.",
        price: "₹8,00,000",
        tableRows: [
            { item: "Master Wardrobe", measurements: "W: 200cm H: 220cm", size: "3-door", materials: "Engineered wood, laminate" },
            { item: "TV Unit", measurements: "W: 220cm H: 60cm", size: "Feature wall", materials: "Plywood, veneer" },
            { item: "Kitchen", measurements: "L: 300cm H: 90cm", size: "Modular", materials: "Granite top, MDF" },
            { item: "Dining", measurements: "W: 90cm L: 160cm", size: "4-seater", materials: "Solid wood" },
            { item: "Beds", measurements: "2 x Queen", size: "160x200cm", materials: "Solid wood" },
            { item: "Study", measurements: "W: 140cm", size: "Work nook", materials: "Plywood" },
            { item: "Utility Storage", measurements: "Custom", size: "Cupboards", materials: "MDF" },
            { item: "Lighting & Decor", measurements: "Per layout", size: "Multiple", materials: "LED & fittings" },
        ],
    },
];

export default function PackageModal({ open, onClose, packageId }) {
    const overlayRef = useRef(null);
    const closeBtnRef = useRef(null);
    const previouslyFocused = useRef(null);

    useEffect(() => {
        if (!open) return;
        previouslyFocused.current = document.activeElement;
        document.body.style.overflow = "hidden";
        closeBtnRef.current && closeBtnRef.current.focus();
        return () => {
            document.body.style.overflow = "";
            try { previouslyFocused.current && previouslyFocused.current.focus(); } catch { }
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        function onKey(e) {
            if (e.key === "Escape") onClose();
            if (e.key !== "Tab") return;
            const focusable = overlayRef.current.querySelectorAll(
                "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])"
            );
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) { e.preventDefault(); last.focus(); }
            } else {
                if (document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    const data = PACKAGE_LIST.find((p) => p.id === packageId) || PACKAGE_LIST[0];
    const rows = data.tableRows || [];

    return (
        <div
            className="package-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={data.title}
            ref={overlayRef}
            onMouseDown={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
            <div className="package-modal" role="document">
                <header className="package-modal__head">
                    <h3 className="package-modal__title">{data.title}</h3>
                    <button
                        ref={closeBtnRef}
                        className="package-modal__close"
                        onClick={onClose}
                        aria-label="Close dialog"
                        title="Close"
                    >
                        ✕
                    </button>
                </header>

                <div className="package-modal__body">
                    <p className="package-modal__desc">{data.description}</p>
                    <p className="package-modal__price">{data.price}</p>

                    <div className="package-modal__table-wrap">
                        <table className="package-modal__table" role="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Measurements</th>
                                    <th>Size</th>
                                    <th>Materials Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i}>
                                        <td>{r.item}</td>
                                        <td>{r.measurements}</td>
                                        <td>{r.size}</td>
                                        <td>{r.materials}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="package-modal__actions">
                        <a
                            className="button"
                            href={whatsappBase(`Hi, I'm interested in the ${data.title}. Please share inclusions, sample designs and pricing.`)}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="button__icon-wrapper" aria-hidden="true">
                                <svg className="button__icon-svg" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                                <svg className="button__icon-svg button__icon-svg--copy" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                                </svg>
                            </span>
                            <span className="button__text">Get details</span>
                        </a>

                        <button className="btn-outline" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
