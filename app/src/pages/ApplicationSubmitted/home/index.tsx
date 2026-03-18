import { useIsMobile } from '@/hooks/useIsMobile'
import { userProfile } from '@/data/mockData'
import { ApplicationSummaryCard } from './ApplicationSummaryCard'
import { OpportunitiesColumn } from './OpportunitiesColumn'
import { TrackingWidgets } from '@/pages/Home/TrackingWidgets'
import { ToolsWidgets } from '@/pages/Home/ToolsWidgets'
import { ProductsSection } from '@/pages/Home/ProductsSection'

interface AppSubmittedHomePageProps {
  onNavigate: (id: string) => void
}

export function AppSubmittedHomePage({ onNavigate }: AppSubmittedHomePageProps) {
  const isMobile = useIsMobile()

  return (
    <div className={isMobile ? 'pt-6 space-y-6' : 'max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6'}>
      {/* Left / main column */}
      <div className="space-y-6">
        <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight">
          Welcome, {userProfile.firstName}
        </h1>

        <section>
          <h2 className="text-sm font-semibold text-navy-800 mb-3">Applications</h2>
          <ApplicationSummaryCard onNavigate={onNavigate} />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-navy-800 mb-3">Tracking</h2>
          <TrackingWidgets />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-navy-800 mb-3">Tools</h2>
          <ToolsWidgets />
        </section>

        <ProductsSection />
      </div>

      {/* Right column: opportunities (desktop only) */}
      {!isMobile && (
        <div className="lg:pt-[1.625rem]">
          <OpportunitiesColumn />
        </div>
      )}
    </div>
  )
}
