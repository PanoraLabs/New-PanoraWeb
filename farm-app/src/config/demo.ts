import type { CropKey } from '@/lib/icons'
import type { StoredUser } from '@/store/app-store'

export const DEMO_USER: StoredUser = {
  id: 'demo',
  email: 'demo@panora.local',
  name: 'Budi Santoso',
  walletAddress: 'Demo1ocal1111111111111111111111111111111',
  avatarUrl: null,
}

export const STAKE_SHEET_DEFAULT = {
  vaultCode: 'Red Chili · Subang',
  vaultSub: 'Greenhouse · West Java',
  crop: 'chili' as CropKey,
  apyLabel: '18%',
  daysLeftLabel: '90 days to harvest',
  pct: 62,
  loc: 'Subang, West Java',
}
