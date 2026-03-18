import { MonthlyEscrowCard } from '../cards/escrow/MonthlyEscrowCard'
import { EscrowDetailsCard } from '../cards/escrow/EscrowDetailsCard'
import { EscrowHelpCard } from '../cards/escrow/EscrowHelpCard'

export function EscrowTab() {
  return (
    <div className="space-y-5">
      <MonthlyEscrowCard />
      <EscrowDetailsCard />
      <EscrowHelpCard />
    </div>
  )
}
