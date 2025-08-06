"use client";

import React, { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Scroll2top = () => {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const sections = document.querySelectorAll(".section");
    const navItems = document.querySelectorAll(".nav-link");
    const indicatorDots = document.querySelectorAll(
      ".current-section-indicator a"
    );
    const activeIndicator = document.querySelector(".nav-indicator");

    const handleScroll = () => {
      // Navbar scroll effect
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }

      // Scroll-to-top button
      if (window.pageYOffset > 300) {
        scrollToTopBtn?.classList.add("visible");
      } else {
        scrollToTopBtn?.classList.remove("visible");
      }

      // Active nav link
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${currentSection}`) {
          item.classList.add("active");
          // Nav indicator update
          const activeItem = item.parentElement;
          const itemLeft = activeItem?.offsetLeft;
          const itemWidth = activeItem?.offsetWidth;
          if (activeIndicator) {
            activeIndicator.style.width = `${itemWidth}px`;
            activeIndicator.style.left = `${itemLeft}px`;
            activeIndicator.style.opacity = "1";
          }
        }
      });

      // Indicator dots
      indicatorDots.forEach((dot) => {
        dot.classList.remove("active");
        if (dot.getAttribute("href") === `#${currentSection}`) {
          dot.classList.add("active");
        }
      });

      if (!currentSection && activeIndicator) {
        activeIndicator.style.opacity = "0";
      }
    };

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          });
        }
      });
    });

    // Scroll to bottom
    const scrollTrigger = document.getElementById("scrollTrigger");
    scrollTrigger?.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });

    // Scroll-to-top button click
    scrollToTopBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Intersection animations
    const animateElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .scale-in, .rotate-in"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    animateElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className="scroll-to-top"
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default Scroll2top;
