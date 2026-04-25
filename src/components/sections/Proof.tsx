"use client"

import Image from "next/image"
import { Marquee } from "@/components/ui/marquee"

const logos = [
  { name: "Solana", src: "/LOGO/solana.png", h: 120 },
  { name: "Metaplex", src: "/LOGO/metaplex.webp", h: 150 },
  { name: "Bulog", src: "/LOGO/bulog.png", h: 48 },
] as const

export function Proof() {
  return (
    <section id="proof" className="proof-section">
      <div className="proof-marquee-wrapper">
        <Marquee pauseOnHover className="proof-marquee">
          {logos.map((logo) => (
            <span key={logo.name} className="proof-logo" style={{ height: logo.h }}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={200}
                height={logo.h}
                style={{ objectFit: "contain", height: logo.h, width: "auto" }}
              />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
