import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="services-section">

      {/* Title */}
      <motion.h2
        className="services-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      {/* Intro */}
      <motion.p
        className="services-intro"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        I provide end-to-end software solutions focused on performance,
        scalability, and clean user experiences.
      </motion.p>

      {/* Cards */}
      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >

        <motion.div className="service-card" variants={cardVariants}>
          <h3>Full-Stack Web Development</h3>
          <p>
            Building responsive and scalable web applications using React,
            Node.js, Python, and PostgreSQL with clean architecture and
            seamless API integration.
          </p>
        </motion.div>

        <motion.div className="service-card" variants={cardVariants}>
          <h3>API Development & Integration</h3>
          <p>
            Designing and integrating RESTful APIs to power dynamic,
            data-driven applications with secure authentication and
            optimized performance.
          </p>
        </motion.div>

        <motion.div className="service-card" variants={cardVariants}>
          <h3>UI/UX & Responsive Design</h3>
          <p>
            Creating modern, intuitive interfaces that deliver smooth user
            experiences across mobile, tablet, and desktop devices.
          </p>
        </motion.div>

        <motion.div className="service-card" variants={cardVariants}>
          <h3>Deployment & Optimization</h3>
          <p>
            Deploying applications to production environments and optimizing
            performance, scalability, and maintainability.
          </p>
        </motion.div>

      </motion.div>

    </section>
  );
}
