// PackageModal.jsx
import React, { useEffect, useRef } from "react";
import "./css/PackageModal.css";

const PHONE = "+919820555659";
const whatsappBase = (msg) =>
    `https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`;

const PACKAGE_LIST = [
    {
        id: 0,
        title: "1 BHK — Standard Package",
        description: "Smart, space-saving preset themes…",
        price: "₹4,25,000",
        tableHeaders: ["Entrance", "Specification", "Client to provide"],
        tableRows: [
            { Entrance: "TV Unit", Specification: "Size - 6x4 - Meriono Laminate, Century Ply", "Client to provide": "T-Paati, Rafters" },
            { Entrance: "Modular Kitchen", Specification: "Size - 6x2 - Meriono PVC Laminate, Century Ply, Hettich channels", "Client to provide": "Handles, Knobs" },
            { Entrance: "Wardrobe", Specification: "Size - 6x6 - Meriono Laminate, Century Ply", "Client to provide": "Handles, Knobs, T-Paati, Rafters" },
            { Entrance: "Bed", Specification: "Size - 6x5 - Meriono Laminate, Century Ply", "Client to provide": "Handles, Knobs" },
            { Entrance: "Dressing Table", Specification: "Size - 5x1.5 - Meriono Laminate, Century Ply", "Client to provide": "Handles, Knobs" },
            { Entrance: "False Ceiling", Specification: "GPROC Gypsum board & Channels", "Client to provide": "-" },
            { Entrance: "Painting", Specification: "Asian Paint - Putti + Primer +2 coat paint", "Client to provide": "-" },
        ],
    },
    {
        id: 1,
        title: "2 BHK — Signature Package",
        description: "Turnkey preset designs curated by our team — built for style, function and fast delivery.",
        price: "₹6,25,000",

        tableHeaders: ["Entrance", "Specification", "Client to provide"],

        tableRows: [
            {
                Entrance: "TV Unit",
                Specification: "Size - 6x4 - Meriono Laminate, Century Ply",
                "Client to provide": "T-Paati, Rafters"
            },
            {
                Entrance: "Modular Kitchen",
                Specification: "Size - 6x2 - Meriono PVC Laminate, Century Ply, Hettich channels",
                "Client to provide": "Handles, Knobs"
            },
            {
                Entrance: "Wardrobe x2",
                Specification: "Size - 6x6 - Meriono Laminate, Century Ply",
                "Client to provide": "Handles, Knobs, T-Paati, Rafters"
            },
            {
                Entrance: "Bed x2",
                Specification: "Size - 6x5 - Meriono Laminate, Century Ply",
                "Client to provide": "Handles, Knobs"
            },
            {
                Entrance: "Dressing Table x2",
                Specification: "Size - 5x1.5 - Meriono Laminate, Century Ply",
                "Client to provide": "Handles, Knobs"
            },
            {
                Entrance: "False Ceiling",
                Specification: "GPROC Gypsum board & Channels",
                "Client to provide": "-"
            },
            {
                Entrance: "Painting",
                Specification: "Asian Paint - Putti + Primer +2 coat paint",
                "Client to provide": "-"
            }
        ]
    }

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
                                    {data.tableHeaders.map((h) => (
                                        <th key={h}>{h}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {rows.map((r, i) => (
                                    <tr key={i}>
                                        {data.tableHeaders.map((h) => (
                                            <td key={h}>{r[h]}</td>
                                        ))}
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
