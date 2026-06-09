# Portfolio Website

This is a personal portfolio website built with Next.js 15, React, TypeScript, and Tailwind CSS.

The app showcases a modern portfolio layout with animated UI, dark mode support, and a simple content-driven page structure for a portfolio, about, and contact page.

## Key Features

- **Next.js 15**: App Router, metadata API, and optimized static/page rendering
- **TypeScript**: Strong typing across components, page metadata, and store logic
- **Tailwind CSS v4**: Utility-first styling with custom theme colors in `app/globals.css`
- **Redux Toolkit**: Client-side theme state management
- **Framer Motion**: Animated page visuals and floating icon effects on the homepage
- **Lucide / React Icons**: Consistent iconography for navigation, contact links, and skills cards
- **Cloudflare Workers / Wrangler**: Production deployment target via `wrangler deploy`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

Run linting:

```bash
npm run lint
```

## Project Structure

- `app/`
  - `layout.tsx`: Root layout with global providers and theme support
  - `page.tsx`: Homepage entry that renders the portfolio landing page
  - `about/page.tsx`: About page content
  - `contact/page.tsx`: Contact page content
- `components/`
  - `layout/`: Shared layout and header components
  - `pages/`: Page-specific components such as `HomePage`
  - `ui/`: Reusable UI elements like `ContactCard`, `InsightCallout`, `SkillsCard`, and `TimelineNode`
- `lib/`
  - `AnalyticsContext.tsx`: Analytics provider for page-view tracking
  - `StoreProvider.tsx`: Redux store provider wrapper
- `store/`
  - `themeSlice.ts`: Dark/light theme state management
  - `index.ts`: Redux store configuration
- `public/`: Static assets and images
- `next.config.ts`: Next.js configuration with export and environment rewrites for development
- `wrangler.jsonc`: Cloudflare Workers deployment settings

## Environment

This project uses configuration from `config/default.json` and `config/production.json` for API variables and analytics keys.

### Development rewrites

When running locally, API requests to `/api/:path*` are proxied to a remote development backend configured in `next.config.ts`.

## Notes

- The site uses a custom `AppLayout` and header with navigation links to the portfolio, about, and contact pages.
- Theme toggling is implemented in the header via Redux state.
- The homepage includes animated background particles and a summary of skills, experience, and education.
- The app is built for both fast local development and static-friendly production deployment.
