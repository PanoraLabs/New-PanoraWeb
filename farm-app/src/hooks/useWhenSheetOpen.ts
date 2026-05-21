import { useEffect, useRef } from 'react'
import { useAppStore, type Sheet } from '@/store/app-store'

/** Run `onOpen` each time the given sheet becomes active (including re-open with new context). */
export function useWhenSheetOpen(sheetId: Sheet, onOpen: () => void) {
  const sheet = useAppStore((s) => s.sheet)
  const sheetContext = useAppStore((s) => s.sheetContext)
  const onOpenRef = useRef(onOpen)
  onOpenRef.current = onOpen

  useEffect(() => {
    if (sheet === sheetId) onOpenRef.current()
  }, [sheet, sheetId, sheetContext])
}
