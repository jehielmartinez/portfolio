# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then build for production into `dist/`
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

There is no test suite.

## Architecture

This is a single-page personal portfolio (jehielmartinez.com) built with Vite + React 18 + TypeScript, deployed on Netlify.

The key structural idea is **content/presentation separation**: all site content lives in `src/assets/resume.ts`, which exports a typed `resume` object (`ResumeType`) plus the interfaces for each section (`ProfileType`, `ExperienceType`, `BadgeType`, etc.). `App.tsx` loads this object into state once and destructures it into props for each section component. To change site content (jobs, skills, badges, links), edit `resume.ts` — not the components.

`App.tsx` composes the page from section components in `src/components/`, split into a `profile_section` (left) and `career_section` (right). Each component is a thin presentational view over one slice of the resume data.

Some sections are wired but currently commented out in `App.tsx` (`Projects`, `Education`, and the project modal flow via `openModal`/`ProjectModal`). Their components and types still exist, so re-enabling a section is a matter of uncommenting in `App.tsx` rather than rebuilding it.

When adding a new section: add its interface and data to `resume.ts`, add the field to `ResumeType`, build a component that takes that slice as a prop, then render it in the appropriate `<section>` in `App.tsx`.

## Notes

- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` — `npm run build` fails on unused code, so commented-out imports must also be commented or removed.
- Static assets the resume references live in `public/images/`; bundled assets (resume PDF, icons) live in `src/assets/`.
