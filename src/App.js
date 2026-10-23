import React from 'react';
import { profile, highlights, experience, projects, education, skills } from './content';
import './App.css';

const resumeHref = `${process.env.PUBLIC_URL}/${profile.resumeFile}`;

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Section = ({ id, title, tone, children }) => (
  <section id={id} className={`section tone-${tone}`}>
    <h2>{title}</h2>
    {children}
  </section>
);

const EntryHeader = ({ title, subtitle, period }) => (
  <div className="entry-header">
    <div>
      <h3>{title}</h3>
      {subtitle && <p className="entry-subtitle">{subtitle}</p>}
    </div>
    <span className="pill">{period}</span>
  </div>
);

const App = () => (
  <>
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#top" className="brand">
          Victor Elkins
        </a>
        <nav aria-label="Sections">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
          <a className="nav-resume" href={resumeHref} download={profile.resumeDownloadName}>
            Resume
          </a>
        </nav>
      </div>
    </header>

    <div className="page" id="top">
      <div className="intro">
        <p className="intro-role">
          {profile.role} · {profile.location}
        </p>
        <h1>{profile.name}</h1>
        <p className="intro-summary">{profile.summary}</p>
        <div className="intro-actions">
          <a className="button button-primary" href={resumeHref} download={profile.resumeDownloadName}>
            Download resume
          </a>
          <a className="button button-ghost" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </div>

        <ul className="highlights">
          {highlights.map((item) => (
            <li key={item.label} className={`highlight tone-${item.tone}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <main>
        <Section id="experience" title="Experience" tone="lavender">
          <div className="stack">
            {experience.map((job) => (
              <article key={job.company} className="card">
                <EntryHeader title={job.company} subtitle={job.role} period={job.period} />
                <ul className="bullets">
                  {job.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" tone="peach">
          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <EntryHeader title={project.title} period={project.period} />
                <p className="card-text">{project.summary}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" tone="mint">
          <div className="grid">
            {education.map((school) => (
              <article key={school.school} className="card">
                <EntryHeader title={school.school} period={school.period} />
                <p className="card-text">{school.degree}</p>
                {school.detail && <p className="card-detail">{school.detail}</p>}
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" tone="sky">
          <div className="card skills">
            {skills.map((group) => (
              <div key={group.label} className="skill-group">
                <h3>{group.label}</h3>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact" tone="butter">
          <div className="card contact">
            <div>
              <span className="contact-label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <span className="contact-label">Phone</span>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
    </div>
  </>
);

export default App;
