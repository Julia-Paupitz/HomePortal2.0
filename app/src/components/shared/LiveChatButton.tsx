import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LiveChatButtonProps {
  mobile?: boolean
  hasBottomNav?: boolean
}

export function LiveChatButton({ mobile, hasBottomNav }: LiveChatButtonProps) {
  return (
    <button
      aria-label="Live chat"
      className={cn(
        'flex items-center justify-center w-12 h-12 rounded-full bg-teal-700 hover:bg-[#145f5e] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 z-[250]',
        mobile
          ? cn('absolute right-4', hasBottomNav ? 'bottom-[76px]' : 'bottom-4')
          : 'fixed bottom-6 right-6'
      )}
    >
      <MessageCircle size={22} />
    </button>
  )
}
