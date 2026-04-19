# Emad Ehsanrad · Links

This repository now hosts a Vite-powered version of Emad's personal link tree. The experience keeps the glassy, animated hero card and CTA tiles while shifting to a modern dev workflow for quick edits, builds, and GitHub Pages deployment.

## Development

1. Install dependencies: `pnpm install`
2. Start the dev server on port 5173: `pnpm run dev`
3. The local server automatically reloads on file changes.

## Production build

- Create a production bundle: `pnpm run build`
- Preview the production build locally: `pnpm run preview`

## Deploy to GitHub Pages

This repo includes a GitHub Pages workflow that runs on every push to `main`:

1. The workflow installs dependencies, builds the site with Vite, and publishes the contents of `dist/` via the GitHub Pages action.
2. Enable GitHub Pages in the repository settings and select the `gh-pages` deployment (the action handles the branch/resolution). The published site will serve the generated `dist/` assets.

If you want to publish manually:

- Run `npm run build`, then copy the `dist/` folder content to the `gh-pages` branch or another static host of your choice.
