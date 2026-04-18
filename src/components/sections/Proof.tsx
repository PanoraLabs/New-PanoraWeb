"use client"

import { motion } from "framer-motion"

const logos = [
  "Solana",
  "Metaplex",
  "Pyth Oracle",
  "EUDR",
  "Chainlink",
  "Bulog",
] as const

export function Proof() {
  return (
    <section id="proof">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
      >
        <div className="section-label proof-built-label">Built on</div>
        <p className="proof-infra-title">Powered by open infrastructure</p>
      </motion.div>

      <div className="proof-logos">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            className="proof-logo"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" as const }}
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
