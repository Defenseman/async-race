# ASYNC RACE

## Deployed at - https://async-race-web-pp.netlify.app/ 

### Final Score: 370 / 400

### Checklist

### UI Deployment
✅ UI deployed on Vercel / Netlify / GitHub Pages / Cloudflare Pages
✅ Requirements to Commits and Repository
✅ Commits follow guidelines and have meaningful messages
✅ Checklist included in README.md
✅ Score calculated and included at top
✅ UI deployment link added at top of README

### Basic Structure (80 / 80 pts)
✅ Two Views: "Garage" and "Winners" — 10 pts
✅ Garage View Content: (30 pts)
  ✅View name
  ✅Car creation/edit panel
  ✅Race control panel
  ✅Garage section 
✅ Winners View Content: (10 pts)
  ✅Name of view
  ✅Winners table
  ✅Pagination 
✅ Persistent State (page, inputs, etc.) — 30 pts

### Garage View (80 / 90 pts)
✅ Car creation / update / delete with validations — 20 pts
✅ Color selection from RGB palette — 10 pts
✅ Random car creation (100 at once, name + color) — 20 pts
✅ Update / Delete buttons near each car — 10 pts
✅ Pagination: 7 cars per page — 10 pts
✅ Extra points: (10 / 20 pts)
  ✅ Empty Garage Message
  ❌ Go to previous page if last car deleted

### Winners View (40 / 50 pts)
✅ Display winners after race — 15 pts
✅ Pagination (10 per page) — 10 pts
✅ Winners table with №, image, name, wins, best time — 15 pts
❌ Sorting by wins and time (asc/desc) — 0 pts

### Race (160 / 170 pts)
✅ Start engine animation with request + error handling — 20 pts
✅ Stop engine animation — 20 pts
❌ Responsive animation (works from 500px and up) — 0 pts
✅ Start race for all cars on current page — 10 pts
✅ Reset race button (returns all cars to start) — 15 pts
✅ Winner announcement (car name) — 5 pts
✅ Button states updated (disable when should) — 20 pts
✅ Actions during race (block or handle editing, deleting, switching pages/views) — 50 pts

### Prettier and ESLint Configuration (10 / 10 pts)
✅ Prettier setup: format and ci:format scripts — 5 pts
✅ ESLint with Airbnb + lint script + strict TS — 5 pts

### Overall Code Quality (up to 100 pts, skipped in self-check)
Skipped: Evaluated by reviewer
  ⬜Modular Design
  ⬜Function Modularization
  ⬜Code Duplication and Magic Numbers
  ⬜Readability
  ⬜Extra features

#### Tech Stack
⚛️ React 18 + TypeScript
🎯 Redux Toolkit
🎨 SCSS Modules
🚗 CSS animations
📦 Vite
☁️ Hosted on Netlify

#### Scripts
npm run dev        # start dev server
npm run build      # build project
npm run format     # format code with Prettier
npm run lint       # run ESLint checks
npm run preview    # starts a local server to preview the production build

#### Commit Message Rules
feat: Adding a new feature
fix: Bug fix
refactor: Refactoring
docs: Code Formatting