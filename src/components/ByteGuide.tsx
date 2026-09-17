import React from 'react'

export default function ByteGuide() {
  return (
    <div className="r-guide" id="rGuide" aria-live="polite" aria-label="Byte, your portfolio guide">
      {/* Speech bubble */}
      <div className="r-bubble" id="rBubble">
        <button className="r-mute" id="rMute" title="Mute / Unmute voice">🔊</button>
        <button className="r-close" id="rClose" title="Close guide" aria-label="Close robot guide">✕</button>
        <p id="rText">Hi! I&apos;m <strong style={{ color: 'var(--gold)' }}>Byte</strong> 👋 — Surender&apos;s AI guide. I&apos;ll explain each section as you scroll!</p>
      </div>
      {/* Robot character */}
      <div className="r-char" id="rChar" role="button" tabIndex={0} title="Click me to hear again!">
        <div className="r-ant"><span className="r-ant-ball"></span></div>
        <div className="r-head">
          <div className="r-visor">
            <span className="r-eye"><span className="r-pupil"></span></span>
            <span className="r-eye"><span className="r-pupil"></span></span>
          </div>
          <span className="r-smile" id="rMouth"></span>
        </div>
        <div className="r-body">
          <div className="r-leds"><span></span><span></span><span></span></div>
          <span className="r-arm r-al"></span>
          <span className="r-arm r-ar"></span>
        </div>
        <div className="r-feet">
          <span className="r-foot"></span>
          <span className="r-foot"></span>
        </div>
      </div>
    </div>
  )
}
