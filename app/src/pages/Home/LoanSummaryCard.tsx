import { ChevronRight } from 'lucide-react'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { loanSummary, nextPayment } from '@/data/mockData'

interface LoanSummaryCardProps {
  onNavigate: (id: string) => void
}

export function LoanSummaryCard({ onNavigate }: LoanSummaryCardProps) {
  return (
    <button
      onClick={() => onNavigate('my-loan')}
      className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-teal-700/40 hover:shadow-sm transition-all group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500 font-medium">{loanSummary.loanNumber}</span>
          <StatusBadge variant={nextPayment.status} label={nextPayment.statusLabel} />
        </div>
        <div className="text-xs text-gray-500 truncate mb-3">{loanSummary.address}</div>
        <div className="flex gap-6">
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Balance</div>
            <div className="text-sm font-semibold text-navy-800">
              ${loanSummary.principalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-0.5">Next Payment</div>
            <div className="text-sm font-semibold text-navy-800">
              ${nextPayment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} · {nextPayment.dueDate}
            </div>
          </div>
        </div>
      </div>
      <ChevronRight size={18} className="text-gray-400 group-hover:text-teal-700 transition-colors shrink-0 ml-4" />
    </button>
  )
}
