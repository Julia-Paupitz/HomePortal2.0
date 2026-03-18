import {
  FileText, DollarSign, RefreshCw, Shield,
  BarChart2, HelpCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { HelpLink } from '@/types'

const iconMap: Record<string, React.ReactNode> = {
  FileText:   <FileText size={20} />,
  DollarSign: <DollarSign size={20} />,
  RefreshCw:  <RefreshCw size={20} />,
  Shield:     <Shield size={20} />,
  BarChart2:  <BarChart2 size={20} />,
  HelpCircle: <HelpCircle size={20} />,
}

const iconColorMap: Record<HelpLink['iconColor'], { bg: string; text: string }> = {
  teal:  { bg: 'bg-teal-50',    text: 'text-teal-700'  },
  green: { bg: 'bg-green-50',   text: 'text-green-500' },
  navy:  { bg: 'bg-surface-100',text: 'text-navy-500'  },
}

interface HelpCardProps {
  link: HelpLink
}

export function HelpCard({ link }: HelpCardProps) {
  const colors = iconColorMap[link.iconColor]
  return (
    <a
      href="#"
      onClick={e => e.preventDefault()}
      className={cn(
        'flex items-start gap-3 p-3.5 rounded-[10px]',
        'bg-surface-50 border border-gray-200',
        'hover:bg-teal-50 hover:border-teal-700 hover:-translate-y-0.5 hover:shadow-md',
        'transition-all duration-150 no-underline text-inherit'
      )}
    >
      <div className={cn('w-[38px] h-[38px] rounded-lg flex items-center justify-center flex-shrink-0', colors.bg, colors.text)}>
        {iconMap[link.icon]}
      </div>
      <div>
        <div className="text-[13px] font-semibold text-navy-800 mb-0.5">{link.title}</div>
        <div className="text-[11.5px] text-navy-300 leading-[1.45]">{link.description}</div>
      </div>
    </a>
  )
}
