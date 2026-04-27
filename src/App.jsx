import React, { useState } from 'react'
import "./App.scss"
import Navbar from './components/Navbar'
import Dock from './Dock'
import GitWindow from './windows/GitWindow'
import Note from './windows/Note'
import Pdf from './windows/Pdf'
import Spotify from './windows/Spotify'
import Terminals from './windows/Terminals'

const App = () => {
  const [windowstate, setwindowstate] = useState({
    GitWindow: false,
    Note: false,
    Pdf: false,
    Spotify: false,
    Terminals: false
  })
  return (
    <main>
      <Navbar />
      <Dock windowstate={windowstate} setwindowstate={setwindowstate} />
      {windowstate.GitWindow && <GitWindow onClose={() => setwindowstate((prev) => ({ ...prev, GitWindow: false }))} />}
      {windowstate.Note && <Note onClose={() => setwindowstate((prev) => ({ ...prev, Note: false }))} />}
      {windowstate.Pdf && <Pdf onClose={() => setwindowstate((prev) => ({ ...prev, Pdf: false }))} />}
      {windowstate.Spotify && <Spotify onClose={() => setwindowstate((prev) => ({ ...prev, Spotify: false }))} />}
      {windowstate.Terminals && <Terminals onClose={() => setwindowstate((prev) => ({ ...prev, Terminals: false }))} />}
    </main>
  )
}

export default App