import { ChevronRight } from 'lucide-react'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { loans } from '@/data/mockData'

interface LoansListPageProps {
  onSelectLoan: (loanId: string) => void
}

export function LoansListPage({ onSelectLoan }: LoansListPageProps) {
  return (
    <div className="max-w-2xl mx-auto pt-6">
      <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight mb-6">
        Loans
      </h1>

      <div className="space-y-3">
        {loans.map(loan => {
          const { summary, payment } = loan
          return (
            <button
              key={loan.id}
              onClick={() => onSelectLoan(loan.id)}
              className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-700/40 hover:shadow-sm transition-all group"
            >
              {/* Top row: loan number + badge + chevron */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 font-medium">{summary.loanNumber}</span>
                  <StatusBadge variant={payment.status} label={payment.statusLabel} />
                </div>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-teal-700 transition-colors shrink-0" />
              </div>

              {/* Address */}
              <div className="text-xs text-gray-500 truncate mb-0.5">{summary.address}</div>

              <hr className="border-t border-gray-100 my-3" />

              {/* Stats — 3 columns */}
              <div className="grid grid-cols-3">
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Balance</div>
                  <div className="text-sm font-semibold text-navy-800">
                    ${summary.principalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Next Payment</div>
                  <div className="text-sm font-semibold text-navy-800">
                    ${payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Rate</div>
                  <div className="text-sm font-semibold text-navy-800">{summary.interestRate}%</div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
