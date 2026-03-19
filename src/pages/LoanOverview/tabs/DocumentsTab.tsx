import { FileText } from 'lucide-react'

export function DocumentsTab() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-4">
        <FileText size={32} className="text-teal-700" />
      </div>
      <h3 className="text-lg font-semibold text-navy-800 mb-2">Documents coming soon</h3>
      <p className="text-sm text-gray-500 max-w-xs">
        Your loan documents will be available here. Check back later.
      </p>
    </div>
  )
}
