"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.9, ease: "easeOut" as const },
})

export function Hero() {
  return (
    <section id="hero">
      {/* Background image */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="hero-bg-photo"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="hero-overlay" />

      {/* Bottom-left: main content */}
      <div className="hero-content">
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <Badge variant="hero">
            <motion.span
              className="hero-badge-dot"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            Climate-Smart RWA Agriculture — Now Live
          </Badge>
        </motion.div>

        <motion.h1 className="hero-title" {...fadeUp(0.2)}>
          Growing
          <br />
          <em>real yields</em>
          <br />
          on-chain.
        </motion.h1>

        <motion.p className="hero-sub" {...fadeUp(0.3)}>
          Panora Labs connects investors with verified Indonesian farmers through
          blockchain-powered vaults — transparent, traceable, and
          climate-resilient.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.4)}>
          <Button variant="hero-cta" asChild>
            <Link href="#vaults">Start Investing →</Link>
          </Button>
          <Button variant="hero-ghost" asChild>
            <Link href="#how">See How It Works</Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom-right: glass mission card */}
      <motion.div className="hero-mission-card" {...fadeUp(0.55)}>
        <div className="hmc-header">
          <span className="hmc-dot" />
          <span className="hmc-title">Our Mission</span>
        </div>
        <p className="hmc-body">
          To bridge Indonesian smallholder farmers with global capital through
          tokenized, climate-resilient agricultural vaults on Solana.
        </p>
        <Link href="#how" className="hmc-link">
          Learn More →
        </Link>
      </motion.div>
    </section>
  )
}
