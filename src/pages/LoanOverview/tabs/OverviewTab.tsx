import { LoanDetailsCard } from '../cards/overview/LoanDetailsCard'
import { LoanProgressCard } from '../cards/overview/LoanProgressCard'
import { MonthlyPaymentCard } from '../cards/overview/MonthlyPaymentCard'
import { OverviewHelpCard } from '../cards/overview/OverviewHelpCard'
import { MyHomeCard } from '../cards/overview/MyHomeCard'
import { OverviewQuickActionsCard } from '../cards/overview/OverviewQuickActionsCard'
import { LocalServicesWidget } from '../widgets/OverviewWidgets'
import { EquityMonitoringWidget } from '../widgets/EquityMonitoringWidget'

interface OverviewTabProps {
  isMobile?: boolean
  onNavigateToPayments?: () => void
}

export function OverviewTab({ isMobile, onNavigateToPayments }: OverviewTabProps) {
  if (isMobile) {
    return (
      <div className="space-y-5">
        {/* 1. Circular quick actions */}
        <OverviewQuickActionsCard />
        {/* 2. Loan Details — 2-col mobile layout */}
        <LoanDetailsCard isMobile />
        {/* 3. Monthly Payment — chevron navigates to Payments tab */}
        <MonthlyPaymentCard onNavigateToPayments={onNavigateToPayments} />
        {/* 4. Local Services (was right column) */}
        <LocalServicesWidget />
        {/* 5. Loan Progress */}
        <LoanProgressCard />
        {/* 6. My Home */}
        <MyHomeCard />
        {/* 7. Equity Monitoring (was right column) */}
        <EquityMonitoringWidget />
        {/* 8. Help */}
        <OverviewHelpCard />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <LoanDetailsCard />
      <LoanProgressCard />
      <MonthlyPaymentCard />
      <MyHomeCard />
      <OverviewHelpCard />
    </div>
  )
}
