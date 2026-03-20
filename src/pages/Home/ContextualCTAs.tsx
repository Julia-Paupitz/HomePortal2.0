import { CreditCard, Lock, Upload, Calculator } from 'lucide-react'
import { nextPayment } from '@/data/mockData'

interface CTACardProps {
  icon: React.ReactNode
  iconBg: string
  title: string
  description: string
  buttonLabel: string
}

function CTACard({ icon, iconBg, title, description, buttonLabel }: CTACardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3">
      <div className={`w-9 h-9 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-navy-800 mb-1">{title}</div>
        <div className="text-xs text-gray-500 leading-relaxed">{description}</div>
      </div>
      <button className="text-xs font-semibold rounded-full px-3 py-1.5 transition-colors self-start text-teal-700 border border-teal-700/30 hover:bg-teal-50">
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
        iconBg="bg-teal-100"
        title="Make a Payment"
        description={`Next payment due ${nextPayment.dueDate}`}
        buttonLabel="Pay now"
      />
      <CTACard
        icon={<Lock size={18} className="text-amber-700" />}
        iconBg="bg-amber-100"
        title="Lock Your Rate"
        description="Rates are moving — see today's available rates"
        buttonLabel="View rates"
      />
      <CTACard
        icon={<Upload size={18} className="text-purple-600" />}
        iconBg="bg-purple-100"
        title="Upload Documents"
        description="3 documents requested for your file"
        buttonLabel="Upload"
      />
      <CTACard
        icon={<Calculator size={18} className="text-blue-600" />}
        iconBg="bg-blue-100"
        title="Refinance Calculator"
        description="See if refinancing could lower your payment"
        buttonLabel="See if you qualify"
      />
    </div>
  )
}
