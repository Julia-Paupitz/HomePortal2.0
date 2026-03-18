export interface LoanSummary {
  loanNumber: string
  address: string
  principalBalance: number
  originalLoanAmount: number
  interestRate: number
  originalTermMonths: number
  remainingTermMonths: number
  startDate: string
  maturityDate: string
  originalPayoffDate: string
  estimatedEquity: number
  homeValue: number
  equityPercent: number
  paidOffPercent: number
}

export interface NextPayment {
  amount: number
  dueDate: string
  status: 'ok' | 'soon' | 'urgent'
  statusLabel: string
  autoPayEnabled: boolean
}

export type PaymentStatus = 'pending' | 'completed' | 'failed'

export interface PaymentRow {
  id: string
  date: string
  amount: number
  status: PaymentStatus
}

export interface PaymentBreakdownSlice {
  name: string
  amount: number
  percent: number
  color: string
}

export interface AmortizationDataPoint {
  year: number
  principal: number
  interest: number
}

export interface EscrowAccount {
  id: string
  name: string
  balance: number
  balanceStatus: 'sufficient' | 'low'
  nextDisbursementAmount: number
  nextDisbursementDate: string
  providerLabel: string
  provider: string
  accountLabel: string
  accountNumber: string
}

export interface EscrowSummary {
  monthlyAmount: number
  nextPaymentDue: string
  totalBalance: number
  nextAnalysisDate: string
  lastAnalysisDate: string
  accounts: EscrowAccount[]
}

export interface HelpLink {
  id: string
  title: string
  description: string
  iconColor: 'teal' | 'green' | 'navy'
  icon: string
}

export interface LOContact {
  name: string
  role: string
  email: string
  phone: string
  website: string
  avatarInitials: string
}
