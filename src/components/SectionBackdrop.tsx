import React from 'react'

type SectionTheme = 'hero' | 'about' | 'skills' | 'projects' | 'certs' | 'resume' | 'contact'

type SectionBackdropProps = {
  theme: SectionTheme
}

export default function SectionBackdrop({ theme }: SectionBackdropProps) {
  return <div className={`section-backdrop section-backdrop-${theme}`} aria-hidden="true" />
}
