import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/store/app-store'
import type { Sheet } from '@/store/app-store'

interface BottomSheetProps {
  id: Sheet
  children: ReactNode
}

export function BottomSheet({ id, children }: BottomSheetProps) {
  const { sheet, closeSheet } = useAppStore()
  const isOpen = sheet === id

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute inset-0 z-50 flex items-end lg:items-center justify-center p-0 lg:p-6 backdrop-blur-sm"
          style={{ background: 'rgba(13,43,26,0.45)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeSheet()
          }}
        >
          <motion.div
            className="w-full lg:max-w-md bg-card-bg rounded-t-3xl lg:rounded-2xl max-h-[82%] lg:max-h-[min(85vh,720px)] overflow-y-auto hide-scrollbar shadow-xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            <div className="w-9 h-1 rounded-full bg-forest/10 mx-auto mt-3 mb-4 lg:hidden" />
            <div className="px-5 lg:px-6 pb-9 lg:pb-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
