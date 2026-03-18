import { downPaymentTracker, rateTracker } from '@/data/mockData'

function DownPaymentTracker() {
  const { saved, goal } = downPaymentTracker
  const percent = Math.round((saved / goal) * 100)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Down Payment Tracker
      </div>
      <div className="mb-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1.5">
          <span>Saved</span>
          <span>Goal</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-700 rounded-full transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <div className="text-lg font-bold text-navy-800">
            ${saved.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">of ${goal.toLocaleString()} goal</div>
        </div>
        <div className="text-sm font-semibold text-teal-700">{percent}%</div>
      </div>
    </div>
  )
}

function RateTracker() {
  const { trackedRate, sparklineData } = rateTracker
  const w = 80
  const h = 24
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
        Rate Tracker
      </div>
      <div className="flex items-center gap-3 mb-3">
        <svg width={w} height={h} className="shrink-0">
          <polyline
            points={points}
            fill="none"
            stroke="#1A7A78"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
          {trackedRate}%
        </span>
      </div>
      <div className="text-xs text-gray-400">Current tracked rate</div>
    </div>
  )
}

export function TrackingWidgets() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <DownPaymentTracker />
      <RateTracker />
    </div>
  )
}
