import React from "react";
import { FaGlobe, FaChevronRight, FaBlog, FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <section id="links" className="section link-section">
      <div className="container">
        <h2 className="section-title fade-in">
          My <span className="highlight">Links</span>
        </h2>
        <div className="links-grid">
          {/* Portfolio */}
          <a
            href="#"
            className="link-card fade-in delay-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-icon">
              <FaGlobe />
            </div>
            <div className="link-content">
              <h3>Portfolio</h3>
              <p>View my complete work portfolio</p>
            </div>
            <div className="link-arrow">
              <FaChevronRight />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/raipravat"
            className="link-card fade-in delay-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-icon">
              <FaGithub />
            </div>
            <div className="link-content">
              <h3>GitHub</h3>
              <p>Check out my open-source projects</p>
            </div>
            <div className="link-arrow">
              <FaChevronRight />
            </div>
          </a>

          {/* Blog */}
          <a
            href="https://blog.prabhat.info.np"
            className="link-card fade-in delay-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-icon">
              <FaBlog />
            </div>
            <div className="link-content">
              <h3>Blog</h3>
              <p>Read my web design articles</p>
            </div>
            <div className="link-arrow">
              <FaChevronRight />
            </div>
          </a>

          {/* Resources */}
          <a
            href="#"
            className="link-card fade-in delay-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link-icon">
              <FaDownload />
            </div>
            <div className="link-content">
              <h3>Resources</h3>
              <p>Free design templates and tools</p>
            </div>
            <div className="link-arrow">
              <FaChevronRight />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
