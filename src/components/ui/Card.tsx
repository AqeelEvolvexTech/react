import type { HTMLAttributes, ReactNode } from 'react'
import cn from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const CardBase = ({ className, children, ...props }: CardProps) => (
  <div
    className={cn(
      'rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800',
      className,
    )}
    {...props}
  >
    {children}
  </div>
)

export const Card = CardBase

export const CardHeader = ({ className, children, ...props }: CardProps) => (
  <div className={cn('mb-4', className)} {...props}>
    {children}
  </div>
)

export const CardTitle = ({ className, children, ...props }: CardProps) => (
  <h3 className={cn('text-lg font-semibold text-gray-900 dark:text-gray-100', className)} {...props}>
    {children}
  </h3>
)

export const CardDescription = ({ className, children, ...props }: CardProps) => (
  <p className={cn('text-sm text-gray-500 dark:text-gray-400', className)} {...props}>
    {children}
  </p>
)

export const CardContent = ({ className, children, ...props }: CardProps) => (
  <div className={cn('text-gray-600 dark:text-gray-300', className)} {...props}>
    {children}
  </div>
)

export const CardFooter = ({ className, children, ...props }: CardProps) => (
  <div className={cn('mt-4 flex items-center gap-3', className)} {...props}>
    {children}
  </div>
)

export default Card
