import { House as Home, Building2, Calculator, BookOpen } from 'lucide-react'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { NavItem } from './NavItem'
import type { SidebarNavItem } from './AppSidebar'

const defaultNavItems: SidebarNavItem[] = [
  { id: 'home',             label: 'Home',            icon: <Home size={16} /> },
  { id: 'my-loan',          label: 'My Loan',         icon: <Building2 size={16} /> },
  { id: 'calculator',       label: 'Calculator',      icon: <Calculator size={16} /> },
  { id: 'learning-center',  label: 'Help Center', icon: <BookOpen size={16} /> },
]

interface MobileSidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  activeItem?: string
  onNavChange?: (id: string) => void
  navItems?: SidebarNavItem[]
}

export function MobileSidebar({ open, onOpenChange, activeItem = 'home', onNavChange, navItems = defaultNavItems }: MobileSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[220px] p-0 pt-0">
        <div className="pt-4">
          <ul className="list-none px-4">
            {navItems.map(item => (
            <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={activeItem === item.id}
                onClick={() => {
                  onNavChange?.(item.id)
                  onOpenChange(false)
                }}
              />
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  )
}
