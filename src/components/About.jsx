import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="about-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Hi! I'm <strong>Josephine Anyango</strong>, a passionate Full-Stack Software Engineer
          focused on building modern, scalable, and interactive web applications.
          I work with React, Node.js, Python, PostgreSQL, and cloud technologies to
          deliver end-to-end solutions.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          I enjoy solving complex problems, learning new technologies, and working
          with teams to build reliable and user-friendly digital experiences.
          My work blends creativity, performance, and clean architecture.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          Beyond coding, I explore UI/UX design, contribute to open-source projects,
          and continuously improve development workflows. I believe in writing
          maintainable code that makes a real-world impact.
        </motion.p>

        <motion.a
          href="#contact"
          className="about-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
        >
          Get in Touch
        </motion.a>
      </motion.div>

    </section>
  );
}
