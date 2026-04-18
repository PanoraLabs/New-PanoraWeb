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

const rows = [
  { icon: "🌶️", name: "CHILI-GH-SUBANG-Q2", day: "Day 65 of 90", price: "Rp 10,850,000", up: "+8.5% vs. entry" },
  { icon: "☕", name: "COFFEE-HYB-TORAJA-Q1", day: "Day 120 of 180", price: "Rp 25,200,000", up: "+12.1% vs. entry" },
  { icon: "🧅", name: "SHALLOT-GH-BREBES-Q2", day: "Day 30 of 100", price: "Rp 5,050,000", up: "+1.0% vs. entry" },
  { icon: "🌾", name: "RICE-OPEN-KARAWANG-Q2", day: "Day 88 of 130", price: "Rp 8,400,000", up: "+5.2% vs. entry" },
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
          {checklist.map((text) => (
            <li key={text}>
              <span className="market-check-icon">✓</span>
              {text}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" as const }}
      >
        <Card className="p-8">
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
          <div className="market-list">
            {rows.map(({ icon, name, day, price, up }) => (
              <motion.div
                key={name}
                className="market-row"
                whileHover={{ scale: 1.01, transition: { duration: 0.15 } }}
              >
                <div className="mr-left">
                  <div className="mr-icon">{icon}</div>
                  <div>
                    <div className="mr-name">{name}</div>
                    <div className="mr-day">{day}</div>
                  </div>
                </div>
                <div className="mr-right">
                  <div className="mr-price">{price}</div>
                  <div className="mr-up">{up}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="moss" size="full" className="mt-5 rounded-xl">
            View All Active Listings →
          </Button>
        </Card>
      </motion.div>
    </section>
  )
}
