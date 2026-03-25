# cfml — Personal Portfolio

Personal portfolio for Carlos Francisco Mendoza Lara, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Stack

- **Framework**: Astro 4 (static output)
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions (auto-deploys on push to `main`)
- **Content**: Markdown files in `src/content/projects/`

---

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/cfml`

---

## Adding a new project

1. Create a new file in `src/content/projects/`, e.g. `project-4.md`
2. Add the frontmatter:

```md
---
title: "Your Project Title"
description: "One or two sentences describing the project."
tag: "Category · Tools"
order: 4
image: "images/your-image.png"   # optional — put image in /public/images/
github: "https://github.com/..."  # optional
demo: "https://..."               # optional
date: "2024"
---

## Overview

Write your project content here using Markdown...
```

3. Push to `main` — GitHub Actions builds and deploys automatically.

---

## Updating your info

| What | Where |
|------|-------|
| Name, tagline, location | `src/pages/index.astro` → hero section |
| Skills / pills | `src/pages/index.astro` → `skills` array |
| About text | `src/pages/index.astro` → about section |
| Email & social links | `src/pages/index.astro` → contact section |
| Stat cards | `src/pages/index.astro` → about-stats |
| Site URL / base path | `astro.config.mjs` |

---

## Deploying

### First-time GitHub Pages setup

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under *Source*, select **GitHub Actions**
4. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest

### After first deploy

Just push to `main`. That's it.

---

## Customising colours

All design tokens are in `src/styles/global.css` under `:root`. The key ones:

```css
--bg:        #0e0e0e;   /* page background */
--accent:    #d4b896;   /* warm sand highlight colour */
--text:      #f0ede8;   /* primary text */
--text-muted:#888580;   /* secondary text */
```
