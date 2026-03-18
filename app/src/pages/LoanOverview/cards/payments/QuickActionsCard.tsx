import { CreditCard, Settings, Calculator } from 'lucide-react'

const actions = [
  { icon: <CreditCard size={14} />, label: 'Make a Payment' },
  { icon: <Settings size={14} />,   label: 'Payment Preferences' },
  { icon: <Calculator size={14} />, label: 'Calculators' },
]

export function QuickActionsCard() {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map(action => (
        <button
          key={action.label}
          className="flex items-center gap-1.5 bg-teal-50 hover:bg-teal-700 text-teal-700 hover:text-white border border-teal-700/20 hover:border-teal-700 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-150 cursor-pointer"
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  )
}
