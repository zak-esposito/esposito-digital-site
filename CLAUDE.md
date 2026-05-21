# CLAUDE.md — Esposito Digital Website

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- Check the `brand_assets/` folder before designing. Use any logos, colours, or assets found there.

## Project Overview
Business website for Esposito Digital — an AI automation and web development studio serving South Wales SMBs.

- **Owner:** Zak Esposito
- **Domain:** espositodigital.co.uk
- **Stack:** Single `index.html`, Tailwind CSS CDN, vanilla JS, FormSubmit.co for contact form
- **Do NOT push to GitHub until explicitly told to**

## Brand
- **Name:** Esposito Digital
- **Tagline:** Websites and AI automation for local businesses
- **Accent colour:** Emerald green `#10B981`
- **Fonts:** Outfit (headings) + DM Sans (body) via Google Fonts
- **Tone:** Direct, confident, no corporate fluff. Local but professional.
- **Feel:** Clean, modern, competent. Not startup-hype, not corporate-bland.

## Site Sections (in order)
1. **Hero** — headline, subheadline, single CTA button ("Book a free call")
2. **Services** — Web Development, AI Automation, Monthly Maintenance
3. **Pricing** — three tiers, £1,500 floor. No prices below £1,500.
4. **About** — short, personal, Llanelli-based, CS grad, Renishaw background
5. **Contact** — contact form via FormSubmit.co to zak@espositodigital.co.uk

## Pricing Tiers
- **Starter Website:** £1,500 — up to 5 pages, responsive, contact form, deployed
- **Business Website:** £2,500 — more complex, custom sections, SEO setup, Google Business integration
- **AI-Enhanced:** £3,500+ — website plus AI automation (chatbot, lead capture, workflow automation)
- **Monthly maintenance:** £50/month add-on for any tier

## Copy Direction
- No em dashes
- No AI-sounding filler phrases
- First person, direct
- Say "local businesses in South Wales" not "SMEs across the region"
- Mention Llanelli and South Wales specifically — locality matters
- No exclamation marks in headings

## What NOT to Include
- Blog or CMS
- Portfolio or case studies section (no clients yet)
- Heavy animations that slow the page
- Anything requiring a backend

## Local Server
- Always serve on localhost — never screenshot a `file:///` URL
- Start dev server: `node serve.mjs` (serves project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking screenshots.
- If server is already running, do not start a second instance.

## Screenshot Workflow
- Always screenshot from localhost: `node screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented)
- Optional label: `node screenshot.mjs http://localhost:3000 label`
- After screenshotting, read the PNG and analyse it directly
- Do at least 2 comparison rounds. Stop only when output looks correct or user says so.
- When comparing, be specific: "heading is 32px but should be 24px", "gap is 16px but should be 24px"
- Check: spacing, font size/weight, colours (exact hex), alignment, border-radius, shadows

## Output Defaults
- Single `index.html`, all styles inline
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Mobile-first responsive
- Placeholder images via `https://placehold.co/WIDTHxHEIGHT` if needed

## Anti-Generic Guardrails
- **Colours:** Never use default Tailwind palette (indigo-500, blue-600). Use `#10B981` and derive from it.
- **Shadows:** Never flat `shadow-md`. Use layered, colour-tinted shadows with low opacity.
- **Typography:** Outfit for headings, DM Sans for body. Tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Consistent spacing tokens, not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base, elevated, floating).

## Hard Rules
- Do not add sections or features not listed above
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary colour
- Do not commit or push to GitHub until explicitly told to
- Do not stop after one screenshot pass — minimum two rounds