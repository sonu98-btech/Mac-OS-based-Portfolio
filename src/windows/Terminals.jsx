
import React from 'react'
import TerminalModule from 'react-console-emulator'
import MacWindow from './MacWindow'
import "./terminals.scss"

const Terminal = TerminalModule.default || TerminalModule

const TERMINAL_TEXT_COLOR = 'rgb(141, 139, 136)'
const TERMINAL_PROMPT_COLOR = '#00ff00'

const TERMINAL_FONT_FAMILY =
  "'Cascadia Mono', 'Consolas', 'Menlo', 'Monaco', 'Courier New', monospace"

const AVAILABLE_COMMANDS = [
  'Available Commands:',
  'about      -> Who is Sonu?',
  'role       -> What is his current role?',
  'skills     -> What technologies does he know?',
  'projects   -> What has he built?',
  'internship -> What internship experience does he have?',
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
    description: 'Quick introduction about me',
    fn: () =>
      'I am Sonu Kumar, a Computer Science Engineering student and Full Stack MERN Developer with hands-on experience building web applications using React.js, Node.js, Express.js, MongoDB and modern development tools.'
  },

  role: {
    description: 'My current role and career direction',
    fn: () =>
      'Full Stack MERN Developer | Building full-stack applications with React.js, Node.js, Express.js and MongoDB, with additional experience in AI integration and real-time applications.'
  },

  skills: {
    description: 'My core technical skills',
    fn: () =>
      [
        'Languages: JavaScript (ES6+), C++, Python, TypeScript (Basic)',
        'Frontend: React.js, HTML5, CSS3, Tailwind CSS, Context API, Redux Toolkit',
        'Backend: Node.js, Express.js, REST APIs, JWT, OAuth, Socket.IO',
        'Database: MongoDB, Mongoose, Redis',
        'AI & LLM: LangChain, RAG (Basic)',
        'Tools: Git, GitHub, Postman, Render, Vercel',
        'Services: Razorpay, ImageKit, Multer, Nodemailer'
      ]
  },

  projects: {
    description: 'Highlights of my major projects',
    fn: () =>
      [
        'Projects:',
        '',
        '1. AI Assistant Platform',
        '   -> Full-stack AI assistant with real-time conversations.',
        '   -> React, Node.js, Express, MongoDB, Socket.IO, JWT, Redis and LangChain.',
        '   -> AI agents with Gemini and Mistral models.',
        '   -> Tool calling for web search, code execution, file management and email automation.',
        '',
        '2. Aavran - Full-Stack E-Commerce Platform',
        '   -> MERN-based e-commerce application.',
        '   -> JWT authentication and role-based authorization.',
        '   -> Product, cart, order and seller management.',
        '   -> Product variants, inventory and dynamic pricing.',
        '   -> MongoDB aggregation for cart totals, GST, shipping and checkout calculations.',
        '   -> Razorpay payment integration.',
        '   -> Image management using ImageKit and Multer.',
        '   -> Product search, filtering, cart and checkout.'
      ]
  },

  internship: {
    description: 'My internship experience',
    fn: () =>
      [
        'Full Stack Developer Virtual Intern (AICTE)',
        '',
        '-> Developed full-stack web applications.',
        '-> Built responsive frontend interfaces.',
        '-> Integrated backend APIs.',
        '-> Implemented RESTful APIs and database integration.',
        '-> Worked on frontend-backend connectivity.',
        '-> Strengthened end-to-end application development skills.'
      ]
  },

  strengths: {
    description: 'My strengths as a developer',
    fn: () =>
      [
        'Quick learner',
        'Consistent practice',
        'Strong problem-solving mindset',
        'Hands-on project-based learning',
        'Full-stack application understanding',
        'Ability to learn new technologies',
        'Willingness to take ownership',
        'Interest in AI-powered applications'
      ]
  },

  focus: {
    description: 'What I am learning and improving now',
    fn: () =>
      [
        'Currently focused on:',
        '',
        '-> Strengthening MERN stack fundamentals',
        '-> Improving JavaScript and backend skills',
        '-> Building scalable full-stack applications',
        '-> Understanding authentication and authorization',
        '-> Improving MongoDB and database design',
        '-> Learning AI application development',
        '-> Exploring LangChain and RAG',
        '-> Improving production deployment skills'
      ]
  },

  goals: {
    description: 'My future career goals',
    fn: () =>
      [
        'Future Goals:',
        '',
        '-> Become a highly skilled Full Stack MERN Developer',
        '-> Build scalable and production-ready applications',
        '-> Improve backend and system design skills',
        '-> Build AI-powered applications',
        '-> Contribute to real-world software projects',
        '-> Contribute to open-source projects',
        '-> Continuously learn modern technologies',
        '-> Grow into a dependable software engineer'
      ]
  },

  contact: {
    description: 'How to connect with me',
    fn: () =>
      [
        'You can connect with me through:',
        '',
        'GitHub   -> github.com/sonu98-btech',
        'LinkedIn -> linkedin.com/in/sonu-kumar-99793832'
      ]
  },

  ask: {
    description: 'Suggested questions visitors can ask',
    fn: () =>
      [
        'Suggested questions:',
        '',
        'Who is Sonu?                  -> about',
        'What is his role?             -> role',
        'What technologies does he know? -> skills',
        'What projects has he built?   -> projects',
        'What internship did he do?    -> internship',
        'What are his strengths?       -> strengths',
        'What is he learning now?      -> focus',
        'What are his future goals?    -> goals',
        'How can we connect?           -> contact'
      ]
  },

  commands: {
    description: 'Show all available commands',
    fn: () => AVAILABLE_COMMANDS
  }
}

const Terminals = ({ onClose }) => {
  return (
    <MacWindow
      className="terminal-window"
      x={286}
      y={54}
      width={684}
      height={528}
      title="Terminal"
      onClose={onClose}
    >
      <Terminal
        commands={commandList}

        welcomeMessage={[
          'Welcome to Sonu Kumar\'s portfolio terminal.',
          'Full Stack MERN Developer | AI & Web Application Developer',
          '',
          ...AVAILABLE_COMMANDS
        ]}

        promptLabel={"sonukumar@portfolio:~$"}

        promptLabelStyle={{
          color: TERMINAL_PROMPT_COLOR,
          fontFamily: TERMINAL_FONT_FAMILY
        }}

        messageStyle={{
          color: TERMINAL_TEXT_COLOR,
          fontFamily: TERMINAL_FONT_FAMILY
        }}

        inputTextStyle={{
          color: TERMINAL_TEXT_COLOR,
          fontFamily: TERMINAL_FONT_FAMILY
        }}

        style={{
          fontFamily: TERMINAL_FONT_FAMILY
        }}
      />
    </MacWindow>
  )
}

export default Terminals
