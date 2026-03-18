import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer,
} from 'recharts'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { loanSummary, amortizationData, yearRangeOptions } from '@/data/mockData'

export function LoanProgressCard() {
  const [open, setOpen] = useState(true)
  const [selectedRange, setSelectedRange] = useState(yearRangeOptions[0].label)

  const range = yearRangeOptions.find(r => r.label === selectedRange) ?? yearRangeOptions[0]
  const filteredData = amortizationData.filter(d => d.year >= range.start && d.year <= range.end)

  const l = loanSummary
  const mortgageBalance = l.homeValue - l.estimatedEquity

  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[16px] font-bold text-navy-800 font-sans">Loan Progress</h2>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-200 rounded-lg text-[13px] text-gray-500 hover:bg-surface-50 transition-colors"
        >
          {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          {open ? 'Collapse' : 'Expand'}
        </button>
      </div>

      <Collapsible open={open}>
        <CollapsibleContent className="data-[state=closed]:animate-none">
          {/* Equity strip */}
          <div className="grid grid-cols-3 gap-3 bg-green-50 border border-[#c5e8a8] rounded-[10px] px-5 py-4 mb-5">
            <div>
              <div className="text-[11.5px] text-gray-500 mb-1">Estimated Equity</div>
              <div className="text-[24px] font-bold text-green-600">
                ${l.estimatedEquity.toLocaleString()}
              </div>
              <div className="text-[11.5px] text-gray-500 mt-0.5">{l.equityPercent}% of home value</div>
            </div>
            <div>
              <div className="text-[11.5px] text-gray-500 mb-1">Mortgage Balance</div>
              <div className="text-[20px] font-bold text-navy-800">
                ${mortgageBalance.toLocaleString()}
              </div>
              <div className="text-[11.5px] text-gray-500 mt-0.5">{(100 - l.equityPercent).toFixed(1)}% remaining</div>
            </div>
            <div>
              <div className="text-[11.5px] text-gray-500 mb-1">Loan Paid Off</div>
              <div className="text-[20px] font-bold text-navy-800">{l.paidOffPercent}%</div>
              <div className="text-[11.5px] text-gray-500 mt-0.5">of original amount</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-5">
            <div className="flex justify-between text-[12px] text-gray-500 mb-1.5">
              <span>Start: Mar 2024</span>
              <strong className="text-navy-800 font-semibold">{l.paidOffPercent}% paid off</strong>
              <span>Payoff: Mar 2054</span>
            </div>
            <Progress value={l.paidOffPercent} className="h-2 bg-gray-200 [&>div]:bg-gradient-to-r [&>div]:from-green-600 [&>div]:to-green-500" />
          </div>

          {/* Chart controls */}
          <div className="flex items-center justify-between mb-4">
            <Select value={selectedRange} onValueChange={(v) => v && setSelectedRange(v)}>
              <SelectTrigger className="w-[180px] h-8 text-[13px] border-[#dde1e4]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {yearRangeOptions.map(opt => (
                  <SelectItem key={opt.label} value={opt.label} className="text-[13px]">
                    View {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-[12.5px] text-gray-500">
                <span className="w-3 h-3 rounded-[3px] bg-navy-500 inline-block" />
                Principal
              </div>
              <div className="flex items-center gap-1.5 text-[12.5px] text-gray-500">
                <span className="w-3 h-3 rounded-[3px] bg-gray-300 inline-block" />
                Interest
              </div>
            </div>
          </div>

          {/* Amortization chart */}
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={filteredData} margin={{ top: 4, right: 4, left: -16, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="#E2E5E8" />
              <XAxis
                dataKey="year"
                tick={{ fontSize: 11, fill: '#A0AEBA' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: '#A0AEBA' }}
                axisLine={false}
                tickLine={false}
                tickFormatter={v => `$${v}`}
              />
              <Tooltip
                formatter={(value, name) => [`$${Number(value)}`, String(name)]}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #E2E5E8' }}
              />
              <Bar dataKey="principal" name="Principal" stackId="a" fill="#3D5A6C" radius={[0, 0, 3, 3]} />
              <Bar dataKey="interest"  name="Interest"  stackId="a" fill="#CDD2D8" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
