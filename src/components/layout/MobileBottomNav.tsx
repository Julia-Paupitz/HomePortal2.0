import { Hop as Home, Plus, CreditCard, Calculator, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BottomNavItem {
  id: string
  label: string
  icon: React.ElementType
}

const defaultNavItems: BottomNavItem[] = [
  { icon: Home,       label: 'Home',           id: 'home' },
  { icon: Plus,       label: 'Applications',   id: 'applications' },
  { icon: CreditCard, label: 'Loans',          id: 'my-loan' },
  { icon: Calculator, label: 'Calculators',    id: 'calculator' },
  { icon: BookOpen,   label: 'Learning Center', id: 'learning-center' },
]

interface MobileBottomNavProps {
  activeItem: string
  onNavChange: (id: string) => void
  navItems?: BottomNavItem[]
}

export function MobileBottomNav({ activeItem, onNavChange, navItems = defaultNavItems }: MobileBottomNavProps) {
  return (
    <nav
      className="w-full bg-white border-t border-gray-200 flex items-center justify-around h-16 shrink-0"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {navItems.map(({ icon: Icon, label, id }) => {
        const isActive = activeItem === id
        return (
          <button
            key={id}
            onClick={() => onNavChange(id)}
            className={cn(
              'flex flex-col items-center justify-center gap-0.5 flex-1 h-full text-[10px] font-semibold transition-colors',
              isActive ? 'text-white' : 'text-gray-400'
            )}
          >
            <span
              className={cn(
                'flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors',
                isActive && 'bg-navy-800'
              )}
            >
              <Icon size={18} />
              <span>{label}</span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}
