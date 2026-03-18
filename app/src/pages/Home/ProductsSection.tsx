import { Landmark, Users } from 'lucide-react'

const products = [
  {
    id: 'aio',
    name: 'AIO',
    fullName: 'All-In-One',
    tagline: 'Use your home like a bank account',
    icon: <Landmark size={22} className="text-teal-700" />,
    iconBg: 'bg-teal-50',
  },
  {
    id: 'homefundit',
    name: 'Home FundIt',
    fullName: 'Home FundIt',
    tagline: 'Crowdfund your down payment',
    icon: <Users size={22} className="text-navy-500" />,
    iconBg: 'bg-navy-300/10',
  },
]

export function ProductsSection() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-navy-800">Our Products</h2>
        <button className="text-xs text-teal-700 hover:underline font-medium">See more ›</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3"
          >
            <div className={`w-10 h-10 rounded-lg ${product.iconBg} flex items-center justify-center`}>
              {product.icon}
            </div>
            <div>
              <div className="text-sm font-semibold text-navy-800 mb-0.5">{product.name}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{product.tagline}</div>
            </div>
            <button className="mt-auto text-xs font-semibold text-teal-700 border border-teal-700/30 rounded-lg px-3 py-1.5 hover:bg-teal-50 transition-colors self-start">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
