import { cn } from '@/lib/utils'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

export function NavItem({ icon, label, active, onClick }: NavItemProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          'w-full flex items-center gap-3 px-4 py-[11px] text-[14.5px] font-medium rounded-lg transition-all duration-150',
          active
            ? 'bg-teal-50 text-teal-700 font-semibold'
            : 'text-gray-500 hover:bg-surface-50 hover:text-navy-800'
        )}
      >
        <span className="w-5 flex items-center justify-center flex-shrink-0">
          {icon}
        </span>
        {label}
      </button>
    </li>
  )
}
