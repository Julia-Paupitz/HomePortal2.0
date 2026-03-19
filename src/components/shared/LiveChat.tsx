import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { userProfile } from '@/data/mockData'

const MOCK_MESSAGES = [
  { from: 'agent', text: `Hi ${userProfile.firstName}! 👋 I'm here to help with any questions about your home loan journey.` },
  { from: 'agent', text: 'What can I help you with today?' },
]

interface LiveChatProps {
  mobile?: boolean
  hasBottomNav?: boolean
}

export function LiveChat({ mobile, hasBottomNav }: LiveChatProps) {
  const [open, setOpen] = useState(false)

  // Button position
  const buttonClass = mobile
    ? cn('absolute right-4 z-[250]', hasBottomNav ? 'bottom-[76px]' : 'bottom-4')
    : 'fixed bottom-6 right-6 z-[250]'

  // Panel position — anchored just above the button
  const panelClass = mobile
    ? cn(
        'absolute right-4 left-4 z-[249] max-h-[380px]',
        hasBottomNav ? 'bottom-[132px]' : 'bottom-[72px]'
      )
    : 'fixed right-6 bottom-[88px] w-80 h-[440px] z-[249]'

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className={cn(
          panelClass,
          'bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden'
        )}>
          {/* Header */}
          <div className="bg-[#1e3340] px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center shrink-0">
                <MessageCircle size={15} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-tight">CMG Home Loans</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                  <p className="text-white/60 text-[11px]">Typically replies in minutes</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/60 hover:text-white transition-colors p-1"
            >
              <X size={18} />
            </button>
          </div>

          {/* Message thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
            {MOCK_MESSAGES.map((msg, i) => (
              <div key={i} className={cn('flex items-end gap-2', msg.from === 'user' && 'flex-row-reverse')}>
                {msg.from === 'agent' && (
                  <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center shrink-0 mb-0.5">
                    <MessageCircle size={11} className="text-white" />
                  </div>
                )}
                <div className={cn(
                  'max-w-[78%] px-3 py-2 rounded-2xl text-sm leading-relaxed',
                  msg.from === 'agent'
                    ? 'bg-white border border-gray-200 text-gray-700 rounded-bl-sm'
                    : 'bg-teal-700 text-white rounded-br-sm'
                )}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            <div className="flex items-end gap-2">
              <div className="w-6 h-6 rounded-full bg-teal-700 flex items-center justify-center shrink-0">
                <MessageCircle size={11} className="text-white" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3 py-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>

          {/* Input bar */}
          <div className="px-3 py-3 bg-white border-t border-gray-100 flex items-center gap-2 shrink-0">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-teal-700 transition-colors"
            />
            <button
              aria-label="Send message"
              className="w-8 h-8 rounded-full bg-teal-700 hover:bg-[#145f5e] flex items-center justify-center shrink-0 transition-colors"
            >
              <Send size={14} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        aria-label={open ? 'Close chat' : 'Open live chat'}
        onClick={() => setOpen(o => !o)}
        className={cn(
          buttonClass,
          'flex items-center justify-center w-12 h-12 rounded-full bg-teal-700 hover:bg-[#145f5e] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105'
        )}
      >
        {open ? <X size={20} /> : <MessageCircle size={22} />}
      </button>
    </>
  )
}
