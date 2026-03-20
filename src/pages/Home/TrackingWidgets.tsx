import { useIsMobile } from '@/hooks/useIsMobile'
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
            className="h-full bg-green-500 rounded-full transition-all"
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
        <div className="text-sm font-semibold text-green-600">{percent}%</div>
      </div>
    </div>
  )
}

function RateTracker() {
  const { trackedRate, sparklineData } = rateTracker
  const vbW = 80
  const vbH = 24
  const min = Math.min(...sparklineData) - 0.05
  const max = Math.max(...sparklineData) + 0.05
  const points = sparklineData
    .map((v, i) => {
      const x = (i / (sparklineData.length - 1)) * vbW
      const y = vbH - ((v - min) / (max - min)) * vbH
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Rate Tracker
      </div>
      <div className="text-2xl font-bold text-navy-800 mb-0.5">{trackedRate}%</div>
      <div className="text-xs text-gray-400 mb-3">Current tracked rate</div>
      <svg width="100%" height={vbH} viewBox={`0 0 ${vbW} ${vbH}`} preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="#9A6C00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function TrackingWidgets() {
  const isMobile = useIsMobile()

  return (
    <div className={isMobile ? 'space-y-3' : 'grid grid-cols-2 gap-3'}>
      <DownPaymentTracker />
      <RateTracker />
    </div>
  )
}
