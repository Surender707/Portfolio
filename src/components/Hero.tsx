import React from 'react'
import SectionBackdrop from './SectionBackdrop'

export default function Hero() {
  return (
    <section className="section s-hero" id="hero" data-section="hero">
      <SectionBackdrop theme="hero" />
      <div className="hero-container">
        <div className="hero-left">
          <p className="hero-greeting">I&apos;M</p>
          <h1 className="hero-name">
            <span className="name-word" id="heroWord1">SURENDER</span>{' '}
            <span className="name-word name-accent" id="heroWord2">SINGH</span>
          </h1>
          <div className="hero-role-wrap">
            <span className="hero-role-prefix">A </span>
            <div className="hero-role-rotator" id="roleRotator">
              <span className="role-item active">DATA SCIENTIST</span>
              <span className="role-item">ML ENGINEER</span>
              <span className="role-item">FULLSTACK DEV</span>
            </div>
          </div>
          <p className="hero-sub">
            I turn bold ideas into seamless digital experiences. Where frontend meets powerful backend, and code transforms vision into impact.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary magnetic" id="hero-work-btn">EXPLORE MY WORK</a>
            <a href="Resume.pdf" download="Surender_Singh_Resume.pdf" className="btn btn-ghost magnetic" id="hero-resume-btn">RÉSUMÉ ↓</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-avatar-wrap" id="heroAvatar">
            <div className="avatar-glow" style={{ animationDuration: '2s', filter: 'hue-rotate(180deg)' }}></div>
            <div className="avatar-ring ring-1"></div>
            <div className="avatar-ring ring-2"></div>
            <div className="avatar-ring ring-3"></div>
            <div className="avatar-frame">
              <img src="profile.jpg" alt="Surender Singh" className="avatar-img" />
              <div className="avatar-scan"></div>
            </div>
            <div className="floating-badge badge-ml">🤖 ML</div>
            <div className="floating-badge badge-web">⚡ Web</div>
            <div className="floating-badge badge-cv">👁 CV</div>
          </div>
        </div>
      </div>
      <div className="hero-telemetry hero-telemetry-right" aria-hidden="true">
        <span className="telemetry-kicker">ENGINEERING LOG</span>
        <div className="telemetry-code">AI<span>+</span>WEB</div>
        <div className="telemetry-row"><span>BUILD</span><strong>2026.09</strong></div>
        <div className="telemetry-track"><span></span></div>
        <span className="telemetry-foot">001 / 101 / 001</span>
      </div>
      <div className="hero-stats-bar">
        <div className="hstat"><span className="hstat-n">5</span><span className="hstat-l">Projects</span></div>
        <div className="hstat-divider"></div>
        <div className="hstat"><span className="hstat-n">10+</span><span className="hstat-l">Technologies</span></div>
        <div className="hstat-divider"></div>
        <div className="hstat"><span className="hstat-n">3</span><span className="hstat-l">Domains</span></div>
        <div className="hstat-divider"></div>
        <div className="hstat"><span className="hstat-n">7<span style={{ fontSize: '0.6em' }}>th</span></span><span className="hstat-l">Semester</span></div>
      </div>
      <div className="hero-scroll-hint">
        <div className="scroll-line-anim"></div>
        <span>SCROLL</span>
      </div>
    </section>
  )
}
