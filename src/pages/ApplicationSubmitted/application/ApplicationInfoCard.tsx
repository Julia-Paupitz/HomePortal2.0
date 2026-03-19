import { applicationSummary } from '@/data/mockData'

export function ApplicationInfoCard() {
  const { applicationNumber, address, loanAmount, loanType, status } = applicationSummary

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Application Info</div>
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-4">
          <span className="text-xs text-gray-400">Application #</span>
          <span className="text-sm font-semibold text-navy-800 text-right">{applicationNumber}</span>
        </div>
        <div className="flex justify-between items-start gap-4">
          <span className="text-xs text-gray-400">Property</span>
          <span className="text-sm text-navy-800 text-right leading-snug max-w-[60%]">{address}</span>
        </div>
        <div className="flex justify-between items-start gap-4">
          <span className="text-xs text-gray-400">Loan Amount</span>
          <span className="text-sm font-semibold text-navy-800">${loanAmount.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-start gap-4">
          <span className="text-xs text-gray-400">Loan Type</span>
          <span className="text-sm text-navy-800 text-right">{loanType}</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <span className="text-xs text-gray-400">Status</span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
            {status}
          </span>
        </div>
      </div>
    </div>
  )
}
