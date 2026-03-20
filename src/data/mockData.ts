import type {
  LoanSummary,
  NextPayment,
  PaymentRow,
  PaymentBreakdownSlice,
  AmortizationDataPoint,
  EscrowSummary,
  HelpLink,
  LOContact,
  HomeTeamMember,
  UserProfile,
  MyHome,
  ApplicationSummary,
  ApplicationTask,
  ApplicationMilestone,
  LoanDocument,
} from '@/types'

export const loanSummary: LoanSummary = {
  loanNumber: '••••••••1234',
  loanNumberFull: '5920008412',
  address: '148 S Allen St, State College, PA 16801',
  principalBalance: 2000.00,
  originalLoanAmount: 2000.00,
  interestRate: 12,
  originalTermMonths: 360,
  remainingTermMonths: 298,
  startDate: '03/12/2024',
  maturityDate: '03/12/2054',
  originalPayoffDate: '03/12/2054',
  estimatedEquity: 200000,
  homeValue: 300000,
  equityPercent: 66.7,
  paidOffPercent: 67,
}

export const nextPayment: NextPayment = {
  amount: 2000.00,
  dueDate: '03/12/2024',
  status: 'soon',
  statusLabel: 'Due in 5 days',
  autoPayEnabled: false,
}

export const paymentHistory: PaymentRow[] = [
  { id: '1', date: '03/12/2024', amount: 2000.00, status: 'pending' },
  { id: '2', date: '02/12/2024', amount: 2000.00, status: 'completed' },
  { id: '3', date: '01/12/2024', amount: 2000.00, status: 'completed' },
]

export const paymentBreakdown: PaymentBreakdownSlice[] = [
  { name: 'Principal', amount: 1170.88, percent: 44, color: '#1A7A78' },
  { name: 'Interest',  amount: 585.44,  percent: 22, color: '#3D5A6C' },
  { name: 'Taxes',     amount: 452.39,  percent: 17, color: '#9A6C00' },
  { name: 'Insurance', amount: 452.39,  percent: 17, color: '#3A7B18' },
]

export const totalMonthlyPayment = paymentBreakdown.reduce(
  (sum, s) => sum + s.amount, 0
)

// Amortization data grouped by 5-year windows
export const amortizationData: AmortizationDataPoint[] = [
  { year: 2026, principal: 218, interest: 562 },
  { year: 2027, principal: 245, interest: 535 },
  { year: 2028, principal: 275, interest: 505 },
  { year: 2029, principal: 308, interest: 472 },
  { year: 2030, principal: 345, interest: 435 },
  { year: 2031, principal: 387, interest: 393 },
  { year: 2032, principal: 434, interest: 346 },
  { year: 2033, principal: 486, interest: 294 },
  { year: 2034, principal: 545, interest: 235 },
  { year: 2035, principal: 611, interest: 169 },
  { year: 2036, principal: 685, interest: 95  },
  { year: 2037, principal: 768, interest: 12  },
]

export const yearRangeOptions = [
  { label: '2026 – 2031', start: 2026, end: 2031 },
  { label: '2031 – 2036', start: 2031, end: 2036 },
  { label: '2032 – 2037', start: 2032, end: 2037 },
]

export const escrowSummary: EscrowSummary = {
  monthlyAmount: 452.39,
  nextPaymentDue: '03/12/2024',
  totalBalance: 4240.00,
  nextAnalysisDate: '03/12/2024',
  lastAnalysisDate: '03/12/2023',
  accounts: [
    {
      id: 'taxes',
      name: 'Property Taxes',
      balance: 2540.00,
      balanceStatus: 'sufficient',
      nextDisbursementAmount: 1270.00,
      nextDisbursementDate: '04/01/2024',
      providerLabel: 'Tax Authority',
      provider: 'Centre County Tax Office',
      accountLabel: 'Payee Account #',
      accountNumber: 'PA-4821-CC',
    },
    {
      id: 'insurance',
      name: 'Homeowners Insurance',
      balance: 1700.00,
      balanceStatus: 'low',
      nextDisbursementAmount: 850.00,
      nextDisbursementDate: '06/15/2024',
      providerLabel: 'Insurance Provider',
      provider: 'State Farm',
      accountLabel: 'Policy #',
      accountNumber: 'SF-2024-78901',
    },
  ],
}

export const loContact: LOContact = {
  name: 'Sarah Mitchell',
  role: 'Loan Officer',
  email: 'sarah.mitchell@example.com',
  phone: '(555) 867-5309',
  website: 'sarahmitchell.example.com',
  avatarInitials: 'SM',
}

export const downPaymentTracker = {
  saved: 32500,
  goal: 50000,
}

export const rateTracker = {
  trackedRate: 6.875,
  sparklineData: [6.92, 6.88, 6.90, 6.87, 6.875, 6.875],
}

export const overviewHelpLinks: HelpLink[] = [
  {
    id: 'statement',
    title: 'Understanding Your Statement',
    description: 'Learn how to read your monthly mortgage statement and what each line means.',
    iconColor: 'teal',
    icon: 'FileText',
  },
  {
    id: 'extra-payments',
    title: 'Making Extra Payments',
    description: 'How to apply additional payments toward principal and save on interest.',
    iconColor: 'green',
    icon: 'DollarSign',
  },
  {
    id: 'refinancing',
    title: 'Refinancing Options',
    description: 'Explore whether refinancing could lower your rate or monthly payment.',
    iconColor: 'navy',
    icon: 'RefreshCw',
  },
]

export const paymentsHelpLinks: HelpLink[] = [
  {
    id: 'autopay',
    title: 'Setting Up AutoPay',
    description: 'Never miss a payment — learn how to set up automatic monthly payments.',
    iconColor: 'teal',
    icon: 'RefreshCw',
  },
  {
    id: 'extra-payments',
    title: 'Making Extra Payments',
    description: 'How to apply additional payments toward principal and save on interest.',
    iconColor: 'green',
    icon: 'DollarSign',
  },
  {
    id: 'statement',
    title: 'Understanding Your Statement',
    description: 'Learn how to read your monthly mortgage statement and what each line means.',
    iconColor: 'navy',
    icon: 'FileText',
  },
]

export const escrowHelpLinks: HelpLink[] = [
  {
    id: 'what-is-escrow',
    title: 'What is Escrow?',
    description: 'Learn how your escrow account works and why it\'s part of your monthly payment.',
    iconColor: 'teal',
    icon: 'Shield',
  },
  {
    id: 'escrow-analysis',
    title: 'Escrow Analysis Explained',
    description: 'Understand why your escrow payment changes and what triggers an analysis.',
    iconColor: 'green',
    icon: 'BarChart2',
  },
  {
    id: 'pmi',
    title: 'Removing Mortgage Insurance',
    description: 'Find out when and how you can request to remove PMI from your loan.',
    iconColor: 'navy',
    icon: 'HelpCircle',
  },
]

export const userProfile: UserProfile = {
  firstName: 'Josh',
}

export const applicationSummary: ApplicationSummary = {
  applicationNumber: '••••••1234',
  address: '148 S Allen St, State College, PA 16801',
  loanAmount: 200_000,
  loanType: 'Conventional 30yr Fixed',
  status: 'Application Submitted',
}

export const applicationTasks: ApplicationTask[] = [
  { id: '1', label: 'Upload W-2 forms',           status: 'pending',  due: 'Due in 3 days' },
  { id: '2', label: 'Sign disclosure documents',  status: 'complete', due: null },
  { id: '3', label: 'Provide bank statements',    status: 'pending',  due: 'Due in 5 days' },
  { id: '4', label: 'Photo ID verification',      status: 'complete', due: null },
]

export const applicationMilestones: ApplicationMilestone[] = [
  { id: 'submitted',    label: 'Application\nSubmitted',  status: 'complete'    },
  { id: 'doc-review',   label: 'Document\nReview',        status: 'in-progress' },
  { id: 'underwriting', label: 'Underwriting',            status: 'upcoming'    },
  { id: 'ctc',          label: 'Clear to\nClose',         status: 'upcoming'    },
  { id: 'closing',      label: 'Closing\nDay',            status: 'upcoming'    },
]

export const myHome: MyHome = {
  propertyValue: 1_222_000,
  estimatedEquity: 20_000,
}

export const homeTeam: HomeTeamMember[] = [
  {
    id: 'joey',
    name: 'Joey America',
    role: 'Branch Mng / LO',
    company: 'Eagle Realtors',
    phone: '(239) 555-0108',
    email: 'kkavanewsky@cmgfi.com',
    website: 'http://kkavanewsky.cmgfi.com/',
    avatarInitials: 'JA',
    avatarColor: '#3D5A6C',
  },
  {
    id: 'kory',
    name: 'Kory America',
    role: 'Contractor',
    phone: '(239) 555-0108',
    email: 'kkavanewsky@cmgfi.com',
    avatarInitials: 'KA',
    avatarColor: '#1A7A78',
  },
]

export const loanSummary2: LoanSummary = {
  loanNumber: '••••••••5678',
  loanNumberFull: '5920008456',
  address: '201 Oak Ave, Pittsburgh, PA 15201',
  principalBalance: 187_500,
  originalLoanAmount: 240_000,
  interestRate: 6.875,
  originalTermMonths: 360,
  remainingTermMonths: 312,
  startDate: '06/01/2020',
  maturityDate: '06/01/2050',
  originalPayoffDate: '06/01/2050',
  estimatedEquity: 52_500,
  homeValue: 240_000,
  equityPercent: 21.9,
  paidOffPercent: 22,
}

export const nextPayment2: NextPayment = {
  amount: 1_450,
  dueDate: '04/01/2026',
  status: 'ok',
  statusLabel: 'Paid',
  autoPayEnabled: true,
}

export const loans = [
  { id: 'loan-1', summary: loanSummary,  payment: nextPayment  },
  { id: 'loan-2', summary: loanSummary2, payment: nextPayment2 },
]

export const loanDocuments: LoanDocument[] = [
  { id: 'd1',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd2',  name: 'Escrow Analysis Statement Escrow Analysis Statement Escrow Analysis',    date: '2025-01-22' },
  { id: 'd3',  name: 'Escrow Analysis Statement Escrow Analysis Statement Escrow Analysis',    date: '2025-10-22' },
  { id: 'd4',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd5',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd6',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd7',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd8',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd9',  name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd10', name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd11', name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd12', name: 'Escrow Analysis Statement',                                              date: '2025-01-22' },
  { id: 'd13', name: '2024 Tax Statement',                                                     date: '2025-02-14' },
]

export const helpCenterTopics = [
  { id: 'payments',    label: 'Payments' },
  { id: 'statements',  label: 'Statements' },
  { id: 'escrow',      label: 'Escrow' },
  { id: 'refinancing', label: 'Refinancing' },
]

export const helpCenterFAQ = [
  { id: 'faq-1', label: 'How do I make a payment?' },
  { id: 'faq-2', label: 'When is my next payment due?' },
  { id: 'faq-3', label: 'How do I set up AutoPay?' },
  { id: 'faq-4', label: 'How do I request a payoff statement?' },
]

export const helpCenterLearning = [
  { id: 'lc-1', label: 'Understanding Your Mortgage Statement' },
  { id: 'lc-2', label: 'How to Build Home Equity Faster' },
]

export const supportPhone = '(800) 555-0100'
