import { MapPin } from 'lucide-react'

function ComingSoonChip() {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-semibold uppercase tracking-wide">
      Coming soon
    </span>
  )
}

export function HomeSearchCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Find Properties</div>
        <ComingSoonChip />
      </div>
      <div className="flex items-center gap-2 h-10 bg-gray-50 border border-gray-200 rounded-lg px-3 cursor-not-allowed mb-3">
        <MapPin size={14} className="text-gray-300 shrink-0" />
        <span className="text-sm text-gray-300">Search properties near you...</span>
      </div>
      <div className="text-xs text-gray-400">Browse listings in your target area while your application is in review.</div>
    </div>
  )
}
