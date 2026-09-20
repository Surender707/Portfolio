import React from 'react'
import SectionBackdrop from './SectionBackdrop'

export default function Contact() {
  return (
    <section className="section s-contact" id="contact" data-section="contact">
      <SectionBackdrop theme="contact" />
      <div className="section-glow section-glow-gold"></div>
      <div className="section-num">07</div>
      <div className="section-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-tag">LET&apos;S CONNECT</span>
            <div className="section-tag-line"></div>
          </div>
          <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
        </div>
        <div className="contact-layout">
          <div className="contact-left">
            <p className="contact-lead">
              I&apos;m currently looking for <strong>internship and job opportunities</strong>. Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
            </p>
            <div className="contact-email-block">
              <span className="contact-email-label">EMAIL</span>
              <a href="mailto:surenderchoudhary07072004@gmail.com" className="contact-email-val" id="contact-email">surenderchoudhary07072004@gmail.com</a>
            </div>
            <div className="contact-edu-block">
              <span className="contact-edu-label">EDUCATION</span>
              <span className="contact-edu-val">B.Tech AI&amp;DS — MITRC, 2023–2027</span>
            </div>
            <a href="mailto:surenderchoudhary07072004@gmail.com" className="btn btn-primary magnetic contact-cta" id="contact-cta-btn">Say Hello ✉</a>
          </div>
          <div className="contact-right">
            <span className="contact-social-label">FIND ME ON</span>
            <div className="contact-social-links">
              <a href="https://github.com/Surender707" target="_blank" rel="noopener noreferrer" className="social-link magnetic" id="contact-github">
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <div className="social-info"><span className="social-name">GitHub</span><span className="social-handle">Surender707</span></div>
                <span className="social-arrow">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/surender-choudhary-2a2b46293" target="_blank" rel="noopener noreferrer" className="social-link magnetic" id="contact-linkedin">
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </div>
                <div className="social-info"><span className="social-name">LinkedIn</span><span className="social-handle">Surender Choudhary</span></div>
                <span className="social-arrow">↗</span>
              </a>
              <a href="mailto:surenderchoudhary07072004@gmail.com" className="social-link magnetic" id="contact-email-link">
                <div className="social-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div className="social-info"><span className="social-name">Email</span><span className="social-handle">Say Hello</span></div>
                <span className="social-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Designed &amp; Built by <strong>Surender Singh</strong></p>
        <p className="footer-year">© 2026</p>
      </footer>
    </section>
  )
}
