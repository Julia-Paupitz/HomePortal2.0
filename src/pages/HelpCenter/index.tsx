import { useState } from 'react'
import { ChevronRight, ChevronUp, ChevronDown, Search, Phone } from 'lucide-react'
import { helpCenterTopics, helpCenterFAQ, helpCenterLearning, supportPhone } from '@/data/mockData'

function ListRow({ label }: { label: string }) {
  return (
    <button className="w-full flex items-center justify-between bg-surface-100 rounded-xl px-4 py-3.5 text-sm font-medium text-navy-800 hover:bg-teal-50 transition-colors text-left">
      {label}
      <ChevronRight size={16} className="text-gray-400 shrink-0" />
    </button>
  )
}

function CollapsibleSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between pb-3 border-b border-gray-200"
      >
        <span className="text-[15px] font-bold text-navy-800">{title}</span>
        {open
          ? <ChevronUp size={18} className="text-gray-400" />
          : <ChevronDown size={18} className="text-gray-400" />
        }
      </button>
      {open && (
        <div className="mt-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  )
}

export function HelpCenterPage() {
  return (
    <div className="max-w-2xl mx-auto pt-6 space-y-6">
      {/* H1 */}
      <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight">
        Help center
      </h1>

      {/* See your requests */}
      <button className="w-full flex items-center justify-between bg-teal-700 text-white rounded-xl px-4 py-3.5 font-medium hover:bg-teal-800 transition-colors">
        See your requests
        <ChevronRight size={18} className="shrink-0" />
      </button>

      {/* Search */}
      <div>
        <h2 className="text-[15px] font-bold text-navy-800 mb-3">How can we help you?</h2>
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search by key word"
            className="w-full bg-surface-100 border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-sm text-navy-800 placeholder:text-gray-400 focus:outline-none focus:border-teal-700"
          />
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-2">
        {helpCenterTopics.map(topic => (
          <ListRow key={topic.id} label={topic.label} />
        ))}
      </div>

      {/* FAQ */}
      <CollapsibleSection title="FAQ">
        {helpCenterFAQ.map(item => (
          <ListRow key={item.id} label={item.label} />
        ))}
      </CollapsibleSection>

      {/* Learning center */}
      <CollapsibleSection title="Learning center">
        {helpCenterLearning.map(item => (
          <ListRow key={item.id} label={item.label} />
        ))}
      </CollapsibleSection>

      {/* Contact card */}
      <div className="bg-surface-100 rounded-xl p-4">
        <p className="text-sm font-semibold text-navy-800 mb-2">Talk to customer support</p>
        <div className="flex items-center gap-2 text-sm text-navy-800">
          <Phone size={14} className="text-gray-500" />
          {supportPhone}
        </div>
      </div>
    </div>
  )
}
