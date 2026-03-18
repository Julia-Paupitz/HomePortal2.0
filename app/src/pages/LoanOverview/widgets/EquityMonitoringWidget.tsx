import { loanSummary } from '@/data/mockData'

export function EquityMonitoringWidget() {
  const { estimatedEquity, homeValue, equityPercent } = loanSummary
  const mortgageBalance = homeValue - estimatedEquity
  const equityPct = equityPercent

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Equity Monitoring
      </div>
      <div className="mb-1">
        <div className="text-xl font-bold text-green-600">
          ${estimatedEquity.toLocaleString()}
        </div>
        <div className="text-xs text-gray-400">Estimated equity</div>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden my-3">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${equityPct}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <div>
          <div className="font-semibold text-navy-800">${mortgageBalance.toLocaleString()}</div>
          <div className="text-gray-400">Mortgage</div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-green-600">{equityPct}%</div>
          <div className="text-gray-400">Equity</div>
        </div>
      </div>
    </div>
  )
}
