import type { ReactNode } from 'react'
import cn from '@/lib/utils'

export interface AlertProps {
  children: ReactNode
  variant?: 'info' | 'success' | 'warning' | 'error'
  className?: string
}

export const Alert = ({ children, variant = 'info', className }: AlertProps) => {
  const variants = {
    info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950 dark:text-blue-200 dark:border-blue-800',
    success: 'bg-green-50 text-green-800 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800',
    warning:
      'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-200 dark:border-yellow-800',
    error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-200 dark:border-red-800',
  }

  return (
    <div className={cn('rounded-lg border p-4 text-sm', variants[variant], className)} role="alert">
      {children}
    </div>
  )
}

export default Alert
