import { ChevronRight, Shield, Wrench, ClipboardCheck, TrendingDown } from 'lucide-react'
import { EquityMonitoringWidget } from './EquityMonitoringWidget'

const localServices = [
  { icon: Shield,         label: 'Home Insurance',  sub: 'Compare providers' },
  { icon: Wrench,         label: 'Home Repair',      sub: 'Find contractors' },
  { icon: ClipboardCheck, label: 'Inspection',       sub: 'Schedule a check-up' },
]

export function LocalServicesWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Local Services
      </div>
      <div className="space-y-1">
        {localServices.map(({ icon: Icon, label, sub }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 text-left hover:bg-surface-50 rounded-lg px-2 py-2 -mx-2 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center shrink-0">
              <Icon size={14} className="text-gray-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-navy-800 leading-tight">{label}</div>
              <div className="text-xs text-gray-400">{sub}</div>
            </div>
            <ChevronRight size={13} className="text-gray-300 group-hover:text-teal-700 transition-colors shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )
}

export function OpportunityWidget() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Opportunity
      </div>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center shrink-0">
          <TrendingDown size={16} className="text-yellow-700" />
        </div>
        <div>
          <div className="text-sm font-semibold text-navy-800 mb-1">Cash-Out Refinance</div>
          <div className="text-xs text-gray-500 leading-relaxed">
            Access your home equity for improvements, debt consolidation, or other needs.
          </div>
        </div>
      </div>
      <button className="w-full text-xs font-semibold bg-yellow-50 text-yellow-700 border border-yellow-700/20 rounded-lg px-3 py-2 hover:bg-yellow-100 transition-colors">
        See if you qualify
      </button>
    </div>
  )
}

export function OverviewWidgets() {
  return (
    <div className="space-y-4">
      <EquityMonitoringWidget />
      <LocalServicesWidget />
      <OpportunityWidget />
    </div>
  )
}
