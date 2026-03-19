import { Lock, HandCoins, Landmark, Users } from 'lucide-react'

interface OpportunityCardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  description: string
  buttonLabel: string
  buttonClass: string
}

function OpportunityCard({ icon, iconBg, title, description, buttonLabel, buttonClass }: OpportunityCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3">
      <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-navy-800 mb-1">{title}</div>
        <div className="text-xs text-gray-500 leading-relaxed">{description}</div>
      </div>
      <button className={`text-xs font-semibold rounded-lg px-3 py-1.5 transition-colors self-start ${buttonClass}`}>
        {buttonLabel}
      </button>
    </div>
  )
}

export function OpportunitiesColumn() {
  return (
    <div className="space-y-3">
      <OpportunityCard
        icon={<Lock size={18} className="text-yellow-700" />}
        iconBg="bg-yellow-50"
        title="Lock Your Rate"
        description="Rates are moving — lock in today's rate before it changes"
        buttonLabel="View rates"
        buttonClass="bg-yellow-50 text-yellow-700 border border-yellow-700/30 hover:bg-yellow-100"
      />
      <OpportunityCard
        icon={<HandCoins size={18} className="text-green-600" />}
        iconBg="bg-green-50"
        title="Down Payment Assistance"
        description="You may qualify for up to $15,000 in DPA programs"
        buttonLabel="Check eligibility"
        buttonClass="bg-green-50 text-green-600 border border-green-600/30 hover:bg-green-100"
      />
      <OpportunityCard
        icon={<Landmark size={18} className="text-teal-700" />}
        iconBg="bg-teal-50"
        title="AIO Loan"
        description="Use your home like a bank account and pay off faster"
        buttonLabel="Learn more"
        buttonClass="bg-teal-700 text-white hover:bg-teal-700/90"
      />
      <OpportunityCard
        icon={<Users size={18} className="text-navy-500" />}
        iconBg="bg-navy-300/10"
        title="Home FundIt"
        description="Let friends & family crowdfund your down payment"
        buttonLabel="Get started"
        buttonClass="bg-navy-800 text-white hover:bg-navy-800/90"
      />
    </div>
  )
}
