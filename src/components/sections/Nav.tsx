"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#how", label: "How It Works" },
  { href: "#vaults", label: "Vaults" },
  { href: "#market", label: "Secondary Market" },
  { href: "#split", label: "Economics" },
] as const

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
      className={scrolled ? "nav-scrolled" : "nav-hero"}
    >
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

      <ul className="nav-links">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <Button variant="nav" size="nav" asChild>
        <Link href="#vaults">Explore Vaults</Link>
      </Button>
    </motion.nav>
  )
}
