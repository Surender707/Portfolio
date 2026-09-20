import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import ByteGuide from './components/ByteGuide'

declare global {
  interface Window {
    initPortfolio?: () => void;
    __portfolioInitialized?: boolean;
  }
}

export default function App() {
  useEffect(() => {
    // If the legacy script is loaded, trigger initialisation
    if (typeof window !== 'undefined' && typeof window.initPortfolio === 'function') {
      window.initPortfolio();
    }
  }, []);

  return (
    <>
      {/* ░░ PRELOADER ░░ */}
      <div id="preloader">
        <div className="preloader-inner">
          <div className="preloader-logo">S<span>.</span></div>
          <div className="preloader-bar-wrap"><div className="preloader-fill" id="preloaderFill"></div></div>
          <div className="preloader-counter"><span id="preloaderCount">0</span><span className="pct">%</span></div>
        </div>
      </div>

      {/* ░░ GALAXY CANVAS ░░ */}
      <canvas id="galaxyCanvas" aria-hidden="true"></canvas>
      <div className="noise-overlay"></div>

      {/* ░░ CUSTOM CURSOR ░░ */}
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* ░░ SCROLL PROGRESS ░░ */}
      <div id="scrollProgress"></div>

      {/* ░░ NAVBAR & DOT NAV ░░ */}
      <Navbar />

      {/* ░░ MAIN CONTENT ░░ */}
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* ░░ ROBOT GUIDE — BYTE ░░ */}
      <ByteGuide />
    </>
  )
}
