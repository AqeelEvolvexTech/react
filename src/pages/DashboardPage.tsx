import useAuth from '@/hooks/useAuth'
import Header from '@/layouts/Header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export const DashboardPage = () => {
  const { user } = useAuth()

  return (
    <>
      <Header title="Dashboard" description={`Welcome back, ${user?.name ?? 'User'}!`} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500 dark:text-gray-400">Name</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{user?.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 dark:text-gray-400">Email</dt>
                <dd className="font-medium text-gray-900 dark:text-gray-100">{user?.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 dark:text-gray-400">Status</dt>
                <dd className="font-medium text-green-600 dark:text-green-400">Active</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="secondary" className="w-full justify-start">
              Edit Profile
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              Settings
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              View Blogs
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Personal dashboard. More features coming as the application grows.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default DashboardPage
