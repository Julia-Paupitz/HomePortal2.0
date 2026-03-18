import { CheckCircle } from 'lucide-react'
import { applicationMilestones } from '@/data/mockData'

export function MilestonesCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-5">Milestones</div>

      {/* Horizontal stepper */}
      <div className="flex items-start justify-between gap-1">
        {applicationMilestones.map((milestone, index) => {
          const isLast = index === applicationMilestones.length - 1
          const isComplete = milestone.status === 'complete'
          const isInProgress = milestone.status === 'in-progress'

          return (
            <div key={milestone.id} className="flex-1 flex flex-col items-center">
              {/* Connector line + node row */}
              <div className="flex items-center w-full">
                {/* Left connector */}
                <div
                  className={`flex-1 h-0.5 ${index === 0 ? 'invisible' : isComplete ? 'bg-teal-700' : 'bg-gray-200'}`}
                />

                {/* Node */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    isComplete
                      ? 'bg-teal-700'
                      : isInProgress
                      ? 'bg-white border-2 border-teal-700'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle size={14} className="text-white" />
                  ) : isInProgress ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-700 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-gray-200" />
                  )}
                </div>

                {/* Right connector */}
                <div
                  className={`flex-1 h-0.5 ${isLast ? 'invisible' : isComplete ? 'bg-teal-700' : 'bg-gray-200'}`}
                />
              </div>

              {/* Label */}
              <div
                className={`mt-2 text-center text-[10px] leading-tight whitespace-pre-line ${
                  isComplete
                    ? 'text-teal-700 font-semibold'
                    : isInProgress
                    ? 'text-navy-800 font-semibold'
                    : 'text-gray-400'
                }`}
              >
                {milestone.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
