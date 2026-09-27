import { Link } from 'react-router'
import ROUTES from '@/config/constants'

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} ReactApp. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link to={ROUTES.HOME} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Home
            </Link>
            <Link to={ROUTES.ABOUT} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              About
            </Link>
            <Link to={ROUTES.BLOGS} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Blogs
            </Link>
            <Link to={ROUTES.CONTACT} className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
