import { LoanDetailsCard } from '../cards/overview/LoanDetailsCard'
import { LoanProgressCard } from '../cards/overview/LoanProgressCard'
import { MonthlyPaymentCard } from '../cards/overview/MonthlyPaymentCard'
import { OverviewHelpCard } from '../cards/overview/OverviewHelpCard'

export function OverviewTab() {
  return (
    <div className="space-y-5">
      <LoanDetailsCard />
      <LoanProgressCard />
      <MonthlyPaymentCard />
      <OverviewHelpCard />
    </div>
  )
}
