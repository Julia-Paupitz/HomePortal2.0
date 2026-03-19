import { CircleCheck as CheckCircle, TrendingDown, Shield, ChartBar as BarChart2 } from 'lucide-react'
import { toast } from 'sonner'
import { escrowSummary } from '@/data/mockData'
import type { EscrowAccount } from '@/types'

function EscrowAccountCard({ account }: { account: EscrowAccount }) {
  const isSufficient = account.balanceStatus === 'sufficient'
  return (
    <div className="border border-gray-200 rounded-[10px] overflow-hidden mb-3 last:mb-0">
      {/* Account header */}
      <div className="bg-surface-50 px-4 py-3 flex items-center justify-between">
        <span className="text-[14px] font-bold text-navy-800">{account.name}</span>
        <div className="flex items-center gap-2.5">
          <span className="text-[14px] font-semibold text-navy-800">
            Balance: ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap ${isSufficient ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-700'}`}>
            {isSufficient
              ? <CheckCircle size={10} />
              : <TrendingDown size={10} />
            }
            {isSufficient ? 'Sufficient' : 'Low Balance'}
          </span>
        </div>
      </div>

      {/* Detail rows */}
      <div>
        {[
          ['Next Disbursement Amount', `$${account.nextDisbursementAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`],
          ['Next Disbursement Date',   account.nextDisbursementDate],
          [account.providerLabel,      account.provider],
          [account.accountLabel,       account.accountNumber],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between items-center px-4 py-2.5 border-t border-surface-100">
            <span className="text-[13px] text-navy-300">{label}</span>
            <span className="text-[13px] font-semibold text-navy-800">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function EscrowDetailsCard() {
  const e = escrowSummary
  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-0">Escrow Details</h2>

      {/* Stats row */}
      <div className="flex gap-0 my-4">
        <div className="flex-1 pr-6 border-r border-surface-100">
          <div className="text-[11.5px] text-navy-300 mb-1">Escrow Balance</div>
          <div className="text-[20px] font-bold text-navy-800">
            ${e.totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </div>
        </div>
        <div className="flex-1 px-6 border-r border-surface-100">
          <div className="text-[11.5px] text-navy-300 mb-1">Next Analysis</div>
          <div className="text-[16px] font-semibold text-navy-800">{e.nextAnalysisDate}</div>
        </div>
        <div className="flex-1 pl-6">
          <div className="text-[11.5px] text-navy-300 mb-1">Last Analysis</div>
          <div className="text-[16px] font-semibold text-navy-800">{e.lastAnalysisDate}</div>
        </div>
      </div>

      {/* Escrow accounts */}
      <div className="text-[14px] font-bold text-navy-800 mb-3">Escrow Accounts</div>
      {e.accounts.map(account => (
        <EscrowAccountCard key={account.id} account={account} />
      ))}

      {/* Action buttons */}
      <div className="flex gap-3 mt-5 pt-5 border-t border-surface-100">
        <button
          onClick={() => toast.info('MI Removal request opened')}
          className="flex items-center gap-1.5 bg-transparent text-teal-700 border-[1.5px] border-teal-700 hover:bg-teal-50 rounded-[10px] px-4 py-2.5 text-[13.5px] font-semibold transition-colors cursor-pointer"
        >
          <Shield size={15} />
          Request MI Removal
        </button>
        <button
          onClick={() => toast.info('Escrow analysis request opened')}
          className="flex items-center gap-1.5 bg-transparent text-teal-700 border-[1.5px] border-teal-700 hover:bg-teal-50 rounded-[10px] px-4 py-2.5 text-[13.5px] font-semibold transition-colors cursor-pointer"
        >
          <BarChart2 size={15} />
          Request Escrow Analysis
        </button>
      </div>
    </div>
  )
}
