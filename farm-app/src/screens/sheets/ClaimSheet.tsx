import { useMemo, useState } from 'react'
import { BottomSheet } from '@/components/layout/BottomSheet'
import { useAppStore } from '@/store/app-store'
import { useDemoStore } from '@/store/demo-store'
import { useWhenSheetOpen } from '@/hooks/useWhenSheetOpen'
import { formatUsd } from '@/lib/format'
import { cn } from '@/lib/utils'

export function ClaimSheet() {
  const closeSheet = useAppStore((s) => s.closeSheet)
  const showResult = useAppStore((s) => s.showResult)
  const sheetContext = useAppStore((s) => s.sheetContext)
  const claimables = useDemoStore((s) => s.claimables)
  const claim = useDemoStore((s) => s.claim)

  const initialCode =
    sheetContext?.claimableCode ?? claimables[0]?.code ?? null
  const [selectedCode, setSelectedCode] = useState<string | null>(initialCode)

  useWhenSheetOpen('claim', () => {
    const code = sheetContext?.claimableCode ?? claimables[0]?.code ?? null
    setSelectedCode(code)
  })

  const target = useMemo(
    () => claimables.find((c) => c.code === selectedCode) ?? null,
    [claimables, selectedCode]
  )

  if (claimables.length === 0) {
    return (
      <BottomSheet id="claim">
        <div className="text-lg font-semibold text-forest mb-[18px]">Nothing to claim</div>
        <div className="text-[13px] text-stone mb-4">
          You don't have any settled vaults waiting to be claimed right now. They'll show up here
          once a harvest settles.
        </div>
        <button
          type="button"
          onClick={closeSheet}
          className="w-full py-3.5 rounded-[14px] bg-forest text-white font-sans text-[15px] font-semibold border-none cursor-pointer active:bg-moss transition-colors"
        >
          Close
        </button>
      </BottomSheet>
    )
  }

  return (
    <BottomSheet id="claim">
      <div className="text-lg font-semibold text-forest mb-[18px]">Claim your profit</div>

      {claimables.length > 1 && (
        <div className="flex flex-col gap-2 mb-4">
          {claimables.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => setSelectedCode(c.code)}
              className={cn(
                'text-left p-3 rounded-[14px] border-[1.5px] cursor-pointer transition-colors',
                selectedCode === c.code
                  ? 'border-leaf bg-mist'
                  : 'border-input bg-surface hover:border-leaf/40'
              )}
            >
              <div className="text-[13px] font-semibold text-forest">{c.code}</div>
              <div className="text-[11px] text-stone">{c.settledOn}</div>
            </button>
          ))}
        </div>
      )}

      {target && (
        <>
          <div className="bg-mist rounded-2xl p-5 text-center mb-4">
            <div className="text-xs text-stone mb-1">Available to claim</div>
            <div className="font-serif text-[38px] text-moss">{target.amount}</div>
            <div className="text-xs text-stone mt-1">
              {target.code} · {target.settledOn}
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between text-[13px] py-2 border-b border-border">
              <span className="text-stone">Profit</span>
              <span className="font-medium text-sprout">+{target.amount}</span>
            </div>
            <div className="flex justify-between text-sm py-2">
              <span className="font-semibold">Total received</span>
              <span className="font-semibold text-forest">{target.amount}</span>
            </div>
          </div>

          <div className="mb-3.5">
            <label className="text-[11px] font-semibold text-stone uppercase tracking-wider mb-1.5 block">
              Send to
            </label>
            <select className="w-full py-3 px-3.5 bg-surface border-[1.5px] border-input rounded-xl font-sans text-sm text-forest outline-none appearance-none cursor-pointer">
              <option>Account balance (USD)</option>
              <option>BCA bank account (USD)</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => {
              const result = claim(target.code)
              if (!result.ok) {
                showResult({ kind: 'error', title: 'Claim failed', message: result.reason })
                return
              }
              closeSheet()
              showResult({
                kind: 'success',
                title: 'Profit claimed',
                message: `${formatUsd(result.result.amountUsd)} transferred to your account balance.`,
                primaryLabel: 'Great',
              })
            }}
            className="w-full py-3.5 rounded-[14px] bg-forest text-white font-sans text-[15px] font-semibold border-none cursor-pointer active:bg-moss transition-colors"
          >
            Confirm Claim
          </button>
        </>
      )}
    </BottomSheet>
  )
}
