import { MoreHorizontal, Download, XCircle } from 'lucide-react'
import { toast } from 'sonner'
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { paymentHistory } from '@/data/mockData'
import type { PaymentStatus } from '@/types'

const statusStyles: Record<PaymentStatus, string> = {
  pending:   'bg-yellow-50 text-yellow-700',
  completed: 'bg-green-50 text-green-600',
  failed:    'bg-red-50 text-red-500',
}

const statusLabels: Record<PaymentStatus, string> = {
  pending:   'Pending',
  completed: 'Completed',
  failed:    'Failed',
}

export function PaymentActivityCard() {
  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-[16px] font-bold text-navy-800 font-sans">Payment Activity</h2>
        <a href="#" onClick={e => e.preventDefault()} className="text-[13px] font-semibold text-teal-700 hover:underline">
          View all
        </a>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-surface-100">
            <TableHead className="text-[12px] font-semibold text-navy-300 px-0">Payment date</TableHead>
            <TableHead className="text-[12px] font-semibold text-navy-300">Amount</TableHead>
            <TableHead className="text-[12px] font-semibold text-navy-300">Status</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentHistory.map(row => (
            <TableRow key={row.id} className="border-surface-100">
              <TableCell className="px-0 py-3.5 text-[14px] text-navy-800">{row.date}</TableCell>
              <TableCell className="py-3.5 text-[14px] text-navy-800">
                ${row.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </TableCell>
              <TableCell className="py-3.5">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyles[row.status]}`}>
                  {statusLabels[row.status]}
                </span>
              </TableCell>
              <TableCell className="py-3.5 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger className="h-7 w-7 flex items-center justify-center rounded text-gray-400 hover:text-navy-800 hover:bg-surface-100 transition-colors">
                    <MoreHorizontal size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[160px] rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
                    <DropdownMenuItem
                      className="gap-2 text-[13.5px] cursor-pointer"
                      onClick={() => toast.info('Downloading PDF…')}
                    >
                      <Download size={14} />
                      Download PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="gap-2 text-[13.5px] text-red-500 focus:text-red-500 cursor-pointer"
                      onClick={() => toast.error('Payment cancelled')}
                    >
                      <XCircle size={14} />
                      Cancel Payment
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
