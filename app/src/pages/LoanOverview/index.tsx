import { useState } from 'react'
import { Home, ChevronDown } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useDevSwitcher } from '@/context/DevSwitcherContext'
import { loanSummary } from '@/data/mockData'
import { OverviewTab } from './tabs/OverviewTab'
import { PaymentsTab } from './tabs/PaymentsTab'
import { EscrowTab } from './tabs/EscrowTab'
import { DocumentsTab } from './tabs/DocumentsTab'
import { OverviewWidgets } from './widgets/OverviewWidgets'
import { PaymentsWidgets } from './widgets/PaymentsWidgets'

const tabTriggerClass =
  'rounded-none border-b-[2.5px] border-transparent data-[state=active]:border-teal-700 data-[state=active]:text-teal-700 data-[state=active]:font-semibold text-gray-500 hover:text-navy-800 px-5 py-2.5 text-[14.5px] font-medium bg-transparent shadow-none'

const widgetTabs = new Set(['overview', 'payments'])

const SECTIONS = [
  { value: 'overview',   label: 'Overview' },
  { value: 'payments',   label: 'Payments' },
  { value: 'escrow',     label: 'Escrow' },
  { value: 'documents',  label: 'Documents (3)' },
]

function SectionDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative w-full mb-2">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-navy-800 pr-9 focus:outline-none focus:border-teal-700"
      >
        {SECTIONS.map(s => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  )
}

export function LoanOverviewPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const isMobile = useIsMobile()
  const { componentVariations } = useDevSwitcher()
  const showWidgets = widgetTabs.has(activeTab) && !isMobile
  const useDropdownNav = isMobile && componentVariations['loanOverviewNav'] === 'dropdown'

  const loanHeader = (
    <div className="flex items-start gap-3.5">
      <div className="text-navy-500 mt-0.5">
        <Home size={28} />
      </div>
      <div>
        <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight">
          Loan {loanSummary.loanNumber}
        </h1>
        <p className="text-[13px] text-gray-500 mt-0.5">{loanSummary.address}</p>
      </div>
    </div>
  )

  const tabList = (
    <TabsList className="w-full justify-start rounded-none border-b border-gray-200 bg-transparent h-auto p-0">
      <TabsTrigger value="overview" className={tabTriggerClass}>
        Overview
      </TabsTrigger>
      <TabsTrigger value="payments" className={tabTriggerClass}>
        Payments
      </TabsTrigger>
      <TabsTrigger value="escrow" className={tabTriggerClass}>
        Escrow
      </TabsTrigger>
      <TabsTrigger value="documents" className={`relative ${tabTriggerClass}`}>
        Documents
        <span className="absolute -top-1 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
          3
        </span>
      </TabsTrigger>
    </TabsList>
  )

  return (
    <div className="max-w-5xl mx-auto">
      {/* Desktop loan header (above everything) */}
      {!isMobile && <div className="mb-6">{loanHeader}</div>}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* Mobile: sticky block with loan header + tab list or dropdown */}
        {isMobile ? (
          <div className="sticky top-0 z-10 bg-surface-50 -mx-4 px-4 pt-4 pb-0 mb-6">
            <div className="mb-3">{loanHeader}</div>
            {useDropdownNav
              ? <SectionDropdown value={activeTab} onChange={setActiveTab} />
              : tabList}
          </div>
        ) : (
          /* Desktop: tab bar spans full width, above the two-column grid */
          <div className="mb-6">{tabList}</div>
        )}

        {/* Two-column grid: left = tab content, right = widgets (desktop only) */}
        <div className={showWidgets ? 'grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6' : undefined}>
          <div>
            <TabsContent value="overview">
              <OverviewTab isMobile={isMobile} onNavigateToPayments={() => setActiveTab('payments')} />
            </TabsContent>
            <TabsContent value="payments">
              <PaymentsTab isMobile={isMobile} />
            </TabsContent>
            <TabsContent value="escrow">
              <EscrowTab />
            </TabsContent>
            <TabsContent value="documents">
              <DocumentsTab />
            </TabsContent>
          </div>

          {/* Right: contextual widgets (Overview + Payments, desktop only) */}
          {activeTab === 'overview' && !isMobile && <OverviewWidgets />}
          {activeTab === 'payments' && !isMobile && <PaymentsWidgets />}
        </div>
      </Tabs>
    </div>
  )
}
