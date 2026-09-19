import React, { useState, useEffect } from 'react'

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="section s-hero" id="hero" data-section="hero">
      {/* Custom Cursor */}
      {cursorPos.x >= 0 && (
        <div
          className="custom-cursor"
          style={{
            left: cursorPos.x - (isHovered ? 24 : 5),
            top: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
        />
      )}

      {/* Video Background Layer - placeholder for future video */}
      <div className="video-background">
        <div className="video-placeholder" />
        <div className="video-overlay" />
      </div>

      {/* Navigation */}
      <nav className="hero-nav">
        <a href="#" className="hero-logo">SURENDER.</a>
        <div className="hero-nav-links">
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>
        <a href="#contact" className="hero-cta">LET'S TALK ↗</a>
      </nav>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-greeting">I BUILD</p>
          <h1 className="hero-name">
            <span className="name-word">DATA SCIENCE</span>
            <span className="name-word name-accent">SOLUTIONS</span>
          </h1>
          <p className="hero-subtitle">DATA SCIENTIST • ML ENGINEER • FULL-STACK DEVELOPER</p>
          <p className="hero-description">
            I turn bold ideas into seamless digital experiences.
            <br />
            Where machine learning meets powerful backend, and code transforms vision into impact.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="hero-btn primary">EXPLORE MY WORK</a>
            <a href="Resume.pdf" download className="hero-btn secondary">RÉSUMÉ ↓</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-avatar-wrap">
            <div className="avatar-glow" />
            <div className="avatar-ring ring-1" />
            <div className="avatar-ring ring-2" />
            <div className="avatar-ring ring-3" />
            <div className="avatar-frame">
              <img
                src="/profile.jpg"
                alt="Surender Singh"
                className="avatar-img"
              />
              <div className="avatar-scan" />
            </div>
            <div className="floating-badge badge-ml">MACHINE LEARNING</div>
            <div className="floating-badge badge-web">FULL STACK</div>
            <div className="floating-badge badge-cv">COMPUTER VISION</div>
          </div>
        </div>
      </div>
    </section>
  )
}
