import { motion } from 'framer-motion'
import { History } from 'lucide-react'
import { TopNav } from '@/components/layout/TopNav'
import { useAppStore } from '@/store/app-store'
import { useActivityHistory } from '@/hooks/use-demo'
import { ActivityRow } from '@/components/shared/ActivityRow'
import { staggerContainer, staggerItem } from '@/motion/variants'

export function ActivityScreen() {
  const activities = useActivityHistory()
  const setScreen = useAppStore((s) => s.setScreen)
  const isEmpty = activities.length === 0 || activities.every((g) => g.items.length === 0)

  return (
    <div className="flex flex-col h-full bg-surface">
      <TopNav title="Activity" />
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-[22px] lg:px-8 xl:px-10 max-w-6xl mx-auto w-full pt-[18px] lg:pt-8">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-card-bg border border-border flex items-center justify-center mb-4">
                <History className="size-6 text-stone" />
              </div>
              <div className="text-[15px] font-semibold text-forest mb-1">No activity yet</div>
              <div className="text-[12px] text-stone max-w-[260px] leading-relaxed mb-4">
                Invest, trade, claim, or move cash — each action will show up here with date and
                amount.
              </div>
              <button
                type="button"
                onClick={() => setScreen('explore', 'explore')}
                className="text-[13px] font-semibold text-leaf border-none bg-transparent cursor-pointer"
              >
                Discover vaults →
              </button>
            </div>
          ) : (
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              {activities.map((group) => (
                <div key={group.month}>
                  <motion.div
                    variants={staggerItem}
                    className="text-[11px] font-semibold text-stone uppercase tracking-widest mb-2.5 mt-1 first:mt-0"
                  >
                    {group.month}
                  </motion.div>
                  {group.items.map((a, i) => (
                    <motion.div key={`${group.month}-${a.sub}-${i}`} variants={staggerItem}>
                      <ActivityRow item={a} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          )}
          <div className="h-2" />
        </div>
      </div>
    </div>
  )
}
