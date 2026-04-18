"use client"

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
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-left">
        <motion.div {...fadeUp(0.1)} className="mb-8">
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
          <Button variant="primary" asChild>
            <Link href="#vaults">Start Investing →</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#how">See How It Works</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div className="hero-visual" {...fadeUp(0.4)}>
        <div className="hero-card-stack">
          <div className="vault-card vc-far" />
          <div className="vault-card vc-behind" />
          <div className="vault-card vc-main">
            <motion.div
              className="float-badge fb-top"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="fb-label">Season Yield</div>
              <div className="fb-val">
                +18.4% <span className="fb-green">↑</span>
              </div>
            </motion.div>

            <div className="vc-tag">
              <span className="vc-tag-dot" />
              Active Vault
            </div>
            <div className="vc-title">CHILI-GH-SUBANG-Q2</div>
            <div className="vc-sub">Red Chili · Greenhouse · West Java</div>

            <div className="vc-stats">
              <div className="vc-stat">
                <div className="vc-stat-label">Funded</div>
                <div className="vc-stat-val">Rp 2.4B</div>
              </div>
              <div className="vc-stat">
                <div className="vc-stat-label">Duration</div>
                <div className="vc-stat-val">
                  90 <span>days</span>
                </div>
              </div>
            </div>

            <div className="vc-progress-label">
              <span>Growth Progress</span>
              <span style={{ fontWeight: 500, color: "var(--forest)" }}>
                Day 65 / 90
              </span>
            </div>
            <div className="vc-bar-bg">
              <motion.div
                className="vc-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" as const }}
              />
            </div>

            <div className="vc-avatars">
              <div className="vc-av">AW</div>
              <div className="vc-av" style={{ background: "var(--gold)" }}>BR</div>
              <div className="vc-av" style={{ background: "var(--leaf)" }}>PT</div>
              <div className="vc-av vc-av-more">+24</div>
              <span className="vc-av-label">investors staked</span>
            </div>

            <motion.div
              className="float-badge fb-bot"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="fb-label">IoT Status</div>
              <div className="fb-val" style={{ fontSize: 14, color: "var(--sprout)" }}>
                🌡 28°C · 82% RH
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
