import { Info } from 'lucide-react'
import { escrowSummary, totalMonthlyPayment } from '@/data/mockData'

export function MonthlyEscrowCard() {
  const e = escrowSummary
  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-0">Monthly Escrow Payment</h2>

      <div className="flex gap-0 mt-3.5">
        <div className="flex-1 pr-6 border-r border-surface-100">
          <div className="text-[11.5px] text-navy-300 mb-1">Escrow Amount</div>
          <div className="text-[20px] font-bold text-navy-800">
            ${e.monthlyAmount.toFixed(2)}
          </div>
        </div>
        <div className="flex-1 pl-6">
          <div className="text-[11.5px] text-navy-300 mb-1">Next Payment Due</div>
          <div className="text-[16px] font-semibold text-navy-800">{e.nextPaymentDue}</div>
        </div>
      </div>

      <p className="flex items-center gap-1.5 text-[12px] text-gray-400 mt-3.5">
        <Info size={13} className="flex-shrink-0" />
        This amount is included in your total monthly mortgage payment of ${totalMonthlyPayment.toFixed(2)}.
      </p>
    </div>
  )
}
