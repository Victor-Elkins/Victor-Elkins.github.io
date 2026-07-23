import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import IntroSection from './IntroSection/IntroSection';
import ContactSection from './ContactSection/ContactSection';
import ProjectExperience from './ProjectExperience/ProjectExperience';
import WorkExperience from './WorkExperience/WorkExperience';
import ResumeSection from './ResumeSection/ResumeSection';
import './App.css';

const navigationLinks = [
  { label: 'Overview', href: '#intro-section' },
  { label: 'Resume', href: '/Resume.pdf', download: 'Victor_Elkins_Resume.pdf' },
  { label: 'Experience', href: '#work-experience' },
  { label: 'Projects', href: '#project-experience' },
  { label: 'Contact', href: '#contact-section' },
];

const App = () => (
  <div className="app-shell">
    <Navbar className="site-navbar" variant="dark" expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#intro-section" className="brand-mark">
          Victor Elkins
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" />
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="ms-auto">
            {navigationLinks.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                download={link.download}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <main className="page-content">
      <IntroSection />
      <ResumeSection />
      <WorkExperience />
      <ProjectExperience />
      <ContactSection />
    </main>
  </div>
);

export default App;
