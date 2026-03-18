import { CheckCircle, Home, FileText, Bell, User } from 'lucide-react'

const bottomNavItems = [
  { icon: <Home size={20} />, label: 'Home' },
  { icon: <FileText size={20} />, label: 'Application' },
  { icon: <Bell size={20} />, label: 'Updates' },
  { icon: <User size={20} />, label: 'Profile' },
]

export function ApplicationSubmittedPage() {
  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={32} className="text-teal-700" />
          </div>
          <h1 className="text-2xl font-bold text-navy-800 mb-3">Application Submitted!</h1>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Your loan application has been received. We'll review your information and reach out within 1–2 business days.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-left mb-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What's Next</div>
            <div className="space-y-2">
              {[
                'Application review (1–2 days)',
                'Document verification',
                'Underwriting decision',
                'Loan closing',
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500 shrink-0">
                    {i + 1}
                  </div>
                  {step}
                </div>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-gray-400 italic">Placeholder — page coming soon</p>
        </div>
      </div>

      {/* Mock Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex z-50">
        {bottomNavItems.map((item, i) => (
          <button
            key={i}
            className="flex-1 flex flex-col items-center gap-1 py-3 text-gray-400 hover:text-teal-700 transition-colors"
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
