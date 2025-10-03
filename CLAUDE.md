# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and integrated with Storyblok CMS. The site showcases professional experience, projects, and includes a special Instagram-style bio page (`/ig`) powered by Storyblok for dynamic content management.

## Key Commands

### Development
```bash
npm run dev         # Start development server on http://localhost:3000
npm run build       # Build production bundle
npm start           # Start production server
npm run lint        # Run ESLint
```

### HTTPS Development (macOS)
For local HTTPS development (required for certain integrations):
```bash
# After generating certificates with mkcert (see README.md)
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

## Architecture

### App Structure
- **Next.js App Router**: Using the `app/` directory structure (Next.js 14)
- **Main Routes**:
  - `/` - Main portfolio page ([app/page.tsx](app/page.tsx))
  - `/ig` - Instagram-style bio page with Storyblok CMS integration ([app/ig/page.tsx](app/ig/page.tsx))
  - `/practice` - Practice/demo section with product table example

### Component Organization
- `app/components/` - Shared components organized by feature:
  - `Experience/` - Experience list and item components
  - `Nav/` - Navigation component
  - `Social/` - Social media components
- Route-specific components live in `app/[route]/components/`

### Context & State Management
- `ThemeContext` in [app/context/MainContext.ts](app/context/MainContext.ts) - Simple theme context (currently defaults to 'dark')
- Client components marked with `'use client'` directive where needed

### Storyblok Integration
- Initialized in [app/layout.tsx](app/layout.tsx) root layout
- Access token configured via `SB_ACCESS_TOKEN` environment variable
- Used for dynamic content in `/ig` route
- API calls use `getStoryblokApi()` from `@storyblok/react/rsc`
- Content fetched from `cdn/stories/henrrymojica-me/ig` endpoint

### Styling
- **Tailwind CSS** with dark mode support via `dark:` prefix
- **Geist Sans** font from Vercel's geist package
- Global styles in [app/globals.css](app/globals.css)

### Analytics & Tracking
- Vercel Analytics integrated in root layout
- Google Analytics (GA4) configured with GTM ID: G-B2W5ZG9KKM

### Type Definitions
- Custom types in `types/` directory
- Main exports through [types/index.ts](types/index.ts):
  - `Experience` type for work experience data
  - `Product` type for practice section

## Important Configuration Notes

### Environment Variables
- `SB_ACCESS_TOKEN` - Storyblok API access token (required for `/ig` route)

### Next.js Config
- Image domains configured for `fakestoreapi.com` in [next.config.js](next.config.js)
- Environment variables passed through Next.js config

### Static Export
- Project appears configured for static export based on `out/` directory presence
- Consider this when implementing features requiring server-side runtime

## Development Patterns

### Data Fetching
- Server components by default (Next.js 14 App Router)
- Async/await in Server Components for data fetching (see [app/ig/page.tsx](app/ig/page.tsx))
- Client components (`'use client'`) only when needed for interactivity/hooks

### Image Handling
- Use Next.js `Image` component from `next/image`
- Static imports from `public/` directory (e.g., `import linkedin from 'public/images/linkedin.svg'`)
- Responsive images with proper sizing props

### Error Handling
- Try/catch blocks in data fetching functions
- Return objects with `{ data, error }` pattern (see `fetchData()` in ig/page.tsx)
