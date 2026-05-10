"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    n: "1",
    title: "Stake",
    desc: "Deposit USDC into a Vault. Receive a Participation Token as proof of your position in the harvest cycle.",
    image: "/HowItWorks/stake.jpg",
  },
  {
    n: "2",
    title: "Activate",
    desc: "Node Agent verifies field readiness with geotagged photos and on-the-ground confirmation before capital is deployed.",
    image: "/HowItWorks/activate.jpg",
  },
  {
    n: "3",
    title: "Grow",
    desc: "Track live IoT sensor data and milestone-based disbursements in real time through the Panora dashboard.",
    image: "/HowItWorks/grow.jpg",
  },
  {
    n: "4",
    title: "Harvest",
    desc: "Off-taker pays directly to the Panora smart contract at market price upon successful harvest completion.",
    image: "/HowItWorks/harvest.jpg",
  },
  {
    n: "5",
    title: "Claim",
    desc: "Receive 100% of your principal plus up to 35% net profit, settled directly to your connected wallet.",
    image: "/HowItWorks/claim.jpg",
  },
] as const

function StepIcon({ src, alt, sizes }: { src: string; alt: string; sizes: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="hiw-icon-img"
    />
  )
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    setIsMobile(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [breakpoint])
  return isMobile
}

/* ─── Mobile Accordion ─── */
function MobileAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="how" className="hiw-mobile-section">
      <div className="hiw-mobile-header">
        <div className="section-label">Process</div>
        <h2 className="section-title">
          From seed to <em>settlement</em>
        </h2>
        <p className="section-sub">Five on-chain steps, zero middlemen.</p>
      </div>

      <div className="hiw-accordion-list">
        {steps.map((step, i) => {
          const isOpen = openIndex === i
          return (
            <div key={step.n} className="hiw-accordion-item">
              <button
                className={`hiw-accordion-trigger${isOpen ? " hiw-accordion-trigger--open" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                type="button"
                aria-expanded={isOpen}
              >
                <div className="hiw-accordion-left">
                  <span className="hiw-accordion-num">0{step.n}</span>
                  <span className="hiw-accordion-title">{step.title}</span>
                </div>
                <div className="hiw-accordion-icon-wrap">
                  <StepIcon src={step.image} alt={step.title} sizes="64px" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="hiw-accordion-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="hiw-accordion-content">
                      <p className="hiw-accordion-desc">{step.desc}</p>
                      <div className="hiw-accordion-meta">
                        <div className="hiw-accordion-meta-item">
                          <span className="hiw-accordion-meta-val">{step.n}/{steps.length}</span>
                          <span className="hiw-accordion-meta-label">Progress</span>
                        </div>
                        <div className="hiw-accordion-meta-item">
                          <span className="hiw-accordion-meta-val">On-chain</span>
                          <span className="hiw-accordion-meta-label">Execution</span>
                        </div>
                        <div className="hiw-accordion-meta-item">
                          <span className="hiw-accordion-meta-val">Automated</span>
                          <span className="hiw-accordion-meta-label">Settlement</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ─── Desktop Horizontal Scroll ─── */
function DesktopScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [animatedPanels, setAnimatedPanels] = useState<Set<number>>(new Set([0]))
  const PANELS = steps.length

  useEffect(() => {
    function onScroll() {
      const section = sectionRef.current
      const header = headerRef.current
      if (!section || !header) return
      const rect = section.getBoundingClientRect()
      const headerHeight = header.offsetHeight
      // Only start horizontal scroll after the header has scrolled away
      const scrolled = -rect.top - headerHeight
      const scrollable = section.offsetHeight - window.innerHeight - headerHeight
      const p = Math.max(0, Math.min(1, scrolled / scrollable))
      setProgress(p)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const activePanel = Math.min(PANELS - 1, Math.floor(progress * PANELS))
  const translateX = progress * (PANELS - 1) * 100

  useEffect(() => {
    setAnimatedPanels((prev) => {
      if (prev.has(activePanel)) return prev
      const next = new Set(prev)
      next.add(activePanel)
      return next
    })
  }, [activePanel])

  return (
    <section id="how" ref={sectionRef} className="hiw-section">
      <div ref={headerRef} className="hiw-header">
        <div className="section-label">Process</div>
        <h2 className="section-title">
          From seed to <em>settlement</em>
        </h2>
        <p className="section-sub">Five on-chain steps, zero middlemen.</p>
      </div>

      <div className="hiw-sticky">
        <div className="hiw-progress" style={{ width: `${progress * 100}%` }} />

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

        <div
          className="hiw-track"
          style={{ transform: `translateX(-${translateX}vw)` }}
        >
          {steps.map((step, i) => (
            <div key={step.n} className="hiw-panel">
              <div className="hiw-ghost">{step.n}</div>

              <div className="hiw-visual">
                <div className="hiw-icon-wrap">
                  <StepIcon src={step.image} alt={step.title} sizes="(max-width: 768px) 220px, 340px" />
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

              <div className="hiw-editorial">
                <p className="hiw-eyebrow">Step {step.n} of {PANELS}</p>
                <motion.span
                  className="hiw-panel-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={animatedPanels.has(i) ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.title}
                </motion.span>
                <p className="hiw-panel-desc">{step.desc}</p>

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

export function HowItWorks() {
  const isMobile = useIsMobile()
  return isMobile ? <MobileAccordion /> : <DesktopScroll />
}
