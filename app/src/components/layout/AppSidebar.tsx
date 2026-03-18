import { Home, Building2, Calculator, BookOpen } from 'lucide-react'
import { NavItem } from './NavItem'
import { LOContactCard } from './LOContactCard'

const navItems = [
  { id: 'home',             label: 'Home',            icon: <Home size={16} /> },
  { id: 'my-loan',          label: 'My Loan',         icon: <Building2 size={16} /> },
  { id: 'calculator',       label: 'Calculator',      icon: <Calculator size={16} /> },
  { id: 'learning-center',  label: 'Learning Center', icon: <BookOpen size={16} /> },
]

interface AppSidebarProps {
  activeItem?: string
  onNavChange?: (id: string) => void
}

export function AppSidebar({ activeItem = 'home', onNavChange }: AppSidebarProps) {
  return (
    <aside className="fixed top-[60px] left-0 bottom-0 w-[220px] bg-white border-r border-gray-200 z-[100] flex flex-col">
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
