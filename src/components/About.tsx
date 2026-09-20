import React from 'react'
import SectionBackdrop from './SectionBackdrop'

export default function About() {
  return (
    <section className="section s-about" id="about" data-section="about">
      <SectionBackdrop theme="about" />
      <div className="section-glow section-glow-gold"></div>
      <div className="section-glow section-glow-blue"></div>
      <div className="section-num">02</div>
      <div className="ambient-particles" id="aboutParticles"></div>
      <div className="section-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-tag">WHO I AM</span>
            <div className="section-tag-line"></div>
          </div>
          <h2 className="section-title">About <span className="accent">Me</span></h2>
        </div>
        <div className="about-bento">
          <div className="bento-card bento-bio about-holo-card" id="aboutHoloCard">
            <div className="about-spotlight" id="aboutSpotlight"></div>
            <p className="about-lead">
              I&apos;m a passionate <strong>B.Tech AI&amp;DS</strong> student in my <strong>7th semester</strong> at the <strong>Modern Institute of Technology and Research Center (MITRC)</strong>, driven by a deep curiosity for how machines learn and how technology can solve real-world problems.
            </p>
            <p>
              My journey spans across <strong>Machine Learning</strong>, <strong>Full-Stack Web Development</strong>, and <strong>Computer Vision</strong> — from training neural networks on large datasets to building interactive web dashboards. I love turning complex ideas into elegant, working solutions.
            </p>
            <p>
              I&apos;m currently seeking <strong>internship and job opportunities</strong> where I can apply my skills, learn from experienced professionals, and contribute to impactful projects.
            </p>
          </div>
          <div className="bento-card bento-stat" id="bstat-1">
            <span className="stat-num" data-count="5">0</span>
            <span className="stat-lbl">Featured Projects</span>
          </div>
          <div className="bento-card bento-stat" id="bstat-2">
            <span className="stat-num" data-count="10">0</span><span className="stat-plus">+</span>
            <span className="stat-lbl">Technologies</span>
          </div>
          <div className="bento-card bento-stat bento-stat-gold" id="bstat-3">
            <span className="stat-num" data-count="3">0</span>
            <span className="stat-lbl">Focus Domains</span>
          </div>
          <div className="bento-card bento-edu" id="bento-edu">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="edu-degree">B.Tech — AI &amp; Data Science</div>
              <div className="edu-school">MITRC, Alwar &nbsp;·&nbsp; 2023 – 2027</div>
              <div className="edu-sem">Currently in 7th Semester</div>
            </div>
          </div>
          <div className="bento-card bento-avail" id="bento-avail">
            <div className="avail-dot"></div>
            <span>Open to Internships &amp; Jobs</span>
          </div>
          <div className="bento-card bento-domains" id="bento-domains">
            <div className="domain-item">🤖 Machine Learning</div>
            <div className="domain-item">👁 Computer Vision</div>
            <div className="domain-item">🌐 Full-Stack Web Dev</div>
          </div>
        </div>
      </div>
    </section>
  )
}
