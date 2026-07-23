import React from 'react';

const workEntries = [
  {
    company: 'IBM',
    role: 'Software Engineer',
    period: 'April 2025 – Present',
    bullets: [
      'Led performance hardening for the IAM Istio gateway by building a load-testing tool in Go, deploying it with Docker and Kubernetes to an operational cluster with separate Jenkins automation to improve cost efficiency and reliability.',
      'Optimized cloud resource usage by migrating from IBM Cloud Classic to Red Hat OpenShift, identifying node inefficiencies that yielded roughly $250,000 in annual infrastructure savings.',
      'Architected and implemented a Blue/Green deployment strategy using the Dreadnought CD toolchain and streamlined Helm chart changes to support zero-downtime releases.',
      'Engineered gateway reliability improvements including data-driven rate limiting and TCP connection pooling to reduce Critical Incident Events.',
      'Refactored VPC address handling, expanded Context-Based Restrictions, and resolved complex microservice bugs to better align with dedicated instance patterns.',
    ],
  },
  {
    company: 'ExxonMobil',
    role: 'Software Engineer Intern',
    period: 'May 2024 – August 2024',
    bullets: [
      'Designed a Go/Python-based API generator on Azure/OpenShift Kubernetes to automate secure Snowflake API creation, reducing development time.',
      'Engineered automated deployment pipelines using Apache Airflow and Datadog, ensuring secure and reliable deployments within the Azure cloud environment.',
    ],
  },
  {
    company: 'Dycom Industries',
    role: 'Software Engineer Intern',
    period: 'June 2023 – August 2023',
    bullets: [
      'Developed a Python decision tree linter integrated into the GitLab CI/CD pipeline, automating code quality checks and significantly reducing manual review time.',
    ],
  },
  {
    company: 'Vertical AIT',
    role: 'Software Engineer Intern',
    period: 'Feb 2023 – June 2023',
    bullets: [
      'Designed and deployed an internal image modeling tool using .NET and Azure DevOps, streamlining industrial processes and reducing manual tracking time.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="section-shell">
      <div className="section-heading">
        <span className="eyebrow">Experience</span>
        <h2>Where I’ve shipped impact</h2>
        <p>
          My recent work spans cloud infrastructure, platform automation, and secure
          developer tooling for enterprise systems.
        </p>
      </div>

      <div className="container">
        <div className="d-grid gap-3">
          {workEntries.map((entry) => (
            <article key={`${entry.company}-${entry.role}`} className="timeline-card p-4">
              <div className="d-flex justify-content-between flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="mb-1">{entry.company} — {entry.role}</h3>
                  <small className="text-muted">{entry.period}</small>
                </div>
              </div>
              <ul className="mb-0 ps-3">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="mb-2">{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;