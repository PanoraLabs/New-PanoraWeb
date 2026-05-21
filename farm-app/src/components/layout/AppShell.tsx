import type { ReactNode } from 'react'
import { SidebarNav } from '@/components/layout/SidebarNav'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-dvh w-full bg-surface overflow-hidden">
      <SidebarNav />
      <div className="flex flex-1 flex-col min-w-0 h-full w-full">{children}</div>
    </div>
  )
}
