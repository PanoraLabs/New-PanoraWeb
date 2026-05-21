import {
  Home,
  Compass,
  PieChart,
  ArrowLeftRight,
  User,
  ScrollText,
  History,
  Sprout,
  type LucideIcon,
} from 'lucide-react'
import { useAppStore, type Screen } from '@/store/app-store'
import { cn } from '@/lib/utils'

type NavItem = { id: Screen; Icon: LucideIcon; label: string }

const primary: NavItem[] = [
  { id: 'home', Icon: Home, label: 'Home' },
  { id: 'explore', Icon: Compass, label: 'Discover' },
  { id: 'portfolio', Icon: PieChart, label: 'Portfolio' },
  { id: 'market', Icon: ArrowLeftRight, label: 'Trade' },
  { id: 'wallet', Icon: User, label: 'Account' },
]

const secondary: NavItem[] = [
  { id: 'activity', Icon: History, label: 'Activity' },
  { id: 'passport', Icon: ScrollText, label: 'Passport' },
]

export function SidebarNav() {
  const { screen, setScreen } = useAppStore()

  return (
    <aside className="hidden lg:flex flex-col w-[240px] shrink-0 bg-gradient-to-b from-forest via-[#0D3520] to-[#153D25] text-white border-r border-white/10">
      <div className="px-5 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center shrink-0">
            <Sprout className="size-5 text-white" strokeWidth={2.2} />
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight leading-none">Panora</div>
            <div className="text-[11px] text-white/45 mt-1">Agricultural investing</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto hide-scrollbar">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/35 px-3 mb-2">
          Main
        </div>
        {primary.map((item) => (
          <NavButton key={item.id} item={item} active={screen === item.id} onSelect={setScreen} />
        ))}

        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/35 px-3 mt-5 mb-2">
          More
        </div>
        {secondary.map((item) => (
          <NavButton key={item.id} item={item} active={screen === item.id} onSelect={setScreen} />
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-white/10 text-[11px] text-white/40 leading-relaxed">
        Demo build for hackathon — seed data only.
      </div>
    </aside>
  )
}

function NavButton({
  item,
  active,
  onSelect,
}: {
  item: NavItem
  active: boolean
  onSelect: (screen: Screen, tab?: string) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id, item.id)}
      className={cn(
        'flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left border-none cursor-pointer transition-colors',
        active
          ? 'bg-white/15 text-white font-semibold'
          : 'bg-transparent text-white/70 hover:bg-white/8 hover:text-white'
      )}
    >
      <item.Icon className="size-[18px] shrink-0" strokeWidth={active ? 2.4 : 2} />
      <span className="text-[13px]">{item.label}</span>
      {item.id === 'wallet' && (
        <span className="ml-auto bg-danger text-white text-[9px] font-bold rounded-full px-1.5 py-px">
          3
        </span>
      )}
    </button>
  )
}
