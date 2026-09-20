import React from 'react'

export default function Resume() {
  return (
    <section className="section s-resume" id="resume" data-section="resume">
      <div className="section-glow section-glow-purple"></div>
      <div className="section-num">06</div>
      <div className="section-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-tag">MY BACKGROUND</span>
            <div className="section-tag-line"></div>
          </div>
          <h2 className="section-title">Ré<span className="accent">sumé</span></h2>
        </div>
        <div className="resume-layout">
          <div className="resume-left">
            <div className="resume-block">
              <h3 className="rb-title"><span className="rb-icon">🎓</span> Education</h3>
              <div className="rb-item">
                <div className="rb-item-title">B.Tech — Artificial Intelligence &amp; Data Science</div>
                <div className="rb-item-sub"><a className="resume-inline-link" href="https://mitrc.ac.in/" target="_blank" rel="noopener noreferrer">Modern Institute of Technology and Research Center (MITRC) ↗</a></div>
                <div className="rb-item-date">2023 – 2027 &nbsp;·&nbsp; 7th Semester</div>
              </div>
            </div>
            <div className="resume-block">
              <h3 className="rb-title"><span className="rb-icon">💼</span> Experience</h3>
              <div className="rb-item">
                <div className="rb-item-header">
                  <div className="rb-item-title">Data Science Intern</div>
                  <div className="rb-item-date">April 2026 · 4 weeks</div>
                </div>
                <div className="rb-item-sub"><a className="resume-inline-link" href="https://www.codsoft.in/" target="_blank" rel="noopener noreferrer">CODSOFT — Virtual Internship Program ↗</a></div>
                <p className="rb-item-desc">Worked on real-world data science projects involving Python, ML algorithms, and data analysis. Completed with Wonderful Remarks.</p>
              </div>
              <div className="rb-item">
                <div className="rb-item-header">
                  <div className="rb-item-title">Full Stack Web Developer Intern</div>
                  <div className="rb-item-date">Mar – Apr 2026 · 7 weeks</div>
                </div>
                <div className="rb-item-sub"><a className="resume-inline-link" href="https://webstackacademy.com/" target="_blank" rel="noopener noreferrer">Web Stack Academy (WSA) ↗</a></div>
                <p className="rb-item-desc">Hands-on MERN Stack development covering React, Node.js, MongoDB, and the full SDLC. Cert ID: WMS125_006</p>
              </div>
            </div>
            <div className="resume-block">
              <h3 className="rb-title"><span className="rb-icon">🛠</span> Technical Skills</h3>
              <div className="resume-skills-cloud">
                <span className="rs-tag rs-lang">Python</span>
                <span className="rs-tag rs-lang">JavaScript</span>
                <span className="rs-tag rs-lang">C++</span>
                <span className="rs-tag rs-lang">SQL</span>
                <span className="rs-tag rs-framework">React</span>
                <span className="rs-tag rs-framework">Node.js</span>
                <span className="rs-tag rs-framework">Express.js</span>
                <span className="rs-tag rs-framework">Flask</span>
                <span className="rs-tag rs-ml">TensorFlow</span>
                <span className="rs-tag rs-ml">PyTorch</span>
                <span className="rs-tag rs-ml">scikit-learn</span>
                <span className="rs-tag rs-ml">OpenCV</span>
                <span className="rs-tag rs-tool">MongoDB</span>
                <span className="rs-tag rs-tool">Git</span>
                <span className="rs-tag rs-tool">Pandas</span>
                <span className="rs-tag rs-tool">NumPy</span>
                <span className="rs-tag rs-tool">HuggingFace</span>
                <span className="rs-tag rs-tool">MediaPipe</span>
              </div>
            </div>
          </div>
          <div className="resume-right">
            <div className="resume-download-card">
              <div className="rdc-icon">📄</div>
              <h3>Full Résumé</h3>
              <p>Download my complete résumé with all experiences, projects, and skills.</p>
              <a href="Resume.pdf" download="Surender_Singh_Resume.pdf" className="btn btn-primary magnetic" id="resume-download-btn">Download PDF ↓</a>
              <a href="Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost magnetic" id="resume-view-btn">View Online ↗</a>
              <div className="resume-link-row" aria-label="Professional links">
                <a href="https://surender-portfolio-sigma.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio ↗</a>
                <a href="https://github.com/Surender707" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/surender-choudhary-2a2b46293" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                <a href="mailto:surenderchoudhary07072004@gmail.com">Gmail ↗</a>
              </div>
            </div>
            <div className="resume-strengths">
              <h3 className="rb-title"><span className="rb-icon">🎯</span> Key Strengths</h3>
              <div className="rs-grid">
                <div className="rs-card">
                  <span className="rs-card-icon">🧠</span>
                  <span className="rs-card-label">Machine Learning &amp; AI</span>
                  <span className="rs-card-desc">Neural networks, NLP, deep learning pipelines</span>
                </div>
                <div className="rs-card">
                  <span className="rs-card-icon">👁</span>
                  <span className="rs-card-label">Computer Vision</span>
                  <span className="rs-card-desc">YOLOv8, MediaPipe, real-time detection</span>
                </div>
                <div className="rs-card">
                  <span className="rs-card-icon">⚡</span>
                  <span className="rs-card-label">Full-Stack Development</span>
                  <span className="rs-card-desc">MERN stack, REST APIs, JWT auth</span>
                </div>
                <div className="rs-card">
                  <span className="rs-card-icon">📊</span>
                  <span className="rs-card-label">Data Analysis</span>
                  <span className="rs-card-desc">Pandas, visualization, statistical modelling</span>
                </div>
              </div>
            </div>
            <div className="resume-highlights">
              <h3 className="rb-title" style={{ marginBottom: '12px' }}><span className="rb-icon">🏆</span> Achievements</h3>
              <div className="rh-item"><span>⚡</span><span>5 Featured Projects spanning 3 domains</span></div>
              <div className="rh-item"><span>🏆</span><span>2 Internships — both with outstanding remarks</span></div>
              <div className="rh-item"><span>🛠</span><span>15+ Technologies mastered</span></div>
              <div className="rh-item"><span>🎯</span><span>87.3% ML model accuracy (PlayStore Pulse)</span></div>
              <div className="rh-item"><span>🔬</span><span>Real-time 24 FPS emotion classification</span></div>
              <div className="rh-item"><span>✍️</span><span>Custom LSTM + T5 text summarization system</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
