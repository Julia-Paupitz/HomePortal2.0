import { ChevronRight } from 'lucide-react'
import { userProfile } from '@/data/mockData'
import { useDevSwitcher } from '@/context/DevSwitcherContext'
import { TrackingWidgets } from '@/pages/Home/TrackingWidgets'
import { ToolsWidgets } from '@/pages/Home/ToolsWidgets'
import { ProductsSection } from '@/pages/Home/ProductsSection'

const APP_URL = 'https://andyg-xd-smartapp-fu-tldx.bolt.host/apply/personal-info'

export function AccountCreationHomePage() {
  const { setGlobalState } = useDevSwitcher()

  function handleApplyNow() {
    window.open(APP_URL, '_blank', 'noopener')
    setGlobalState('application-in-progress')
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 pt-6">
      {/* Greeting */}
      <h1 className="font-kadwa text-2xl text-navy-800">
        Welcome, {userProfile.firstName}
      </h1>

      {/* Tell us about your goals card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 border-l-4 border-l-teal-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-navy-800 mb-1">Tell us about your goals</p>
            <p className="text-xs text-gray-500">
              Share what you're looking for so we can personalise your experience.
            </p>
          </div>
          <ChevronRight size={18} className="text-gray-400 shrink-0" />
        </div>
      </div>

      {/* Apply Now Banner */}
      <div className="bg-gradient-to-r from-teal-700 to-navy-800 rounded-2xl p-6 sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-teal-50/70 mb-2">
          Start Your Application
        </p>
        <h2 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
          Ready to start your home buying journey?
        </h2>
        <p className="text-sm text-white/70 mb-5">
          Apply in minutes — our team is here to help every step of the way.
        </p>
        <button
          onClick={handleApplyNow}
          className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
        >
          Apply Now →
        </button>
      </div>

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
