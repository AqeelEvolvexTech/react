import { Outlet } from 'react-router'
import Navbar from '@/layouts/Navbar'
import Footer from '@/layouts/Footer'
import Container from '@/components/ui/Container'

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />
      <main className="flex-1 py-8">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
