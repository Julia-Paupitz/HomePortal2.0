import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { paymentBreakdown, totalMonthlyPayment } from '@/data/mockData'

export function PaymentBreakdownCard() {
  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-4">Monthly Payment Breakdown</h2>

      <div className="flex items-center gap-8 mt-4">
        {/* Donut chart */}
        <div className="relative flex-shrink-0 w-[140px] h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={46}
                outerRadius={62}
                dataKey="amount"
                startAngle={90}
                endAngle={-270}
                strokeWidth={2}
                stroke="white"
              >
                {paymentBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`$${Number(value).toFixed(2)}`, '']}
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #E2E5E8' }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[11px] text-navy-300">Total</span>
            <span className="text-[14px] font-bold text-navy-800">
              ${totalMonthlyPayment.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 flex-1">
          {paymentBreakdown.map(slice => (
            <div key={slice.name} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: slice.color }} />
                <span className="text-[12px] text-navy-300">{slice.name} — {slice.percent}%</span>
              </div>
              <div className="text-[18px] font-bold text-navy-800 pl-4">
                ${slice.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
