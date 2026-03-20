import { Bell } from 'lucide-react'
import { rateTracker, loanSummary } from '@/data/mockData'
import { EquityMonitoringWidget } from './EquityMonitoringWidget'

export function RateTrackingWidget() {
  const { trackedRate, sparklineData } = rateTracker
  const w = 100
  const h = 32
  const min = Math.min(...sparklineData) - 0.05
  const max = Math.max(...sparklineData) + 0.05
  const points = sparklineData
    .map((v, i) => {
      const x = (i / (sparklineData.length - 1)) * w
      const y = h - ((v - min) / (max - min)) * h
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Rate Tracking
      </div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-xl font-bold text-navy-800">{trackedRate}%</div>
          <div className="text-xs text-gray-400">Tracked rate</div>
        </div>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
          Watching
        </span>
      </div>
      <svg width={w} height={h} className="w-full mb-3">
        <polyline
          points={points}
          fill="none"
          stroke="#1A7A78"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <button className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-teal-700 border border-teal-700/30 rounded-full px-3 py-2 hover:bg-teal-50 transition-colors">
        <Bell size={12} />
        Set rate alert
      </button>
    </div>
  )
}

export function YourGoalsWidget() {
  const { maturityDate } = loanSummary
  // Payoff year from maturityDate MM/DD/YYYY
  const payoffYear = maturityDate.split('/')[2]
  const earlyPayoffYear = String(Number(payoffYear) - 6)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Your Goals
      </div>
      <div className="mb-3">
        <div className="text-sm font-semibold text-navy-800 mb-1">Early Payoff</div>
        <div className="text-xs text-gray-500 mb-0.5">Current payoff: {payoffYear}</div>
        <div className="text-xs text-teal-700 font-semibold">
          Could be {earlyPayoffYear} with +$200/mo extra
        </div>
      </div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-teal-700 rounded-full" style={{ width: '22%' }} />
      </div>
      <button className="text-xs font-semibold text-teal-700 hover:underline">
        Set a payoff goal →
      </button>
    </div>
  )
}

export function PaymentsWidgets() {
  return (
    <div className="space-y-4">
      <EquityMonitoringWidget />
      <RateTrackingWidget />
      <YourGoalsWidget />
    </div>
  )
}
