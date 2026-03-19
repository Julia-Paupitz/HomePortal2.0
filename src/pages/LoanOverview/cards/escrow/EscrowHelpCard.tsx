import { HelpCard } from '@/components/shared/HelpCard'
import { escrowHelpLinks } from '@/data/mockData'

export function EscrowHelpCard() {
  return (
    <div className="bg-white rounded-[14px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06),0_4px_16px_rgba(0,0,0,0.04)]">
      <h2 className="text-[16px] font-bold text-navy-800 font-sans mb-5">Need Some Help?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {escrowHelpLinks.map(link => (
          <HelpCard key={link.id} link={link} />
        ))}
      </div>
    </div>
  )
}
