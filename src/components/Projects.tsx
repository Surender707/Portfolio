import React from 'react'

export default function Projects() {
  return (
    <section className="section s-projects" id="projects" data-section="projects">
      <div className="section-glow section-glow-gold"></div>
      <div className="proj-viewport" id="projViewport">
        {/* Slide side nav */}
        <nav className="proj-sidenav" id="projSidenav" aria-label="Project navigation">
          <button className="psnav-dot active" data-proj="0" title="Overview"></button>
          <button className="psnav-dot" data-proj="1" title="TaskFlow"></button>
          <button className="psnav-dot" data-proj="2" title="PlayStore Pulse"></button>
          <button className="psnav-dot" data-proj="3" title="Emotion Classifier"></button>
          <button className="psnav-dot" data-proj="4" title="Hand Gesture Mouse"></button>
          <button className="psnav-dot" data-proj="5" title="Text Summarizer"></button>
        </nav>
        <div className="slide-counter" id="projCounter">
          <span id="projCurrent">00</span><span className="sc-sep">/</span><span>05</span>
        </div>

        {/* Project Selector Tabs */}
        <div className="proj-tab-bar" id="projTabBar">
          <button className="proj-tab active" data-proj="0">✦ Overview</button>
          <button className="proj-tab" data-proj="1">01 TaskFlow</button>
          <button className="proj-tab" data-proj="2">02 PlayStore Pulse</button>
          <button className="proj-tab" data-proj="3">03 Emotion Classifier</button>
          <button className="proj-tab" data-proj="4">04 Hand Gesture</button>
          <button className="proj-tab" data-proj="5">05 Text Summarizer</button>
        </div>

        <div className="proj-slides-track" id="projSlides">

          {/* SLIDE 0: INTRO */}
          <div className="proj-slide slide-intro active" id="pslide-0">
            <div className="slide-intro-content">
              <span className="section-tag">04 / SELECTED WORK</span>
              <h2 className="slide-intro-title">Featured<br /><span className="accent">Projects</span></h2>
              <p className="slide-intro-sub">5 projects spanning ML, Full-Stack, Computer Vision &amp; NLP.<br />Scroll or use ↑↓ arrow keys to explore.</p>
              <div className="slide-intro-stats">
                <div className="sis"><span>5</span>Projects</div>
                <div className="sis"><span>10+</span>Technologies</div>
                <div className="sis"><span>3</span>Domains</div>
              </div>
              <div className="slide-scroll-hint"><div className="scroll-line-anim"></div><span>SCROLL TO EXPLORE</span></div>
            </div>
            <div className="slide-intro-deco">
              <div className="sid-ring r1"></div><div className="sid-ring r2"></div><div className="sid-ring r3"></div>
              <span className="sid-text">01 — 05</span>
            </div>
          </div>

          {/* SLIDE 1: TASKFLOW */}
          <div className="proj-slide" id="pslide-1">
            <div className="slide-inner">
              <div className="slide-left">
                <div className="slide-meta"><span className="slide-num">01</span><span className="card-cat">MERN STACK APPLICATION</span></div>
                <h2 className="slide-title">TaskFlow</h2>
                <p className="slide-tagline">Intelligent Task Management &amp; Productivity System</p>
                <p className="slide-desc">A comprehensive productivity application with a sleek dark-themed dashboard. Integrates a custom &apos;Intelligence Engine&apos; for smart insights and automated task recommendations. Features JWT auth, real-time sync, and dynamic data visualisation.</p>
                <div className="slide-tech"><span>MongoDB</span><span>Express.js</span><span>React</span><span>Node.js</span><span>Chart.js</span><span>JWT</span></div>
                <div className="slide-actions">
                  <a href="https://github.com/Surender707/Task-Management" target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic" id="proj1-github">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-visual" style={{ '--accent': '#00d4ff' } as React.CSSProperties}>
                  <div className="sv-num">01</div>
                  <img src="project-taskflow.png" alt="TaskFlow" className="sv-img" />
                  <div className="sv-terminal">
                    <div className="sv-term-top"><span className="sv-dot r"></span><span className="sv-dot y"></span><span className="sv-dot g"></span><span className="sv-term-title">TaskFlow — server.js</span></div>
                    <div className="sv-term-body">
                      <div className="sv-line"><span className="sv-kw">const</span> app = <span className="sv-fn">express</span>();</div>
                      <div className="sv-line"><span className="sv-cm">// JWT Auth Middleware</span></div>
                      <div className="sv-line"><span className="sv-kw">app</span>.<span className="sv-fn">use</span>(authMiddleware);</div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line"><span className="sv-str">✓</span> MongoDB connected</div>
                      <div className="sv-line"><span className="sv-str">✓</span> Intelligence Engine ready</div>
                      <div className="sv-line"><span className="sv-str">✓</span> Real-time sync active</div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line sv-prompt"><span className="sv-cursor">█</span></div>
                    </div>
                  </div>
                  <div className="sv-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2: PLAYSTORE PULSE */}
          <div className="proj-slide" id="pslide-2">
            <div className="slide-inner">
              <div className="slide-left">
                <div className="slide-meta"><span className="slide-num">02</span><span className="card-cat">FULL-STACK ML</span></div>
                <h2 className="slide-title">PlayStore<br />Pulse</h2>
                <p className="slide-tagline">Google Play Store Analytics &amp; AI Rating Predictor</p>
                <p className="slide-desc">Analyses 10,000+ Google Play Store apps. Features an interactive analytics dashboard with KPI cards and category trends. Includes a Gradient Boosting ML model via Flask REST API for real-time rating predictions with 87.3% accuracy.</p>
                <div className="slide-tech"><span>Python</span><span>Flask</span><span>scikit-learn</span><span>Chart.js</span><span>Pandas</span></div>
                <div className="slide-actions">
                  <a href="https://github.com/Surender707/Play-Store" target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic" id="proj2-github">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-visual" style={{ '--accent': '#FFB300' } as React.CSSProperties}>
                  <div className="sv-num">02</div>
                  <img src="project-playstore.png" alt="PlayStore Pulse" className="sv-img" />
                  <div className="sv-terminal">
                    <div className="sv-term-top"><span className="sv-dot r"></span><span className="sv-dot y"></span><span className="sv-dot g"></span><span className="sv-term-title">PlayStore Pulse — model.py</span></div>
                    <div className="sv-term-body">
                      <div className="sv-line"><span className="sv-cm"># Gradient Boosting Predictor</span></div>
                      <div className="sv-line">Apps Analysed  <span className="sv-str">10,847</span></div>
                      <div className="sv-line">Model Accuracy <span className="sv-str">87.3%</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line">★★★★★ <span className="sv-bar" style={{ '--w': '82%' } as React.CSSProperties}></span> 82%</div>
                      <div className="sv-line">★★★★☆ <span className="sv-bar" style={{ '--w': '11%' } as React.CSSProperties}></span> 11%</div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line"><span className="sv-str">→</span> Predicted: <span className="sv-kw">4.6 ★</span></div>
                    </div>
                  </div>
                  <div className="sv-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 3: EMOTION CLASSIFIER */}
          <div className="proj-slide" id="pslide-3">
            <div className="slide-inner">
              <div className="slide-left">
                <div className="slide-meta"><span className="slide-num">03</span><span className="card-cat">COMPUTER VISION</span></div>
                <h2 className="slide-title">Emotion<br />Classifier</h2>
                <p className="slide-tagline">Real-Time Recognition with YOLOv8 &amp; PyTorch</p>
                <p className="slide-desc">Combines YOLOv8 face detection with a custom CNN to classify 7 emotions — angry, disgust, fear, happy, sad, surprise, neutral — via live webcam feed with real-time confidence scores at 24 FPS.</p>
                <div className="slide-tech"><span>Python</span><span>PyTorch</span><span>YOLOv8</span><span>OpenCV</span><span>CNN</span></div>
                <div className="slide-actions">
                  <a href="https://github.com/Surender707/Emotion-Classifier" target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic" id="proj3-github">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-visual" style={{ '--accent': '#7c3aed' } as React.CSSProperties}>
                  <div className="sv-num">03</div>
                  <img src="project-emotion.png" alt="Emotion Classifier" className="sv-img" />
                  <div className="sv-terminal">
                    <div className="sv-term-top"><span className="sv-dot r"></span><span className="sv-dot y"></span><span className="sv-dot g"></span><span className="sv-term-title">Emotion Classifier — live.py</span></div>
                    <div className="sv-term-body">
                      <div className="sv-line"><span className="sv-cm">YOLOv8 · Face Detection</span></div>
                      <div className="sv-line">FACE  <span className="sv-str">DETECTED ████████</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line">happy    <span className="sv-bar" style={{ '--w': '89%' } as React.CSSProperties}></span> <span className="sv-kw">89.2%</span></div>
                      <div className="sv-line">neutral  <span className="sv-bar" style={{ '--w': '08%' } as React.CSSProperties}></span>  8.1%</div>
                      <div className="sv-line">surprise <span className="sv-bar" style={{ '--w': '03%' } as React.CSSProperties}></span>  2.7%</div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line">FPS <span className="sv-str">24</span> · Landmarks <span className="sv-str">68/68</span></div>
                    </div>
                  </div>
                  <div className="sv-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 4: HAND GESTURE MOUSE */}
          <div className="proj-slide" id="pslide-4">
            <div className="slide-inner">
              <div className="slide-left">
                <div className="slide-meta"><span className="slide-num">04</span><span className="card-cat">COMPUTER VISION</span></div>
                <h2 className="slide-title">Hand Gesture<br />Virtual Mouse</h2>
                <p className="slide-tagline">Control Your Computer with Hand Movements</p>
                <p className="slide-desc">Transforms hand movements into virtual mouse controls via webcam. Supports cursor movement, left/right/double clicks, scrolling, pinch-zoom and drag-and-drop via fist clenching — powered by Google&apos;s MediaPipe at ~8ms latency.</p>
                <div className="slide-tech"><span>Python</span><span>MediaPipe</span><span>OpenCV</span><span>PyAutoGUI</span></div>
                <div className="slide-actions">
                  <a href="https://github.com/Surender707/Hand-Detector" target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic" id="proj4-github">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-visual" style={{ '--accent': '#10b981' } as React.CSSProperties}>
                  <div className="sv-num">04</div>
                  <img src="project-handgesture.png" alt="Hand Gesture Mouse" className="sv-img" />
                  <div className="sv-terminal">
                    <div className="sv-term-top"><span className="sv-dot r"></span><span className="sv-dot y"></span><span className="sv-dot g"></span><span className="sv-term-title">Hand Gesture Mouse — detect.py</span></div>
                    <div className="sv-term-body">
                      <div className="sv-line"><span className="sv-cm">MediaPipe · Hand Landmarks</span></div>
                      <div className="sv-line">Landmarks  <span className="sv-str">21 / 21</span></div>
                      <div className="sv-line">Confidence <span className="sv-str">98.4%</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line">GESTURE  <span className="sv-kw">POINT → MOVE</span></div>
                      <div className="sv-line">Cursor   <span className="sv-str">x=847  y=423</span></div>
                      <div className="sv-line">Action   <span className="sv-str">CLICK ✓</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line">FPS <span className="sv-str">24</span> · Latency <span className="sv-str">~8ms</span></div>
                    </div>
                  </div>
                  <div className="sv-glow"></div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 5: TEXT SUMMARIZER */}
          <div className="proj-slide" id="pslide-5">
            <div className="slide-inner">
              <div className="slide-left">
                <div className="slide-meta"><span className="slide-num">05</span><span className="card-cat">NLP &amp; DEEP LEARNING</span></div>
                <h2 className="slide-title">Text<br />Summarizer</h2>
                <p className="slide-tagline">Dual-Model Abstractive Text Summarization</p>
                <p className="slide-desc">Custom LSTM Encoder-Decoder with Multi-Head Attention trained on CNN/DailyMail dataset, plus a pre-trained HuggingFace T5 transformer. Compare both summaries side-by-side via an elegant Flask interface with ROUGE-L scoring.</p>
                <div className="slide-tech"><span>Python</span><span>TensorFlow</span><span>Flask</span><span>HuggingFace</span><span>LSTM</span></div>
                <div className="slide-actions">
                  <a href="https://github.com/Surender707/SUMMARIZER" target="_blank" rel="noopener noreferrer" className="btn btn-primary magnetic" id="proj5-github">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
              <div className="slide-right">
                <div className="slide-visual" style={{ '--accent': '#f43f5e' } as React.CSSProperties}>
                  <div className="sv-num">05</div>
                  <img src="project-summarizer.png" alt="Text Summarizer" className="sv-img" />
                  <div className="sv-terminal">
                    <div className="sv-term-top"><span className="sv-dot r"></span><span className="sv-dot y"></span><span className="sv-dot g"></span><span className="sv-term-title">Text Summarizer — compare.py</span></div>
                    <div className="sv-term-body">
                      <div className="sv-line">Input    <span className="sv-str">342 words</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line"><span className="sv-cm">MODEL 1: LSTM + Attention</span></div>
                      <div className="sv-line">Output   <span className="sv-str">48 words</span></div>
                      <div className="sv-line">ROUGE-L  <span className="sv-kw">0.821</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line"><span className="sv-cm">MODEL 2: HuggingFace T5</span></div>
                      <div className="sv-line">Output   <span className="sv-str">52 words</span></div>
                      <div className="sv-line">ROUGE-L  <span className="sv-kw">0.847</span></div>
                      <div className="sv-line sv-blank"></div>
                      <div className="sv-line"><span className="sv-str">✓</span> Both models ready</div>
                    </div>
                  </div>
                  <div className="sv-glow"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Arrow controls */}
        <button className="proj-arrow proj-arrow-up" id="projArrowUp" title="Previous (↑)" aria-label="Previous project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="18 15 12 9 6 15" /></svg>
        </button>
        <button className="proj-arrow proj-arrow-down" id="projArrowDown" title="Next (↓)" aria-label="Next project">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><polyline points="6 9 12 15 18 9" /></svg>
        </button>
      </div>
    </section>
  )
}
