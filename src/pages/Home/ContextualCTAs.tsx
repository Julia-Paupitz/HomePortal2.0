import { CreditCard, Lock, Upload, Calculator } from 'lucide-react'
import { nextPayment } from '@/data/mockData'

interface CTACardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  description: string
  buttonLabel: string
  buttonClass: string
}

function CTACard({ icon, iconBg, title, description, buttonLabel, buttonClass }: CTACardProps) {
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

export function ContextualCTAs() {
  return (
    <div className="space-y-3">
      <CTACard
        icon={<CreditCard size={18} className="text-teal-700" />}
        iconBg="bg-teal-50"
        title="Make a Payment"
        description={`Next payment due ${nextPayment.dueDate}`}
        buttonLabel="Pay now"
        buttonClass="bg-teal-700 text-white hover:bg-teal-700/90"
      />
      <CTACard
        icon={<Lock size={18} className="text-yellow-700" />}
        iconBg="bg-yellow-50"
        title="Lock Your Rate"
        description="Rates are moving — see today's available rates"
        buttonLabel="View rates"
        buttonClass="bg-yellow-50 text-yellow-700 border border-yellow-700/30 hover:bg-yellow-100"
      />
      <CTACard
        icon={<Upload size={18} className="text-gray-500" />}
        iconBg="bg-surface-100"
        title="Upload Documents"
        description="3 documents requested for your file"
        buttonLabel="Upload"
        buttonClass="bg-surface-100 text-gray-600 border border-gray-200 hover:bg-gray-100"
      />
      <CTACard
        icon={<Calculator size={18} className="text-navy-500" />}
        iconBg="bg-navy-300/10"
        title="Refinance Calculator"
        description="See if refinancing could lower your payment"
        buttonLabel="See if you qualify"
        buttonClass="bg-navy-800 text-white hover:bg-navy-800/90"
      />
    </div>
  )
}
