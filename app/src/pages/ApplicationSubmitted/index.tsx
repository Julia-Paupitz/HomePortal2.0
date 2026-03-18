import { useState } from 'react'
import { WelcomeModal } from './WelcomeModal'
import { AppSubmittedHomePage } from './home'
import { AppSubmittedApplicationPage } from './application'

interface ApplicationSubmittedPageProps {
  activeNav: string
  onNavigate: (id: string) => void
  onBadgeChange: (show: boolean) => void
}

export function ApplicationSubmittedPage({ activeNav, onNavigate, onBadgeChange }: ApplicationSubmittedPageProps) {
  const [showModal, setShowModal] = useState(true)

  function handleDismiss() {
    setShowModal(false)
    onBadgeChange(false)
  }

  function handleMaybeLater() {
    setShowModal(false)
    onBadgeChange(true)
  }

  function renderPage() {
    if (activeNav === 'home') return <AppSubmittedHomePage onNavigate={onNavigate} />
    if (activeNav === 'application') return <AppSubmittedApplicationPage />
    return (
      <div className="flex items-center justify-center py-24 text-sm text-gray-400 italic">
        Page coming soon
      </div>
    )
  }

  return (
    <>
      {renderPage()}
      {showModal && (
        <WelcomeModal onDismiss={handleDismiss} onMaybeLater={handleMaybeLater} />
      )}
    </>
  )
}
