"use client"

import Link from "next/link"
import { SplitText } from "@/components/ui/split-text"
import { ScrollReveal } from "@/components/reactbits/ScrollReveal"

/**
 * Problem → answer narrative, farmminerals-style:
 * an olive-drenched section of giant statements, then a bone
 * section that answers them and hands off to How It Works.
 */
export function AboutPanora() {
  return (
    <>
      <section id="about-panora" className="statements">
        <div className="statements-inner">
          <div className="section-label">Why Panora</div>

          <h2 className="statement">
            <ScrollReveal text="Most farm capital never makes it to the field." />
          </h2>

          <div>
            <h2 className="statement statement--sage">
              <ScrollReveal text="Middlemen, paperwork, and predatory rates strip value before planting even starts." />
            </h2>
            <p className="statement-note">
              Smallholder farmers grow most of Indonesia&apos;s food, yet banks
              rarely fund a 90-day harvest cycle.
            </p>
          </div>

          <h2 className="statement">
            <ScrollReveal text="How much more could they grow if funding reached the soil?" />
          </h2>
        </div>
      </section>

      <section className="better-way">
        <div className="better-way-inner">
          <h2 className="better-way-title">
            <SplitText text="We found a" /> <em><SplitText text="better way." delay={0.3} /></em>
          </h2>
          <p className="better-way-text">
            <strong>Panora Vaults</strong> are per-season funding pools on
            Solana. Capital is released milestone by milestone as field agents
            verify real work on real farms. When the harvest sells, the
            smart contract splits the profit automatically. No middlemen. No
            missing money.
          </p>
          <Link href="#how" className="text-btn">
            See how it works
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
