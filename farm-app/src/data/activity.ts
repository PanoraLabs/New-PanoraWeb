import type { ActionKey } from '@/lib/icons'

export interface ActivityItem {
  action: ActionKey
  name: string
  sub: string
  amt: string
  pos?: boolean
  neutral?: boolean
  date: string
}

export interface ActivityGroup {
  month: string
  items: ActivityItem[]
}

/** Seed timeline so Activity / Home are populated before the user taps anything. */
export const recentActivity: ActivityItem[] = [
  {
    action: 'profit',
    name: 'Cash added',
    sub: 'Bank transfer · demo balance',
    amt: '+$25k',
    pos: true,
    date: 'May 20',
  },
  {
    action: 'milestone',
    name: 'Account ready',
    sub: 'Panora demo · Budi Santoso',
    amt: 'Verified',
    neutral: true,
    date: 'May 20',
  },
  {
    action: 'invest',
    name: 'Vault opened',
    sub: 'Red Chili · Subang · preview',
    amt: 'Browse',
    neutral: true,
    date: 'May 19',
  },
]

export const activityHistory: ActivityGroup[] = [
  {
    month: 'May 2026',
    items: [
      {
        action: 'profit',
        name: 'Cash added',
        sub: 'Bank transfer · demo balance',
        amt: '+$25k',
        pos: true,
        date: 'May 20',
      },
      {
        action: 'milestone',
        name: 'Account ready',
        sub: 'Panora demo · Budi Santoso',
        amt: 'Verified',
        neutral: true,
        date: 'May 20',
      },
      {
        action: 'invest',
        name: 'Vault opened',
        sub: 'Red Chili · Subang · preview',
        amt: 'Browse',
        neutral: true,
        date: 'May 19',
      },
    ],
  },
  {
    month: 'April 2026',
    items: [
      {
        action: 'profit',
        name: 'Harvest settled',
        sub: 'Cacao Flores · 2025',
        amt: '+$500',
        pos: true,
        date: 'Apr 10',
      },
      {
        action: 'milestone',
        name: 'IoT health check',
        sub: 'Subang greenhouse · all sensors OK',
        amt: 'Healthy',
        neutral: true,
        date: 'Apr 8',
      },
      {
        action: 'invest',
        name: 'Marketplace browse',
        sub: '3 shares listed by other farmers',
        amt: 'View',
        neutral: true,
        date: 'Apr 5',
      },
    ],
  },
]
