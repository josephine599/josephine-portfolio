import React from "react";
import { motion } from "framer-motion"; // Added for animation
import '../styles/Hero.css';
import profileImage from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Profile Image with fade-in */}
      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImage} alt="Josephine Anyango" className="hero-image"/>
      </motion.div>

      {/* Subtitle with fade-in */}
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full-Stack Software Engineer | Building Modern, Scalable Web Applications <br />
        Turning Ideas into Reality
      </motion.p>

      {/* Button with fade-in */}
      <motion.a
        href="#projects"
        className="hero-button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Explore My Work
      </motion.a>
    </section>
  );
}
