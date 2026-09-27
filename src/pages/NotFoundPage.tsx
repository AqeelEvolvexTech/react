import { Link } from 'react-router'
import Button from '@/components/ui/Button'
import ROUTES from '@/config/constants'

export const NotFoundPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to={ROUTES.HOME} className="mt-6">
        <Button>Go Home</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
