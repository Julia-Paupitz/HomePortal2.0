import { useState } from 'react'
import { ChevronRight, Percent, ChevronDown, ChevronUp } from 'lucide-react'
import { loanSummary } from '@/data/mockData'

function DetailLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[11.5px] text-gray-400 mb-0.5">{children}</div>
}

function DetailValue({ children, large }: { children: React.ReactNode; large?: boolean }) {
  if (large) return <div className="text-[22px] font-bold text-navy-800">{children}</div>
  return <div className="text-[14.5px] font-semibold text-navy-800">{children}</div>
}

function DetailRow({ label, value, large }: { label: string; value: string; large?: boolean }) {
  return (
    <div className="mb-3 last:mb-0">
      <DetailLabel>{label}</DetailLabel>
      <DetailValue large={large}>{value}</DetailValue>
    </div>
  )
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10.5px] font-bold uppercase tracking-[0.9px] text-gray-400 mb-3.5">
      {children}
    </div>
  )
}

interface LoanDetailsCardProps {
  isMobile?: boolean
}

export function LoanDetailsCard({ isMobile }: LoanDetailsCardProps) {
  const l = loanSummary
  const [showMore, setShowMore] = useState(false)

  if (isMobile) {
    return (
      <div className="bg-white rounded-[14px] p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
        <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-4">Loan Details</h2>

        {/* Always visible: Balance + Rate in 2-col */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <DetailLabel>Principal Balance</DetailLabel>
            <DetailValue large>
              ${l.principalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </DetailValue>
          </div>
          <div>
            <DetailLabel>Interest Rate</DetailLabel>
            <DetailValue large>{l.interestRate}%</DetailValue>
          </div>
        </div>

        {/* Expandable: all other fields */}
        {showMore && (
          <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-gray-100">
            <div>
              <GroupLabel>Balances</GroupLabel>
              <DetailRow label="Original Loan Amount" value={`$${l.originalLoanAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`} />
            </div>
            <div>
              <GroupLabel>Rate &amp; Terms</GroupLabel>
              <DetailRow label="Original Term"  value={`${l.originalTermMonths} months`} />
              <DetailRow label="Remaining Term" value={`${l.remainingTermMonths} months`} />
            </div>
            <div>
              <GroupLabel>Key Dates</GroupLabel>
              <DetailRow label="Starting Date"        value={l.startDate} />
              <DetailRow label="Maturing Date"        value={l.maturityDate} />
              <DetailRow label="Original Payoff Date" value={l.originalPayoffDate} />
            </div>
          </div>
        )}

        <button
          onClick={() => setShowMore(v => !v)}
          className="flex items-center gap-1.5 text-[13px] font-semibold text-teal-700 mb-4"
        >
          {showMore ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          {showMore ? 'Show Less' : 'Show More'}
        </button>

        {/* Inline offer */}
        <button className="w-full flex items-center gap-3 text-left bg-surface-50 hover:bg-teal-50/60 border border-gray-200 hover:border-teal-700/20 rounded-lg px-4 py-3 transition-colors group">
          <Percent size={15} className="text-teal-700 shrink-0" />
          <span className="flex-1 text-[13px] text-gray-600">
            See how you can <strong className="text-navy-800 font-semibold">Lower Your Interest Rate</strong> with an FHA Refinance.
          </span>
          <ChevronRight size={15} className="text-gray-400 group-hover:text-teal-700 transition-colors shrink-0" />
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-5">Loan Details</h2>
      <div className="grid grid-cols-3 gap-0">
        {/* Balances */}
        <div className="pr-5 border-r border-gray-200 mr-5">
          <GroupLabel>Balances</GroupLabel>
          <DetailRow label="Principal Balance"    value={`$${l.principalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`} large />
          <DetailRow label="Original Loan Amount" value={`$${l.originalLoanAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`} />
        </div>

        {/* Rate & Terms */}
        <div className="pr-5 border-r border-gray-200 mr-5">
          <GroupLabel>Rate &amp; Terms</GroupLabel>
          <DetailRow label="Interest Rate"   value={`${l.interestRate}%`} large />
          <DetailRow label="Original Term"   value={`${l.originalTermMonths} months`} />
          <DetailRow label="Remaining Term"  value={`${l.remainingTermMonths} months`} />
        </div>

        {/* Key Dates */}
        <div>
          <GroupLabel>Key Dates</GroupLabel>
          <DetailRow label="Starting Date"         value={l.startDate} />
          <DetailRow label="Maturing Date"         value={l.maturityDate} />
          <DetailRow label="Original Payoff Date"  value={l.originalPayoffDate} />
        </div>
      </div>

      {/* Inline offer */}
      <div className="mt-5 pt-4 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 text-left bg-surface-50 hover:bg-teal-50/60 border border-gray-200 hover:border-teal-700/20 rounded-lg px-4 py-3 transition-colors group">
          <Percent size={15} className="text-teal-700 shrink-0" />
          <span className="flex-1 text-[13px] text-gray-600">
            See how you can <strong className="text-navy-800 font-semibold">Lower Your Interest Rate</strong> with an FHA Refinance.
          </span>
          <ChevronRight size={15} className="text-gray-400 group-hover:text-teal-700 transition-colors shrink-0" />
        </button>
      </div>
    </div>
  )
}
