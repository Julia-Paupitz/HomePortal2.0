import { CreditCard, Settings, Calculator } from 'lucide-react'

const actions = [
  { icon: CreditCard, label: 'Make a Payment' },
  { icon: Settings,   label: 'Requests' },
  { icon: Calculator, label: 'Calculators' },
]

export function OverviewQuickActionsCard() {
  return (
    <div className="flex flex-wrap gap-2">
      {actions.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="flex items-center gap-2 bg-teal-50 hover:bg-teal-700 text-teal-700 hover:text-white border border-teal-700/20 hover:border-teal-700 rounded-full px-4 py-2 text-[14px] font-semibold transition-all duration-150 cursor-pointer"
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  )
}
