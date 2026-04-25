"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const checklist = [
  "Real-time oracle pricing based on IoT crop health data",
  "Price floor logic prevents predatory under-selling",
  "0.5% royalty on every trade goes to farmer emergency fund",
  "Rights transfer is instant — farmers are never disrupted",
] as const

const stats = [
  { label: "24h Volume", value: "Rp 1.2B" },
  { label: "Active Listings", value: "128" },
  { label: "Avg. Return", value: "+7.4%" },
] as const

const rows = [
  { icon: "🌶️", name: "CHILI-GH-SUBANG-Q2", progress: 65, total: 90, price: "Rp 10,850,000", change: "+8.5%", volume: "Rp 42M" },
  { icon: "☕", name: "COFFEE-HYB-TORAJA-Q1", progress: 120, total: 180, price: "Rp 25,200,000", change: "+12.1%", volume: "Rp 78M" },
  { icon: "🧅", name: "SHALLOT-GH-BREBES-Q2", progress: 30, total: 100, price: "Rp 5,050,000", change: "+1.0%", volume: "Rp 15M" },
  { icon: "🌾", name: "RICE-OPEN-KARAWANG-Q2", progress: 88, total: 130, price: "Rp 8,400,000", change: "+5.2%", volume: "Rp 34M" },
] as const

export function SecondaryMarket() {
  return (
    <section id="market" className="market-section-pad">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
      >
        <div className="section-label">Liquidity</div>
        <h2 className="section-title">
          Exit anytime.
          <br />
          <em>No lock-in</em> anxiety.
        </h2>
        <p className="section-sub">
          Participation Tokens trade on Panora&apos;s secondary market. Sell your
          harvest rights the moment you need liquidity — price updates in real
          time as crops grow.
        </p>
        <ul className="market-checklist">
          {checklist.map((text, i) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: "easeOut" as const }}
            >
              <span className="market-check-icon">✓</span>
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" as const }}
      >
        <Card className="market-card">
          <div className="market-header">
            <span className="mh-title">Secondary Market</span>
            <Badge variant="live">
              <motion.span
                className="mh-dot"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              Live
            </Badge>
          </div>

          {/* Mini stat bar */}
          <div className="market-stats">
            {stats.map(({ label, value }) => (
              <div key={label} className="market-stat">
                <span className="ms-label">{label}</span>
                <span className="ms-value">{value}</span>
              </div>
            ))}
          </div>

          {/* Column headers */}
          <div className="market-cols">
            <span>Asset</span>
            <span>Progress</span>
            <span>Price</span>
            <span>24h Vol</span>
          </div>

          <div className="market-list">
            {rows.map(({ icon, name, progress, total, price, change, volume }, i) => {
              const pct = Math.round((progress / total) * 100)
              return (
                <motion.div
                  key={name}
                  className="market-row"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.35 + i * 0.08, duration: 0.4, ease: "easeOut" as const }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
                >
                  {/* Asset */}
                  <div className="mr-asset">
                    <div className="mr-icon">{icon}</div>
                    <div className="mr-name">{name}</div>
                  </div>

                  {/* Progress */}
                  <div className="mr-progress">
                    <div className="mr-bar-track">
                      <motion.div
                        className="mr-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" as const }}
                      />
                    </div>
                    <span className="mr-bar-label">Day {progress}/{total}</span>
                  </div>

                  {/* Price */}
                  <div className="mr-price-col">
                    <div className="mr-price">{price}</div>
                    <div className="mr-change">{change}</div>
                  </div>

                  {/* Volume */}
                  <div className="mr-volume">{volume}</div>
                </motion.div>
              )
            })}
          </div>

          <Button variant="moss" size="full" className="mt-5 rounded-xl">
            View All Active Listings →
          </Button>
        </Card>
      </motion.div>
    </section>
  )
}
