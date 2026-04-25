"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

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

function VaultContent({
  vault,
  index,
  progress,
}: {
  vault: (typeof vaults)[number]
  index: number
  progress: ReturnType<typeof useTransform<number, number>>
}) {
  const total = vaults.length
  const segmentSize = 1 / total
  const start = index * segmentSize
  const end = start + segmentSize

  // Fade in during first 30% of segment, stay visible, fade out during last 20%
  const fadeIn = start + segmentSize * 0.05
  const fadeOut = end - segmentSize * 0.15

  const opacity = useTransform(progress, [start, fadeIn, fadeOut, end], [0, 1, 1, index === total - 1 ? 1 : 0])
  const y = useTransform(progress, [start, fadeIn, fadeOut, end], [60, 0, 0, index === total - 1 ? 0 : -40])

  return (
    <motion.div className="vault-scroll-content" style={{ opacity, y }}>
      <div className="vault-name">{vault.name}</div>
      <h3 className="vault-scroll-title">{vault.title}</h3>
      <p className="vault-scroll-desc">{vault.desc}</p>
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
    </motion.div>
  )
}

function VaultProgress({
  progress,
}: {
  progress: ReturnType<typeof useTransform<number, number>>
}) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"])

  return (
    <div className="vault-progress-track">
      {vaults.map((_, i) => {
        const total = vaults.length
        const segmentSize = 1 / total
        const start = i * segmentSize
        const mid = start + segmentSize * 0.3

        const dotOpacity = useTransform(progress, [start, mid], [0.2, 1])
        const dotScale = useTransform(progress, [start, mid], [0.6, 1])

        return (
          <motion.div
            key={i}
            className="vault-progress-dot"
            style={{ opacity: dotOpacity, scale: dotScale }}
          >
            <span className="vault-progress-index">0{i + 1}</span>
          </motion.div>
        )
      })}
      <div className="vault-progress-line">
        <motion.div className="vault-progress-fill" style={{ height }} />
      </div>
    </div>
  )
}

export function Vaults() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  return (
    <section id="vaults" ref={sectionRef} className="vault-scroll-section">
      {/* Header - sits above the sticky area */}
      <div className="vault-scroll-header">
        <div className="vault-scroll-header-text">
          <div className="section-label">Product</div>
          <h2 className="section-title">
            Three vault
            <br />
            <em>strategies</em>
          </h2>
        </div>
        <p className="section-sub vault-header-sub">
          Pick your risk profile. All secured by smart contracts and
          Proof-of-Activity.
        </p>
      </div>

      <div className="vault-scroll-sticky">
        <div className="vaults-bg-circle" />
        <div className="vaults-bg-circle2" />

        <div className="vault-scroll-layout">
          {/* Content + images */}
          <div className="vault-scroll-bottom">
            <div className="vault-scroll-left">
              <div className="vault-scroll-cards-area">
                <VaultProgress progress={scrollYProgress} />
                <div className="vault-scroll-cards">
                  {vaults.map((vault, i) => (
                    <VaultContent
                      key={vault.title}
                      vault={vault}
                      index={i}
                      progress={scrollYProgress}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="vault-scroll-right">
              {vaults.map((vault, i) => {
                const total = vaults.length
                const segmentSize = 1 / total
                const start = i * segmentSize
                const end = start + segmentSize
                const fadeIn = start + segmentSize * 0.1
                const fadeOut = end - segmentSize * 0.1

                const opacity = useTransform(
                  scrollYProgress,
                  [start, fadeIn, fadeOut, end],
                  [0, 1, 1, i === total - 1 ? 1 : 0]
                )

                return (
                  <motion.div
                    key={vault.title}
                    className="vault-scroll-image"
                    style={{ opacity }}
                  >
                    <Image
                      src={vault.image}
                      alt={vault.title}
                      fill
                      className="vault-image-photo"
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
