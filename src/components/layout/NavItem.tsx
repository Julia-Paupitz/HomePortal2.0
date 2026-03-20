import { cn } from '@/lib/utils'
import { useDevSwitcher } from '@/context/DevSwitcherContext'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
}

export function NavItem({ icon, label, active, onClick }: NavItemProps) {
  const { colorTheme } = useDevSwitcher()

  const activeClass =
    colorTheme === 'teal-bg'  ? 'bg-teal-700 text-white font-semibold' :
    colorTheme === 'teal-nav' ? 'bg-white text-teal-700 font-semibold' :
    'bg-teal-50 text-teal-700 font-semibold'

  const inactiveClass =
    colorTheme === 'teal-bg'  ? 'text-navy-800 hover:bg-[#CCE8E6] hover:text-navy-800' :
    colorTheme === 'teal-nav' ? 'text-white/75 hover:bg-white/15 hover:text-white' :
    'text-gray-500 hover:bg-surface-50 hover:text-navy-800'

  return (
    <li>
      <button
        onClick={onClick}
        className={cn(
          'w-full flex items-center gap-3 px-4 py-[11px] text-[14.5px] font-medium rounded-lg transition-all duration-150',
          active ? activeClass : inactiveClass
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
