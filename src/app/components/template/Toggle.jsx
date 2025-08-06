"use client";

import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Toggle = () => {
  const [theme, setTheme] = useState("system");
  const [isMounted, setIsMounted] = useState(false); // ensure client-only rendering

  // Set mounted flag to true after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Set initial theme on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      setHtmlTheme(saved);
    } else {
      const prefersLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      setTheme("system");
      setHtmlTheme(prefersLight ? "light" : "dark");
    }
  }, []);

  // Update theme on system change
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        setHtmlTheme(e.matches ? "light" : "dark");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const setHtmlTheme = (mode) => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode);
    }
  };

  const getCurrentTheme = () => {
    if (theme === "light" || theme === "dark") return theme;

    if (typeof window !== "undefined") {
      const systemLight = window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches;
      return systemLight ? "light" : "dark";
    }

    return "light"; // fallback on server
  };

  const toggleTheme = () => {
    const newTheme = getCurrentTheme() === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setHtmlTheme(newTheme);
  };

  if (!isMounted) return null; // avoid SSR mismatch

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {getCurrentTheme() === "light" ? (
        <FaSun size={24} />
      ) : (
        <FaMoon size={24} />
      )}
    </button>
  );
};

export default Toggle;
