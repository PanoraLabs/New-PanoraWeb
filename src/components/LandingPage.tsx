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

export function LandingPage() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Nav />
      <Hero />
      <main className="main-content">
        <AboutPanora />
        <HowItWorks />
        <Vaults />
        <StatsBar />
        <SecondaryMarket />
        <Proof />
        <SplitEconomics />
        <SiteFooter />
      </main>
    </>
  )
}
