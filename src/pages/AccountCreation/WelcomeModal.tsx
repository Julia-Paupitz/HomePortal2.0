import { useState } from 'react'
import { TrendingDown, Calculator, FileText } from 'lucide-react'
import { userProfile } from '@/data/mockData'

const STORAGE_KEY = 'homeportal_welcome_modal_ac_dismissed'

export function checkModalShouldShow(): boolean {
  if (localStorage.getItem(STORAGE_KEY) === 'permanent') return false
  if (sessionStorage.getItem(STORAGE_KEY) === 'session') return false
  return true
}

interface WelcomeModalProps {
  onDismiss: () => void
  onMaybeLater: () => void
}

export function WelcomeModal({ onDismiss, onMaybeLater }: WelcomeModalProps) {
  const [step, setStep] = useState(1)
  const [goal, setGoal] = useState('')

  function handleSave() {
    localStorage.setItem(STORAGE_KEY, 'permanent')
    onDismiss()
  }

  function handleMaybeLater() {
    sessionStorage.setItem(STORAGE_KEY, 'session')
    onMaybeLater()
  }

  // Covers content area only — no bottom nav offset (account-creation has no bottom nav)
  const backdropClass = 'fixed top-[60px] right-0 bottom-0 left-0 lg:left-[220px] z-[300] flex items-center justify-center p-4 bg-navy-800/40'

  return (
    <div className={backdropClass}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        {step === 1 && (
          <div>
            <h2 className="font-kadwa text-xl font-bold text-navy-800 mb-1">
              Welcome, {userProfile.firstName}!
            </h2>
            <p className="text-xs text-gray-400 mb-4">Your homeownership journey starts here</p>

            {/* Step dots */}
            <div className="flex gap-1.5 mb-5">
              <div className="w-2 h-2 rounded-full bg-teal-700" />
              <div className="w-2 h-2 rounded-full bg-gray-200" />
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              We've built HomePortal to give you the tools, insights, and support you need to confidently buy your home.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: <TrendingDown size={16} className="text-teal-700" />, text: 'Track rates and get personalised alerts' },
                { icon: <Calculator size={16} className="text-navy-500" />, text: 'Use our tools to plan your purchase' },
                { icon: <FileText size={16} className="text-yellow-700" />, text: 'Apply for your loan in minutes' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleMaybeLater}
                className="flex-1 text-sm text-gray-500 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Maybe later
              </button>
              <button
                onClick={() => setStep(2)}
                className="flex-1 text-sm font-semibold text-white py-2.5 rounded-xl bg-teal-700 hover:bg-teal-700/90 transition-colors"
              >
                Get Started →
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-kadwa text-xl font-bold text-navy-800 mb-1">
              What's your goal?
            </h2>
            <p className="text-xs text-gray-400 mb-4">Help us personalise your experience</p>

            {/* Step dots */}
            <div className="flex gap-1.5 mb-5">
              <div className="w-2 h-2 rounded-full bg-gray-200" />
              <div className="w-2 h-2 rounded-full bg-teal-700" />
            </div>

            {/* Goal radio picker */}
            <div className="mb-6">
              <div className="space-y-2">
                {['Buy a home', 'Refinance', 'Not sure yet'].map(option => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="goal"
                      value={option}
                      checked={goal === option}
                      onChange={() => setGoal(option)}
                      className="accent-teal-700 w-4 h-4"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="text-sm text-gray-500 py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleMaybeLater}
                className="flex-1 text-sm text-gray-500 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Maybe later
              </button>
              <button
                onClick={handleSave}
                className="flex-1 text-sm font-semibold text-white py-2.5 rounded-xl bg-teal-700 hover:bg-teal-700/90 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
