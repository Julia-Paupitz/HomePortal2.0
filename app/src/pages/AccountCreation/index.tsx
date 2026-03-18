export function AccountCreationPage() {
  return (
    <div className="min-h-screen bg-surface-50 flex items-center justify-center p-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md text-center">
        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
          <span className="text-xl">🏠</span>
        </div>
        <h1 className="text-xl font-bold text-navy-800 mb-2">Create Your Account</h1>
        <p className="text-sm text-gray-500 mb-6">
          Set up your HomePortal account to get started.
        </p>
        <div className="space-y-3 text-left mb-6">
          <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg px-3 flex items-center text-sm text-gray-300">
            Email address
          </div>
          <div className="h-10 bg-gray-50 border border-gray-200 rounded-lg px-3 flex items-center text-sm text-gray-300">
            Password
          </div>
        </div>
        <div className="h-10 bg-teal-700 rounded-lg flex items-center justify-center text-sm font-semibold text-white cursor-not-allowed opacity-60">
          Create Account
        </div>
        <p className="text-[11px] text-gray-400 mt-4 italic">Placeholder — page coming soon</p>
      </div>
    </div>
  )
}
