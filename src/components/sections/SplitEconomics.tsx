"use client"

import { motion } from "framer-motion"
import { DONUT_C, DONUT_L1, DONUT_L2, DONUT_L3 } from "./constants"

const legend = [
  {
    color: "var(--leaf)",
    label: "55% — Farmers",
    sub: "Directly to yield-account, cashable in IDR",
  },
  {
    color: "var(--gold)",
    label: "35% — Investors",
    sub: "Proportional to stake, claimable to wallet",
  },
  {
    color: "var(--stone)",
    label: "10% — Platform & Ecosystem",
    sub: "4% ops · 4% Node Agents · 2% Emergency Fund",
  },
] as const

const pctRow = [
  { pct: "55%", label: "Farmer", color: "var(--leaf)" },
  { pct: "35%", label: "Investor", color: "var(--gold)" },
  { pct: "10%", label: "Ecosystem", color: "var(--stone)" },
] as const

export function SplitEconomics() {
  return (
    <section id="split">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
      >
        <div className="section-label">Economics</div>
        <h2 className="section-title">
          A split
          <br />
          built for <em>fairness</em>
        </h2>
        <p className="section-sub">
          Net profit is distributed transparently, on-chain, the moment settlement
          occurs — no middlemen taking silent cuts.
        </p>

        <div className="split-legend">
          {legend.map(({ color, label, sub }) => (
            <div key={label} className="sl-item">
              <div className="sl-dot" style={{ background: color }} />
              <div>
                <div className="sl-label">{label}</div>
                <div className="sl-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" as const }}
      >
        <div className="split-donut">
          <svg viewBox="0 0 200 200">
            {/* Background track */}
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--mist)"
              strokeWidth="28"
            />

            {/* Arc 1 — Farmers 55% */}
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--leaf)"
              strokeWidth="28"
              strokeDasharray={`${DONUT_L1} ${DONUT_C - DONUT_L1}`}
              initial={{ strokeDashoffset: DONUT_L1, opacity: 0 }}
              whileInView={{ strokeDashoffset: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.35, ease: "easeOut" as const }}
            />

            {/* Arc 2 — Investors 35% */}
            <g transform="rotate(198 100 100)">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="28"
                strokeDasharray={`${DONUT_L2} ${DONUT_C - DONUT_L2}`}
                initial={{ strokeDashoffset: DONUT_L2, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.55, ease: "easeOut" as const }}
              />
            </g>

            {/* Arc 3 — Platform 10% */}
            <g transform="rotate(324 100 100)">
              <motion.circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="var(--stone)"
                strokeWidth="28"
                strokeDasharray={`${DONUT_L3} ${DONUT_C - DONUT_L3}`}
                initial={{ strokeDashoffset: DONUT_L3, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: 0.75, ease: "easeOut" as const }}
              />
            </g>
          </svg>

          <div className="donut-center">
            <div className="dc-label">Net Profit</div>
            <div className="dc-val">Split</div>
          </div>
        </div>

        <div className="split-pct-row">
          {pctRow.map(({ pct, label, color }, i) => (
            <motion.div
              key={label}
              className="split-pct-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" as const }}
            >
              <div className="split-pct-val" style={{ color }}>{pct}</div>
              <div className="split-pct-label">{label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
