// src/components/About.jsx
import React from "react";
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p className="about-text">
          Hi! I'm Josephine Anyango, a passionate <strong>Full-Stack Software Engineer</strong> dedicated to building modern, scalable, and interactive web applications.  
          I specialize in React, Node.js, Python, PostgreSQL, and cloud technologies to create end-to-end solutions that turn ideas into reality.
        </p>

        <p className="about-text">
          I thrive on solving complex challenges, continuously learning new technologies, and collaborating with teams to deliver engaging and high-quality digital experiences.  
          My approach combines creativity, technical expertise, and best practices to build software that is both functional and visually appealing.
        </p>

        <p className="about-text">
          Beyond coding, I explore UI/UX design, contribute to open-source projects, and optimize development workflows.  
          I believe in writing clean, maintainable code, implementing responsive design, and leveraging modern technologies to make a real impact.
        </p>

        <p className="about-text">
          When I'm not coding, I enjoy experimenting with new frameworks, learning about cloud architecture, and refining my skills in system design and full-stack development.
        </p>

        <a href="#contact" className="about-button">Get in Touch</a>
      </div>
    </section>
  );
}
