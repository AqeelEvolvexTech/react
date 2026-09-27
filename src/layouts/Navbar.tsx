import { Link, NavLink, useNavigate } from 'react-router'
import useAuth from '@/hooks/useAuth'
import useTheme from '@/hooks/useTheme'
import Button from '@/components/ui/Button'
import ROUTES from '@/config/constants'
import cn from '@/lib/utils'
import SunIcon from '@/assets/icons/sun.svg?react'
import MoonIcon from '@/assets/icons/moon.svg?react'

const navLinks = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.ABOUT, label: 'About' },
  { to: ROUTES.BLOGS, label: 'Blogs' },
  { to: ROUTES.CONTACT, label: 'Contact' },
]

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300'
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100',
  )

const mobileLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    'whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
    isActive
      ? 'bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300'
      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
  )

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(ROUTES.HOME)
  }

  const allLinks = isAuthenticated ? [...navLinks, { to: ROUTES.DASHBOARD, label: 'Dashboard' }] : navLinks

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={ROUTES.HOME} className="text-xl font-bold text-primary-600 dark:text-primary-400">
          ReactApp
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {allLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={desktopLink}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
          </button>

          {isAuthenticated ? (
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button size="sm" onClick={() => navigate(ROUTES.LOGIN)}>
              Login
            </Button>
          )}
        </div>
      </nav>

      <div className="flex items-center gap-1 overflow-x-auto border-t border-gray-100 px-4 py-2 dark:border-gray-800 md:hidden">
        {allLinks.map((link) => (
          <NavLink key={link.to} to={link.to} className={mobileLink}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}

export default Navbar
