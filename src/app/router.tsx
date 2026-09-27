import { createBrowserRouter } from 'react-router'
import Layout from '@/layouts/Layout'
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import DashboardPage from '@/pages/DashboardPage'
import NotFoundPage from '@/pages/NotFoundPage'
import LoginPage from '@/pages/auth/LoginPage'
import BlogsPage from '@/pages/blog/BlogsPage'
import BlogDetailPage from '@/pages/blog/BlogDetailPage'
import ROUTES from '@/config/constants'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.ABOUT, element: <AboutPage /> },
      { path: ROUTES.CONTACT, element: <ContactPage /> },
      { path: ROUTES.BLOGS, element: <BlogsPage /> },
      { path: ROUTES.BLOG_DETAIL, element: <BlogDetailPage /> },
      { path: ROUTES.DASHBOARD, element: <ProtectedRoute><DashboardPage /></ProtectedRoute> },
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
])

export default router
