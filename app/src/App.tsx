import { useState } from 'react'
import { cn } from '@/lib/utils'
import { AppHeader } from '@/components/layout/AppHeader'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { MobileSidebar } from '@/components/layout/MobileSidebar'
import { DevSwitcher } from '@/components/DevSwitcher'
import { useDevSwitcher } from '@/context/DevSwitcherContext'
import { LoanOverviewPage } from '@/pages/LoanOverview'
import { HomePage } from '@/pages/Home'
import { AccountCreationPage } from '@/pages/AccountCreation'
import { LoanApplicationPage } from '@/pages/LoanApplication'
import { ApplicationSubmittedPage } from '@/pages/ApplicationSubmitted'

function AppShell() {
  const { globalState, layoutMode } = useDevSwitcher()
  const [activeNav, setActiveNav] = useState('home')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const showHeader = globalState !== 'account-creation'
  const showSidebar = globalState === 'loan-funded'
  const isMobile = layoutMode === 'mobile'

  function renderPage() {
    if (globalState === 'account-creation')      return <AccountCreationPage />
    if (globalState === 'application')           return <LoanApplicationPage />
    if (globalState === 'application-submitted') return <ApplicationSubmittedPage />

    // loan-funded: route by nav
    if (activeNav === 'home') return <HomePage onNavigate={setActiveNav} />
    if (activeNav === 'my-loan') return <LoanOverviewPage />
    // fallback placeholder for other nav items
    return (
      <div className="max-w-3xl mx-auto flex items-center justify-center py-24 text-sm text-gray-400 italic">
        Page coming soon
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface-50">
      {showHeader && <AppHeader onMenuClick={() => setMobileSidebarOpen(true)} />}

      {/* Desktop sidebar — only when sidebar is visible and not in mobile layout mode */}
      {showSidebar && !isMobile && (
        <div className="hidden lg:block">
          <AppSidebar activeItem={activeNav} onNavChange={setActiveNav} />
        </div>
      )}

      {/* Mobile sidebar drawer */}
      {showSidebar && (
        <MobileSidebar
          open={mobileSidebarOpen}
          onOpenChange={setMobileSidebarOpen}
          activeItem={activeNav}
          onNavChange={setActiveNav}
        />
      )}

      {/* Main content */}
      <main
        className={cn(
          showHeader && 'pt-[60px]',
          showSidebar && !isMobile && 'lg:ml-[220px]'
        )}
      >
        <div
          className={cn(
            'px-4 py-9 pb-16',
            isMobile && 'max-w-[390px] mx-auto'
          )}
        >
          {renderPage()}
        </div>
      </main>

      <DevSwitcher />
    </div>
  )
}

function App() {
  return <AppShell />
}

export default App
