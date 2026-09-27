import { Navigate, useLocation } from 'react-router'
import type { ReactNode } from 'react'
import useAuth from '@/hooks/useAuth'
import ROUTES from '@/config/constants'
import Spinner from '@/components/ui/Spinner'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
