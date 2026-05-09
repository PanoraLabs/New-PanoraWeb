"use client"

import { motion } from "framer-motion"
import { DONUT_C, DONUT_L1, DONUT_L2, DONUT_L3 } from "./constants"

const legend = [
  { color: "var(--leaf)", pct: "55%", label: "Farmers" },
  { color: "var(--gold)", pct: "35%", label: "Investors" },
  { color: "var(--stone)", pct: "10%", label: "Ecosystem" },
] as const

const checklist = [
  "Real-time oracle pricing based on IoT crop health data",
  "Price floor logic prevents predatory under-selling",
  "0.5% royalty on every trade goes to farmer emergency fund",
  "Rights transfer is instant — farmers are never disrupted",
] as const

export function MarketEconomics() {
  return (
    <section className="me-section">
      <div className="me-grid">
        <motion.div
          className="me-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="me-card-title">
            Exit anytime. <em>No lock-in</em> anxiety.
          </h2>
          <ul className="me-checklist">
            {checklist.map((item) => (
              <li key={item}>
                <span className="me-check-icon">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="me-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="me-card-title">
            A split built for <em>fairness.</em>
          </h2>
          <div className="me-split-row">
            <div className="me-donut">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="var(--mist)" strokeWidth="28" />
                <circle
                  cx="100" cy="100" r="80" fill="none"
                  stroke="var(--leaf)" strokeWidth="28"
                  strokeDasharray={`${DONUT_L1} ${DONUT_C - DONUT_L1}`}
                />
                <g transform="rotate(198 100 100)">
                  <circle
                    cx="100" cy="100" r="80" fill="none"
                    stroke="var(--gold)" strokeWidth="28"
                    strokeDasharray={`${DONUT_L2} ${DONUT_C - DONUT_L2}`}
                  />
                </g>
                <g transform="rotate(324 100 100)">
                  <circle
                    cx="100" cy="100" r="80" fill="none"
                    stroke="var(--stone)" strokeWidth="28"
                    strokeDasharray={`${DONUT_L3} ${DONUT_C - DONUT_L3}`}
                  />
                </g>
              </svg>
              <div className="me-donut-center">
                <div className="me-dc-label">Net Profit</div>
                <div className="me-dc-val">Split</div>
              </div>
            </div>

            <div className="me-pct-col">
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
    </section>
  )
}
