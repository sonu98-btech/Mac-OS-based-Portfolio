# Project Details — mac-os-Portfolio

This document describes the mac-os-Portfolio project in detail: purpose, structure, technologies, run/build instructions, and explanations of key files and components.

---

## Overview

- **Name:** portfolio (package.json `name`)
- **Purpose:** A React + Vite single-page app that mimics a macOS-style portfolio interface with a navbar, dock, and several windowed panels (Git, Notes, PDF viewer, Spotify embed, terminals). It is a personal portfolio interface for Sonu Kumar.
- **Primary UI behavior:** A top navbar and a dock that opens modal-like window components (resizable/positioned) for each app-like feature.

## Tech stack

- **Framework:** React (v19)
- **Bundler / Dev server:** Vite
- **Styling:** SCSS / plain CSS
- **Utilities & UI libs:**
  - `react-console-emulator` (CLI-like terminal UI)
  - `react-markdown` (render markdown in React)
  - `react-rnd` and `rnd` (drag / resize helpers)
  - `react-syntax-highlighter` (code highlighting)
  - `sass` (SCSS compiler)

### Exact dependencies (from package.json)

- react: ^19.2.5
- react-dom: ^19.2.4
- react-console-emulator: ^5.0.2
- react-markdown: ^10.1.0
- react-rnd: ^10.5.3
- react-syntax-highlighter: ^16.1.1
- rnd: ^1.0.10
- sass: ^1.99.0

### DevDependencies

- vite: ^8.0.1
- @vitejs/plugin-react: ^6.0.1
- eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (versions in package.json)

## Scripts (how to run)

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build production assets
- `npm run preview` — preview built production bundle
- `npm run lint` — run ESLint across the project

Example local development flow:

```bash
npm install
npm run dev
# open http://localhost:5173 (or the port Vite reports)
```

## Project structure and file descriptions

Top-level files

- `index.html` — Vite HTML entry.
- `package.json` — project metadata and dependencies.
- `vite.config.js` — Vite configuration.
- `eslint.config.js` — ESLint rules / config.
- `README.md` — starter README (React + Vite template notes).

Public folder

- `public/` — static assets copied to build root:
  - `note.txt` — included static text file
  - `icons/` — SVG/icon assets used by the dock and UI
  - `nav-icon/` — icons used in the navbar (apple, wifi, etc.)

Source folder `src/` (entry points and UI)

- `main.jsx` — React entry: mounts `App` into `#root`.
- `index.css` — base global CSS loaded by `main.jsx`.
- `App.jsx` — top-level component that renders the `Navbar`, `Dock`, and conditional window components using local state `windowstate`.
- `App.scss` — application-level styles (SCSS file imported by `App.jsx`).

Key components and UI files

- `Dock.jsx` / `dock.scss` — the bottom dock UI with clickable icons. It toggles `windowstate` to open windows (GitWindow, Note, Pdf, Spotify, Terminals) and includes links (mail, calendar, LinkedIn).
- `components/Navbar.jsx` / `navbar.css` — the top macOS-style navbar with left and right groups; uses `DateTime.jsx` for live date/time display.
- `components/DateTime.jsx` — small component to show current date/time (used in navbar).

Window components (in `src/windows/`)

- `GitWindow.jsx` / `gitWindow.scss` — window component that displays GitHub data (likely sourced from `src/assets/githubData/github.json`).
- `Note.jsx` / `note.scss` — a notes window (maybe editable or display-only) and `public/note.txt` suggests there is example content.
- `Pdf.jsx` / `pdf.scss` — PDF viewing window (probably using an embedded PDF viewer or iframe to display a PDF).
- `Spotify.jsx` / `spotify.scss` — embeds a Spotify playlist using an `iframe` inside a `MacWindow` wrapper. The embed currently points to a Spotify playlist URL.
- `Terminals.jsx` / `terminals.scss` — provides terminal-like UI using `react-console-emulator`.
- `MacWindow.jsx` / `macWindow.scss` — a reusable window frame component that all windowed panels render inside; handles positioning, sizing and the close action.

Assets

- `src/assets/githubData/github.json` — locally stored GitHub data (used by `GitWindow` to show projects, stats, or repos).

CSS/SCSS

- The project mixes SCSS (`.scss`) and plain CSS files. SCSS files are compiled by `sass` at build-time when imported by the app and by Vite.

Configuration and linting

- `eslint.config.js` — ESLint configuration. Use `npm run lint` to run lint checks.

## Behavior details and flows

- App state: `App.jsx` holds a `windowstate` object with booleans for `GitWindow`, `Note`, `Pdf`, `Spotify`, `Terminals`. The `Dock` flips those booleans to open/close windows.
- Each window receives an `onClose` prop which sets the corresponding `windowstate` entry to `false`.
- `MacWindow` abstracts the window chrome — title, close button, default x/y coordinates and dimensions are passed as props.

## Notable implementation details

- `Spotify.jsx` uses an iframe embedding a Spotify playlist and applies `borderRadius: '12px'` inline style to soften corners.
- `Dock.jsx` uses `window.open(...)` for external links (mail, calendar, LinkedIn). Mail link is populated with `160250089@ggi.ac.in`.
- `GitWindow` likely reads from `src/assets/githubData/github.json` (check the component to confirm how data is imported).

## Development notes and recommendations

- SCSS and glassmorphism: if you use `backdrop-filter` ensure cross-browser compatibility by including both `-webkit-backdrop-filter` and `backdrop-filter` (saved from memory rules).
- Accessibility: verify `iframe` titles and `alt` attributes for images (many icons already have `alt` attributes, which is good).
- External links: when opening external URLs, `window.open` currently uses `"_blank"` and occasionally sets `noopener,noreferrer`. Ensure all external calls use `noopener,noreferrer`.

## Build & Deployment

- Run `npm run build` to create a production build in `dist/` (Vite default).
- Deploy the `dist/` contents to any static-hosting provider (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

## Linting & Type Hints

- The project includes `@types/react` and `@types/react-dom` in `devDependencies` but the files are `.jsx` — consider migrating to TypeScript (`.tsx`) if you want stricter type checks.

## Where to look for specific functionality

- Launch & mount: `src/main.jsx`.
- App orchestration and window state: `src/App.jsx`.
- Dock icons and click handlers: `src/Dock.jsx`.
- Navbar + date/time: `src/components/Navbar.jsx` and `src/components/DateTime.jsx`.
- Window chrome and layout: `src/windows/MacWindow.jsx`.
- Spotify embed: `src/windows/Spotify.jsx`.
- Git data: `src/assets/githubData/github.json` and `src/windows/GitWindow.jsx`.

## To extend the project

- Add more windowed apps by creating a new `src/windows/MyApp.jsx`, a stylesheet `myApp.scss`, and add a dock icon in `Dock.jsx` that toggles a boolean in `windowstate`.
- Replace local `github.json` with a GitHub API call to fetch live repository data; add caching and rate-limit handling.
- Improve the terminal experience by wiring `Terminals.jsx` commands to actual backend endpoints if you need real command execution (note: executing arbitrary shell commands requires a secure server and strong sandboxing).

## Final notes

This `detail.md` aims to be a single reference file describing the project's structure, tech choices, and where to find features. If you want, I can:

- generate an annotated file map listing every file and a one-line summary,
- convert the project to TypeScript scaffolding,
- or add a CONTRIBUTING.md and LICENSE file.

## How it was made

- **Initial scaffold:** The project began from a Vite React template (the same starter referenced in `README.md`). The template was adapted to the macOS-style UI by adding custom components, SCSS files, and assets in `public/`.
- **Development flow:** Iterative development using `npm run dev` (Vite dev server) with fast HMR feedback. Components were created incrementally: `MacWindow` (window chrome + drag/resize), `Dock` (icons + actions), and individual windows (`GitWindow`, `Note`, `Pdf`, `Spotify`, `Terminals`).
- **Major implementation steps:**
  1. Install dependencies and devDependencies listed in `package.json`.
  2. Create a `MacWindow` wrapper component for shared window chrome (title, close, position, sizing).
  3. Implement `Dock.jsx` to present icons and toggle `windowstate` booleans in `App.jsx`.
  4. Build each window component to render inside `MacWindow` and add styles in their respective SCSS files.
  5. Add static assets to `public/` (icons and `note.txt`) and local data to `src/assets/githubData/github.json` for offline display.
  6. Add ESLint and basic lint scripts to keep code consistent.

- **Tools & why they were chosen:**
  - Vite: lightning-fast dev server + modern bundling
  - React: component model that fits windowed UI and state passing
  - SCSS: nested styling and variables for a macOS-like look
  - `react-rnd` / `rnd`: provide drag & resize behavior for window components without implementing low-level pointer logic

## How it works (runtime & architecture)

- **App entrypoint:** `src/main.jsx` mounts the React app and loads global styles.
- **Root state & window orchestration:** `App.jsx` keeps a `windowstate` object where each key corresponds to a window. `Dock.jsx` toggles booleans on clicks, and `App.jsx` conditionally renders the appropriate window components.
- **Window abstraction (`MacWindow`):** This component accepts `x`, `y`, `width`, `height`, `title`, and `onClose` props. Internally it uses a drag/resize helper (commonly `react-rnd` or `rnd`) to enable moving and resizing. Each child window renders its UI inside the `MacWindow` frame so they all share consistent chrome and close behavior.
- **Data flow examples:**
  - `GitWindow` reads `src/assets/githubData/github.json` synchronously (import or fetch) and maps that JSON into UI elements like repository cards or lists.
  - `Spotify.jsx` uses an external embed (`iframe`) pointing at a Spotify playlist URL; playback and controls are managed by Spotify's embed player, not by the app.
  - `Note.jsx` can either load `public/note.txt` via fetch or manage notes in component state (the current codebase includes the example `note.txt`).
  - `Terminals.jsx` presents a simulated terminal using `react-console-emulator` with preconfigured commands and handlers.
- **User interactions & events:** Close buttons call the `onClose` prop which sets the corresponding boolean in `windowstate` to `false`. Dock click handlers set booleans to `true` to open windows. External links use `window.open(...)` and should use `noopener,noreferrer` to be secure.
- **Styling & visuals:** SCSS modules provide styles for `MacWindow`, dock, navbar, and individual windows. Glassmorphism or backdrop effects (if used) must include both `-webkit-backdrop-filter` and `backdrop-filter` for broader compatibility.

## Testing, debugging & maintenance

- **Linting:** Run `npm run lint` to detect stylistic issues and common bugs.
- **Manual testing:** Since UI is interactive (drag, resize, iframes), manual verification in the browser is the primary QA method.
- **Recommended automated tests:** Add unit tests for pure logic (data parsing, utility helpers) and UI snapshot or integration tests (React Testing Library) for components.
- **Debugging tips:** Use browser devtools for layout and network; Vite console shows fast rebuilds; add temporary console logs or React DevTools to inspect props/state.

## Recommended next improvements

- Use the GitHub API for live repo data instead of `github.json` and add a small caching layer.
- Add basic unit tests and a CI workflow to run lint and tests on PRs.
- Add ARIA attributes and improve keyboard accessibility for windows and the dock.
- Consider migrating to TypeScript to get compile-time safety and better IDE hints.

---

File generated automatically: `detail.md` (updated with creation/runtime details)
