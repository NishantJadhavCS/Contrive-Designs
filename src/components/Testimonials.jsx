import TestimonialCard from "./TestimonialCard";
import "./css/testimonial.css";

export default function Testimonials() {
    return (
        <div>
            <div className="testimonials-header" id="testimonials">
                <h2 className="section-title">What Our Clients Say</h2>
                <p className="section-subtitle">
                    Hear from some of our satisfied customers who have transformed their
                    spaces with our interior design expertise.
                </p>
            </div>

            <div className="testimonials-section">
                <TestimonialCard
                    quote="Meeting the consultant alone gave me clear insights into the interior design process and helped me make confident decisions."
                    name="RUTUJA DESHMUKH"
                    city="Mumbai"
                    rating={5}
                />

                <TestimonialCard
                    quote="The team delivered thoughtful designs with smooth execution, making my 2BHK feel modern, spacious, and well within budget."
                    name="SANDEEP KULKARNI"
                    city="Navi Mumbai"
                    rating={4}
                />

                <TestimonialCard
                    quote="Their approach to design and space planning transformed my office into a premium workspace that feels productive and refined."
                    name="SUHASH SHIRDE"
                    city="Mumbai"
                    rating={5}
                />
            </div>

        </div>
    );
}