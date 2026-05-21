import type { CropKey } from '@/lib/icons'

export interface ParticipationToken {
  crop: CropKey
  code: string
  principal: string
}

export interface Claimable {
  code: string
  settledOn: string
  amount: string
}

export const walletAddress = '5xKj...PqRst'

// One pre-settled claimable so the user can demo the claim flow without waiting.
export const claimables: Claimable[] = [
  {
    code: 'Cacao Flores · 2025',
    settledOn: 'Settled Apr 10, 2026',
    amount: '$500',
  },
]

// Empty by default — populated when the user invests.
export const participationTokens: ParticipationToken[] = []
