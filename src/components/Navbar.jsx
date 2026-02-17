import React from "react";
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <span className="nav-logo">WELCOME TO MY PORTFOLIO</span>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="/Josephine_Anyango_CV.pdf" target="_blank" className="cv-btn">Download CV</a>
      </div>
    </nav>
  );
}
