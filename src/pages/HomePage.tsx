import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import ROUTES from '@/config/constants'
import Icon from '@/components/ui/Icon'

const features = [
  {
    title: 'React 19',
    description: 'Built with the latest React features including the new ref-as-prop pattern.',
    icon: 'code' as const,
  },
  {
    title: 'TypeScript 6',
    description: 'Full type safety across the entire codebase with strict TypeScript configuration.',
    icon: 'shield' as const,
  },
  {
    title: 'React Router v8',
    description: 'Modern client-side routing with nested layouts, and protected routes.',
    icon: 'route' as const,
  },
  {
    title: 'Tailwind CSS v4',
    description: 'Utility-first CSS framework with the new Vite plugin for optimal performance.',
    icon: 'palette' as const,
  },
  {
    title: 'Dark Mode',
    description: 'Built-in dark mode support with system preference detection and manual toggle.',
    icon: 'moon-outline' as const,
  },
  {
    title: 'Authentication',
    description: 'Secure auth flow with context-based state management, protected routes, and persistence.',
    icon: 'lock' as const,
  },
]

export const HomePage = () => {
  return (
    <div className="space-y-16">
      <section className="py-12 text-center sm:py-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100">
          Welcome to <span className="text-primary-600 dark:text-primary-400">ReactApp</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          A professionally architected React application with TypeScript, Tailwind CSS, React Router, authentication,
          and modern best practices.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link to={ROUTES.BLOGS}>
            <Button size="lg">Explore Blogs</Button>
          </Link>
          <Link to={ROUTES.ABOUT}>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
          Built with Modern Technologies
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="mb-2 inline-flex rounded-lg bg-primary-50 p-2 text-primary-600 dark:bg-primary-950 dark:text-primary-400">
                  <Icon name={feature.icon} className="size-6" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
