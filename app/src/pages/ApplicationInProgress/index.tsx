import { ChevronRight } from 'lucide-react'
import { userProfile } from '@/data/mockData'
import { TrackingWidgets } from '@/pages/Home/TrackingWidgets'
import { ToolsWidgets } from '@/pages/Home/ToolsWidgets'
import { ProductsSection } from '@/pages/Home/ProductsSection'
import { ApplicationPage } from './ApplicationPage'

const APP_URL = 'https://andyg-xd-smartapp-fu-tldx.bolt.host/apply/property-info'

function ApplicationInProgressHomePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 pt-6">
      {/* Greeting */}
      <h1 className="font-kadwa text-2xl text-navy-800">
        Welcome, {userProfile.firstName}
      </h1>

      {/* Applications section */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Applications</h2>
        <a
          href={APP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:bg-gray-50 transition-colors"
        >
          <div>
            <p className="text-sm font-bold text-navy-800 mb-1">
              You have 1 unfinished application!
            </p>
            <p className="text-xs text-gray-500">
              Complete your application to start your home buying journey!
            </p>
          </div>
          <ChevronRight size={18} className="text-gray-400 shrink-0" />
        </a>
      </section>

      {/* Tracking section */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tracking</h2>
        <TrackingWidgets />
      </section>

      {/* Tools section */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tools</h2>
        <ToolsWidgets />
      </section>

      {/* Products section */}
      <ProductsSection />
    </div>
  )
}

interface ApplicationInProgressPageProps {
  activeNav: string
  onNavigate: (id: string) => void
}

export function ApplicationInProgressPage({ activeNav }: ApplicationInProgressPageProps) {
  if (activeNav === 'application') return <ApplicationPage />

  return <ApplicationInProgressHomePage />
}
