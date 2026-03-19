import { useIsMobile } from '@/hooks/useIsMobile'
import { userProfile } from '@/data/mockData'
import { LoanSummaryCard } from './LoanSummaryCard'
import { TrackingWidgets } from './TrackingWidgets'
import { ToolsWidgets } from './ToolsWidgets'
import { ProductsSection } from './ProductsSection'
import { ContextualCTAs } from './ContextualCTAs'

interface HomePageProps {
  onNavigate: (id: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const isMobile = useIsMobile()

  return (
    <div className={isMobile ? 'pt-6 space-y-6' : 'max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6'}>
      {/* Left column (or full-width on mobile) */}
      <div className="space-y-6">
        {/* Welcome greeting */}
        <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight">
          Welcome, {userProfile.firstName}
        </h1>

        {/* Loans */}
        <section>
          <h2 className="text-sm font-semibold text-navy-800 mb-3">Loans</h2>
          <LoanSummaryCard onNavigate={onNavigate} />
        </section>

        {/* Tracking */}
        <section>
          <h2 className="text-sm font-semibold text-navy-800 mb-3">Tracking</h2>
          <TrackingWidgets />
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-sm font-semibold text-navy-800 mb-3">Tools</h2>
          <ToolsWidgets />
        </section>

        {/* Our Products / Opportunities */}
        <ProductsSection />
      </div>

      {/* Right column: contextual CTAs (desktop only) */}
      {!isMobile && (
        <div className="lg:pt-[1.625rem]">
          <ContextualCTAs />
        </div>
      )}
    </div>
  )
}
