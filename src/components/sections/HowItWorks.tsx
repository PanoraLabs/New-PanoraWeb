"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const steps = [
  {
    n: "01",
    title: "Stake",
    desc: "Deposit USDC into a Vault. Receive a Participation Token as proof of your position in the harvest cycle.",
    tag: "USDC in, Participation Token out",
    image: "/HowItWorks/stake.jpg",
  },
  {
    n: "02",
    title: "Activate",
    desc: "A Node Agent verifies field readiness with geotagged photos and on-the-ground confirmation before capital is deployed.",
    tag: "Geotagged Proof-of-Activity",
    image: "/HowItWorks/activate.jpg",
  },
  {
    n: "03",
    title: "Grow",
    desc: "Track live IoT sensor data and milestone-based disbursements in real time through the Panora dashboard.",
    tag: "Live IoT telemetry",
    image: "/HowItWorks/grow.jpg",
  },
  {
    n: "04",
    title: "Harvest",
    desc: "The off-taker pays the Panora smart contract directly at market price when the harvest completes.",
    tag: "Off-taker pays the contract",
    image: "/HowItWorks/harvest.jpg",
  },
  {
    n: "05",
    title: "Claim",
    desc: "Receive 100% of your principal plus up to 35% net profit, settled directly to your connected wallet.",
    tag: "Principal + up to 35% net",
    image: "/HowItWorks/claim.jpg",
  },
] as const

export function HowItWorks() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index))
          }
        }
      },
      // a step becomes active when it crosses the vertical center of the viewport
      { rootMargin: "-45% 0px -45% 0px" }
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how" className="process">
      <div className="process-header">
        <div className="section-label">Process</div>
        <h2 className="section-title">
          From seed to <em>settlement.</em>
        </h2>
        <p className="section-sub">Five on-chain steps, zero middlemen.</p>
      </div>

      <div className="process-grid">
        <div className="process-media" aria-hidden="true">
          <div className="process-media-frame">
            {steps.map((step, i) => (
              <Image
                key={step.n}
                src={step.image}
                alt=""
                fill
                sizes="(max-width: 900px) 0px, 45vw"
                className="process-media-photo"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
            <div className="process-media-count">
              {steps[active].n} / {steps[steps.length - 1].n}
            </div>
          </div>
        </div>

        <ol className="process-steps">
          {steps.map((step, i) => (
            <li
              key={step.n}
              data-index={i}
              ref={(el) => {
                stepRefs.current[i] = el
              }}
              className={`process-step${i === active ? " process-step--active" : ""}`}
            >
              <div className="process-step-photo">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 0px"
                  className="process-media-photo"
                />
              </div>
              <div className="process-step-head">
                <span className="process-step-num">{step.n}</span>
                <h3 className="process-step-title">{step.title}</h3>
              </div>
              <p className="process-step-desc">{step.desc}</p>
              <span className="process-step-tag">{step.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
