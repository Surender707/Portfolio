import React from 'react'

export default function BackgroundField() {
  return (
    <div className="background-field" aria-hidden="true">
      <div className="ambient-blob ambient-blob-indigo"></div>
      <div className="ambient-blob ambient-blob-violet"></div>
      <div className="ambient-blob ambient-blob-cyan"></div>
      <div className="ambient-blob ambient-blob-pink"></div>
      <div className="ambient-blob ambient-blob-amber"></div>
      <svg className="background-grain" viewBox="0 0 100 100" preserveAspectRatio="none">
        <filter id="grain-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" />
      </svg>
      <canvas id="galaxyCanvas" aria-hidden="true"></canvas>
    </div>
  )
}
