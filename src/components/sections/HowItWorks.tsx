"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const steps = [
  {
    n: "1",
    title: "Stake",
    desc: "Deposit USDC into a Vault. Receive a Participation Token as proof of your position in the harvest cycle.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="hiw-icon-svg">
        <circle cx="24" cy="24" r="20" stroke="var(--leaf)" strokeWidth="1.5" opacity="0.3" />
        <circle cx="24" cy="24" r="12" stroke="var(--leaf)" strokeWidth="1.5" opacity="0.6" />
        <path d="M24 16v16M18 24h12" stroke="var(--sprout)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "Activate",
    desc: "Node Agent verifies field readiness with geotagged photos and on-the-ground confirmation before capital is deployed.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="hiw-icon-svg">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="var(--leaf)" strokeWidth="1.5" opacity="0.3" />
        <path d="M16 24l5 5 11-11" stroke="var(--sprout)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "Grow",
    desc: "Track live IoT sensor data and milestone-based disbursements in real time through the Panora dashboard.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="hiw-icon-svg">
        <path d="M12 36V28M20 36V22M28 36V18M36 36V12" stroke="var(--sprout)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 40h32" stroke="var(--leaf)" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    n: "4",
    title: "Harvest",
    desc: "Off-taker pays directly to the Panora smart contract at market price upon successful harvest completion.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="hiw-icon-svg">
        <path d="M24 8c0 12-12 16-12 28h24c0-12-12-16-12-28z" stroke="var(--leaf)" strokeWidth="1.5" opacity="0.4" />
        <path d="M24 14c0 8-7 11-7 20h14c0-9-7-12-7-20z" stroke="var(--sprout)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    n: "5",
    title: "Claim",
    desc: "Receive 100% of your principal plus up to 35% net profit, settled directly to your connected wallet.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="hiw-icon-svg">
        <circle cx="24" cy="24" r="16" stroke="var(--leaf)" strokeWidth="1.5" opacity="0.3" />
        <path d="M24 14v20" stroke="var(--sprout)" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 20h12c0 0 2 0 2 2s-2 2-2 2H18" stroke="var(--sprout)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 28h12c0 0 2 0 2 2s-2 2-2 2H18" stroke="var(--sprout)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      </svg>
    ),
  },
] as const

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const PANELS = steps.length

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const scrollable = section.offsetHeight - window.innerHeight
      const p = Math.max(0, Math.min(1, -rect.top / scrollable))
      setProgress(p)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const activePanel = Math.min(PANELS - 1, Math.floor(progress * PANELS))
  const translateX = progress * (PANELS - 1) * 100

  return (
    <section id="how" ref={sectionRef} className="hiw-section">
      {/* Header - sits above the sticky area */}
      <div className="hiw-header">
        <div className="section-label">Process</div>
        <h2 className="section-title">
          From seed to <em>settlement</em>
        </h2>
        <p className="section-sub">Five on-chain steps, zero middlemen.</p>
      </div>

      <div className="hiw-sticky">
        {/* Progress bar */}
        <div className="hiw-progress" style={{ width: `${progress * 100}%` }} />

        {/* Nav dots */}
        <div className="hiw-nav">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`hiw-nav-dot${i === activePanel ? " active" : ""}`}
            >
              {step.title}
            </div>
          ))}
        </div>

        {/* Horizontal track */}
        <div
          className="hiw-track"
          style={{ transform: `translateX(-${translateX}vw)` }}
        >
          {steps.map((step, i) => (
            <div key={step.n} className="hiw-panel">
              {/* Ghost number */}
              <div className="hiw-ghost">{step.n}</div>

              {/* Left: visual */}
              <div className="hiw-visual">
                <div className="hiw-icon-wrap">
                  {step.icon}
                </div>
                <div className="hiw-flow-line">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className="hiw-flow-dot"
                      style={{ animationDelay: `${j * 0.15}s` }}
                    />
                  ))}
                </div>
                {i < steps.length - 1 && (
                  <div className="hiw-flow-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="var(--leaf)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Right: editorial */}
              <div className="hiw-editorial">
                <p className="hiw-eyebrow">Step {step.n} of {PANELS}</p>
                <motion.span
                  className="hiw-panel-title"
                  key={`title-${i}-${i === activePanel}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={i === activePanel ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {step.title}
                </motion.span>
                <p className="hiw-panel-desc">{step.desc}</p>

                {/* Step stat-like info */}
                <div className="hiw-step-meta">
                  <div className="hiw-meta-item">
                    <span className="hiw-meta-val">{step.n}/{PANELS}</span>
                    <span className="hiw-meta-label">Progress</span>
                  </div>
                  <div className="hiw-meta-item">
                    <span className="hiw-meta-val">On-chain</span>
                    <span className="hiw-meta-label">Execution</span>
                  </div>
                  <div className="hiw-meta-item">
                    <span className="hiw-meta-val">Automated</span>
                    <span className="hiw-meta-label">Settlement</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
