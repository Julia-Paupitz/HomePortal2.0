import { useState, useEffect } from 'react'
import { useDevSwitcher } from '@/context/DevSwitcherContext'

export function useIsMobile(): boolean {
  const { layoutMode } = useDevSwitcher()
  const [isSmallScreen, setIsSmallScreen] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return layoutMode === 'mobile' || isSmallScreen
}
