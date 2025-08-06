"use client"; // For Next.js App Router

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaTwitter,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

// Load Recaptcha only on client side
const Recaptch = dynamic(() => import("./template/Recaptcha"), { ssr: false });

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Handle form force submit if other script blocked it
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener(
        "submit",
        (e) => {
          if (e.defaultPrevented) {
            e.stopImmediatePropagation();
            form.submit();
          }
        },
        true
      );
    });

    return () => {
      forms.forEach((form) => {
        form.removeEventListener("submit", () => {}, true);
      });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Ensure grecaptcha is available
    if (typeof window !== "undefined" && window.grecaptcha) {
      const recaptchaToken = grecaptcha.getResponse();
      if (!recaptchaToken) {
        alert("Please verify the reCAPTCHA.");
        setIsSubmitting(false);
        return;
      }

      formData.append("g-recaptcha-response", recaptchaToken);
    } else {
      alert("⚠️ reCAPTCHA not loaded yet. Try again.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw08OWQeKnUrHfbDTUcNQy6BjTehwJ9SJnMRTCsI7OLuv_62P5wdInG02LSoGIc3htN4Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
        grecaptcha.reset(); // reset captcha
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("⚠️ Something went wrong.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title fade-in">
          Get In <span className="highlight">Touch</span>
        </h2>
        <div className="contact-content">
          {/* Left Info */}
          <div className="contact-info slide-in-left delay-1">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope className="fa-icon" />
              <span>mr.raipravat@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="fa-icon" />
              <span>+977-9842485969</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="fa-icon" />
              <span>Koshi, Nepal</span>
            </div>
            <div className="info-item">
              <FaClock className="fa-icon" />
              <span>Everyday, 8pm–11pm</span>
            </div>

            {/* Socials */}
            <div className="social-links">
              <a
                href="https://github.com/raipravat"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/mr_raipravat"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://t.me/raipravat101"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="https://wa.me/9779842485969"
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
            id="contactForm"
          >
            <div className="form-group fade-in delay-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                required
              />
            </div>
            <div className="form-group fade-in delay-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                required
              />
            </div>
            <div className="form-group fade-in delay-4">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group fade-in delay-5">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* Recaptcha */}
            <Recaptch />

            <div className="button-wrapper">
              <button
                type="submit"
                className="submit-btn fade-in delay-5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
