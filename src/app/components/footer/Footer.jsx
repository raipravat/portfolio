import React from "react";
import "./Footer.css"; // or use CSS modules if needed

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright fade-in">
            &copy; 2024 - {currentYear},{" "}
            <a
              href="https://prabhat.info.np"
              target="_blank"
              rel="noopener noreferrer"
            >
              Www.prabhat.info.np
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
