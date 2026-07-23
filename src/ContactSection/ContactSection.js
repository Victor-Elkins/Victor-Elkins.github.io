import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact-section" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Let’s talk software</h2>
        <p>
          I’m open to conversations about platform engineering, cloud-native systems,
          and high-impact software roles.
        </p>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-card p-4">
            <h3 className="mb-3">Direct contact</h3>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:victor.r.elkins@gmail.com">victor.r.elkins@gmail.com</a></p>
            <p className="mb-2"><strong>Phone:</strong> <a href="tel:+12813235559">(281) 323-5559</a></p>
            <p className="mb-0"><strong>Location:</strong> Houston, TX</p>
          </div>

          <div className="contact-card p-4">
            <h3 className="mb-3">Social</h3>
            <p className="mb-2"><a href="https://www.linkedin.com/in/victor-elkins/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className="mb-2"><a href="https://github.com/Victor-Elkins" target="_blank" rel="noreferrer">GitHub</a></p>
            <p className="mb-0"><a href="https://victor-elkins.github.io/" target="_blank" rel="noreferrer">GitHub Pages</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
