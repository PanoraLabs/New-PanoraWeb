"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SplitText } from "@/components/ui/split-text"

export function CTASection() {
  return (
    <section className="cta-final">
      <div className="cta-final-inner">
        <div className="section-label">Early access</div>
        <h2 className="cta-final-title">
          <SplitText text="Be first to fund the 2026 planting season." />
        </h2>
        <p className="cta-final-sub">
          Vaults open ahead of each season and fill fast. Connect a wallet,
          pick a crop, and watch your capital work in the field.
        </p>
        <div className="cta-final-buttons">
          <Button variant="cta-bone" asChild>
            <Link href="/app">
              Explore vaults
              <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Button>
          <Button variant="cta-ghost-bone" asChild>
            <Link href="#faq">Read the FAQ</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
