"use client"

import { Marquee } from "@/components/ui/marquee"

const logos = [
  "Solana",
  "Metaplex",
  "Pyth Oracle",
  "EUDR",
  "Chainlink",
  "Bulog",
] as const

export function Proof() {
  return (
    <section id="proof" className="proof-section">
      <div className="proof-marquee-wrapper">
        <Marquee pauseOnHover className="proof-marquee">
          {logos.map((name) => (
            <span key={name} className="proof-logo">
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
