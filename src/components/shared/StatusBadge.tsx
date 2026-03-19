import { Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type StatusVariant = 'ok' | 'soon' | 'urgent'

const variants: Record<StatusVariant, { className: string; icon: React.ReactNode }> = {
  ok: {
    className: 'bg-green-50 text-green-600',
    icon: <CheckCircle size={11} />,
  },
  soon: {
    className: 'bg-yellow-50 text-yellow-700',
    icon: <Clock size={11} />,
  },
  urgent: {
    className: 'bg-red-50 text-red-500',
    icon: <AlertCircle size={11} />,
  },
}

interface StatusBadgeProps {
  variant: StatusVariant
  label: string
}

export function StatusBadge({ variant, label }: StatusBadgeProps) {
  const { className, icon } = variants[variant]
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap', className)}>
      {icon}
      {label}
    </span>
  )
}
