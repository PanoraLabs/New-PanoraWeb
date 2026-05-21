import { useCallback, useEffect } from 'react'
import { DEMO_USER } from '@/config/demo'
import { useAppStore, type StoredUser } from '@/store/app-store'

export type AppUser = StoredUser

export function useUser() {
  const user = useAppStore((s) => s.user)
  const setUser = useAppStore((s) => s.setUser)

  useEffect(() => {
    if (!user) setUser(DEMO_USER)
  }, [user, setUser])

  const updateName = useCallback(
    async (name: string) => {
      const current = user ?? DEMO_USER
      setUser({ ...current, name })
    },
    [user, setUser]
  )

  return {
    user: user ?? DEMO_USER,
    walletAddress: (user ?? DEMO_USER).walletAddress,
    updateName,
  }
}

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2)
  return parts.map((p) => p[0]?.toUpperCase() ?? '').join('') || '?'
}
