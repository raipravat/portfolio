import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Optional: Use this if you're using react-icons

const Testimonial = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="section-title fade-in">
          Client <span className="highlight">Testimonials</span>
        </h2>
        <div className="testimonials-container">
          {/* Testimonial 1 */}
          <div className="testimonial-card fade-in delay-1">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                Prabhat designed a beautiful website for my small business that
                exceeded all my expectations. His attention to detail and quick
                turnaround time were impressive.
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/43.jpg"
                  alt="Smriti Karki"
                  className="author-img"
                />
                <div className="author-info">
                  <h4>Smriti Karki</h4>
                  <p>Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card fade-in delay-2">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                Working with Prabhat was a pleasure. He understood my vision and
                created a website that perfectly represents my brand. Highly
                recommended!
              </p>
              <div className="testimonial-author">
                <img
                  src="images/Testimonials/Rajan.png"
                  alt="Rajen Rai"
                  className="author-img"
                />
                <div className="author-info">
                  <h4>Rajen Rai</h4>
                  <p>YouTuber & Blogger</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card fade-in delay-3">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                As a non-profit, we needed an affordable website solution.
                Prabhat delivered an amazing site that's helped us reach more
                people than ever before.
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Priya Patel"
                  className="author-img"
                />
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Non-profit Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
