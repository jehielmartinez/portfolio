# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`), build the client into `dist/`, then build `src/entry-server.tsx` and run `scripts/prerender.js` to bake the rendered HTML into `dist/index.html` and write `dist/llms.txt` + `dist/resume.pdf`
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

- `uv run scripts/generate_resume_pdf.py` — regenerate the downloadable PDF résumé (`src/assets/Jehiel_Martinez_Resume.pdf`, served by the Download button) from `src/assets/resume.ts`. Run it after editing résumé content so the PDF stays in sync. Skips experience entries flagged `hidden: true`.

There is no test suite.

## Architecture

This is a single-page personal portfolio (jehielmartinez.com) built with Vite + React 18 + TypeScript, deployed on Netlify.

The key structural idea is **content/presentation separation**: all site content lives in `src/assets/resume.ts`, which exports a typed `resume` object (`ResumeType`) plus the interfaces for each section (`ProfileType`, `ExperienceType`, `BadgeType`, etc.). `App.tsx` loads this object into state once and destructures it into props for each section component. To change site content (jobs, skills, badges, links), edit `resume.ts` — not the components.

`App.tsx` composes the page from section components in `src/components/`, split into a `profile_section` (left) and `career_section` (right). Each component is a thin presentational view over one slice of the resume data.

Some sections are wired but currently commented out in `App.tsx` (`Projects`, `Education`, and the project modal flow via `openModal`/`ProjectModal`). Their components and types still exist, so re-enabling a section is a matter of uncommenting in `App.tsx` rather than rebuilding it.

When adding a new section: add its interface and data to `resume.ts`, add the field to `ResumeType`, build a component that takes that slice as a prop, then render it in the appropriate `<section>` in `App.tsx`.

## Notes

- The page is **prerendered at build time** so crawlers and LLMs that don't run JS see the full content. `src/entry-server.tsx` renders `<App />` to a string and also generates the head meta tags, JSON-LD (`Person`), and the `/llms.txt` markdown résumé from `resume.ts`; `scripts/prerender.js` injects them into the `<!--app-head-->`/`<!--app-html-->` placeholders in `index.html`. `main.tsx` hydrates when prerendered markup exists (in `npm run dev` it's empty and renders fresh). Components must stay SSR-safe: no `window`/`document` access during render.
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` — `npm run build` fails on unused code, so commented-out imports must also be commented or removed.
- Static assets the resume references live in `public/images/`; bundled assets (resume PDF, icons) live in `src/assets/`.
