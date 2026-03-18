import { ChevronRight } from 'lucide-react'
import { applicationSummary } from '@/data/mockData'

interface ApplicationSummaryCardProps {
  onNavigate: (id: string) => void
}

export function ApplicationSummaryCard({ onNavigate }: ApplicationSummaryCardProps) {
  const { applicationNumber, address, loanAmount, status } = applicationSummary

  return (
    <button
      onClick={() => onNavigate('application')}
      className="w-full bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-teal-700/30 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-semibold text-navy-800">App {applicationNumber}</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-semibold">
              {status}
            </span>
          </div>
          <div className="text-xs text-gray-400 truncate mb-2">{address}</div>
          <div className="text-lg font-bold text-navy-800">
            ${loanAmount.toLocaleString()}
          </div>
        </div>
        <ChevronRight size={18} className="text-gray-300 group-hover:text-teal-700 shrink-0 mt-0.5 transition-colors" />
      </div>
    </button>
  )
}
