import { QuickActionsCard } from '../cards/payments/QuickActionsCard'
import { NextDuePaymentCard } from '../cards/payments/NextDuePaymentCard'
import { PaymentBreakdownCard } from '../cards/payments/PaymentBreakdownCard'
import { PaymentActivityCard } from '../cards/payments/PaymentActivityCard'
import { PaymentsHelpCard } from '../cards/payments/PaymentsHelpCard'

export function PaymentsTab() {
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
