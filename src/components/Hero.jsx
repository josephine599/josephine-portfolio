import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "../styles/Hero.css";
import profileImage from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">

      {/* Animated Profile Image */}
      <motion.div
        className="hero-image-container"
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={profileImage}
          alt="Josephine Anyango"
          className="hero-image"
        />
      </motion.div>

      {/* Open To Work Badge */}
      <motion.p
        className="hero-badge"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
      >
        ✨ Open to Full-Stack Opportunities ✨ 
      </motion.p>

      {/* Name */}
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false }}
      >
       Hi, I'm Josephine Anyango
      </motion.h1>

      {/* Typing Role Animation */}
      <motion.h2
        className="hero-role"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <Typewriter
          words={[
            "Full-Stack Software Engineer",
            "React & Node.js Developer",
            "Building Scalable Web Applications",
            "Turning Ideas into Reality"
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* Description */}
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: false }}
      >
        I design and build scalable, high-performance web applications
        with modern technologies, clean architecture, and intuitive
        user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: false }}
      >
        <a href="#projects" className="hero-button">
          View Projects
        </a>

        <a
          href="/Josephine_Anyango_CV.pdf"
          className="hero-button secondary"
          download
        >
          Download CV
        </a>
      </motion.div>

    </section>
  );
}
