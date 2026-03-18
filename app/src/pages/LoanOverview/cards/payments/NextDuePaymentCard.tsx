import { useState } from 'react'
import { CreditCard } from 'lucide-react'
import { toast } from 'sonner'
import { Switch } from '@/components/ui/switch'
import { nextPayment } from '@/data/mockData'

export function NextDuePaymentCard() {
  const p = nextPayment
  const [autoPayEnabled, setAutoPayEnabled] = useState(p.autoPayEnabled)

  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-0">Next due payment</h2>

      <div className="flex gap-0 my-4">
        {/* Amount */}
        <div className="flex-1 pr-6 border-r border-surface-100">
          <div className="text-[11.5px] text-navy-300 mb-1.5">Amount</div>
          <div className="text-[22px] font-bold text-navy-800">
            ${p.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
        {/* Due date */}
        <div className="flex-1 px-6 border-r border-surface-100">
          <div className="text-[11.5px] text-navy-300 mb-1.5">Due Date</div>
          <div className="text-[22px] font-bold text-navy-800">{p.dueDate}</div>
        </div>
        {/* AutoPay */}
        <div className="flex-1 pl-6">
          <div className="text-[11.5px] text-navy-300 mb-1.5">AutoPay</div>
          <div className="flex items-center gap-2.5">
            <Switch
              checked={autoPayEnabled}
              onCheckedChange={setAutoPayEnabled}
              className="data-[state=checked]:bg-teal-700"
            />
            <span className={`text-[16px] font-semibold ${autoPayEnabled ? 'text-green-600' : 'text-red-500'}`}>
              {autoPayEnabled ? 'On' : 'Off'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2.5 pt-4 border-t border-surface-100">
        <button
          onClick={() => toast.info('AutoPay settings opened')}
          className="flex items-center gap-1.5 bg-transparent text-teal-700 border-[1.5px] border-teal-700 hover:bg-teal-50 rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-colors cursor-pointer"
        >
          Manage AutoPay
        </button>
        <button
          onClick={() => toast.success('Payment submitted', { description: `$${p.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })} scheduled for ${p.dueDate}` })}
          className="flex items-center gap-2 bg-teal-700 hover:bg-[#145f5e] hover:-translate-y-px text-white rounded-xl px-7 py-3.5 text-[15px] font-semibold transition-all shadow-[0_4px_12px_rgba(26,122,120,0.28)] cursor-pointer"
        >
          <CreditCard size={16} />
          Pay now
        </button>
      </div>
    </div>
  )
}
