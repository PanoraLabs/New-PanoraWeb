"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#how", label: "How It Works" },
  { href: "#vaults", label: "Vaults" },
  { href: "#market", label: "Secondary Market" },
  { href: "#split", label: "Economics" },
] as const

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
    >
      <Link href="/" className="nav-logo">
        <div className="nav-logo-mark">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 4 8 4 14a8 8 0 0016 0C20 8 12 2 12 2z" />
            <path
              d="M12 10v8M8 14l4-4 4 4"
              fill="none"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="nav-logo-text">Panora Labs</span>
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
