import React from 'react';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <div>
      <section id="intro-section" className="intro-section">
        <h1>Hello, I am Victor Elkins</h1>
        <p>A Software Engineer</p>
        <a href="./contact" className="btn-primary">Contact Me</a>
      </section>
    </div>
  );
};

export default IntroSection;
