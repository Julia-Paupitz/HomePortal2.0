import { CheckCircle, Clock, Circle } from 'lucide-react'
import { applicationTasks } from '@/data/mockData'

function TaskBadge({ status, due }: { status: 'pending' | 'complete'; due: string | null }) {
  if (status === 'complete') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-[10px] font-semibold">
        <CheckCircle size={10} />
        Complete
      </span>
    )
  }
  if (due) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 text-[10px] font-semibold">
        <Clock size={10} />
        {due}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px] font-semibold">
      Pending
    </span>
  )
}

export function TasksCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Action Items</div>
      <div className="space-y-3">
        {applicationTasks.map(task => (
          <div key={task.id} className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">
              {task.status === 'complete' ? (
                <CheckCircle size={18} className="text-teal-700" />
              ) : (
                <Circle size={18} className="text-gray-300" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm ${task.status === 'complete' ? 'text-gray-400 line-through' : 'text-navy-800'}`}>
                {task.label}
              </div>
            </div>
            <TaskBadge status={task.status} due={task.due} />
          </div>
        ))}
      </div>
    </div>
  )
}
