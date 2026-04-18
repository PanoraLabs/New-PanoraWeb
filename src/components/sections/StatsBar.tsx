"use client"

import { motion } from "framer-motion"

const stats = [
  {
    num: (
      <>
        Rp <span>48</span>B+
      </>
    ),
    label: "Total Value Locked",
  },
  {
    num: <span>340+</span>,
    label: "Active Farmers Onboarded",
  },
  {
    num: <span>12</span>,
    label: "Vaults Completed",
  },
  {
    num: <span>0</span>,
    label: "Rug Pulls (ever)",
  },
] as const

export function StatsBar() {
  return (
    <section id="stats">
      {stats.map(({ num, label }, i) => (
        <motion.div
          key={label}
          className="stat-item"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" as const }}
        >
          <div className="stat-num">{num}</div>
          <div className="stat-label">{label}</div>
        </motion.div>
      ))}
    </section>
  )
}
