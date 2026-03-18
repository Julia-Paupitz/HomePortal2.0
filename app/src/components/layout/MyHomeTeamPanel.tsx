import { Phone, Mail, Globe, Building2 } from 'lucide-react'
import type { HomeTeamMember } from '@/types'
import { homeTeam } from '@/data/mockData'

function MemberCard({ member }: { member: HomeTeamMember }) {
  return (
    <div className="bg-white rounded-2xl p-4">
      {/* Avatar + name row */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: member.avatarColor }}
        >
          {member.avatarInitials}
        </div>
        <div>
          <div className="text-sm font-bold text-navy-800">{member.name}</div>
          <div className="text-xs text-gray-500">{member.role}</div>
        </div>
      </div>

      {/* Contact rows */}
      <div className="space-y-2">
        {member.company && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Building2 size={13} className="shrink-0 text-gray-400" />
            <span>{member.company}</span>
          </div>
        )}
        <a
          href={`tel:${member.phone}`}
          className="flex items-center gap-2 text-xs text-teal-700 hover:text-teal-700/80"
        >
          <Phone size={13} className="shrink-0" />
          <span>{member.phone}</span>
        </a>
        <a
          href={`mailto:${member.email}`}
          className="flex items-center gap-2 text-xs text-teal-700 hover:text-teal-700/80"
        >
          <Mail size={13} className="shrink-0" />
          <span className="truncate">{member.email}</span>
        </a>
        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-teal-700 hover:text-teal-700/80"
          >
            <Globe size={13} className="shrink-0" />
            <span className="truncate">{member.website}</span>
          </a>
        )}
      </div>
    </div>
  )
}

interface MyHomeTeamPanelProps {
  onClose: () => void
}

export function MyHomeTeamPanel({ onClose }: MyHomeTeamPanelProps) {
  return (
    <>
      {/* Invisible tap target covering the container to close */}
      <div
        className="absolute inset-0 z-[240]"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div className="absolute top-[60px] right-0 z-[250] w-[60%] bg-navy-800 px-3 pt-3 pb-4 space-y-2 shadow-xl rounded-bl-[6px]">
        {homeTeam.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  )
}
