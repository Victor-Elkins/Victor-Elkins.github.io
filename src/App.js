import React from 'react';
import { profile, experience, projects, education, skills } from './content';
import './App.css';

const resumeHref = `${process.env.PUBLIC_URL}/${profile.resumeFile}`;

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const EntryHeader = ({ title, subtitle, period }) => (
  <div className="entry-header">
    <h3>
      {title}
      {subtitle && <span className="entry-subtitle">{subtitle}</span>}
    </h3>
    <span className="entry-period">{period}</span>
  </div>
);

const App = () => (
  <div className="page">
    <header className="intro">
      <nav className="nav" aria-label="Sections">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
        <a href={resumeHref} download={profile.resumeDownloadName}>
          Resume (PDF)
        </a>
      </nav>
      <h1>{profile.name}</h1>
      <p className="intro-role">
        {profile.role} · {profile.location}
      </p>
      <p className="intro-summary">{profile.summary}</p>
    </header>

    <main>
      <section id="experience">
        <h2>Experience</h2>
        {experience.map((job) => (
          <article key={job.company} className="entry">
            <EntryHeader title={job.company} subtitle={job.role} period={job.period} />
            <ul>
              {job.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
          <article key={project.title} className="entry">
            <EntryHeader title={project.title} period={project.period} />
            <p>{project.summary}</p>
          </article>
        ))}
      </section>

      <section id="education">
        <h2>Education</h2>
        {education.map((school) => (
          <article key={school.school} className="entry">
            <EntryHeader title={school.school} period={school.period} />
            <p>
              {school.degree}
              {school.detail && <span className="muted"> · {school.detail}</span>}
            </p>
          </article>
        ))}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <dl className="contact">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  </div>
);

export default App;
