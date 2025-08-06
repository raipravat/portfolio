"use client";

import React, { useEffect } from "react";

const Recaptch = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="recaptcha-container">
      <div
        className="g-recaptcha"
        data-sitekey="6Lcnc5MrAAAAACkF0iFyq5TvMLfYTk_rU49l5qQ4"
      ></div>
    </div>
  );
};

export default Recaptch;
