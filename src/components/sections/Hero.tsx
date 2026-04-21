"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.9, ease: "easeOut" as const },
})

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Background moves slower (parallax) + fades out
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  // Content slides up faster + fades out
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0px", "-80px"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section id="hero" ref={sectionRef}>
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
          <motion.h1 className="hero-title" {...fadeUp(0.2)}>
            Growing
            <br />
            <em>real yields,</em>
            <br />
            on-chain.
          </motion.h1>
        </div>

        {/* Right: buttons + description */}
        <div className="hero-right">
          <motion.div className="hero-right-content" {...fadeUp(0.35)}>
            <div className="hero-buttons">
              <button className="hero-glass-btn" onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}>
                <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9.7" stroke="currentColor" strokeWidth="0.56" />
                  <path d="M12.59 9.91a.2.2 0 0 1 0 .32l-3.7 2.78a.2.2 0 0 1-.32-.16V7.29a.2.2 0 0 1 .32-.16l3.7 2.78Z" fill="currentColor" />
                </svg>
                See how it works
              </button>

              <Button variant="hero-cta" asChild>
                <Link href="#vaults">
                  Start Investing
                  <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Button>
            </div>

            <p className="hero-description">
              Panora Labs connects investors with verified Indonesian farmers
              through blockchain-powered vaults — transparent, traceable, and
              climate-resilient.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
