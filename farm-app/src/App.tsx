import { AnimatePresence, motion } from 'framer-motion'
import { useAppStore } from '@/store/app-store'
import { pageVariants } from '@/motion/variants'
import { AppShell } from '@/components/layout/AppShell'
import { StatusBar } from '@/components/layout/StatusBar'
import { BottomNav } from '@/components/layout/BottomNav'
import { Toast } from '@/components/layout/Toast'
import { ResultModal } from '@/components/layout/ResultModal'
import { HomeScreen } from '@/screens/HomeScreen'
import { ExploreScreen } from '@/screens/ExploreScreen'
import { PortfolioScreen } from '@/screens/PortfolioScreen'
import { MarketScreen } from '@/screens/MarketScreen'
import { ActivityScreen } from '@/screens/ActivityScreen'
import { PassportScreen } from '@/screens/PassportScreen'
import { WalletScreen } from '@/screens/WalletScreen'
import { StakeSheet } from '@/screens/sheets/StakeSheet'
import { ClaimSheet } from '@/screens/sheets/ClaimSheet'
import { VaultDetailSheet } from '@/screens/sheets/VaultDetailSheet'
import { BuySheet } from '@/screens/sheets/BuySheet'
import { SellSheet } from '@/screens/sheets/SellSheet'
import { CashSheet } from '@/screens/sheets/CashSheet'

const screens = {
  home: HomeScreen,
  explore: ExploreScreen,
  portfolio: PortfolioScreen,
  market: MarketScreen,
  activity: ActivityScreen,
  passport: PassportScreen,
  wallet: WalletScreen,
} as const

function MainApp() {
  const screen = useAppStore((s) => s.screen)

  return (
    <>
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {Object.entries(screens).map(([key, Screen]) =>
            key === screen ? (
              <motion.div
                key={key}
                className="absolute inset-0"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Screen />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
        <StakeSheet />
        <ClaimSheet />
        <VaultDetailSheet />
        <BuySheet />
        <SellSheet />
        <CashSheet />
      </div>
      <BottomNav />
    </>
  )
}

export default function App() {
  return (
    <AppShell>
      <StatusBar />
      <MainApp />
      <ResultModal />
      <Toast />
    </AppShell>
  )
}
