import Header from '@/layouts/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const techStack = [
  { name: 'React 19', role: 'UI Library', description: 'Latest React with ref-as-prop pattern' },
  { name: 'TypeScript 6', role: 'Type Safety', description: 'Strict mode with full type coverage' },
  { name: 'Vite 8', role: 'Build Tool', description: 'Fast HMR and optimized production builds' },
  { name: 'React Router v8', role: 'Routing', description: 'Declarative client-side routing' },
  { name: 'Tailwind CSS v4', role: 'Styling', description: 'Utility-first CSS via Vite plugin' },
  { name: 'vite-plugin-svgr', role: 'SVG System', description: 'Import SVGs as React components with ?react' },
]

const architectureLayers = [
  { folder: 'api/', purpose: 'API layer with mock data, swappable for real backend' },
  { folder: 'app/', purpose: 'Application setup — providers and route definitions' },
  { folder: 'components/', purpose: 'Reusable UI primitives and feature-specific components' },
  { folder: 'config/', purpose: 'Centralized routes, storage keys, and API endpoints' },
  { folder: 'contexts/', purpose: 'React context providers for auth and theme state' },
  { folder: 'hooks/', purpose: 'Custom hooks — useAuth, useTheme' },
  { folder: 'layouts/', purpose: 'Structural components — Layout, Navbar, Header, Footer' },
  { folder: 'lib/', purpose: 'Utility functions — cn() for class merging' },
  { folder: 'pages/', purpose: 'Page-level components organized by feature' },
  { folder: 'types/', purpose: 'Shared TypeScript types per domain' },
]

export const AboutPage = () => {
  return (
    <>
      <Header title="About" description="Learn more about this project and its architecture" />

      <div className="space-y-8">
        <Card>
          <CardHeader><CardTitle>Project Overview</CardTitle></CardHeader>
          <CardContent>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              A production-ready React application built with modern best practices.
              It demonstrates professional architecture patterns including feature-based
              organization, type-safe API layers, context-based state management, and
              component-driven UI design.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Structured to be scalable, maintainable, and easy to extend. Each concern
              is separated into its own folder with clear boundaries.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Technology Stack</CardTitle></CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {techStack.map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                  <div className="size-2 rounded-full bg-primary-500" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{tech.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{tech.role} — {tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Architecture</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2">
              {architectureLayers.map((layer) => (
                <div key={layer.folder} className="flex items-start gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                  <code className="rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300">{layer.folder}</code>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{layer.purpose}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Key Patterns</CardTitle></CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>Arrow functions</strong> — All components use consistent arrow function syntax</li>
              <li><strong>Default + named exports</strong> — Every file supports both import styles</li>
              <li><strong>Context + hooks</strong> — Clean separation of state and consumption</li>
              <li><strong>Mock API layer</strong> — Swappable service layer for easy backend integration</li>
              <li><strong>Protected routes</strong> — Auth guard with redirect and loading states</li>
              <li><strong>Dark mode</strong> — System preference detection with manual toggle</li>
              <li><strong>AbortController</strong> — Proper cleanup for async operations</li>
              <li><strong>Tailwind CSS v4</strong> — Utility-first styling with Vite plugin</li>
              <li><strong>Dynamic icon system</strong> — SVGs auto-discovered via import.meta.glob</li>
              <li><strong>ErrorBoundary</strong> — Graceful error handling for the entire app</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default AboutPage
