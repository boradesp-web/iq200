# IQ200 – Olympiad Prep & IQ Evaluation Core

IQ200 is an olympiad-style quiz and IQ evaluation platform built with React 19,
TypeScript and Vite on the frontend, and an Express server (with the Gemini
API via `@google/genai`) on the backend.

> Note: this README was reconstructed during a repository repair pass. The
> original project README was not present in the source snapshot; this is a
> minimal placeholder describing how to run the project, not a recovered file.

## Stack

- Vite + React 19 + TypeScript (frontend, `src/`)
- Express + `tsx` (backend, `server.ts`)
- Tailwind CSS v4
- Gemini API (`@google/genai`) for AI-guided chat / syllabus lookup

## Getting started

```bash
npm install
npm run dev      # runs the Express server (tsx server.ts) with Vite middleware
npm run build     # type-checked production build (vite build + esbuild bundle of server.ts)
npm run lint      # tsc --noEmit
npm start         # run the built server (dist/server.cjs)
```

Copy `.env.example` to `.env` and fill in `GEMINI_API_KEY` before running the
AI-guide/chat features.

## Project layout

```
server.ts            Express server (API routes, in-memory + database.json persistence)
src/
  main.tsx            App entry point
  App.tsx             Root application component
  types.ts            Shared TypeScript types
  data.ts             Seed quiz/blog data
  index.css           Global styles (Tailwind)
  components/         All UI components
  utils/              Shared helpers (e.g. oklchPatch for html2canvas)
database.json         Runtime data store (questions, users, quizzes, etc.)
metadata.json         App manifest metadata
```
