# CallFlow – AI-Powered SaaS Marketing Site

Live: https://saas-marketing-site-chi.vercel.app  
GitHub: https://github.com/Dhanraj2749/saas-marketing-site

## Overview
A production-grade SaaS marketing website built to demonstrate full website operations skills — CMS integration, deployment pipelines, A/B testing, SEO, analytics, and form integrations.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **CMS:** Storyblok (headless, visual editor)
- **Deployment:** Vercel (auto-deploy on push)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Form:** Formspree
- **Analytics:** Google Analytics 4

## Features

### Storyblok CMS Integration
- Hero headline, subheadline, and CTA text are fully editable from Storyblok's visual editor
- Non-technical marketing team can update content without touching code
- Connected via Storyblok RSC SDK with server-side data fetching

### A/B Testing
- Two hero variants (different headline + CTA copy) served to users via localStorage
- 50/50 random split on first visit, consistent on return visits
- Variant assignment logged as GA4 custom event for conversion analysis

### SEO
- Dynamic metadata with Open Graph and Twitter Card tags
- Auto-generated sitemap.xml and robots.txt via Next.js file-based metadata routes
- Lighthouse scores: 100 Performance / 96 Accessibility / 100 Best Practices / 100 SEO

### Contact Form
- Integrated with Formspree — real form submissions delivered to email
- Client-side validation with success/error state feedback
- Built as a React Client Component with async fetch

### Deployment & DevOps
- GitHub → Vercel auto-deploy pipeline
- Environment variables for secure token management
- CSP headers configured to allow Storyblok visual editor iframe embedding
- Preview URLs via Vercel for staging QA

### Analytics
- Google Analytics 4 installed via next/script with afterInteractive strategy
- Page views, scrolls, and outbound clicks tracked automatically via Enhanced Measurement

## Architecture Decisions
- Used Next.js App Router with React Server Components for server-side Storyblok data fetching (better SEO than client-side fetching)
- Storyblok initialized once in layout.tsx to avoid re-authentication on every page
- Contact form extracted as a separate Client Component since it requires useState and event handlers
- CSP headers added in next.config.ts to allow Storyblok iframe embedding without compromising security

## Local Development
```bash
npm install
# Add .env.local with:
# NEXT_PUBLIC_STORYBLOK_TOKEN=your_token
npm run dev
```

Open http://localhost:3000