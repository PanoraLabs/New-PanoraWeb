"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const vaults = [
  {
    name: "High Value",
    title: "Greenhouse Produce",
    desc: "Chili, tomato, shallot. Climate-controlled greenhouses eliminate weather risk and ensure supply consistency for modern retailers.",
    returnVal: "TBA",
    duration: "90–110 days",
    image: "/chili.jpg",
  },
  {
    name: "Export RWA",
    title: "Traceable Exports",
    desc: "Coffee, cacao, vanilla. Every batch minted as cNFT — full chain-of-custody from farm to foreign buyer. EUDR-ready by default.",
    returnVal: "TBA",
    duration: "6–9 months",
    image: "/coffee.jpg",
  },
  {
    name: "Bulk Commodity",
    title: "Staple Crops",
    desc: "Rice and corn at scale, backed by off-taker guarantees from Bulog and licensed warehouses. Lower yield, higher volume security.",
    returnVal: "TBA",
    duration: "4–5 months",
    image: "/padi.jpg",
  },
] as const

export function Vaults() {
  return (
    <section id="vaults" className="vault-mobile-section">
      <div className="vault-mobile-header">
        <div className="section-label">Product</div>
        <h2 className="section-title">
          Three vault <em>strategies</em>
        </h2>
        <p className="section-sub">
          Pick your risk profile. All secured by smart contracts and
          Proof-of-Activity.
        </p>
      </div>

      <div className="vault-mobile-list">
        {vaults.map((vault, i) => (
          <motion.div
            key={vault.title}
            className="vault-mobile-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="vault-mobile-image">
              <Image
                src={vault.image}
                alt={vault.title}
                fill
                className="vault-image-photo"
              />
            </div>
            <div className="vault-mobile-info">
              <div className="vault-name">{vault.name}</div>
              <h3 className="vault-mobile-title">{vault.title}</h3>
              <p className="vault-mobile-desc">{vault.desc}</p>
              <div className="vault-meta">
                <div>
                  <div className="vm-label">Est. Return</div>
                  <div className="vm-val">{vault.returnVal}</div>
                </div>
                <div>
                  <div className="vm-label">Duration</div>
                  <div className="vm-val">{vault.duration}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
