import React from 'react'

export default function Skills() {
  return (
    <section className="section s-skills" id="skills" data-section="skills">
      <div className="section-glow section-glow-purple"></div>
      <div className="section-num">03</div>
      <div className="section-container">
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-tag">WHAT I KNOW</span>
            <div className="section-tag-line"></div>
          </div>
          <h2 className="section-title">My <span className="accent">Techstack</span></h2>
        </div>
        <div className="skills-layout">
          <div className="skills-sphere-wrap" id="skillsSphereWrap">
            <canvas id="skillsSphereCanvas"></canvas>
            <div className="sphere-bg-text">STACK</div>
          </div>
          <div className="skills-cats">
            <div className="skill-cat-card" id="scat-1">
              <div className="scat-header">
                <span className="scat-icon">⟨/⟩</span>
                <h3>Languages</h3>
              </div>
              <div className="skill-tags">
                <span>Python</span><span>JavaScript</span><span>C++</span><span>Java</span><span>SQL</span>
              </div>
            </div>
            <div className="skill-cat-card" id="scat-2">
              <div className="scat-header">
                <span className="scat-icon">⊞</span>
                <h3>Frameworks &amp; ML</h3>
              </div>
              <div className="skill-tags">
                <span>React</span><span>Flask</span><span>Node.js</span><span>TensorFlow</span><span>PyTorch</span><span>scikit-learn</span>
              </div>
            </div>
            <div className="skill-cat-card" id="scat-3">
              <div className="scat-header">
                <span className="scat-icon">⚙</span>
                <h3>Tools &amp; Platforms</h3>
              </div>
              <div className="skill-tags">
                <span>Git</span><span>GitHub</span><span>MongoDB</span><span>MySQL</span><span>OpenCV</span><span>MediaPipe</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tech-marquee-wrap">
          <div className="tech-marquee" id="techMarquee">
            <div className="tech-marquee-inner">
              <span className="tmp" style={{ '--c': '#3776AB' } as React.CSSProperties}>🐍 Python</span>
              <span className="tmp" style={{ '--c': '#61DAFB' } as React.CSSProperties}>⚛️ React</span>
              <span className="tmp" style={{ '--c': '#F7DF1E' } as React.CSSProperties}>⚡ JavaScript</span>
              <span className="tmp" style={{ '--c': '#FF6F00' } as React.CSSProperties}>🧠 TensorFlow</span>
              <span className="tmp" style={{ '--c': '#339933' } as React.CSSProperties}>🟢 Node.js</span>
              <span className="tmp" style={{ '--c': '#47A248' } as React.CSSProperties}>🍃 MongoDB</span>
              <span className="tmp" style={{ '--c': '#EE4C2C' } as React.CSSProperties}>🔥 PyTorch</span>
              <span className="tmp" style={{ '--c': '#a8d8a8' } as React.CSSProperties}>🌐 Flask</span>
              <span className="tmp" style={{ '--c': '#F05032' } as React.CSSProperties}>⑂ Git</span>
              <span className="tmp" style={{ '--c': '#5C3EE8' } as React.CSSProperties}>👁 OpenCV</span>
              <span className="tmp" style={{ '--c': '#00aeff' } as React.CSSProperties}>🗄 SQL</span>
              <span className="tmp" style={{ '--c': '#00599C' } as React.CSSProperties}>⊕ C++</span>
              {/* duplicate for seamless loop */}
              <span className="tmp" style={{ '--c': '#3776AB' } as React.CSSProperties}>🐍 Python</span>
              <span className="tmp" style={{ '--c': '#61DAFB' } as React.CSSProperties}>⚛️ React</span>
              <span className="tmp" style={{ '--c': '#F7DF1E' } as React.CSSProperties}>⚡ JavaScript</span>
              <span className="tmp" style={{ '--c': '#FF6F00' } as React.CSSProperties}>🧠 TensorFlow</span>
              <span className="tmp" style={{ '--c': '#339933' } as React.CSSProperties}>🟢 Node.js</span>
              <span className="tmp" style={{ '--c': '#47A248' } as React.CSSProperties}>🍃 MongoDB</span>
              <span className="tmp" style={{ '--c': '#EE4C2C' } as React.CSSProperties}>🔥 PyTorch</span>
              <span className="tmp" style={{ '--c': '#a8d8a8' } as React.CSSProperties}>🌐 Flask</span>
              <span className="tmp" style={{ '--c': '#F05032' } as React.CSSProperties}>⑂ Git</span>
              <span className="tmp" style={{ '--c': '#5C3EE8' } as React.CSSProperties}>👁 OpenCV</span>
              <span className="tmp" style={{ '--c': '#00aeff' } as React.CSSProperties}>🗄 SQL</span>
              <span className="tmp" style={{ '--c': '#00599C' } as React.CSSProperties}>⊕ C++</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
