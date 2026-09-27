import type { ReactNode } from 'react'
import AuthProvider from '@/contexts/AuthContext'
import ThemeProvider from '@/contexts/ThemeContext'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  )
}

export default AppProviders
