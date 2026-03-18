function PlaceholderWidget({ title }: { title: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl flex items-center justify-center min-h-[140px] flex-1">
      <span className="text-sm font-semibold text-gray-400">{title}</span>
    </div>
  )
}

export function PaymentsWidgets() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <PlaceholderWidget title="Equity Monitoring" />
      <PlaceholderWidget title="Rate Tracking" />
      <PlaceholderWidget title="Your Goals" />
    </div>
  )
}
