import { applicationSummary } from '@/data/mockData'
import { TasksCard } from './TasksCard'
import { ApplicationInfoCard } from './ApplicationInfoCard'
import { MilestonesCard } from './MilestonesCard'
import { HomeSearchCard } from './HomeSearchCard'

export function AppSubmittedApplicationPage() {
  const { applicationNumber, address } = applicationSummary

  return (
    <div className="max-w-2xl mx-auto space-y-6 pt-6">
      {/* Page header */}
      <div>
        <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight">
          Application {applicationNumber}
        </h1>
        <p className="text-sm text-gray-400 mt-1">{address}</p>
      </div>

      <TasksCard />
      <ApplicationInfoCard />
      <MilestonesCard />
      <HomeSearchCard />
    </div>
  )
}
