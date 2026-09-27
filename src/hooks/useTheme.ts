import { useContext } from 'react'
import type { ThemeContextValue } from '@/types/theme.types'
import { ThemeContext } from '@/contexts/ThemeContext'

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

export default useTheme
