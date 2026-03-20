import { useState } from 'react'
import { ChevronDown, Mail, Phone, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { loContact } from '@/data/mockData'
import { useDevSwitcher } from '@/context/DevSwitcherContext'

export function LOContactCard() {
  const [expanded, setExpanded] = useState(false)
  const { colorTheme } = useDevSwitcher()
  const isTealNav = colorTheme === 'teal-nav'
  const isTealBg  = colorTheme === 'teal-bg'

  return (
    <div className={cn('border-t p-4', isTealNav ? 'border-teal-600' : isTealBg ? 'border-[#CCE8E6]' : 'border-gray-200')}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 text-left"
      >
        <div className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0',
          isTealNav ? 'bg-white text-teal-700' : 'bg-teal-700 text-white'
        )}>
          {loContact.avatarInitials}
        </div>
        <div className="flex-1 min-w-0">
          <div className={cn('text-sm font-semibold truncate', isTealNav ? 'text-white' : 'text-navy-800')}>{loContact.name}</div>
          <div className={cn('text-xs truncate', isTealNav ? 'text-white/70' : 'text-gray-500')}>{loContact.role}</div>
        </div>
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200 shrink-0', isTealNav ? 'text-white/60' : 'text-gray-400', expanded && 'rotate-180')}
        />
      </button>

      {expanded && (
        <div className="mt-3 space-y-2 pl-11">
          <a
            href={`mailto:${loContact.email}`}
            className={cn('flex items-center gap-2 text-xs', isTealNav ? 'text-white/75 hover:text-white' : 'text-gray-600 hover:text-teal-700')}
          >
            <Mail size={12} className="shrink-0" />
            <span className="truncate">{loContact.email}</span>
          </a>
          <a
            href={`tel:${loContact.phone}`}
            className={cn('flex items-center gap-2 text-xs', isTealNav ? 'text-white/75 hover:text-white' : 'text-gray-600 hover:text-teal-700')}
          >
            <Phone size={12} className="shrink-0" />
            <span>{loContact.phone}</span>
          </a>
          <a
            href={`https://${loContact.website}`}
            target="_blank"
            rel="noreferrer"
            className={cn('flex items-center gap-2 text-xs', isTealNav ? 'text-white/75 hover:text-white' : 'text-gray-600 hover:text-teal-700')}
          >
            <Globe size={12} className="shrink-0" />
            <span className="truncate">{loContact.website}</span>
          </a>
        </div>
      )}
    </div>
  )
}
