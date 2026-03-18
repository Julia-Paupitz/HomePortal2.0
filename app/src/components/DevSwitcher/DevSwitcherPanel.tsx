import { Sheet, SheetContent } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useDevSwitcher, type GlobalState, type LayoutMode } from '@/context/DevSwitcherContext'

const globalStates: { key: GlobalState; label: string; color: string }[] = [
  { key: 'account-creation',      label: 'Account Creation',      color: '#9ca3af' },
  { key: 'application',           label: 'Application',           color: '#a16207' },
  { key: 'application-submitted', label: 'Application Submitted', color: '#0f766e' },
  { key: 'loan-funded',           label: 'Loan Funded',           color: '#16a34a' },
]

const layoutModes: { key: LayoutMode; label: string }[] = [
  { key: 'desktop', label: 'Desktop' },
  { key: 'mobile',  label: 'Mobile' },
]

export function DevSwitcherPanel() {
  const { isOpen, setIsOpen, layoutMode, setLayoutMode, globalState, setGlobalState, reset } = useDevSwitcher()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[300px] p-0 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-200 px-5 py-4">
          <div className="text-sm font-semibold text-navy-800">Dev Switcher</div>
          <div className="text-xs text-gray-500 mt-0.5">Preview app states &amp; variations</div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* Layout Mode */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Layout</div>
            <div className="flex gap-2">
              {layoutModes.map(mode => (
                <button
                  key={mode.key}
                  onClick={() => setLayoutMode(mode.key)}
                  className={cn(
                    'flex-1 text-sm py-2 rounded-lg border font-medium transition-colors',
                    layoutMode === mode.key
                      ? 'bg-navy-800 text-white border-navy-800'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  )}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* App State */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">App State</div>
            <div className="space-y-2">
              {globalStates.map(state => (
                <button
                  key={state.key}
                  onClick={() => setGlobalState(state.key)}
                  className={cn(
                    'w-full flex items-center gap-3 text-left px-3 py-2.5 rounded-lg border transition-colors',
                    globalState === state.key
                      ? 'border-navy-800/30 bg-navy-800/5'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  )}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: state.color }}
                  />
                  <span className={cn('text-sm', globalState === state.key ? 'font-semibold text-navy-800' : 'text-gray-600')}>
                    {state.label}
                  </span>
                  {globalState === state.key && (
                    <span className="ml-auto text-[10px] font-semibold text-navy-500 uppercase tracking-wide">Active</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Component Variations */}
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
              Component Variations
            </div>
            <div className="text-xs text-gray-400 italic px-1">
              No variations configured yet. Will grow as pages are built.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4">
          <button
            onClick={reset}
            className="w-full text-xs font-semibold text-gray-500 hover:text-gray-700 py-2 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            Reset to defaults
          </button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
