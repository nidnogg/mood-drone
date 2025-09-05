# Mood Drone - Project Context for Claude Agents

## Project Overview
Mood Drone is an open-source web app that mimics a radio widget, inspired by Docubyte's "Guide to Computing." It plays moody ambient songs designed to create a productive work atmosphere.

**Current Branch:** `v1.1-background` (working branch)  
**Main Branch:** `master`  
**Repository:** https://github.com/Nidnogg/mood-drone  
**Live Demo:** https://nidnogg.github.io/mood-drone

## Design CSS Considerations
- Use lightweight, not too long animations with ease-in-out
- 0.377ms for everything. if it needs to be long, 5.77ms.
- opt for Gruvbox palette
- make it easy for me to change color palettes
## Recent Development Progress (Latest Commits)
Based on commit history, the project has recently undergone significant modernization:

1. **5ae7bc0** - `feat: initial build` - Major milestone completing the build setup
2. **9666c10** - `chore: plumbing react PR changes` - React integration work
3. **4dfc15f** - `chore: pnpm plumbing` - Package manager setup
4. **9dd24e8** - `fix: working vite install` - Build tooling fixes
5. **324b382** - `fix: jsx filename error` - React/JSX configuration
6. **4b028be** - `chore: vite plumbing` - Vite build system setup
7. **ef922fa** - `Code cleanup, comments on buttons, removed unused functions` - Code quality improvements

## Current Technical Stack
- **Frontend:** React 18.3.1 with JSX
- **Build Tool:** Vite 7.1.2 (recently migrated from Parcel)
- **Package Manager:** pnpm (recently added)
- **Animation:** GSAP 3.2.4, React Spring 8.0.27
- **UI:** React Hot Toast for notifications
- **Deployment:** GitHub Pages via gh-pages

## Project Structure
Main React components:
- `src/App.jsx` - Main application
- `src/Drone.jsx` - Core drone functionality
- `src/Controller.jsx` - Audio controls
- `src/SideController.jsx` - Side panel controls
- `src/Background.jsx` - Background visuals
- `src/Clock.jsx` - Clock display
- `src/Hamburger.jsx` - Menu component

## Development Status
The project appears to be in active development on the `v1.1-background` branch with focus on:
- **Build System Migration:** Successfully moved from Parcel to Vite
- **React Modernization:** Updated to React 18+ with modern JSX
- **Package Management:** Integrated pnpm for better dependency management
- **Code Quality:** Recent cleanup and documentation improvements

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

## Project Goals & Context
This is part of a "Drone Index" - a collection of mood-based audio applications:
- **Mood Drone** - General productive ambiance (this project)
- **Sky Drone** - Brazilian music focus
- **Kuh Drone** - Personalized for specific user

The app is designed to provide ambient audio for focused work sessions, with a retro radio widget aesthetic.

## Current State
- ✅ Build system modernized and working
- ✅ React components structured and functional  
- ✅ Basic deployment pipeline established
- 🔄 Likely working on v1.1 features (background-related based on branch name)
- 📝 Ready for feature development or bug fixes

## For Future Agents
When picking up work on this project:
1. The build system is modern and stable (Vite + React)
2. Use `npm run dev` to start development
3. Main development happens on feature branches, merge to `master`
4. Focus is on ambient audio experience and retro UI aesthetics
5. Code quality standards are established (see recent cleanup commits)
