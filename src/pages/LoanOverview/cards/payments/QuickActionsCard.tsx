import { CreditCard, Settings, Calculator } from 'lucide-react'

const actions = [
  { icon: CreditCard, label: 'Make a Payment' },
  { icon: Settings,   label: 'Payment Preferences' },
  { icon: Calculator, label: 'Calculators' },
]

export function QuickActionsCard() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl bg-white border border-gray-200 hover:border-teal-700/40 hover:bg-teal-50 transition-colors group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
            <Icon size={18} className="text-teal-700" />
          </div>
          <span className="text-[11px] font-semibold text-gray-600 text-center leading-tight">{label}</span>
        </button>
      ))}
    </div>
  )
}
