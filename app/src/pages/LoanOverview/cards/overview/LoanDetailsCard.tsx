import { loanSummary } from '@/data/mockData'

function DetailLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[11.5px] text-gray-400 mb-0.5">{children}</div>
}

function DetailValue({ children, large, accent }: { children: React.ReactNode; large?: boolean; accent?: boolean }) {
  if (large) return <div className={`text-[22px] font-bold ${accent ? 'text-navy-800' : 'text-navy-800'}`}>{children}</div>
  return <div className="text-[14.5px] font-semibold text-navy-800">{children}</div>
}

function DetailRow({ label, value, large, accent }: { label: string; value: string; large?: boolean; accent?: boolean }) {
  return (
    <div className="mb-3 last:mb-0">
      <DetailLabel>{label}</DetailLabel>
      <DetailValue large={large} accent={accent}>{value}</DetailValue>
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

export function LoanDetailsCard() {
  const l = loanSummary
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
    </div>
  )
}
