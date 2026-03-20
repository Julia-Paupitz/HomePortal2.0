import { House as Home, Building2, Calculator, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavItem } from './NavItem'
import { LOContactCard } from './LOContactCard'
import { useDevSwitcher } from '@/context/DevSwitcherContext'

export interface SidebarNavItem {
  id: string
  label: string
  icon: React.ReactNode
}

const defaultNavItems: SidebarNavItem[] = [
  { id: 'home',             label: 'Home',            icon: <Home size={16} /> },
  { id: 'my-loan',          label: 'My Loan',         icon: <Building2 size={16} /> },
  { id: 'calculator',       label: 'Calculator',      icon: <Calculator size={16} /> },
  { id: 'learning-center',  label: 'Help Center', icon: <BookOpen size={16} /> },
]

interface AppSidebarProps {
  activeItem?: string
  onNavChange?: (id: string) => void
  navItems?: SidebarNavItem[]
}

export function AppSidebar({ activeItem = 'home', onNavChange, navItems = defaultNavItems }: AppSidebarProps) {
  const { colorTheme } = useDevSwitcher()
  const isTealNav = colorTheme === 'teal-nav'
  const isTealBg = colorTheme === 'teal-bg'

  return (
    <aside className={cn(
      'fixed top-[60px] left-0 bottom-0 w-[220px] z-[100] flex flex-col',
      isTealNav ? 'bg-teal-700 border-r border-teal-600' :
      isTealBg  ? 'bg-[#EAF5F4] border-r border-[#CCE8E6]' :
      'bg-white border-r border-gray-200'
    )}>
      <nav className="flex-1 overflow-y-auto">
        <ul className="list-none py-5 px-4">
          {navItems.map(item => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeItem === item.id}
              onClick={() => onNavChange?.(item.id)}
            />
          ))}
        </ul>
      </nav>
      <LOContactCard />
    </aside>
  )
}
