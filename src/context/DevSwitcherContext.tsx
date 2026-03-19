import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type GlobalState = 'account-creation' | 'application' | 'application-in-progress' | 'application-submitted' | 'loan-funded'
export type LayoutMode = 'desktop' | 'mobile'

interface DevSwitcherState {
  isOpen: boolean
  layoutMode: LayoutMode
  globalState: GlobalState
  componentVariations: Record<string, string>
}

interface DevSwitcherContextValue extends DevSwitcherState {
  setIsOpen: (open: boolean) => void
  setLayoutMode: (mode: LayoutMode) => void
  setGlobalState: (state: GlobalState) => void
  setComponentVariation: (key: string, value: string) => void
  reset: () => void
}

const STORAGE_KEY = 'devSwitcher'

const defaults: DevSwitcherState = {
  isOpen: false,
  layoutMode: 'desktop',
  globalState: 'loan-funded',
  componentVariations: {},
}

function loadFromStorage(): DevSwitcherState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<DevSwitcherState>
      return { ...defaults, ...parsed, isOpen: false }
    }
  } catch {
    // ignore parse errors
  }
  return { ...defaults }
}

const DevSwitcherContext = createContext<DevSwitcherContextValue | null>(null)

export function DevSwitcherProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DevSwitcherState>(loadFromStorage)

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        layoutMode: state.layoutMode,
        globalState: state.globalState,
        componentVariations: state.componentVariations,
      })
    )
  }, [state.layoutMode, state.globalState, state.componentVariations])

  const setIsOpen = (isOpen: boolean) => setState(s => ({ ...s, isOpen }))
  const setLayoutMode = (layoutMode: LayoutMode) => setState(s => ({ ...s, layoutMode }))
  const setGlobalState = (globalState: GlobalState) => setState(s => ({ ...s, globalState }))
  const setComponentVariation = (key: string, value: string) =>
    setState(s => ({ ...s, componentVariations: { ...s.componentVariations, [key]: value } }))
  const reset = () => setState({ ...defaults })

  return (
    <DevSwitcherContext.Provider
      value={{ ...state, setIsOpen, setLayoutMode, setGlobalState, setComponentVariation, reset }}
    >
      {children}
    </DevSwitcherContext.Provider>
  )
}

export function useDevSwitcher() {
  const ctx = useContext(DevSwitcherContext)
  if (!ctx) throw new Error('useDevSwitcher must be used within DevSwitcherProvider')
  return ctx
}
