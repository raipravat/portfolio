import React from "react";
import {
  FaGraduationCap,
  FaLaptop,
  FaHandsHelping,
  FaExternalLinkAlt,
  FaStar,
  FaMoneyBillWave,
  FaCheck,
} from "react-icons/fa";
import { FaYoutube, FaHtml5, FaJs, FaWordpress } from "react-icons/fa6"; // you can use Fa from same package, or split if needed

const Praoduct = () => {
  return (
    <section id="Journey" className="section">
      <div className="container">
        <h2 className="section-title fade-in">
          My Self-<span className="highlight">Taught Journey</span>
        </h2>
        <div className="cv-content">
          <div className="cv-intro fade-in">
            <p className="passion-statement">
              <FaGraduationCap className="graduation-icon" /> I'm a
              YouTube-taught web designer who creates affordable sites. By
              learning from free resources, I keep costs low without
              compromising quality.
            </p>
          </div>

          <div className="learning-path">
            <h3 className="fade-in delay-1">
              <FaYoutube /> My Learning Path
            </h3>
            <div className="learning-items">
              <div className="learning-item fade-in delay-2">
                <div className="learning-icon">
                  <FaLaptop />
                </div>
                <div className="learning-content">
                  <h4>YouTube Education</h4>
                  <p>500+ hours of tutorial videos mastered</p>
                  <a href="#" className="learning-link">
                    Favorite Channels <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="learning-item fade-in delay-3">
                <div className="learning-icon">
                  <FaHandsHelping />
                </div>
                <div className="learning-content">
                  <h4>Community Learning</h4>
                  <p>Active in online developer communities</p>
                  <a href="#" className="learning-link">
                    My Resources <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="value-proposition">
            <h3 className="fade-in delay-1">
              <FaStar /> What I Offer
            </h3>
            <div className="value-items">
              {/* Affordable Advantage Column */}
              <div className="value-item fade-in delay-2">
                <div className="value-icon">
                  <FaMoneyBillWave />
                </div>
                <div className="value-content">
                  <h4>Affordable Advantage</h4>
                  <ul className="value-details">
                    <li>
                      <FaCheck /> No expensive agency markups
                    </li>
                    <li>
                      <FaCheck /> Direct creator-client relationship
                    </li>
                    <li>
                      <FaCheck /> Budget-friendly for startups
                    </li>
                    <li>
                      <FaCheck /> Transparent YouTube-taught methods
                    </li>
                  </ul>
                </div>
              </div>

              {/* YouTube-Learned Skills Column */}
              <div className="value-item fade-in delay-3">
                <div className="value-icon">
                  <FaYoutube />
                </div>
                <div className="value-content">
                  <h4>YouTube-Learned Skills</h4>
                  <ul className="value-details">
                    <li>
                      <FaHtml5 /> HTML/CSS (Traversy Media)
                    </li>
                    <li>
                      <FaJs /> JavaScript (Web Dev Simplified)
                    </li>
                    <li>
                      <FaWordpress /> WordPress (WPCrafter)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Praoduct;
