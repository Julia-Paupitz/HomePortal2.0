import { useState, useEffect } from 'react'
import { House as Home, CirclePlus, Calculator, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AppHeader } from '@/components/layout/AppHeader'
import { AppSidebar } from '@/components/layout/AppSidebar'
import { MobileSidebar } from '@/components/layout/MobileSidebar'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { DevSwitcher } from '@/components/DevSwitcher'
import { LiveChat } from '@/components/shared/LiveChat'
import { useDevSwitcher } from '@/context/DevSwitcherContext'
import { Banner } from '@/components/notifications/Banner'
import { FileText, AlertTriangle } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import { LoanOverviewPage } from '@/pages/LoanOverview'
import { HomePage } from '@/pages/Home'
import { AccountCreationPage } from '@/pages/AccountCreation'
import { LoanApplicationPage } from '@/pages/LoanApplication'
import { ApplicationSubmittedPage } from '@/pages/ApplicationSubmitted'
import { ApplicationInProgressPage } from '@/pages/ApplicationInProgress'

// Nav items for the account-creation state
const accountCreationSidebarItems = [
  { id: 'home',            label: 'Home',            icon: <Home size={16} /> },
  { id: 'calculator',     label: 'Calculators',     icon: <Calculator size={16} /> },
  { id: 'learning-center', label: 'Learning Center', icon: <BookOpen size={16} /> },
]

// Nav items for the application-in-progress state
const appInProgressSidebarItems = [
  { id: 'home', label: 'Home', icon: <Home size={16} /> },
]

// Nav items for the application-submitted state (no Loans item)
const appSubmittedSidebarItems = [
  { id: 'home',            label: 'Home',            icon: <Home size={16} /> },
  { id: 'application',    label: 'Application',     icon: <CirclePlus size={16} /> },
  { id: 'calculator',     label: 'Calculators',     icon: <Calculator size={16} /> },
  { id: 'learning-center', label: 'Learning Center', icon: <BookOpen size={16} /> },
]

const appSubmittedMobileNavItems = [
  { id: 'home',            label: 'Home',            icon: Home },
  { id: 'application',    label: 'Application',     icon: CirclePlus },
  { id: 'calculator',     label: 'Calculators',     icon: Calculator },
  { id: 'learning-center', label: 'Learning Center', icon: BookOpen },
]

function AppShell() {
  const { globalState, notifications, setNotification } = useDevSwitcher()
  const isMobile = useIsMobile()
  const [activeNav, setActiveNav] = useState('home')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [showPreferencesBadge, setShowPreferencesBadge] = useState(false)
  const [loanRequestedTab, setLoanRequestedTab] = useState<string | undefined>()

  // Reset activeNav when globalState or isMobile changes
  useEffect(() => {
    if (globalState === 'application-submitted') {
      setActiveNav(isMobile ? 'home' : 'application')
    } else {
      setActiveNav('home')
    }
  }, [globalState, isMobile])

  const showHeader = true
  const showSidebar = ['loan-funded', 'application-submitted', 'application-in-progress', 'account-creation'].includes(globalState)
  const showBottomNav = isMobile && ['loan-funded', 'application-submitted'].includes(globalState)

  const isAccountCreation = globalState === 'account-creation'
  const isAppSubmitted = globalState === 'application-submitted'
  const isAppInProgress = globalState === 'application-in-progress'

  function renderPage() {
    if (globalState === 'account-creation')        return <AccountCreationPage />
    if (globalState === 'application')             return <LoanApplicationPage />
    if (globalState === 'application-in-progress') return <ApplicationInProgressPage />
    if (globalState === 'application-submitted') {
      return (
        <ApplicationSubmittedPage
          activeNav={activeNav}
          onNavigate={setActiveNav}
          onBadgeChange={setShowPreferencesBadge}
        />
      )
    }

    if (activeNav === 'home')    return <HomePage onNavigate={setActiveNav} />
    if (activeNav === 'my-loan') return (
      <LoanOverviewPage
        requestedTab={loanRequestedTab}
        onTabConsumed={() => setLoanRequestedTab(undefined)}
      />
    )
    return (
      <div className="flex items-center justify-center py-24 text-sm text-gray-400 italic">
        Page coming soon
      </div>
    )
  }

  // ── Mobile layout ──────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-200">
        <div className="relative mx-auto min-w-[375px] max-w-[540px] h-screen bg-surface-50 flex flex-col rounded-[6px] overflow-hidden">
          {showHeader && (
            <AppHeader isMobile minimal={isAccountCreation} showPreferencesBadge={showPreferencesBadge} />
          )}

          <main className="flex-1 overflow-y-auto">
            {notifications.taxStatement && (
              <Banner
                type="dismissible"
                variant="info"
                icon={<FileText size={18} />}
                title="Your 2024 Tax Statement is available"
                action={{ label: 'View Tax Statement →', onClick: () => { setActiveNav('my-loan'); setLoanRequestedTab('documents') } }}
                onDismiss={() => setNotification('taxStatement', false)}
              />
            )}
            {notifications.hurricaneAlert && globalState === 'loan-funded' && (
              <Banner
                type="non-dismissible"
                variant="warning"
                icon={<AlertTriangle size={18} />}
                title="Hurricane Warning in effect for your area"
                body="Please review your insurance coverage and emergency plan."
              />
            )}
            <div className="px-4 pb-6">
              {renderPage()}
            </div>
          </main>

          {showBottomNav && (
            <MobileBottomNav
              activeItem={activeNav}
              onNavChange={setActiveNav}
              navItems={isAppSubmitted ? appSubmittedMobileNavItems : undefined}
            />
          )}
        </div>

        <LiveChat mobile hasBottomNav={showBottomNav} />
        <DevSwitcher />
      </div>
    )
  }

  // ── Desktop layout ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-surface-50">
      {showHeader && (
        <AppHeader
          onMenuClick={() => setMobileSidebarOpen(true)}
          minimal={isAccountCreation}
          showPreferencesBadge={showPreferencesBadge}
        />
      )}

      {showSidebar && (
        <div className="hidden lg:block">
          <AppSidebar
            activeItem={activeNav}
            onNavChange={setActiveNav}
            navItems={isAccountCreation ? accountCreationSidebarItems : isAppSubmitted ? appSubmittedSidebarItems : isAppInProgress ? appInProgressSidebarItems : undefined}
          />
        </div>
      )}

      {showSidebar && (
        <MobileSidebar
          open={mobileSidebarOpen}
          onOpenChange={setMobileSidebarOpen}
          activeItem={activeNav}
          onNavChange={setActiveNav}
          navItems={isAccountCreation ? accountCreationSidebarItems : isAppSubmitted ? appSubmittedSidebarItems : isAppInProgress ? appInProgressSidebarItems : undefined}
        />
      )}

      <main
        className={cn(
          showHeader && 'pt-[60px]',
          showSidebar && 'lg:ml-[220px]'
        )}
      >
        {notifications.taxStatement && (
          <Banner
            type="dismissible"
            variant="info"
            icon={<FileText size={18} />}
            title="Your 2024 Tax Statement is available"
            action={{ label: 'View Tax Statement →', onClick: () => { setActiveNav('my-loan'); setLoanRequestedTab('documents') } }}
            onDismiss={() => setNotification('taxStatement', false)}
          />
        )}
        {notifications.hurricaneAlert && globalState === 'loan-funded' && (
          <Banner
            type="non-dismissible"
            variant="warning"
            icon={<AlertTriangle size={18} />}
            title="Hurricane Warning in effect for your area"
            body="Please review your insurance coverage and emergency plan."
          />
        )}
        <div className="px-4 py-9 pb-16">
          {renderPage()}
        </div>
      </main>

      <LiveChat />
      <DevSwitcher />
    </div>
  )
}

function App() {
  return <AppShell />
}

export default App
