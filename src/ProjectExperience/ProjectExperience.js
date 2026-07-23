import React from 'react';

const projects = [
  {
    title: 'Opioid Abuse Risk Prediction Portal',
    period: 'Aug 2025 – Dec 2025',
    summary: 'Developed a full-stack patient portal using React and Node.js that supports CRUD operations against a FHIR-compliant database and integrates a machine-learning model to estimate opioid abuse risk.',
  },
  {
    title: 'Award-Winning CNN for Breast Cancer Detection',
    period: 'Aug 2024 – Dec 2024',
    summary: 'Built a PyTorch CNN using ResNet and AlexNet variants for breast cancer detection, earning second place at the University of Houston AI and Data Science Showcase.',
  },
  {
    title: 'Cougar CS Revamp',
    period: 'Jan 2023 – Present',
    summary: 'Collaborated on a website overhaul with the Cougar CS Web Development Committee using Next.js, React, and modern development workflows.',
  },
];

const ProjectExperience = () => {
  return (
    <section id="project-experience" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Projects</span>
        <h2>Selected builds</h2>
        <p>
          A mix of production-facing systems, ML-driven tooling, and collaborative
          engineering work that demonstrates breadth across the stack.
        </p>
      </div>

      <div className="container">
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card p-4">
              <h3 className="mb-2">{project.title}</h3>
              <p className="text-muted mb-3"><strong>{project.period}</strong></p>
              <p className="mb-0">{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExperience;