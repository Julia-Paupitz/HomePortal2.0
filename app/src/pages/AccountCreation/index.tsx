import { useState } from 'react'
import { AccountCreationHomePage } from './HomePage'
import { WelcomeModal } from './WelcomeModal'

export function AccountCreationPage() {
  const [showModal, setShowModal] = useState(true)

  return (
    <>
      <AccountCreationHomePage />
      {showModal && (
        <WelcomeModal
          onDismiss={() => setShowModal(false)}
          onMaybeLater={() => setShowModal(false)}
        />
      )}
    </>
  )
}
