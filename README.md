# ReactApp

A production-ready React 19 application with TypeScript, Tailwind CSS v4, React Router v8, and professional architecture patterns.

## Tech Stack

| Technology       | Version | Purpose                                 |
| ---------------- | ------- | --------------------------------------- |
| React            | 19.x    | UI library with latest features         |
| TypeScript       | 6.x     | Full type safety with strict mode       |
| Vite             | 8.x     | Build tool with HMR                     |
| React Router     | 8.x     | Client-side routing with code splitting |
| Tailwind CSS     | 4.x     | Utility-first styling via Vite plugin   |
| vite-plugin-svgr | 5.x     | SVG imports as React components         |
| Vitest           | 5.x     | Unit testing with jsdom                 |
| Prettier         | 3.x     | Code formatting                         |
| Husky            | 9.x     | Git hooks                               |
| lint-staged      | 17.x    | Pre-commit linting                      |

## Getting Started

### Using Yarn

```bash
yarn install       # Install dependencies
yarn dev           # Start dev server (http://localhost:3000)
yarn type-check    # Type check
yarn lint          # Lint
yarn format        # Format code
yarn test          # Run tests
yarn test:watch    # Run tests in watch mode
yarn build         # Build for production
yarn preview       # Preview production build
```

### Using npm

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:3000)
npm run type-check # Type check
npm run lint       # Lint
npm run format     # Format code
npm run test       # Run tests
npm run build      # Build for production
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── api/                        # API layer (mock, swappable for real backend)
│   ├── auth/authApi.ts
│   └── blog/blogApi.ts
├── app/                        # Application-level setup
│   ├── providers.tsx           # Context providers composition
│   └── router.tsx              # Route definitions with lazy loading
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
│   │   ├── Loading.tsx         # Suspense fallback
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
├── hooks/                      # Custom hooks
│   ├── useApi.ts               # Generic data fetching with cleanup
│   ├── useAuth.ts
│   └── useTheme.ts
├── layouts/                    # Layout components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   └── Navbar.tsx
├── lib/
│   ├── errors.ts               # Typed error classes (ApiError, NetworkError)
│   └── utils.ts                # Utility functions (cn)
├── pages/                      # All page components (lazy loaded)
│   ├── auth/LoginPage.tsx
│   ├── blog/BlogsPage.tsx
│   ├── blog/BlogDetailPage.tsx
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── DashboardPage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   └── main.css                # Tailwind CSS with custom theme
├── test/
│   └── setup.ts                # Test setup (jest-dom matchers)
├── types/                      # Shared TypeScript types
│   ├── auth.types.ts
│   ├── blog.types.ts
│   └── theme.types.ts
├── App.tsx                     # Root component
├── main.tsx                    # Entry point
└── vite-env.d.ts               # Vite env types
```

## Architecture Decisions

| Decision                        | Rationale                                                      |
| ------------------------------- | -------------------------------------------------------------- |
| **Pages in `pages/`**           | All page-level components in one place, organized by feature   |
| **Layouts in `layouts/`**       | Structural components separated from UI primitives             |
| **Contexts in `contexts/`**     | State providers centralized, not buried in feature folders     |
| **Hooks in `hooks/`**           | Custom hooks centralized, including `useApi` for data fetching |
| **API in `api/`**               | Separate API layer, swappable for real backend                 |
| **Components in `components/`** | Reusable UI primitives and feature-specific components         |
| **Config in `config/`**         | Centralized routes, constants, storage keys                    |
| **Types in `types/`**           | Shared TypeScript types per domain                             |
| **Errors in `lib/errors.ts`**   | Typed error classes for consistent error handling              |
| **Arrow functions**             | All components use consistent arrow function syntax            |
| **Default + named exports**     | Every file supports both import styles                         |
| **Dynamic icon system**         | SVG files auto-discovered via `import.meta.glob`               |
| **ErrorBoundary**               | Graceful error handling for the entire app                     |
| **Code splitting**              | All pages lazy loaded via `React.lazy` + `Suspense`            |
| **Route-level fallback**        | Shared `Loading` component for consistent UX                   |

## Testing

Unit tests are written with **Vitest** and **React Testing Library**:

```bash
yarn test           # Run all tests
yarn test:watch     # Watch mode
yarn test:coverage  # Coverage report
```

**Test files:** `src/**/*.test.{ts,tsx}`

| Test File                   | Coverage                    |
| --------------------------- | --------------------------- |
| `lib/utils.test.ts`         | `cn()`, `ApiError`, helpers |
| `hooks/useApi.test.ts`      | Data fetching hook          |
| `components/ui/ui.test.tsx` | Button, Alert, Input        |

## Code Quality

### Pre-commit Hooks

Husky + lint-staged run automatically before each commit:

- **TypeScript files**: Prettier format + ESLint fix
- **JSON/CSS/MD/YML**: Prettier format

### CI/CD

GitHub Actions runs on every push/PR to `main`:

1. Type check
2. ESLint
3. Prettier format check
4. Unit tests
5. Production build

Matrix tested on **Node 22** and **Node 24**.

## Demo Credentials

| Role  | Email             | Password |
| ----- | ----------------- | -------- |
| Admin | admin@example.com | 123456   |
| User  | user@example.com  | 123456   |

## Scripts

| Script               | Description                         |
| -------------------- | ----------------------------------- |
| `yarn dev`           | Start Vite dev server on port 3000  |
| `yarn build`         | Type-check and build for production |
| `yarn preview`       | Preview production build            |
| `yarn lint`          | Run ESLint                          |
| `yarn lint:fix`      | Run ESLint with auto-fix            |
| `yarn format`        | Format code with Prettier           |
| `yarn format:check`  | Check code formatting               |
| `yarn test`          | Run unit tests                      |
| `yarn test:watch`    | Run tests in watch mode             |
| `yarn test:coverage` | Run tests with coverage report      |
| `yarn type-check`    | Run TypeScript compiler             |
