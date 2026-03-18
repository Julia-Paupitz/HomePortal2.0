import { LoanSummaryCard } from './LoanSummaryCard'
import { TrackingWidgets } from './TrackingWidgets'
import { ToolsWidgets } from './ToolsWidgets'
import { ProductsSection } from './ProductsSection'
import { ContextualCTAs } from './ContextualCTAs'

interface HomePageProps {
  onNavigate: (id: string) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
      {/* Left column: main content */}
      <div className="space-y-6">
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

        {/* Our Products */}
        <ProductsSection />
      </div>

      {/* Right column: contextual CTAs */}
      <div className="lg:pt-[1.625rem]">
        <ContextualCTAs />
      </div>
    </div>
  )
}
