import { useState } from 'react'
import { ArrowUpDown, ListFilter, ExternalLink } from 'lucide-react'
import { loanDocuments } from '@/data/mockData'

function formatDate(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${Number(m)}/${Number(d)}/${y}`
}

export function DocumentsTab() {
  const [sortAsc, setSortAsc] = useState(true)

  const sorted = [...loanDocuments].sort((a, b) => {
    const cmp = a.date.localeCompare(b.date)
    return sortAsc ? cmp : -cmp
  })

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setSortAsc(a => !a)}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-teal-700 border-r border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ArrowUpDown size={15} />
          <span>
            Sorted by<br />
            <span className="font-normal text-xs text-teal-700/80">
              Date: {sortAsc ? 'Old to New' : 'New to Old'}
            </span>
          </span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-teal-700 hover:bg-gray-50 transition-colors">
          <ListFilter size={15} />
          Filter
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-600">Document Name</th>
            <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-600 w-28">Created On</th>
            <th className="w-10" />
          </tr>
        </thead>
        <tbody>
          {sorted.map(doc => (
            <tr key={doc.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm text-gray-800 max-w-0">
                <span className="block truncate">{doc.name}</span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                {formatDate(doc.date)}
              </td>
              <td className="px-4 py-3">
                <button
                  aria-label="Open document"
                  className="text-teal-700 hover:text-teal-600 transition-colors"
                >
                  <ExternalLink size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
