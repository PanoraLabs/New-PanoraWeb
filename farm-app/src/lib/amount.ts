/** Parse a user-typed currency amount (allows decimals). */
export function parseAmountInput(raw: string): number {
  const cleaned = raw.replace(/[^0-9.]/g, '')
  if (!cleaned) return 0
  const n = Number.parseFloat(cleaned)
  return Number.isFinite(n) ? Math.max(0, n) : 0
}

export function clampAmount(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}
