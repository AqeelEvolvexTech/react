import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { AuthContextValue, LoginCredentials, User } from '@/types/auth.types'
import { STORAGE_KEYS } from '@/config/constants'
import { loginUser } from '@/api/auth/authApi'

export const AuthContext = createContext<AuthContextValue | null>(null)

const getStoredUser = (): User | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.AUTH_USER)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getStoredUser)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user))
    } else {
      localStorage.removeItem(STORAGE_KEYS.AUTH_USER)
    }
  }, [user])

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true)
    try {
      const { user } = await loginUser(credentials)
      setUser(user)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
    }),
    [user, isLoading, login, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
