import React from 'react'
import SectionBackdrop from './SectionBackdrop'

export default function Certifications() {
  return (
    <section className="section s-certs" id="certs" data-section="certs">
      <SectionBackdrop theme="certs" />
      <div className="section-glow section-glow-blue"></div>
      <div className="section-num">05</div>
      <div className="section-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-tag">CERTIFICATIONS &amp; INTERNSHIPS</span>
            <div className="section-tag-line"></div>
          </div>
          <h2 className="section-title">Certifi<span className="accent">cates</span></h2>
        </div>
        <div className="cert-grid">
          <div className="cert-card" id="cert-codsoft">
            <div className="cert-glow"></div>
            <div className="cert-badge">🔬</div>
            <span className="cert-company">CODSOFT</span>
            <h3 className="cert-role">Data Science Intern</h3>
            <div className="cert-details">
              <div className="cert-detail"><span>📅</span><span>April 2026 (4 weeks)</span></div>
              <div className="cert-detail"><span>🏢</span><span>Virtual Internship Program</span></div>
              <div className="cert-detail"><span>⭐</span><span>Completed with Wonderful Remarks</span></div>
            </div>
            <div className="cert-skills"><span>Data Science</span><span>Python</span><span>Machine Learning</span><span>Analysis</span></div>
            <div className="cert-actions">
              <a href="CODSOFT.pdf" target="_blank" rel="noopener noreferrer" className="cert-btn cert-btn-primary">View Certificate</a>
              <a href="CODSOFT.pdf" download className="cert-btn cert-btn-ghost">Download</a>
            </div>
          </div>
          <div className="cert-card" id="cert-wsa">
            <div className="cert-glow"></div>
            <div className="cert-badge">💻</div>
            <span className="cert-company">WEB STACK ACADEMY (WSA)</span>
            <h3 className="cert-role">Full Stack Web Development in MERN</h3>
            <div className="cert-details">
              <div className="cert-detail"><span>📅</span><span>3 March – 20 April 2026</span></div>
              <div className="cert-detail"><span>🏢</span><span>Hands-on Internship</span></div>
              <div className="cert-detail"><span>📜</span><span>Certificate ID: WMS125_006</span></div>
            </div>
            <div className="cert-skills"><span>HTML/CSS</span><span>JavaScript</span><span>React</span><span>MERN Stack</span><span>SDLC</span></div>
            <div className="cert-actions">
              <a href="Full_Stack.pdf" target="_blank" rel="noopener noreferrer" className="cert-btn cert-btn-primary">View Certificate</a>
              <a href="Full_Stack.pdf" download className="cert-btn cert-btn-ghost">Download</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
