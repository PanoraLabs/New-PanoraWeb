"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const vaults = [
  {
    icon: "🌶️",
    iconClass: "vi-green",
    name: "High Value",
    title: "Greenhouse Produce",
    desc: "Chili, tomato, shallot. Climate-controlled greenhouses eliminate weather risk and ensure supply consistency for modern retailers.",
    returnVal: "15–22%",
    duration: "90–110 days",
  },
  {
    icon: "☕",
    iconClass: "vi-gold",
    name: "Export RWA",
    title: "Traceable Exports",
    desc: "Coffee, cacao, vanilla. Every batch minted as cNFT — full chain-of-custody from farm to foreign buyer. EUDR-ready by default.",
    returnVal: "18–28%",
    duration: "6–9 months",
  },
  {
    icon: "🌾",
    iconClass: "vi-blue",
    name: "Bulk Commodity",
    title: "Staple Crops",
    desc: "Rice and corn at scale, backed by off-taker guarantees from Bulog and licensed warehouses. Lower yield, higher volume security.",
    returnVal: "8–14%",
    duration: "4–5 months",
  },
] as const

export function Vaults() {
  return (
    <section id="vaults">
      <div className="vaults-bg-circle" />
      <div className="vaults-bg-circle2" />
      <div className="vaults-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
        >
          <div className="section-label">Product</div>
          <h2 className="section-title" style={{ color: "white" }}>
            Three vault
            <br />
            <em>strategies</em>
          </h2>
          <p className="section-sub">
            Pick your risk profile. All secured by smart contracts and
            Proof-of-Activity.
          </p>
        </motion.div>

        <div className="vault-grid">
          {vaults.map(({ icon, iconClass, name, title, desc, returnVal, duration }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" as const }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:bg-white/[0.09] hover:border-white/20 cursor-pointer p-8 shadow-none transition-colors duration-300">
                <CardContent className="p-0">
                  <div className={`vault-icon ${iconClass}`}>{icon}</div>
                  <div className="vault-name">{name}</div>
                  <div className="vault-title">{title}</div>
                  <div className="vault-desc">{desc}</div>
                  <div className="vault-meta">
                    <div>
                      <div className="vm-label">Est. Return</div>
                      <div className="vm-val">{returnVal}</div>
                    </div>
                    <div>
                      <div className="vm-label">Duration</div>
                      <div className="vm-val">{duration}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
