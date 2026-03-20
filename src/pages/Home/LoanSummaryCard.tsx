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
      className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-700/40 hover:shadow-sm transition-all group"
    >
      {/* Top row: loan number + badge + chevron */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 font-medium">{loanSummary.loanNumber}</span>
          <StatusBadge variant={nextPayment.status} label={nextPayment.statusLabel} />
        </div>
        <ChevronRight size={18} className="text-gray-400 group-hover:text-teal-700 transition-colors shrink-0" />
      </div>

      {/* Address */}
      <div className="text-xs text-gray-500 truncate mb-0.5">{loanSummary.address}</div>

      <hr className="border-t border-gray-100 my-3" />

      {/* Stats — 3 columns fill the full width */}
      <div className="grid grid-cols-3">
        <div>
          <div className="text-xs text-gray-400 mb-0.5">Balance</div>
          <div className="text-sm font-semibold text-navy-800">
            ${loanSummary.principalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-0.5">Next Payment</div>
          <div className="text-sm font-semibold text-navy-800">
            ${nextPayment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
          <div className="text-xs text-gray-400">{nextPayment.dueDate}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-0.5">Interest Rate</div>
          <div className="text-sm font-semibold text-navy-800">{loanSummary.interestRate}%</div>
        </div>
      </div>
    </button>
  )
}
