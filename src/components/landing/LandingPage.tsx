import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Nav } from "./Nav";
import { Proof } from "./Proof";
import { SecondaryMarket } from "./SecondaryMarket";
import { SiteFooter } from "./SiteFooter";
import { SplitEconomics } from "./SplitEconomics";
import { StatsBar } from "./StatsBar";
import { Vaults } from "./Vaults";

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
  );
}
