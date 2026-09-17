import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="nav-overlay" id="navOverlay" aria-hidden="true"></div>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo" id="nav-logo">
            SURENDER<span className="logo-dot">.</span>
          </a>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <ul className="nav-links" id="navLinks">
            <li><a href="#about" className="nav-link" data-section="about">ABOUT</a></li>
            <li><a href="#skills" className="nav-link" data-section="skills">SKILLS</a></li>
            <li><a href="#projects" className="nav-link" data-section="projects">PROJECTS</a></li>
            <li><a href="#certs" className="nav-link" data-section="certs">CERTS</a></li>
            <li><a href="#resume" className="nav-link" data-section="resume">RESUME</a></li>
            <li><a href="#contact" className="nav-link" data-section="contact">CONTACT</a></li>
            <li><a href="#contact" className="hero-cta" style={{ marginLeft: '12px' }}>LET&apos;S TALK ↗</a></li>
          </ul>
        </div>
      </nav>

      {/* DOT NAVIGATOR */}
      <nav className="dot-nav" id="dotNav" aria-label="Section navigation">
        <button className="dnav-dot active" data-target="hero" title="Home"></button>
        <button className="dnav-dot" data-target="about" title="About"></button>
        <button className="dnav-dot" data-target="skills" title="Skills"></button>
        <button className="dnav-dot" data-target="projects" title="Work"></button>
        <button className="dnav-dot" data-target="certs" title="Certifications"></button>
        <button className="dnav-dot" data-target="resume" title="Resume"></button>
        <button className="dnav-dot" data-target="contact" title="Contact"></button>
      </nav>
    </>
  )
}
