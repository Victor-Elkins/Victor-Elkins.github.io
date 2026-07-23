import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section id="intro-section" className="intro-section">
      <div className="intro-copy">
        <span className="eyebrow">Software Engineer • Cloud & Platform Systems</span>
        <h1>Engineering dependable software that makes complex systems feel simple.</h1>
        <p>
          I’m Victor Elkins, a software engineer focused on cloud-native services,
          resilient APIs, and data-driven infrastructure improvements.
        </p>
        <div className="cta-row">
          <a href="#contact-section" className="primary-btn">Let’s connect</a>
          <a href="#work-experience" className="ghost-btn">See experience</a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel-card">
          <div>
            <span className="panel-label">Current focus</span>
            <strong>Platform reliability + secure automation</strong>
          </div>
          <div className="tag-list">
            <span>Go</span>
            <span>Python</span>
            <span>Kubernetes</span>
            <span>Istio</span>
            <span>React</span>
            <span>Azure</span>
          </div>
        </div>
        <div className="hero-panel-card hero-panel-skills">
          <span className="panel-label">Selected highlights</span>
          <ul>
            <li>Led gateway performance hardening and load testing on IBM cloud infrastructure.</li>
            <li>Improved production efficiency with OpenShift migration and cost-saving automation.</li>
            <li>Built secure, developer-friendly systems across Kubernetes, CI/CD, and data platforms.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
