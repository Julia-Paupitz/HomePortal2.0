import { CreditCard, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { nextPayment } from '@/data/mockData'

interface MonthlyPaymentCardProps {
  onNavigateToPayments?: () => void
}

export function MonthlyPaymentCard({ onNavigateToPayments }: MonthlyPaymentCardProps) {
  const p = nextPayment

  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[16px] font-bold text-navy-800 font-sans">Monthly Payment</h2>
        {onNavigateToPayments && (
          <button
            onClick={onNavigateToPayments}
            className="flex items-center gap-1 text-[13px] font-medium text-teal-700 hover:underline"
          >
            View All
            <ChevronRight size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-5 pb-4 border-b border-surface-100">
        {/* Amount */}
        <div className="flex-1 sm:pr-6 sm:border-r sm:border-surface-100">
          <div className="text-[11.5px] text-navy-300 mb-1">Next Payment Amount</div>
          <div className="text-[30px] font-bold text-navy-800">
            ${p.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>

        {/* Due date */}
        <div className="flex-1 sm:pl-6">
          <div className="text-[11.5px] text-navy-300 mb-1">Payment Due Date</div>
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[20px] font-semibold text-navy-800">{p.dueDate}</span>
            <StatusBadge variant={p.status} label={p.statusLabel} />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={() => toast.success('Payment submitted', { description: `$${p.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} scheduled for ${p.dueDate}` })}
          className="flex items-center gap-2 bg-teal-700 hover:bg-[#145f5e] hover:-translate-y-px active:translate-y-0 text-white rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all shadow-[0_4px_12px_rgba(26,122,120,0.28)] cursor-pointer"
        >
          <CreditCard size={16} />
          Pay Now
        </button>
      </div>
    </div>
  )
}
