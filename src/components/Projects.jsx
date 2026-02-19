import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";
import mealPlannerImg from "../assets/projects/meal-planner.png";
import sweetHomesImg from "../assets/projects/sweet-homes.png";
import spacerImg from "../assets/projects/spacer.png";

export default function Projects() {
  const projects = [
    {
      title: "Meal Planner",
      description:
        "Meal planner app that lets users browse and plan meals using React and Spoonacular API.",
      image: mealPlannerImg,
      liveLink:
        "https://69046b342461ee49687a1c5d--luxury-meringue-fa8b39.netlify.app/",
      codeLink: "https://github.com/sheilawuor/Meal-Planner",
    },
    {
      title: "Sweet Homes",
      description:
        "Users can browse and buy homes in this full-stack real estate platform.",
      image: sweetHomesImg,
      liveLink: "https://sweet-homes.onrender.com",
      codeLink: "https://github.com/kollcibe05-creator/Sweet-Homes",
    },
    {
      title: "Spacer",
      description:
        "Book spaces for events with an interactive scheduling interface.",
      image: spacerImg,
      liveLink: "https://spacer-6fe2c.web.app/",
      codeLink: "https://github.com/Mio254/spacer",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="projects-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Some projects I’ve worked on both individually and with teams.
        More projects are available on my GitHub:{" "}
        <a
          href="https://github.com/josephine599"
          target="_blank"
          rel="noopener noreferrer"
        >
          josephine599
        </a>
      </motion.p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-buttons">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Live
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
