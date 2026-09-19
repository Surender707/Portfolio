import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scrolling when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('nav-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('nav-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('nav-open')
    }
  }, [isOpen])

  const navItems = [
    { label: 'ABOUT', href: '#about', section: 'about' },
    { label: 'SKILLS', href: '#skills', section: 'skills' },
    { label: 'PROJECTS', href: '#projects', section: 'projects' },
    { label: 'CERTS', href: '#certs', section: 'certs' },
    { label: 'RESUME', href: '#resume', section: 'resume' },
    { label: 'CONTACT', href: '#contact', section: 'contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isOpen ? 'nav-is-open' : ''}`} id="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo" id="nav-logo" onClick={handleLinkClick}>
            SURENDER<span className="logo-dot">.</span>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links" id="navLinks">
            {navItems.map((item) => (
              <li key={item.section}>
                <a href={item.href} className="nav-link" data-section={item.section}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="hero-cta" style={{ marginLeft: '12px' }}>
                LET&apos;S TALK ↗
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className={`nav-toggle ${isOpen ? 'active' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        id="mobileDrawer"
      >
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">NAVIGATION</span>
          <button 
            type="button" 
            className="mobile-close-btn" 
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.section}>
              <a 
                href={item.href} 
                className="mobile-nav-link" 
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ marginTop: '16px' }}>
            <a 
              href="#contact" 
              className="mobile-nav-cta" 
              onClick={handleLinkClick}
            >
              LET&apos;S TALK ↗
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="mobile-backdrop-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}

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
