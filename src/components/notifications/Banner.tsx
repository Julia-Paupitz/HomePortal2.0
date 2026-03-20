import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BannerProps {
  type: 'dismissible' | 'non-dismissible'
  variant: 'info' | 'warning'
  icon: ReactNode
  title: string
  body?: string
  action?: { label: string; href?: string; onClick?: () => void }
  onDismiss?: () => void
}

export function Banner({ type, variant, icon, title, body, action, onDismiss }: BannerProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 px-4 py-3 border-b',
        variant === 'info'    && 'bg-yellow-50 border-yellow-200',
        variant === 'warning' && 'bg-red-50 border-red-200',
      )}
    >
      <div className={cn('shrink-0', variant === 'info' ? 'text-yellow-700' : 'text-red-600')}>
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <p className={cn('text-sm font-semibold', variant === 'info' ? 'text-yellow-900' : 'text-red-900')}>
          {title}
        </p>
        {body && (
          <p className={cn('text-xs mt-0.5', variant === 'info' ? 'text-yellow-800' : 'text-red-800')}>
            {body}
          </p>
        )}
      </div>

      {action && (
        action.href ? (
          <a
            href={action.href}
            className={cn(
              'text-xs font-semibold shrink-0 underline-offset-2 hover:underline',
              variant === 'info' ? 'text-yellow-800' : 'text-red-800',
            )}
          >
            {action.label}
          </a>
        ) : (
          <button
            onClick={action.onClick}
            className={cn(
              'text-xs font-semibold shrink-0 underline-offset-2 hover:underline',
              variant === 'info' ? 'text-yellow-800' : 'text-red-800',
            )}
          >
            {action.label}
          </button>
        )
      )}

      {type === 'dismissible' && onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className={cn(
            'shrink-0 p-1 rounded hover:bg-black/10 transition-colors',
            variant === 'info' ? 'text-yellow-700' : 'text-red-600',
          )}
        >
          <X size={15} />
        </button>
      )}
    </div>
  )
}
