import { useState } from 'react'
import { AccountCreationHomePage } from './HomePage'
import { WelcomeModal } from './WelcomeModal'

const APP_URL = 'https://andyg-xd-smartapp-fu-tldx.bolt.host/apply/personal-info'

export function AccountCreationPage() {
  const [showModal, setShowModal] = useState(true)
  const [hasApplied, setHasApplied] = useState(false)

  function handleApply() {
    window.open(APP_URL, '_blank', 'noopener')
    setHasApplied(true)
  }

  return (
    <>
      <AccountCreationHomePage hasApplied={hasApplied} onApply={handleApply} />
      {showModal && (
        <WelcomeModal
          onDismiss={() => setShowModal(false)}
          onMaybeLater={() => setShowModal(false)}
        />
      )}
    </>
  )
}
