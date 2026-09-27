# ReactApp

A production-ready React 19 application with TypeScript, Tailwind CSS v4, React Router v8, and professional architecture patterns.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI library with latest features |
| TypeScript | 6.x | Full type safety with strict mode |
| Vite | 8.x | Build tool with HMR |
| React Router | 8.x | Client-side routing |
| Tailwind CSS | 4.x | Utility-first styling via Vite plugin |
| vite-plugin-svgr | 5.x | SVG imports as React components |

## Getting Started

### Using Yarn

```bash
yarn install      # Install dependencies
yarn dev          # Start dev server (http://localhost:3000)
yarn type-check   # Type check
yarn lint         # Lint
yarn build        # Build for production
yarn preview      # Preview production build
```

### Using npm

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (http://localhost:3000)
npm run type-check # Type check
npm run lint      # Lint
npm run build     # Build for production
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── api/                        # API layer (mock, swappable for real backend)
│   ├── auth/authApi.ts
│   └── blog/blogApi.ts
├── app/                        # Application-level setup
│   ├── providers.tsx           # Context providers composition
│   └── router.tsx              # Route definitions
├── assets/icons/               # SVG icon files (auto-discovered)
│   ├── sun.svg
│   ├── moon.svg
│   └── ...
├── components/                 # Shared UI components
│   ├── ui/                     # Design system primitives
│   │   ├── Alert.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Icon.tsx            # Dynamic icon component (import.meta.glob)
│   │   ├── Input.tsx
│   │   └── Spinner.tsx
│   ├── auth/
│   │   └── ProtectedRoute.tsx
│   ├── blog/
│   │   └── BlogCard.tsx
│   └── ErrorBoundary.tsx
├── config/
│   └── constants.ts            # Routes, storage keys, endpoints
├── contexts/                   # State providers
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── hooks/                      # All custom hooks
│   ├── useAuth.ts
│   └── useTheme.ts
├── layouts/                    # Layout components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── Navbar.tsx
├── lib/
│   └── utils.ts                # Utility functions (cn)
├── pages/                      # All page components
│   ├── auth/LoginPage.tsx
│   ├── blog/BlogsPage.tsx
│   ├── blog/BlogDetailPage.tsx
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── DashboardPage.tsx
│   └── NotFoundPage.tsx
├── types/                      # Shared TypeScript types
│   ├── auth.types.ts
│   ├── blog.types.ts
│   └── theme.types.ts
├── App.tsx                     # Root component
├── main.tsx                    # Entry point
└── vite-env.d.ts               # Vite env types
```

## Architecture Decisions

| Decision | Rationale |
|---|---|
| **Pages in `pages/`** | All page-level components in one place, organized by feature |
| **Layouts in `layouts/`** | Structural components separated from UI primitives |
| **Contexts in `contexts/`** | State providers centralized, not buried in feature folders |
| **Hooks in `hooks/`** | All custom hooks centralized |
| **API in `api/`** | Separate API layer, swappable for real backend |
| **Components in `components/`** | Reusable UI primitives and feature-specific components |
| **Config in `config/`** | Centralized routes, constants, storage keys |
| **Types in `types/`** | Shared TypeScript types per domain |
| **Arrow functions** | All components use consistent arrow function syntax |
| **Default + named exports** | Every file supports both import styles |
| **Dynamic icon system** | SVG files auto-discovered via `import.meta.glob` |
| **ErrorBoundary** | Graceful error handling for the entire app |

## Demo Credentials

```
Email: admin@example.com
Password: 123456
```

## Scripts

| Script | Description |
|---|---|
| `yarn dev` | Start Vite dev server on port 3000 |
| `yarn build` | Type-check and build for production |
| `yarn preview` | Preview production build |
| `yarn lint` | Run ESLint |
| `yarn type-check` | Run TypeScript compiler |
