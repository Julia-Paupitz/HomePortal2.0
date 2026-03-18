import { QuickActionsCard } from '../cards/payments/QuickActionsCard'
import { NextDuePaymentCard } from '../cards/payments/NextDuePaymentCard'
import { PaymentBreakdownCard } from '../cards/payments/PaymentBreakdownCard'
import { PaymentActivityCard } from '../cards/payments/PaymentActivityCard'
import { PaymentsHelpCard } from '../cards/payments/PaymentsHelpCard'
import { YourGoalsWidget } from '../widgets/PaymentsWidgets'
import { RateTrackingWidget } from '../widgets/PaymentsWidgets'

interface PaymentsTabProps {
  isMobile?: boolean
}

export function PaymentsTab({ isMobile }: PaymentsTabProps) {
  if (isMobile) {
    return (
      <div className="space-y-5">
        {/* 1. Quick Actions */}
        <QuickActionsCard />
        {/* 2. Next Due */}
        <NextDuePaymentCard />
        {/* 3. Your Goals (was right column) */}
        <YourGoalsWidget />
        {/* 4. Payment Breakdown */}
        <PaymentBreakdownCard />
        {/* 5. Payment Activity */}
        <PaymentActivityCard />
        {/* 6. Rate Tracking (was right column) */}
        <RateTrackingWidget />
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <QuickActionsCard />
      <NextDuePaymentCard />
      <PaymentBreakdownCard />
      <PaymentActivityCard />
      <PaymentsHelpCard />
    </div>
  )
}
