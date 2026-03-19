import { Hop as Home, ChevronRight } from 'lucide-react'
import { myHome } from '@/data/mockData'

export function MyHomeCard() {
  const { propertyValue, estimatedEquity } = myHome

  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-navy-300/10 flex items-center justify-center shrink-0">
          <Home size={16} className="text-navy-500" />
        </div>
        <h2 className="text-[16px] font-bold text-navy-800 font-sans">My Home</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div>
          <div className="text-[11.5px] text-gray-400 mb-0.5">Property Value</div>
          <div className="text-[20px] font-bold text-navy-800">
            ${propertyValue.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="text-[11.5px] text-gray-400 mb-0.5">Estimated Equity</div>
          <div className="text-[20px] font-bold text-teal-700">
            ${estimatedEquity.toLocaleString()}
          </div>
        </div>
      </div>

      <button className="w-full flex items-center justify-between bg-surface-50 hover:bg-teal-50/60 border border-gray-200 hover:border-teal-700/20 rounded-lg px-4 py-3 transition-colors group">
        <span className="text-[13px] font-medium text-navy-800">View Home Details</span>
        <ChevronRight size={14} className="text-gray-400 group-hover:text-teal-700 transition-colors" />
      </button>
    </div>
  )
}
