import { exploreVaults, exploreFilters } from '@/data/vaults'
import { useDemoStore } from '@/store/demo-store'

export function useActiveVaults() {
  return useDemoStore((s) => s.activeVaults)
}

export function useExploreVaults() {
  return exploreVaults
}

export function useExploreFilters() {
  return exploreFilters
}

export function useMarketListings() {
  return useDemoStore((s) => s.listings)
}

export function useRecentActivity() {
  return useDemoStore((s) => s.recentActivity)
}

export function useActivityHistory() {
  return useDemoStore((s) => s.activityHistory)
}
