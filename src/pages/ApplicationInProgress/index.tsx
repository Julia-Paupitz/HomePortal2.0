import { useState } from 'react'
import { ArrowRight, Hop as Home, ChevronDown, ChevronUp } from 'lucide-react'
import { userProfile } from '@/data/mockData'
import { useDevSwitcher } from '@/context/DevSwitcherContext'

const APP_URL = 'https://andyg-xd-smartapp-fu-tldx.bolt.host/apply/property-info'

const TOTAL_STEPS = 5
const COMPLETED_STEPS = 1

function UnfinishedAppCard({ onSubmit }: { onSubmit: () => void }) {
  const progressPct = (COMPLETED_STEPS / TOTAL_STEPS) * 100

  return (
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

      {/* CTAs */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 bg-teal-700 group-hover:bg-[#145f5e] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
          Continue Application
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </div>
        <button
          onClick={e => { e.preventDefault(); e.stopPropagation(); onSubmit() }}
          className="inline-flex items-center gap-2 border border-teal-700 text-teal-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-teal-50 transition-colors"
        >
          Submit Application
        </button>
      </div>
    </a>
  )
}

const FAQ_ITEMS = [
  {
    q: 'How long does the application take to complete?',
    a: 'Most applicants finish in 15–20 minutes. You can save your progress at any point and return whenever it\'s convenient.',
  },
  {
    q: 'What documents will I need?',
    a: 'You\'ll typically need recent pay stubs (last 30 days), W-2s or tax returns from the past 2 years, bank statements, and a valid government-issued ID.',
  },
  {
    q: 'What happens after I submit my application?',
    a: 'Your loan officer will review your application within 1 business day and reach out to discuss next steps, including any additional documentation needed.',
  },
  {
    q: 'Can I save my progress and come back later?',
    a: 'Yes — your application auto-saves as you go. Just log back in and you\'ll pick up exactly where you left off.',
  },
  {
    q: 'How do I know if I qualify?',
    a: 'Submitting your application starts the process. Your loan officer will review your financial profile and walk you through your options — there\'s no obligation at this stage.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-semibold text-navy-800">{q}</span>
        {open
          ? <ChevronUp size={16} className="text-gray-400 shrink-0" />
          : <ChevronDown size={16} className="text-gray-400 shrink-0" />
        }
      </button>
      {open && (
        <p className="text-sm text-gray-500 pb-4 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

function FAQCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-5 py-1">
      {FAQ_ITEMS.map(item => (
        <FAQItem key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  )
}

export function ApplicationInProgressPage() {
  const { setGlobalState } = useDevSwitcher()

  return (
    <div className="max-w-2xl mx-auto space-y-8 pt-6">
      <h1 className="font-kadwa text-2xl text-navy-800">
        Welcome, {userProfile.firstName}
      </h1>

      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Applications</h2>
        <UnfinishedAppCard onSubmit={() => setGlobalState('application-submitted')} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-navy-800">Need Some Help?</h2>
        <FAQCard />
      </section>
    </div>
  )
}
