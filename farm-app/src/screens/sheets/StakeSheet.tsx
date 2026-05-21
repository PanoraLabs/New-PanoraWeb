import { useState, useCallback, useMemo } from 'react'
import { Info } from 'lucide-react'
import { BottomSheet } from '@/components/layout/BottomSheet'
import { STAKE_SHEET_DEFAULT } from '@/config/demo'
import { useAppStore } from '@/store/app-store'
import { useDemoStore } from '@/store/demo-store'
import { useWhenSheetOpen } from '@/hooks/useWhenSheetOpen'
import { CropIcon, type CropKey } from '@/lib/icons'
import { clampAmount, parseAmountInput } from '@/lib/amount'
import { formatUsd, formatUsdCompact } from '@/lib/format'

const MIN_INVEST = 1

export function StakeSheet() {
  const closeSheet = useAppStore((s) => s.closeSheet)
  const openSheet = useAppStore((s) => s.openSheet)
  const showResult = useAppStore((s) => s.showResult)
  const sheetContext = useAppStore((s) => s.sheetContext)
  const stake = useDemoStore((s) => s.stake)
  const cashUsd = useDemoStore((s) => s.cashUsd)
  const [amount, setAmount] = useState(0)
  const [amountInput, setAmountInput] = useState('')

  const target = useMemo(() => {
    if (!sheetContext?.vaultCode) return STAKE_SHEET_DEFAULT
    return {
      vaultCode: sheetContext.vaultCode,
      vaultSub: sheetContext.vaultSub ?? STAKE_SHEET_DEFAULT.vaultSub,
      crop: (sheetContext.crop as CropKey) ?? STAKE_SHEET_DEFAULT.crop,
      apyLabel: sheetContext.apyLabel ?? STAKE_SHEET_DEFAULT.apyLabel,
      daysLeftLabel: sheetContext.daysLeftLabel ?? STAKE_SHEET_DEFAULT.daysLeftLabel,
      pct: sheetContext.pct ?? STAKE_SHEET_DEFAULT.pct,
      loc: sheetContext.loc ?? STAKE_SHEET_DEFAULT.loc,
    }
  }, [sheetContext])

  const maxAmount = Math.max(MIN_INVEST, Math.min(cashUsd, 1_000_000))

  useWhenSheetOpen('stake', () => {
    const suggested = cashUsd >= 1000 ? 1000 : cashUsd >= MIN_INVEST ? Math.floor(cashUsd) : 0
    setAmount(suggested)
    setAmountInput(suggested > 0 ? String(suggested) : '')
  })

  const setAmountSafe = useCallback(
    (next: number) => {
      const clamped = clampAmount(Math.round(next), 0, maxAmount)
      setAmount(clamped)
      setAmountInput(clamped > 0 ? String(clamped) : '')
    },
    [maxAmount]
  )

  const apyPct = parseFloat(target.apyLabel) || 0
  const profit = Math.round(amount * (apyPct / 100))
  const total = amount + profit
  const canInvest = amount >= MIN_INVEST && amount <= cashUsd && cashUsd >= MIN_INVEST

  const fmt = useCallback((v: number) => formatUsd(v), [])

  return (
    <BottomSheet id="stake">
      <div className="text-lg font-semibold text-forest mb-[18px]">Invest in this vault</div>

      <div className="bg-surface rounded-[14px] p-3 flex items-center gap-2.5 mb-4">
        <CropIcon crop={target.crop} size="lg" />
        <div>
          <div className="text-[13px] font-semibold text-forest">{target.vaultCode}</div>
          <div className="text-[11px] text-stone">{target.vaultSub}</div>
        </div>
      </div>

      {cashUsd < MIN_INVEST ? (
        <div className="bg-mist rounded-[14px] p-4 mb-4 text-center">
          <div className="text-[13px] font-semibold text-forest mb-1">Add cash to invest</div>
          <div className="text-[11px] text-stone mb-3">Your account balance is {formatUsdCompact(cashUsd)}.</div>
          <button
            type="button"
            onClick={() => {
              closeSheet()
              setTimeout(() => openSheet('cash', { cashMode: 'add' }), 200)
            }}
            className="w-full py-3 rounded-[14px] bg-forest text-white font-sans text-[14px] font-semibold border-none cursor-pointer"
          >
            Add Cash
          </button>
        </div>
      ) : (
        <>
          <div className="mb-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-semibold text-stone uppercase tracking-wider">Amount</label>
              <button
                type="button"
                onClick={() => setAmountSafe(cashUsd)}
                className="text-[10px] font-semibold text-leaf border-none bg-transparent cursor-pointer"
              >
                Use max ({formatUsdCompact(cashUsd)})
              </button>
            </div>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[13px] text-stone">$</span>
              <input
                className="w-full py-3 pl-11 pr-3.5 bg-surface border-[1.5px] border-input rounded-xl font-sans text-sm text-forest outline-none focus:border-leaf transition-colors"
                type="text"
                inputMode="decimal"
                value={amountInput}
                placeholder="0"
                onChange={(e) => {
                  const raw = e.target.value
                  setAmountInput(raw)
                  const parsed = parseAmountInput(raw)
                  setAmount(clampAmount(Math.round(parsed), 0, maxAmount))
                }}
              />
            </div>
          </div>

          <input
            type="range"
            min={MIN_INVEST}
            max={maxAmount}
            step={1}
            value={amount >= MIN_INVEST ? amount : MIN_INVEST}
            onChange={(e) => setAmountSafe(Number(e.target.value))}
            className="w-full accent-leaf mb-1"
          />
          <div className="flex justify-between text-[10px] text-stone mb-4">
            <span>Min {formatUsd(MIN_INVEST)}</span>
            <span>Max {formatUsdCompact(maxAmount)}</span>
          </div>

          <div className="bg-mist rounded-[14px] p-3.5 mb-4">
            <div className="flex justify-between mb-2 text-[13px]">
              <span className="text-stone">You invest</span>
              <span className="font-medium text-forest">{fmt(amount)}</span>
            </div>
            <div className="flex justify-between mb-2 text-[13px]">
              <span className="text-stone">Estimated profit ({target.apyLabel})</span>
              <span className="font-medium text-sprout">+{fmt(profit)}</span>
            </div>
            <div className="h-px bg-forest/10 mb-2" />
            <div className="flex justify-between text-sm">
              <span className="font-semibold text-forest">Estimated total back</span>
              <span className="font-semibold text-forest">{fmt(total)}</span>
            </div>
          </div>

          <div className="text-[11px] text-stone leading-relaxed mb-4 inline-flex items-start gap-1.5">
            <Info className="size-3.5 mt-px shrink-0" />
            Your money is locked for{' '}
            {target.daysLeftLabel.toLowerCase().includes('day')
              ? target.daysLeftLabel
              : `${target.daysLeftLabel} days`}
            . To exit early, sell your share on the marketplace.
          </div>

          <button
            type="button"
            disabled={!canInvest}
            onClick={() => {
              const result = stake({
                vaultCode: target.vaultCode,
                vaultSub: target.vaultSub,
                crop: target.crop,
                amountUsd: amount,
                apyLabel: target.apyLabel,
                daysLeftLabel: target.daysLeftLabel,
                pct: target.pct,
                loc: target.loc,
              })
              if (!result.ok) {
                showResult({ kind: 'error', title: 'Investment failed', message: result.reason })
                return
              }
              closeSheet()
              showResult({
                kind: 'success',
                title: 'Investment confirmed',
                message: `${fmt(amount)} locked into ${target.vaultCode}. Estimated total back ${fmt(total)}.`,
              })
            }}
            className="w-full py-3.5 rounded-[14px] bg-forest text-white font-sans text-[15px] font-semibold border-none cursor-pointer active:bg-moss transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Investment
          </button>
        </>
      )}
    </BottomSheet>
  )
}
