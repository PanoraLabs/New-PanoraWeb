"use client"

import { motion } from "framer-motion"

const steps = [
  {
    n: "1",
    title: "Stake",
    desc: "Deposit USDC into a Vault. Receive a Participation Token as proof of your position in the harvest cycle.",
  },
  {
    n: "2",
    title: "Activate",
    desc: "Node Agent verifies field readiness with geotagged photos and on-the-ground confirmation before capital is deployed.",
  },
  {
    n: "3",
    title: "Grow",
    desc: "Track live IoT sensor data and milestone-based disbursements in real time through the Panora dashboard.",
  },
  {
    n: "4",
    title: "Harvest",
    desc: "Off-taker pays directly to the Panora smart contract at market price upon successful harvest completion.",
  },
  {
    n: "5",
    title: "Claim",
    desc: "Receive 100% of your principal plus up to 35% net profit, settled directly to your connected wallet.",
  },
] as const

export function HowItWorks() {
  return (
    <section id="how">
      <motion.div
        className="how-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
      >
        <div className="section-label">Process</div>
        <h2 className="section-title">
          From seed to <em>settlement</em>
        </h2>
        <p className="section-sub">Five on-chain steps, zero middlemen.</p>
      </motion.div>

      <div className="steps">
        {steps.map(({ n, title, desc }, i) => (
          <motion.div
            key={n}
            className="step"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
          >
            {/* Timeline connector */}
            <div className="step-line">
              <div className="step-num">{n}</div>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>

            {/* Content */}
            <div className="step-content">
              <div className="step-title">{title}</div>
              <div className="step-desc">{desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
