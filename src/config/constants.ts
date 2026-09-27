export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'ReactApp'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000/api'

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOGS: '/blogs',
  BLOG_DETAIL: '/blogs/:id',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  NOT_FOUND: '*',
} as const

export const STORAGE_KEYS = {
  AUTH_USER: 'auth_user',
  THEME: 'theme',
} as const

export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  BLOGS: '/blogs',
  BLOG: '/blogs/:id',
} as const

export default ROUTES
