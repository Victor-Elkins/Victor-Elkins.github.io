import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ResumeSection = () => {
  return (
    <section id="resume" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Resume</span>
        <h2>Engineer profile</h2>
        <p>
          I build secure, observable platforms and developer tools with a focus on
          performance, automation, and reliability.
        </p>
      </div>

      <div className="container">
        <div className="resume-grid">
          <div className="resume-card p-4">
            <h3 className="mb-3">Education</h3>
            <div className="mb-4">
              <p className="mb-1"><strong>Georgia Institute of Technology</strong></p>
              <p className="text-muted mb-1">January 2025 – Dec 2026</p>
              <p>M.S. in Computer Science</p>
            </div>
            <div>
              <p className="mb-1"><strong>University of Houston</strong></p>
              <p className="text-muted mb-1">Graduated Dec 2024</p>
              <p>B.S. in Computer Science</p>
            </div>
          </div>

          <div className="resume-card p-4">
            <h3 className="mb-3">Quick links</h3>
            <p className="mb-2">
              <a href="tel:+12813235559">(281) 323-5559</a>
            </p>
            <p className="mb-2">
              <a href="mailto:victor.r.elkins@gmail.com">victor.r.elkins@gmail.com</a>
            </p>
            <p className="mb-2">
              <a href="https://victor-elkins.github.io/" target="_blank" rel="noreferrer">Portfolio site</a>
            </p>
            <p className="mb-2">
              <a href="https://www.linkedin.com/in/victor-elkins/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            <p className="mb-0">
              <a href="https://github.com/Victor-Elkins" target="_blank" rel="noreferrer">GitHub</a>
            </p>
          </div>
        </div>

        <div className="metric-strip">
          <div className="metric-card">
            <strong>4</strong>
            <span>internship and full-time engineering roles</span>
          </div>
          <div className="metric-card">
            <strong>90%</strong>
            <span>secured faster API setup via automation</span>
          </div>
          <div className="metric-card">
            <strong>$250K</strong>
            <span>annual infrastructure savings identified</span>
          </div>
          <div className="metric-card">
            <strong>2nd</strong>
            <span>place in UH AI & Data Science Showcase</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
