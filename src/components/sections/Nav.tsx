"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className="nav-hero"
    >
      {/* Left: logo */}
      <div className="nav-left">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo.png"
            alt="Panora Labs"
            width={1456}
            height={816}
            style={{ height: "50px", width: "auto" }}
            priority
          />
        </Link>
      </div>

      {/* Right: CTA + theme toggle */}
      <div className="nav-right">
        <AnimatedThemeToggler className="mr-3 flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white" />
        <Button variant="hero-cta" size="nav" asChild>
          <Link href="#vaults">
            Explore Vaults
            <svg className="-mr-1" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Button>
      </div>
    </motion.nav>
  )
}
