import { useState, useMemo } from 'react'
import { DollarSign, Percent, Info } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

// ── Helpers ────────────────────────────────────────────────────────────────

function formatCurrency(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function parseInput(val: string) {
  return parseFloat(val.replace(/[^0-9.]/g, '')) || 0
}

function calcMonthlyPayment(principal: number, annualRate: number, termYears: number) {
  if (principal <= 0 || annualRate <= 0 || termYears <= 0) return 0
  const r = annualRate / 100 / 12
  const n = termYears * 12
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
}

// ── Sub-components ─────────────────────────────────────────────────────────

function InputField({
  label, value, onChange, prefix, suffix, hint,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  hint?: string
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy-800 mb-1.5">{label}</label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3.5 text-gray-400 text-sm pointer-events-none">{prefix}</span>
        )}
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={`w-full bg-surface-100 border border-gray-200 rounded-xl py-2.5 text-sm text-navy-800 focus:outline-none focus:border-teal-700 transition-colors ${prefix ? 'pl-8' : 'pl-3.5'} ${suffix ? 'pr-10' : 'pr-3.5'}`}
        />
        {suffix && (
          <span className="absolute right-3.5 text-gray-400 text-sm pointer-events-none">{suffix}</span>
        )}
      </div>
      {hint && <p className="text-[11px] text-gray-400 mt-1">{hint}</p>}
    </div>
  )
}

function TermButton({ years, active, onClick }: { years: number; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-colors border ${
        active
          ? 'bg-teal-700 text-white border-teal-700'
          : 'bg-surface-100 text-navy-800 border-gray-200 hover:border-teal-700/40 hover:bg-teal-50'
      }`}
    >
      {years} yr
    </button>
  )
}

function BreakdownRow({
  color, label, amount, pct,
}: {
  color: string; label: string; amount: number; pct: number
}) {
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${color}`} />
        <span className="text-gray-500">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] text-gray-400 w-8 text-right">{Math.round(pct)}%</span>
        <span className="font-semibold text-navy-800 w-20 text-right">{formatCurrency(amount)}/mo</span>
      </div>
    </div>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────

export function CalculatorsPage() {
  const isMobile = useIsMobile()
  const [homePrice, setHomePrice]       = useState('400000')
  const [downPayment, setDownPayment]   = useState('80000')
  const [downMode, setDownMode]         = useState<'$' | '%'>('$')
  const [interestRate, setInterestRate] = useState('6.875')
  const [termYears, setTermYears]       = useState(30)
  const [monthlyTax, setMonthlyTax]     = useState('350')
  const [monthlyIns, setMonthlyIns]     = useState('120')

  const results = useMemo(() => {
    const price  = parseInput(homePrice)
    const rate   = parseInput(interestRate)
    const tax    = parseInput(monthlyTax)
    const ins    = parseInput(monthlyIns)

    let down: number
    if (downMode === '%') {
      down = price * (parseInput(downPayment) / 100)
    } else {
      down = parseInput(downPayment)
    }

    const principal = Math.max(0, price - down)
    const downPct   = price > 0 ? (down / price) * 100 : 0
    const pi        = calcMonthlyPayment(principal, rate, termYears)
    // PMI applies when down payment < 20%
    const pmi       = downPct < 20 ? Math.round((principal * 0.0085) / 12) : 0
    const total     = pi + tax + ins + pmi

    return { pi, tax, ins, pmi, total, principal, down, downPct }
  }, [homePrice, downPayment, downMode, interestRate, termYears, monthlyTax, monthlyIns])

  // Sync down payment field when toggling between $ and %
  function handleDownModeToggle(mode: '$' | '%') {
    const price = parseInput(homePrice)
    if (mode === '%' && downMode === '$') {
      const pct = price > 0 ? (parseInput(downPayment) / price) * 100 : 0
      setDownPayment(pct.toFixed(1))
    } else if (mode === '$' && downMode === '%') {
      const dollars = price * (parseInput(downPayment) / 100)
      setDownPayment(Math.round(dollars).toString())
    }
    setDownMode(mode)
  }

  const segments = [
    { color: 'bg-teal-700',   amount: results.pi,  pct: results.total > 0 ? (results.pi  / results.total) * 100 : 0 },
    { color: 'bg-navy-500',   amount: results.tax, pct: results.total > 0 ? (results.tax / results.total) * 100 : 0 },
    { color: 'bg-navy-300',   amount: results.ins, pct: results.total > 0 ? (results.ins / results.total) * 100 : 0 },
    { color: 'bg-yellow-400', amount: results.pmi, pct: results.total > 0 ? (results.pmi / results.total) * 100 : 0 },
  ]

  return (
    <div className="max-w-2xl mx-auto pt-6">
      <h1 className="font-kadwa text-[22px] font-bold text-navy-800 leading-tight mb-6">
        Calculators
      </h1>

      <div className={isMobile ? 'flex flex-col gap-5' : 'grid grid-cols-[1fr_280px] gap-5'}>

        {/* ── Inputs ── */}
        <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)] space-y-5">
          <h2 className="text-[15px] font-bold text-navy-800">Mortgage Calculator</h2>

          <InputField
            label="Home Price"
            value={homePrice}
            onChange={setHomePrice}
            prefix={<DollarSign size={14} />}
          />

          {/* Down payment with $ / % toggle */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1.5">Down Payment</label>
            <div className="flex gap-2">
              <div className="relative flex items-center flex-1">
                <span className="absolute left-3.5 text-gray-400 text-sm pointer-events-none">
                  {downMode === '$' ? <DollarSign size={14} /> : <Percent size={14} />}
                </span>
                <input
                  type="text"
                  inputMode="decimal"
                  value={downPayment}
                  onChange={e => setDownPayment(e.target.value)}
                  className="w-full bg-surface-100 border border-gray-200 rounded-xl py-2.5 pl-8 pr-3.5 text-sm text-navy-800 focus:outline-none focus:border-teal-700 transition-colors"
                />
              </div>
              <div className="flex rounded-xl overflow-hidden border border-gray-200">
                {(['$', '%'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => handleDownModeToggle(mode)}
                    className={`px-3.5 text-sm font-semibold transition-colors ${
                      downMode === mode
                        ? 'bg-teal-700 text-white'
                        : 'bg-surface-100 text-gray-500 hover:bg-teal-50'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            {results.downPct > 0 && (
              <p className="text-[11px] text-gray-400 mt-1">
                {downMode === '$'
                  ? `${results.downPct.toFixed(1)}% of home price`
                  : `${formatCurrency(results.down)} down`}
                {results.downPct < 20 && (
                  <span className="ml-2 text-yellow-700">· PMI may apply (below 20%)</span>
                )}
              </p>
            )}
          </div>

          {/* Loan term */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1.5">Loan Term</label>
            <div className="flex gap-2">
              {[10, 15, 20, 30].map(y => (
                <TermButton key={y} years={y} active={termYears === y} onClick={() => setTermYears(y)} />
              ))}
            </div>
          </div>

          <InputField
            label="Interest Rate"
            value={interestRate}
            onChange={setInterestRate}
            suffix={<Percent size={14} />}
            hint="Enter the annual interest rate"
          />

          {/* Optional fields */}
          <div className="pt-1 border-t border-gray-100">
            <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Optional
            </p>
            <div className="grid grid-cols-2 gap-3">
              <InputField
                label="Monthly Taxes"
                value={monthlyTax}
                onChange={setMonthlyTax}
                prefix={<DollarSign size={14} />}
              />
              <InputField
                label="Home Insurance"
                value={monthlyIns}
                onChange={setMonthlyIns}
                prefix={<DollarSign size={14} />}
              />
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        <div className="space-y-4">

          {/* Monthly total */}
          <div className="bg-teal-700 rounded-[14px] p-5 text-white">
            <p className="text-sm font-medium text-teal-100 mb-1">Est. Monthly Payment</p>
            <p className="font-kadwa text-[32px] font-bold leading-none">
              {formatCurrency(results.total)}
            </p>
            <p className="text-xs text-teal-200 mt-2">
              Loan amount: {formatCurrency(results.principal)}
            </p>
          </div>

          {/* Breakdown */}
          <div className="bg-white rounded-[14px] p-5 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
            <p className="text-[13px] font-bold text-navy-800 mb-4">Payment Breakdown</p>

            {/* Stacked bar */}
            {results.total > 0 && (
              <div className="flex rounded-full overflow-hidden h-3 mb-4">
                {segments.map((s, i) =>
                  s.pct > 0 ? (
                    <div
                      key={i}
                      className={`${s.color} transition-all`}
                      style={{ width: `${s.pct}%` }}
                    />
                  ) : null
                )}
              </div>
            )}

            <div className="space-y-3">
              <BreakdownRow color="bg-teal-700"   label="Principal & Interest" amount={results.pi}  pct={segments[0].pct} />
              <BreakdownRow color="bg-navy-500"   label="Property Tax"         amount={results.tax} pct={segments[1].pct} />
              <BreakdownRow color="bg-navy-300"   label="Home Insurance"       amount={results.ins} pct={segments[2].pct} />
              {results.pmi > 0 && (
                <BreakdownRow color="bg-yellow-400" label="PMI" amount={results.pmi} pct={segments[3].pct} />
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex gap-2 text-[11px] text-gray-400 leading-relaxed">
            <Info size={12} className="shrink-0 mt-0.5" />
            <p>This estimate is for informational purposes only and does not constitute a loan offer. Actual payments may vary.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
