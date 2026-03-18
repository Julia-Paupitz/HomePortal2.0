import { useDevSwitcher, type GlobalState } from '@/context/DevSwitcherContext'

const stateColors: Record<GlobalState, string> = {
  'account-creation':      '#9ca3af',
  'application':              '#a16207',
  'application-in-progress':  '#ea580c',
  'application-submitted':    '#0f766e',
  'loan-funded':           '#16a34a',
}

export function FloatingBadge() {
  const { setIsOpen, globalState } = useDevSwitcher()

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-[88px] right-5 z-[9999] flex items-center gap-2 bg-navy-800 text-white text-xs font-mono font-semibold px-3 py-2 rounded-full shadow-lg hover:bg-navy-800/90 transition-colors"
    >
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: stateColors[globalState] }}
      />
      {'</>'}
    </button>
  )
}
