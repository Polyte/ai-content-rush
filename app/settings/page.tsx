import UserProfile from '@/components/dashboard/user-profile'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function SettingsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <UserProfile />
        </div>
      </main>
      <Footer />
    </>
  )
}