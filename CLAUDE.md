# CLAUDE.md - AI Assistant Guide for Personal Website

## Project Overview

This is a modern personal portfolio website built with **Next.js 15** (App Router), **React 19**, **TypeScript 5**, and **Tailwind CSS v4**. The site features a blog, portfolio showcase, photography gallery, resume viewer, and contact form with dark mode support and animated particle backgrounds.

**Owner**: Anvith
**Deployment**: Vercel
**Repository**: AnvithV/personal-website

## Tech Stack

### Core Framework
- **Next.js 15.2.1** - React framework with App Router architecture
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety throughout

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 12.4.10** - Animation library for smooth transitions
- **@heroicons/react 2.2.0** - SVG icon library
- **next-themes 0.4.4** - Dark mode management
- **particles.js 2.0.0** - Animated particle background effects

### Backend & Features
- **nodemailer 6.10.0** - Email functionality for contact form
- **Gmail SMTP** - Email delivery service

### Development Tools
- **ESLint 9** - Code linting with Next.js config
- **PostCSS** - CSS processing with Tailwind
- **Turbopack** - Fast bundler in development mode

## Codebase Structure

```
/home/user/personal-website/
├── app/                          # Next.js App Router directory (main application)
│   ├── components/               # Shared React components
│   │   ├── Navigation.tsx        # Responsive nav with mobile menu
│   │   ├── ThemeToggle.tsx       # Dark mode toggle button
│   │   └── ParticleBackground.tsx # Animated particle effects
│   │
│   ├── content/                  # Content files
│   │   └── blog/                 # MDX blog posts with frontmatter
│   │
│   ├── api/                      # API routes
│   │   └── contact/
│   │       └── route.ts          # Contact form email endpoint
│   │
│   ├── about/page.tsx            # About page with skills & experience
│   ├── blog/page.tsx             # Blog listing page
│   ├── contact/page.tsx          # Contact form with social links
│   ├── photography/page.tsx      # Photo gallery (template)
│   ├── portfolio/page.tsx        # Project showcase
│   ├── resume/page.tsx           # PDF resume viewer
│   │
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   ├── providers.tsx             # Client-side providers (ThemeProvider)
│   └── globals.css               # Global styles with CSS variables
│
├── public/                       # Static assets
│   ├── profile.jpg               # Profile photo
│   ├── resume.pdf                # Downloadable resume
│   └── *.svg                     # Icons (Next.js, Vercel, etc.)
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS with Tailwind plugin
├── eslint.config.mjs             # ESLint configuration
└── .gitignore                    # Git ignore patterns
```

## Key Pages and Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Home page with hero and featured sections |
| `/about` | `app/about/page.tsx` | Personal background, education, experience, skills |
| `/portfolio` | `app/portfolio/page.tsx` | Project showcase with descriptions and links |
| `/blog` | `app/blog/page.tsx` | Blog post listing (MDX content) |
| `/photography` | `app/photography/page.tsx` | Photo gallery (empty template) |
| `/resume` | `app/resume/page.tsx` | Embedded PDF viewer with download |
| `/contact` | `app/contact/page.tsx` | Contact form with social links |
| `/api/contact` | `app/api/contact/route.ts` | Email sending API endpoint |

## Development Workflows

### Starting Development
```bash
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Branch Strategy
- **Main branch**: Production-ready code
- **Feature branches**: Prefix with `claude/` for AI-generated work
- Follow the pattern: `claude/feature-description-sessionId`

### Git Workflow
1. Create feature branch from main
2. Make changes and commit with clear messages
3. Push to origin with `git push -u origin <branch-name>`
4. Create PR when ready

### Environment Variables
Required `.env.local` file:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
NEXT_PUBLIC_GITHUB_URL=https://github.com/username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/username
```

## Key Conventions for AI Assistants

### Component Patterns

#### 1. Client vs Server Components
- **Client Components**: Add `'use client'` directive at top
  - Use for: interactive components, hooks, browser APIs, event handlers
  - Examples: Navigation, ThemeToggle, ParticleBackground, forms

- **Server Components**: Default (no directive needed)
  - Use for: static content, data fetching, SEO-optimized pages
  - Examples: About, Portfolio, Blog pages

```typescript
// Client component example
'use client';
import { useState } from 'react';

export default function MyComponent() {
  const [state, setState] = useState(false);
  // ...
}
```

#### 2. Metadata Pattern
Always include metadata for SEO on page components:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for SEO"
};
```

Root layout uses template: `"%s | Anvith"` - page titles automatically append " | Anvith"

#### 3. TypeScript Interfaces
Define interfaces for data structures:

```typescript
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}
```

### Styling Guidelines

#### Tailwind Patterns
**Consistent spacing:**
- Section padding: `py-20`
- Container max-width: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`

**Card pattern:**
```tsx
<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
```

**Button patterns:**
```tsx
// Primary button
<button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full">

// Secondary button
<button className="border-2 border-blue-500 text-blue-500 dark:text-white px-6 py-3 rounded-full">
```

**Responsive breakpoints:**
- `sm:` - Small devices (640px+)
- `md:` - Medium devices (768px+)
- `lg:` - Large devices (1024px+)

**Dark mode:**
Always provide dark mode variants using `dark:` prefix:
```tsx
<div className="bg-white dark:bg-black text-black dark:text-white">
```

#### Color Scheme
- **Light mode**: White background, black text, gray accents
- **Dark mode**: Black background, white text, gray-800/900 accents
- **Accent colors**: Blue-500 and Purple-500 gradients
- **Secondary text**: gray-600 (light) / gray-300 (dark)

### Animation Patterns

#### Framer Motion Variants
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

// Usage
<motion.div {...fadeInUp}>
```

**Staggered animations:**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
>
```

**Interactive animations:**
```typescript
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
>
```

### Data Management

#### Static Data Approach
Data is defined inline within components as TypeScript arrays/objects:

```typescript
const projects: Project[] = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/project-image.jpg",
    tags: ["React", "TypeScript"],
    liveLink: "https://...",
    githubLink: "https://github.com/..."
  }
];
```

#### Content Structure Locations
- **About page data**: `app/about/page.tsx` (skills, experience, education arrays)
- **Portfolio projects**: `app/portfolio/page.tsx` (projects array)
- **Blog posts**: `app/content/blog/*.mdx` (MDX files with frontmatter)
- **Photography**: `app/photography/page.tsx` (photos array - currently empty)

#### Blog Post Format (MDX)
```mdx
---
title: "Post Title"
date: "2024-01-16"
description: "Brief description"
tags: ["tag1", "tag2"]
---

# Post content in markdown
```

### API Routes

#### Contact Form Endpoint
- **Path**: `app/api/contact/route.ts`
- **Method**: POST
- **Body**: `{ name: string, email: string, message: string }`
- **Function**: Sends email via Nodemailer using Gmail SMTP
- **Environment vars**: `EMAIL_USER`, `EMAIL_PASS`

```typescript
// Request example
await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
});
```

### File Organization Rules

1. **Components**: Place in `app/components/` if used across multiple pages
2. **Page-specific components**: Co-locate in same directory as page
3. **Static assets**: Place in `public/` directory
4. **Blog content**: Place in `app/content/blog/` as `.mdx` files
5. **Types**: Define inline with components or in separate `.d.ts` if shared

### Accessibility Requirements

- Use semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`)
- Add `aria-label` for icon-only buttons
- Include `sr-only` classes for screen reader text
- Ensure keyboard navigation works (focus states visible)
- Maintain color contrast ratios (4.5:1 for text)

## Common Tasks

### Adding a New Page
1. Create `app/new-page/page.tsx`
2. Add metadata export
3. Add to navigation in `app/components/Navigation.tsx`
4. Follow existing styling patterns

### Adding a Blog Post
1. Create `app/content/blog/post-slug.mdx`
2. Add frontmatter (title, date, description, tags)
3. Write content in markdown
4. Post automatically appears in blog listing

### Adding a Portfolio Project
1. Edit `app/portfolio/page.tsx`
2. Add new object to `projects` array
3. Add project image to `public/` directory
4. Include title, description, tags, and links

### Updating Skills/Experience
1. Edit `app/about/page.tsx`
2. Modify `skills`, `experience`, or `education` arrays
3. Follow existing structure

### Modifying Dark Mode
- Theme colors defined in `app/globals.css` CSS variables
- Toggle implementation in `app/components/ThemeToggle.tsx`
- Provider configured in `app/providers.tsx`

### Updating Contact Info
- Social links: Environment variables (`NEXT_PUBLIC_*`)
- Email configuration: `EMAIL_USER` and `EMAIL_PASS` in `.env.local`
- Contact form logic: `app/api/contact/route.ts`

## Code Quality Standards

### TypeScript
- Use strict mode (enabled in `tsconfig.json`)
- Define interfaces for all data structures
- Avoid `any` types - use proper typing
- Use type inference where possible

### React Best Practices
- Use functional components with hooks
- Properly mark client/server components
- Memoize expensive calculations
- Use proper key props in lists

### Performance
- Optimize images (Next.js Image component)
- Lazy load heavy components
- Use static generation where possible
- Minimize client-side JavaScript

### Security
- Never commit `.env.local` (in `.gitignore`)
- Validate form inputs on both client and server
- Sanitize user input before sending emails
- Use environment variables for sensitive data

## Known Patterns and Quirks

### Navigation Active State
Navigation component checks `pathname` to highlight active page:
```typescript
const isActive = pathname === href;
```

### Profile Photo
- Location: `public/profile.jpg`
- Used on home page hero section
- Optimized via Next.js Image component

### Resume Handling
- PDF file: `public/resume.pdf`
- Embedded using iframe on `/resume` page
- Download button uses `<a>` tag with `download` attribute

### Empty Photography Gallery
- Template exists but photos array is empty
- Add photos by populating the `photos` array with Photo interface objects
- Include `src`, `alt`, `title`, `description` fields

### Email Configuration
- Uses Gmail SMTP (requires app password, not regular password)
- Configure in Google Account > Security > 2-Step Verification > App passwords
- Less secure apps access may need to be enabled

## Debugging Tips

### Common Issues

**Dark mode not working:**
- Check `next-themes` provider in `app/providers.tsx`
- Verify CSS variables in `app/globals.css`
- Ensure `suppressHydrationWarning` on `<html>` tag

**Contact form failing:**
- Verify `.env.local` has correct EMAIL_USER and EMAIL_PASS
- Check Gmail app password configuration
- Look at API route console logs for errors

**Build errors:**
- Run `npm run build` to check for TypeScript errors
- Verify all imports are correct
- Check for missing dependencies

**Styling not applying:**
- Ensure Tailwind classes are valid (check docs for v4)
- Verify `globals.css` is imported in root layout
- Check for conflicting styles

### Development Server
- Default port: 3000
- Turbopack enabled for faster builds
- Hot reload enabled for instant updates

## Version Control

### Git Ignore
Standard Next.js patterns:
- `node_modules/`
- `.next/`
- `.env*.local`
- Build output directories

### Commit Message Style
Based on recent commits:
- Use present tense ("Add feature" not "Added feature")
- Be descriptive but concise
- Prefix with type: "Fix:", "Add:", "Update:", "Refactor:"

Example:
```
Fix: Dark mode, email configuration, and navigation
Add: TypeScript interface for photos
Update: Portfolio projects with new designs
```

## Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React 19**: https://react.dev/

## Notes for AI Assistants

### When Making Changes:
1. **Always read files before editing** - Never propose changes to code you haven't seen
2. **Maintain consistency** - Follow existing patterns, naming conventions, and styles
3. **Type safety** - Add proper TypeScript types for new code
4. **Dark mode** - Always include dark mode variants when adding styles
5. **Responsive design** - Test on multiple breakpoints (mobile, tablet, desktop)
6. **Accessibility** - Include ARIA labels and semantic HTML
7. **Performance** - Use Next.js optimizations (Image, static generation)
8. **Test thoroughly** - Run `npm run build` before committing

### Do Not:
- Over-engineer simple solutions
- Add unnecessary abstractions
- Create new components when existing ones suffice
- Ignore dark mode styling
- Skip TypeScript types
- Commit environment variables
- Modify core Next.js configuration without good reason
- Break existing functionality

### Testing Changes:
1. Start dev server: `npm run dev`
2. Test in browser at http://localhost:3000
3. Toggle dark mode to verify styling
4. Test responsive design (mobile menu, layouts)
5. Run build: `npm run build`
6. Fix any TypeScript or build errors

---

**Last Updated**: 2026-01-16
**Next.js Version**: 15.2.1
**Maintained By**: Anvith

For questions or clarifications about this codebase, refer to the actual implementation in the repository.
