# Portfolio

A design-engineer portfolio. Next.js (App Router) + Tailwind v4 + Motion.
Built against the "design taste" anti-slop rules: one locked accent, editorial
restraint, motivated motion, light + dark.

## Run it

```bash
npm install      # already done during scaffold
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build` then `npm start` for a production build.

## Make it yours

Everything the site says and shows lives in **`lib/content.ts`** — name, bio,
projects, links. Edit that one file; the components read from it.

- **Add project screenshots:** drop images in `public/work/`, then set `image`
  on the project in `lib/content.ts` (see `public/work/README.md`).
- **Theme:** the toggle (top-right) switches light/dark and remembers the
  choice. Default follows the OS. Colors are CSS variables in
  `app/globals.css`; the accent is rose — change `--accent` to rebrand.

## Structure

```
app/
  layout.tsx     fonts (next/font) + no-flash theme script + metadata
  page.tsx       section order
  globals.css    design tokens (light/dark), Tailwind theme, plate styles
components/
  nav · hero · about · work · contact · footer
  reveal         scroll-reveal (Motion, reduced-motion safe)
  plate          project image / placeholder
  copy-email · container
lib/
  content.ts     <- edit this
public/work/     <- screenshots here
```

## Deploy

Push to GitHub and import on Vercel (zero config), or `npm run build`.
