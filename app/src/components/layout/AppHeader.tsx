import { Bell, User, Menu } from 'lucide-react'

interface AppHeaderProps {
  onMenuClick?: () => void
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#1e3340] flex items-center justify-between px-6 z-[200] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      {/* Left: hamburger (mobile) + logo */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-white/75 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </button>

        {/* CMG Logo */}
        <div className="w-11 h-11 bg-white rounded-[6px] flex flex-col items-center justify-center p-1">
          <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
            <text x="4" y="16" fontFamily="Arial" fontWeight="800" fontSize="15" fill="#1e3340">CMG</text>
            <text x="4" y="28" fontFamily="Arial" fontWeight="600" fontSize="8"  fill="#3D5A6C">HOME</text>
            <text x="4" y="37" fontFamily="Arial" fontWeight="600" fontSize="8"  fill="#3D5A6C">LOANS</text>
          </svg>
        </div>
      </div>

      {/* Right: bell + Apply Now + avatar */}
      <div className="flex items-center gap-3.5">
        <button
          aria-label="Notifications"
          className="text-white/75 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Bell size={20} />
        </button>

        <button className="bg-teal-700 hover:bg-[#145f5e] text-white rounded-full px-5 py-2 text-sm font-semibold transition-colors">
          Apply Now
        </button>

        <button
          aria-label="Account"
          className="w-9 h-9 rounded-full border border-white/40 bg-white/10 hover:bg-white/[0.18] text-white/85 flex items-center justify-center transition-colors"
        >
          <User size={16} />
        </button>
      </div>
    </header>
  )
}
