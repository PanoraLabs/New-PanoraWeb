"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { DONUT_C, DONUT_L1, DONUT_L2, DONUT_L3 } from "./constants"

const legend = [
  { color: "var(--leaf)", pct: "55%", label: "Farmers" },
  { color: "var(--gold)", pct: "35%", label: "Investors" },
  { color: "var(--stone)", pct: "10%", label: "Ecosystem" },
] as const

export function MarketEconomics() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Left: statement 1 starts highlighted then dims; statement 2 slides up from hidden → dimmed → highlighted
  const o1 = useTransform(scrollYProgress, [0, 0.3, 0.45, 0.5], [1, 1, 0.2, 0.2])
  const o2 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.45, 0.5, 1], [0, 0, 0.2, 0.2, 1, 1])
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.3], [40, 40, 0])

  // Right: crossfade visuals
  const vis1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0])
  const vis1Y = useTransform(scrollYProgress, [0.35, 0.5], [0, -30])
  const vis2Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1])
  const vis2Y = useTransform(scrollYProgress, [0.35, 0.55], [30, 0])

  return (
    <section ref={containerRef} className="me-scroll-container">
      <div className="me-sticky">
        <div className="me-inner">
          {/* ── LEFT: all statements inline as one text block ── */}
          <div className="me-left">
            <h2 className="me-statement">
              <motion.span className="me-line" style={{ opacity: o1 }}>
                Exit anytime.
              </motion.span>
              <motion.span className="me-line" style={{ opacity: o1 }}>
                <em>No lock-in</em> anxiety.
              </motion.span>
              <motion.span className="me-line" style={{ opacity: o2, y: y2 }}>
                A split built
              </motion.span>
              <motion.span className="me-line" style={{ opacity: o2, y: y2 }}>
                for <em>fairness.</em>
              </motion.span>
            </h2>
          </div>

          {/* ── RIGHT: visuals only ── */}
          <div className="me-right">
            {/* Visual 1: checklist */}
            <motion.div className="me-vis" style={{ opacity: vis1Opacity, y: vis1Y }}>
              <ul className="me-checklist">
                <li><span className="me-check-icon">✓</span>Real-time oracle pricing based on IoT crop health data</li>
                <li><span className="me-check-icon">✓</span>Price floor logic prevents predatory under-selling</li>
                <li><span className="me-check-icon">✓</span>0.5% royalty on every trade goes to farmer emergency fund</li>
                <li><span className="me-check-icon">✓</span>Rights transfer is instant — farmers are never disrupted</li>
              </ul>
            </motion.div>

            {/* Visual 2: donut + pcts horizontal */}
            <motion.div className="me-vis me-vis-abs" style={{ opacity: vis2Opacity, y: vis2Y }}>
              <div className="me-split-row">
                <div className="me-donut">
                  <svg viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="var(--mist)" strokeWidth="28" />
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
        </div>
      </div>
    </section>
  )
}
