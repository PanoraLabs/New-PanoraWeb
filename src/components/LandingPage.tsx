"use client"

import { useState } from "react"
import {
  AboutPanora,
  Hero,
  HowItWorks,
  LoadingScreen,
  Nav,
  Proof,
  SecondaryMarket,
  SiteFooter,
  SplitEconomics,
  StatsBar,
  Vaults,
} from "./sections"
import { ScrollProgress } from "./ui/scroll-progress"

export function LandingPage() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <Nav />
      <Hero ready={!loading} />
      <main className="main-content">
        <AboutPanora />
        <StatsBar />
        <Proof />
        <HowItWorks />
        <Vaults />
        <SecondaryMarket />
        <SplitEconomics />
        <SiteFooter />
      </main>
    </>
  )
}
