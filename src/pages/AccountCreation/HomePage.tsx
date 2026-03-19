import { ArrowRight, ChevronRight, Home } from 'lucide-react'
import { userProfile } from '@/data/mockData'
import { TrackingWidgets } from '@/pages/Home/TrackingWidgets'
import { ToolsWidgets } from '@/pages/Home/ToolsWidgets'
import { ProductsSection } from '@/pages/Home/ProductsSection'

const APP_URL = 'https://andyg-xd-smartapp-fu-tldx.bolt.host/apply/personal-info'

const TOTAL_STEPS = 5
const COMPLETED_STEPS = 1

interface Props {
  hasApplied: boolean
  onApply: () => void
}

export function AccountCreationHomePage({ hasApplied, onApply }: Props) {
  const progressPct = (COMPLETED_STEPS / TOTAL_STEPS) * 100

  return (
    <div className="max-w-2xl mx-auto space-y-8 pt-6">
      {/* Greeting */}
      <h1 className="font-kadwa text-2xl text-navy-800">
        Welcome, {userProfile.firstName}
      </h1>

      {hasApplied ? (
        /* Unfinished app card — shown after Apply Now is clicked */
        <section className="space-y-3">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Applications</h2>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="group block bg-gradient-to-br from-teal-50 to-white border border-teal-700/20 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow"
          >
            {/* Icon + status */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl bg-teal-700 flex items-center justify-center">
                <Home size={24} className="text-white" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-teal-700 pt-1">
                In Progress
              </span>
            </div>

            {/* Headline + sub */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-800 leading-snug mb-2">
                Pick up where you left off,<br />{userProfile.firstName}.
              </h2>
              <p className="text-sm text-gray-500">
                You're only a few steps away from getting pre-approved for your new home loan.
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Application progress
                </span>
                <span className="text-xs font-bold text-gray-500">
                  Step {COMPLETED_STEPS} of {TOTAL_STEPS} complete
                </span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-gray-200">
                <div
                  className="h-1.5 rounded-full bg-teal-700 transition-all"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="inline-flex items-center gap-2 bg-teal-700 group-hover:bg-[#145f5e] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
              Continue Application
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>
        </section>
      ) : (
        <>
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
              onClick={onApply}
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
            >
              Apply Now →
            </button>
          </div>
        </>
      )}

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
