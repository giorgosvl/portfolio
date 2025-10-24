# george-portfolio

React + Vite portfolio (dark theme) configured to pull projects from GitHub automatically.

## Local development

1. Install dependencies:
```bash
npm install
```

2. Run dev server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deploy to GitHub Pages

This project includes a `deploy` script that uses `gh-pages`. Steps:

1. Create a new repository on GitHub (e.g. `george-portfolio`) and push this project.
2. If you plan to use GitHub Pages from this repo, ensure `gh-pages` is installed (already in devDependencies).
3. Update `package.json` `homepage` field if you want an absolute base URL (optional).
4. Run:
```bash
npm run deploy
```

Alternatively you can use GitHub Actions or Vercel for easy deployment.

## Customize

- Edit `src/components/Header.jsx` to change avatar/text.
- Edit `src/components/Projects.jsx` to change number of repos or exclude repos by name.
- Add your photo to `public/` and update Header to show it.

