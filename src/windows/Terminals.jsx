import React from 'react'
import TerminalModule from 'react-console-emulator'
import MacWindow from './MacWindow'
import "./terminals.scss"

const Terminal = TerminalModule.default || TerminalModule
const TERMINAL_TEXT_COLOR = 'rgb(141, 139, 136)'
const TERMINAL_PROMPT_COLOR = '#00ff00'
const TERMINAL_FONT_FAMILY = "'Cascadia Mono', 'Consolas', 'Menlo', 'Monaco', 'Courier New', monospace"

const AVAILABLE_COMMANDS = [
  'Available Commands:',
  'about      -> Who is Sonu?',
  'role       -> What is his current role?',
  'skills     -> What technologies does he know?',
  'projects   -> What has he built?',
  'strengths  -> What are his strengths?',
  'focus      -> What is he learning now?',
  'goals      -> What are his future goals?',
  'contact    -> How can we connect?',
  'ask        -> Show suggested visitor questions',
  'commands   -> Show this command list again',
  'help       -> Built-in detailed command help'
]

const commandList = {
  about: {
    description: 'Quick intro about me',
    fn: () => 'I am Sonu Kumar, a frontend developer currently transitioning to full-stack (MERN).'
  },
  role: {
    description: 'My current role and direction',
    fn: () => 'Frontend Developer | Learning Node.js, Express, MongoDB to become a MERN developer.'
  },
  skills: {
    description: 'My core technical skills',
    fn: () => 'HTML, CSS, JavaScript, React, Vite, REST APIs, Git/GitHub, responsive UI design.'
  },
  projects: {
    description: 'Highlights of my projects',
    fn: () => 'Built projects include Contact Card Generator, YouTube Premium UI Clone, and E-Commerce Product Explorer.'
  },
  strengths: {
    description: 'My strengths as a developer',
    fn: () => 'Quick learner, consistent practice, UI-focused thinking, and project-based execution.'
  },
  focus: {
    description: 'What I am learning now',
    fn: () => 'Currently focused on advanced React patterns and backend development with Node + Express.'
  },
  goals: {
    description: 'My next career goals',
    fn: () => 'Become a professional MERN developer, build production apps, contribute to open source.'
  },
  contact: {
    description: 'How to connect with me',
    fn: () => 'Use the links in my portfolio (GitHub/LinkedIn) to connect with me.'
  },
  ask: {
    description: 'Suggested questions visitors can ask',
    fn: () => [
      'Suggested questions:',
      'Who is Sonu?                   -> about',
      'What technologies does he know? -> skills',
      'What projects has he built?     -> projects',
      'What is he learning now?        -> focus',
      'What are his future goals?      -> goals',
      'How can we connect?             -> contact'
    ]
  },
  commands: {
    description: 'Show all available commands',
    fn: () => AVAILABLE_COMMANDS
  }
}

const Terminals = ({ onClose }) => {
  return (
    <MacWindow className="terminal-window" x={286} y={54} width={684} height={528} title="Terminal" onClose={onClose}>
      <Terminal
        commands={commandList}
        welcomeMessage={[
          'Welcome to my portfolio terminal.',
          ...AVAILABLE_COMMANDS
        ]}
        promptLabel={"sonukumar@zns:~$"}
        promptLabelStyle={{ color: TERMINAL_PROMPT_COLOR, fontFamily: TERMINAL_FONT_FAMILY }}
        messageStyle={{ color: TERMINAL_TEXT_COLOR, fontFamily: TERMINAL_FONT_FAMILY }}
        inputTextStyle={{ color: TERMINAL_TEXT_COLOR, fontFamily: TERMINAL_FONT_FAMILY }}
        style={{ fontFamily: TERMINAL_FONT_FAMILY }}
      />
    </MacWindow>
  )
}

export default Terminals