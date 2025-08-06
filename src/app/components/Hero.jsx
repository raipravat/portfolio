"use client"; // Next.js client component directive

import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const name = "Prabhat Rai";
  const typedTextRef = useRef("");
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const type = () => {
      if (!isDeletingRef.current && indexRef.current < name.length) {
        // Typing
        typedTextRef.current = name.slice(0, indexRef.current + 1);
        indexRef.current++;
        document.getElementById("typing-text").textContent =
          typedTextRef.current;
        setTimeout(type, 300); // Typing speed
      } else if (isDeletingRef.current && indexRef.current > 0) {
        // Deleting
        typedTextRef.current = name.slice(0, indexRef.current - 1);
        indexRef.current--;
        document.getElementById("typing-text").textContent =
          typedTextRef.current;
        setTimeout(type, 200); // Deleting speed
      } else if (indexRef.current === name.length) {
        // Pause before deleting
        isDeletingRef.current = true;
        setTimeout(type, 1000); // Pause duration after typing
      } else if (indexRef.current === 0) {
        // Restart typing
        isDeletingRef.current = false;
        setTimeout(type, 500); // Pause before retyping
      }
    };

    // Start the typing animation
    type();

    // Cleanup timeout on unmount
    return () => clearTimeout(type);
  }, []); // Empty dependency array to run only once

  return (
    <section id="hero" className="section  hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column - Text Content */}
          <div className="hero-content">
            <div className="hero-text-wrapper">
              <p className="intro-text fade-in">Hello, my name is</p>
              <h1>
                <span id="typing-text" className="name-typing"></span>
                <span className="cursor">|</span>
              </h1>
              <h2 className="subtitle fade-in delay-1">
                I Craft Digital Experiences
              </h2>
              <p className="bio-text fade-in delay-2">
                I specialize in creating beautiful, functional websites for
                budget-conscious clients in Nepal. Using free tools and
                resources, I deliver professional results without the high
                costs.
              </p>

              <div className="cta-buttons fade-in delay-3">
                <a href="#contact" className="cta-button primary">
                  Hire Me
                </a>
                <a href="#projects" className="cta-button secondary">
                  View Work
                </a>
              </div>
            </div>

            <div className="social-icons fade-in delay-4">
              <a
                href="https://github.com/raipravat"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://x.com/mr_raipravat"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://t.me/raipravat101"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a
                href="https://wa.me/9779842485969"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile and Preview */}
          <div className="hero-preview">
            <div className="profile-container">
              <div className="profile-frame slide-in-right delay-3">
                <img
                  src="images/Hero.png"
                  alt="Hero Image"
                  className="profile-pic"
                  loading="lazy"
                />
                <div className="profile-bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator" id="scrollTrigger">
        <span className="scroll-text">Explore More</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
