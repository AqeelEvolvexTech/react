import cn from '@/lib/utils'

export interface SpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Spinner = ({ className, size = 'md' }: SpinnerProps) => {
  const sizes = {
    sm: 'size-4',
    md: 'size-8',
    lg: 'size-12',
  }

  return (
    <svg
      className={cn('animate-spin text-primary-600', sizes[size], className)}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="Loading"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

export default Spinner
