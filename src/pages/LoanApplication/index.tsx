export function LoanApplicationPage() {
  return (
    <div className="min-h-screen bg-surface-50 flex flex-col">
      <div className="flex-1 flex items-start justify-center p-6 pt-16">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-lg">
          <div className="mb-6">
            <div className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-2">Step 1 of 5</div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full">
              <div className="w-1/5 h-full bg-teal-700 rounded-full" />
            </div>
          </div>
          <h1 className="text-xl font-bold text-navy-800 mb-2">Loan Application</h1>
          <p className="text-sm text-gray-500 mb-6">
            Tell us about yourself and the property you're financing.
          </p>
          <div className="space-y-3 mb-6">
            {['First name', 'Last name', 'Property address', 'Loan amount'].map(label => (
              <div key={label}>
                <div className="text-xs text-gray-500 mb-1">{label}</div>
                <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg px-3 flex items-center text-sm text-gray-300 cursor-not-allowed">
                  —
                </div>
              </div>
            ))}
          </div>
          <div className="h-10 bg-teal-700 rounded-lg flex items-center justify-center text-sm font-semibold text-white cursor-not-allowed opacity-60">
            Continue
          </div>
          <p className="text-[11px] text-gray-400 mt-4 italic text-center">Placeholder — page coming soon</p>
        </div>
      </div>
    </div>
  )
}
