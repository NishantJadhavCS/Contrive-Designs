import React from "react";
import "./css/Flow.css";


import meet from "../assets/flow/consultation.png";
import clarity from "../assets/flow/clarity.png";
import book from "../assets/flow/booking.png";
import build from "../assets/flow/build.png";
import happy from "../assets/flow/happy.png";
import arrowGif from "../assets/flow/arrow.gif";


const steps = [
    {
        icon: meet,
        title: "Meet an Interior Consultant",
        desc: "Discuss your needs with our interior consultant.",
    },
    {
        icon: clarity,
        title: "Gain Clarity",
        desc: "Get clarity on design, timeline, and pricing.",
    },
    {
        icon: book,
        title: "Book Your Package",
        desc: "Select a package that fits your space and budget.",
    },
    {
        icon: build,
        title: "Get Your Home Ready",
        desc: "We design and execute your interiors in 40 days.",
    },
    {
        icon: happy,
        title: "Become a Happy Customer",
        desc: "Enjoy your finished home with complete peace.",
    },
];



export default function Flow() {
    return (
        <section className="flow">
            <h3 className="flow__title">How It Works</h3>


            <div className="flow__steps">
                {steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                        <div className="flow__step">
                            <div className="flow__icon">
                                <img src={step.icon} alt={step.title} />
                            </div>
                            <h4 className="flow__step-title">{step.title}</h4>
                            <p className="flow__step-desc">{step.desc}</p>
                        </div>

                        {idx < steps.length - 1 && (
                            <div className="flow__gif-arrow">
                                <img src={arrowGif} alt="arrow" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </section>
    );
}