import { MapPin } from 'lucide-react'

function ComingSoonChip() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-semibold uppercase tracking-wide">
      Coming soon
    </span>
  )
}

function ScenarioPricer() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Scenario Pricer</div>
        <ComingSoonChip />
      </div>
      <div className="space-y-2">
        <div>
          <div className="text-[10px] text-gray-400 mb-1">Loan Amount</div>
          <div className="h-8 bg-gray-50 border border-gray-200 rounded-lg px-3 flex items-center text-sm text-gray-300 cursor-not-allowed">
            $000,000
          </div>
        </div>
        <div>
          <div className="text-[10px] text-gray-400 mb-1">Rate</div>
          <div className="h-8 bg-gray-50 border border-gray-200 rounded-lg px-3 flex items-center text-sm text-gray-300 cursor-not-allowed">
            0.000%
          </div>
        </div>
      </div>
    </div>
  )
}

function FindProperties() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Find Properties</div>
        <ComingSoonChip />
      </div>
      <div className="flex items-center gap-2 h-8 bg-gray-50 border border-gray-200 rounded-lg px-3 cursor-not-allowed mb-3">
        <MapPin size={14} className="text-gray-300 shrink-0" />
        <span className="text-sm text-gray-300">Search properties...</span>
      </div>
      <div className="text-xs text-gray-400">Search listings near your area</div>
    </div>
  )
}

export function ToolsWidgets() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <ScenarioPricer />
      <FindProperties />
    </div>
  )
}
