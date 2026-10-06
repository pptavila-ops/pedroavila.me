# pedroavila.me

This is the source for [pedroavila.me](https://pedroavila.me), the portfolio of Pedro Ávila, a Senior Product Designer working across AI workflows, design tooling and production code.

I designed and built the site myself. It's a working example of the kind of design-to-code work the case studies talk about.

## What's on the site

**Case studies.** Four longer stories about projects I've worked on:

- **HelloFresh**: building the AI workflow that takes designers from idea to production.
- **The Pets Table**: designing the subscription that makes fresh dog food an easy habit.
- **Móvix (ilia Digital)**: turning Brazil's home financing maze into a few taps.
- **Schwarzkopf (MVP Factory)**: helping decide whether an AI hair app was worth building.

**Playground.** Side projects and experiments, like Stella Timer (a no-frills meditation app built in React Native), hackathon work and prototypes.

**English and Portuguese.** The whole site can be read in either language, using the switch in the header.

## How it's built

- [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org), bundled with [Vite](https://vite.dev).
- Hosted on GitHub Pages. Every push to `main` deploys through [GitHub Actions](.github/workflows/deploy.yml).
- Images and video are compressed by hand before they're committed (WebP and MP4), because GitHub Pages serves files exactly as they are.
- Translations are a lookup layer on top of the English copy, in [`src/i18n/`](src/i18n/). `npm run check:i18n` catches strings that are missing a translation.

## Running it locally

You'll need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Type-checks and builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |
| `npm run check:i18n` | Checks that every visible string has a Portuguese translation |

## Reusing this

You're welcome to read the code and borrow ideas from it. The case study write-ups, images, videos and other personal content belong to me and to the companies I worked with, so please don't republish them.

## Contact

The best way to reach me is through [pedroavila.me](https://pedroavila.me) or [LinkedIn](https://www.linkedin.com/in/pptavila).
