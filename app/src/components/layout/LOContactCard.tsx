import { useState } from 'react'
import { ChevronDown, Mail, Phone, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { loContact } from '@/data/mockData'

export function LOContactCard() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border-t border-gray-200 p-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 text-left"
      >
        <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs font-semibold shrink-0">
          {loContact.avatarInitials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-navy-800 truncate">{loContact.name}</div>
          <div className="text-xs text-gray-500 truncate">{loContact.role}</div>
        </div>
        <ChevronDown
          size={14}
          className={cn('text-gray-400 transition-transform duration-200 shrink-0', expanded && 'rotate-180')}
        />
      </button>

      {expanded && (
        <div className="mt-3 space-y-2 pl-11">
          <a
            href={`mailto:${loContact.email}`}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-teal-700"
          >
            <Mail size={12} className="shrink-0" />
            <span className="truncate">{loContact.email}</span>
          </a>
          <a
            href={`tel:${loContact.phone}`}
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-teal-700"
          >
            <Phone size={12} className="shrink-0" />
            <span>{loContact.phone}</span>
          </a>
          <a
            href={`https://${loContact.website}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-gray-600 hover:text-teal-700"
          >
            <Globe size={12} className="shrink-0" />
            <span className="truncate">{loContact.website}</span>
          </a>
        </div>
      )}
    </div>
  )
}
