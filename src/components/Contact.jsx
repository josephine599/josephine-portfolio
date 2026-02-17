// src/components/Contact.jsx
import React from "react";
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-content">
        <p className="contact-text">
          <strong>Email:</strong> <a href="mailto:anyangojozey@gmail.com">anyangojozey@gmail.com</a>
        </p>

        <p className="contact-text">
          <strong>Phone:</strong> <a href="tel:+254703290162">+254 703 290 162</a>
        </p>

        <p className="contact-text">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/josephine-anyango-67393b337" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/josephine-anyango-67393b337
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form 
        className="contact-form"
        action="mailto:anyangojozey@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p className="contact-footer">
        &copy; {new Date().getFullYear()} Josephine Anyango. All Rights Reserved.
      </p>
    </section>
  );
}
