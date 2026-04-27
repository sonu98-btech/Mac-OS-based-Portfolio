import React from 'react'
import "./dock.scss"
const Dock = ({ windowstate, setwindowstate }) => {
  return (
    <div className='dock'>
      <div className="icon github" onClick={() => setwindowstate({ ...windowstate, GitWindow: true })}>
        <img src="/icons/github.svg" alt="GitHub" />
      </div>
      <div className="icon note" onClick={() => setwindowstate({ ...windowstate, Note: true })}>
        <img src="/icons/note.svg" alt="Notes" />
      </div>
      <div className="icon mail" onClick={() => window.open("mailto:160250089@ggi.ac.in", "_blank")}>
        <img src="/icons/mail.svg" alt="Mail" />
      </div>
      <div className="icon pdf" onClick={() => setwindowstate({ ...windowstate, Pdf: true })}>
        <img src="/icons/pdf.svg" alt="PDF" />
      </div>
      <div className="icon calender" onClick={() => window.open("https://calendar.google.com", "_blank", "noopener,noreferrer")}>
        <img src="/icons/calender.svg" alt="Calendar" />
      </div>
      <div className="icon spotify" onClick={() => setwindowstate({ ...windowstate, Spotify: true })}>
        <img src="/icons/spotify.svg" alt="Spotify" />
      </div>
      <div className="icon link" onClick={() => window.open("https://www.linkedin.com/in/sonu-kumar-99793832b/", "_blank")}>
        <img src="/icons/link.svg" alt="Link" />
      </div>
      <div className="icon cli" onClick={() => setwindowstate({ ...windowstate, Terminals: true })}>
        <img src="/icons/cli.svg" alt="Terminal" />
      </div>

    </div>
  )
}

export default Dock