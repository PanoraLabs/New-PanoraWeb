import {
  Hero,
  HowItWorks,
  Nav,
  Proof,
  SecondaryMarket,
  SiteFooter,
  SplitEconomics,
  StatsBar,
  Vaults,
} from "./sections"

export function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Vaults />
      <SecondaryMarket />
      <Proof />
      <SplitEconomics />
      <SiteFooter />
    </>
  )
}
