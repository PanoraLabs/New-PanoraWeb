"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DONUT_C, DONUT_L1, DONUT_L2, DONUT_L3 } from "./constants"

/* ── data ── */
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

const legend = [
  { color: "var(--leaf)", pct: "55%", label: "Farmers", sub: "Directly to yield-account, cashable in IDR" },
  { color: "var(--gold)", pct: "35%", label: "Investors", sub: "Proportional to stake, claimable to wallet" },
  { color: "var(--stone)", pct: "10%", label: "Platform & Ecosystem", sub: "4% ops · 4% Node Agents · 2% Emergency Fund" },
] as const

const highlights = [
  "Real-time oracle pricing based on IoT crop health data",
  "Price floor logic prevents predatory under-selling",
  "0.5% royalty on every trade goes to farmer emergency fund",
  "Rights transfer is instant — farmers are never disrupted",
] as const

/* ── component ── */
export function MarketEconomics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Left text opacities: first statement highlighted in first half, second in second half
  const opacity1 = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.55], [1, 1, 0.2, 0.2])
  const opacity2 = useTransform(scrollYProgress, [0, 0.35, 0.5, 0.55, 1], [0.2, 0.2, 1, 1, 1])

  // Right panel: crossfade between market card and donut
  const marketOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0])
  const marketY = useTransform(scrollYProgress, [0.4, 0.5], [0, -40])
  const donutOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1])
  const donutY = useTransform(scrollYProgress, [0.4, 0.55], [40, 0])

  return (
    <section ref={containerRef} className="me-scroll-container">
      <div className="me-sticky">
        <div className="me-inner">
          {/* ── LEFT: bold text statements ── */}
          <div className="me-left">
            <motion.h2 className="me-statement" style={{ opacity: opacity1 }}>
              Exit anytime.
              <br />
              <em>No lock-in</em> anxiety.
            </motion.h2>

            <motion.h2 className="me-statement" style={{ opacity: opacity2 }}>
              A split built
              <br />
              for <em>fairness.</em>
            </motion.h2>
          </div>

          {/* ── RIGHT: detail panels ── */}
          <div className="me-right">
            {/* Panel 1: Market */}
            <motion.div className="me-panel" style={{ opacity: marketOpacity, y: marketY }}>
              <div className="me-panel-label">Liquidity</div>
              <p className="me-panel-desc">
                Participation Tokens trade on Panora&apos;s secondary market.
                Sell your harvest rights the moment you need liquidity — price
                updates in real time as crops grow.
              </p>

              <ul className="me-highlights">
                {highlights.map((text) => (
                  <li key={text}>
                    <span className="me-check">✓</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="me-market-card">
                <div className="me-card-header">
                  <span className="me-card-title">Secondary Market</span>
                  <Badge variant="live">
                    <motion.span
                      className="mh-dot"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Live
                  </Badge>
                </div>

                <div className="me-stats">
                  {stats.map(({ label, value }) => (
                    <div key={label} className="me-stat">
                      <span className="me-stat-label">{label}</span>
                      <span className="me-stat-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="me-cols">
                  <span>Asset</span>
                  <span>Progress</span>
                  <span>Price</span>
                  <span>24h Vol</span>
                </div>

                <div className="me-rows">
                  {rows.map(({ icon, name, progress, total, price, change, volume }) => {
                    const pct = Math.round((progress / total) * 100)
                    return (
                      <div key={name} className="me-row">
                        <div className="me-row-asset">
                          <div className="me-row-icon">{icon}</div>
                          <div className="me-row-name">{name}</div>
                        </div>
                        <div className="me-row-progress">
                          <div className="me-bar-track">
                            <div className="me-bar-fill" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="me-bar-label">Day {progress}/{total}</span>
                        </div>
                        <div className="me-row-pricecol">
                          <div className="me-row-price">{price}</div>
                          <div className="me-row-change">{change}</div>
                        </div>
                        <div className="me-row-volume">{volume}</div>
                      </div>
                    )
                  })}
                </div>

                <Button variant="moss" size="full" className="mt-5 rounded-xl">
                  View All Active Listings →
                </Button>
              </div>
            </motion.div>

            {/* Panel 2: Economics */}
            <motion.div
              className="me-panel me-panel-abs"
              style={{ opacity: donutOpacity, y: donutY }}
            >
              <div className="me-panel-label">Economics</div>
              <p className="me-panel-desc">
                Net profit is distributed transparently, on-chain, the moment
                settlement occurs — no middlemen taking silent cuts.
              </p>

              <div className="me-legend">
                {legend.map(({ color, pct, label, sub }) => (
                  <div key={label} className="me-legend-item">
                    <div className="me-legend-dot" style={{ background: color }} />
                    <div>
                      <div className="me-legend-label">
                        <span className="me-legend-pct" style={{ color }}>{pct}</span>
                        {" — "}{label}
                      </div>
                      <div className="me-legend-sub">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="me-donut-wrap">
                <div className="me-donut">
                  <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="28" />
                    <motion.circle
                      cx="100" cy="100" r="80" fill="none"
                      stroke="var(--leaf)" strokeWidth="28"
                      strokeDasharray={`${DONUT_L1} ${DONUT_C - DONUT_L1}`}
                      initial={{ strokeDashoffset: DONUT_L1, opacity: 0 }}
                      whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" as const }}
                    />
                    <g transform="rotate(198 100 100)">
                      <motion.circle
                        cx="100" cy="100" r="80" fill="none"
                        stroke="var(--gold)" strokeWidth="28"
                        strokeDasharray={`${DONUT_L2} ${DONUT_C - DONUT_L2}`}
                        initial={{ strokeDashoffset: DONUT_L2, opacity: 0 }}
                        whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, delay: 0.55, ease: "easeOut" as const }}
                      />
                    </g>
                    <g transform="rotate(324 100 100)">
                      <motion.circle
                        cx="100" cy="100" r="80" fill="none"
                        stroke="var(--stone)" strokeWidth="28"
                        strokeDasharray={`${DONUT_L3} ${DONUT_C - DONUT_L3}`}
                        initial={{ strokeDashoffset: DONUT_L3, opacity: 0 }}
                        whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.2, delay: 0.75, ease: "easeOut" as const }}
                      />
                    </g>
                  </svg>
                  <div className="me-donut-center">
                    <div className="me-dc-label">Net Profit</div>
                    <div className="me-dc-val">Split</div>
                  </div>
                </div>

                <div className="me-pct-row">
                  {legend.map(({ pct, label, color }) => (
                    <div key={label} className="me-pct-item">
                      <div className="me-pct-val" style={{ color }}>{pct}</div>
                      <div className="me-pct-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
