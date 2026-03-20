import { CheckCircle2, FileText, AlertTriangle, BellOff } from 'lucide-react'
import type { NotificationFlags } from '@/context/DevSwitcherContext'

interface NotificationItem {
  key: keyof NotificationFlags
  icon: React.ReactNode
  title: string
  body: string
}

const ALL_ITEMS: NotificationItem[] = [
  {
    key: 'paymentAccepted',
    icon: <CheckCircle2 size={20} className="text-green-500" />,
    title: 'Payment Accepted',
    body: 'Your latest payment has been successfully processed.',
  },
  {
    key: 'taxStatement',
    icon: <FileText size={20} className="text-teal-600" />,
    title: 'Tax Statement Available',
    body: 'Your 2024 Tax Statement is ready to view.',
  },
  {
    key: 'hurricaneAlert',
    icon: <AlertTriangle size={20} className="text-red-500" />,
    title: 'Hurricane Warning',
    body: 'A hurricane warning is in effect for your area. Review your insurance and emergency plan.',
  },
]

interface NotificationMenuProps {
  notifications: NotificationFlags
}

export function NotificationMenu({ notifications }: NotificationMenuProps) {
  const activeItems = ALL_ITEMS.filter(item => notifications[item.key])

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[300]">
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-semibold text-navy-800">Notifications</p>
      </div>

      {activeItems.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-8 text-gray-400">
          <BellOff size={24} />
          <p className="text-xs">No new notifications</p>
        </div>
      ) : (
        <ul>
          {activeItems.map(item => (
            <li key={item.key} className="flex items-start gap-3 px-4 py-3.5 border-b border-gray-50 last:border-0">
              <div className="shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-sm font-semibold text-navy-800">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
