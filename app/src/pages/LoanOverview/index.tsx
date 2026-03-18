import { useState } from 'react'
import { Home } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
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

export function LoanOverviewPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const showWidgets = widgetTabs.has(activeTab)

  return (
    <div className="max-w-5xl mx-auto">
      {/* Loan header */}
      <div className="flex items-start gap-3.5 mb-6">
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

      {/* Two-column grid: left = tabs, right = widgets */}
      <div className={showWidgets ? 'grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6' : undefined}>
        {/* Left: tabs */}
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start rounded-none border-b border-gray-200 bg-transparent h-auto p-0 mb-6">
              <TabsTrigger value="overview" className={tabTriggerClass}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="payments" className={tabTriggerClass}>
                Payments
              </TabsTrigger>
              <TabsTrigger value="escrow" className={tabTriggerClass}>
                Escrow
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className={`relative ${tabTriggerClass}`}
              >
                Documents
                <span className="absolute -top-1 -right-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                  3
                </span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>
            <TabsContent value="payments">
              <PaymentsTab />
            </TabsContent>
            <TabsContent value="escrow">
              <EscrowTab />
            </TabsContent>
            <TabsContent value="documents">
              <DocumentsTab />
            </TabsContent>
          </Tabs>
        </div>

        {/* Right: contextual widgets (Overview + Payments only) */}
        {activeTab === 'overview' && <OverviewWidgets />}
        {activeTab === 'payments' && <PaymentsWidgets />}
      </div>
    </div>
  )
}
