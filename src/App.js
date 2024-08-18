import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import IntroSection from './IntroSection/IntroSection';
import ContactSection from './ContactSection/ContactSection';
import ProjectExperience from './ProjectExperience/ProjectExperience';
import WorkExperience from './WorkExperience/WorkExperience';
import ResumeSection from './ResumeSection/ResumeSection';
import './App.css';

// Functional component for the main App
const App = () => (
  <Router>
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          <Nav.Link href="https://github.com/Victor-Elkins" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contact me</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<IntroSection />} />
        <Route path="/resume" element={<ResumeSection/>} />
        <Route path="/projects" element={<ProjectExperience />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/Contact" element={<ContactSection />} />
      </Routes>
    </div>
  </Router>
);

export default App;