export interface LoanSummary {
  loanNumber: string
  loanNumberFull: string
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

export interface UserProfile {
  firstName: string
}

export interface MyHome {
  propertyValue: number
  estimatedEquity: number
}

export interface LOContact {
  name: string
  role: string
  email: string
  phone: string
  website: string
  avatarInitials: string
}

export interface HomeTeamMember {
  id: string
  name: string
  role: string
  company?: string
  phone: string
  email: string
  website?: string
  avatarInitials: string
  avatarColor: string
}

export interface ApplicationSummary {
  applicationNumber: string
  address: string
  loanAmount: number
  loanType: string
  status: string
}

export type TaskStatus = 'pending' | 'complete'

export interface ApplicationTask {
  id: string
  label: string
  status: TaskStatus
  due: string | null
}

export type MilestoneStatus = 'complete' | 'in-progress' | 'upcoming'

export interface ApplicationMilestone {
  id: string
  label: string
  status: MilestoneStatus
}

export interface LoanDocument {
  id: string
  name: string
  date: string  // ISO YYYY-MM-DD
}
