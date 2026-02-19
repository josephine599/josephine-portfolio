import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  "React",
  "JavaScript (ES6+)",
  "HTML & CSS",
  "Tailwind CSS",
  "Python",
  "Node.js / Express",
  "PostgreSQL / Databases",
  "Git & GitHub",
  "Responsive Design",
  "Figma / UI Design",
  "API Integration",
  "Version Control",
  "Team Collaboration",
  "Problem Solving",
  "Cloud & Deployment",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="skills-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        I deliver complete, scalable, and responsive solutions.
      </motion.p>

      <ul className="skills-list">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

    </section>
  );
}
