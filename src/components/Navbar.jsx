import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 Added for hamburger

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#about", "#skills", "#services", "#projects", "#contact"];
      const scrollPos = window.scrollY + 100;

      setScrolled(scrollPos > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="nav-logo">Josephine Anyango</span>

      {/* ✅ Hamburger Button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* ✅ Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={active === link.href ? "active" : ""}
            onClick={() => setMenuOpen(false)} // close menu after click
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}