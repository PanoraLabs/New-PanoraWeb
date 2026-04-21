"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const fadeUp = (delay: number, ready: boolean) => ({
  initial: { opacity: 0, y: 24 },
  animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
  transition: { delay, duration: 0.9, ease: "easeOut" as const },
})

const fadeBlurUp = (delay: number, ready: boolean) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: ready
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 30, filter: "blur(8px)" },
  transition: { delay, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
})

const scaleIn = (delay: number, ready: boolean) => ({
  initial: { opacity: 0, scale: 0.92 },
  animate: ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 },
  transition: { delay, duration: 0.7, ease: "easeOut" as const },
})

export function Hero({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll()

  // Parallax driven by raw scroll pixels (over first viewport height)
  const bgY = useTransform(scrollY, [0, 800], [0, 200])
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.08])
  const contentY = useTransform(scrollY, [0, 600], [0, -60])
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <>
      {/* Fixed hero — always behind everything */}
      <section id="hero">
        {/* Background image — parallax layer */}
        <motion.div
          className="hero-parallax-layer"
          style={{ y: bgY, scale: bgScale }}
        >
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            className="hero-bg-photo"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
        <div className="hero-top-gradient" />
        <div className="hero-overlay" />

        {/* Bottom content bar — split left/right */}
        <motion.div
          className="hero-bottom"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          {/* Left: large title */}
          <div className="hero-left">
            <h1 className="hero-title">
              <motion.span className="inline-block" {...fadeBlurUp(0.15, ready)}>
                Growing
              </motion.span>
              <br />
              <motion.em className="inline-block" {...fadeBlurUp(0.3, ready)}>
                real yields,
              </motion.em>
              <br />
              <motion.span className="inline-block" {...fadeBlurUp(0.45, ready)}>
                on-chain.
              </motion.span>
            </h1>
          </div>

          {/* Right: buttons + description */}
          <div className="hero-right">
            <div className="hero-right-content">
              <div className="hero-buttons">
                <motion.button className="hero-glass-btn" {...scaleIn(0.5, ready)} onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}>
                  <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="9.7" stroke="currentColor" strokeWidth="0.56" />
                    <path d="M12.59 9.91a.2.2 0 0 1 0 .32l-3.7 2.78a.2.2 0 0 1-.32-.16V7.29a.2.2 0 0 1 .32-.16l3.7 2.78Z" fill="currentColor" />
                  </svg>
                  See how it works
                </motion.button>

                <motion.div {...scaleIn(0.6, ready)}>
                  <Button variant="hero-cta" asChild>
                    <Link href="#vaults">
                      Start Investing
                      <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <motion.p className="hero-description" {...fadeUp(0.7, ready)}>
                Panora Labs connects investors with verified Indonesian farmers
                through blockchain-powered vaults — transparent, traceable, and
                climate-resilient.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spacer so content below starts after the viewport */}
      <div className="hero-spacer" />
    </>
  )
}
