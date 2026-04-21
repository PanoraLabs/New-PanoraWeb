"use client"

import { motion } from "framer-motion"
import { NumberTicker } from "@/components/ui/number-ticker"

export function StatsBar() {
  return (
    <section id="stats">
      <div className="stats-inner">
      <div className="stats-row stats-row-1">
        <motion.div
          className="stats-box"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="stats-box-row">
            <div className="stat-num">
              Rp <NumberTicker value={500} className="stat-ticker" />B<span className="stat-suffix">+</span>
            </div>
          </div>
          <p className="stat-label">Total Value Locked</p>
        </motion.div>
        <motion.div
          className="stats-box"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          <div className="stats-box-row">
            <div className="stat-num">
              <NumberTicker value={100} className="stat-ticker" />
            </div>
          </div>
          <p className="stat-label">Rug Pulls. Ever.</p>
        </motion.div>
      </div>

      <div className="stats-row stats-row-2">
        <motion.div
          className="stats-box"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="stats-box-row">
            <div className="stat-num">
              <NumberTicker value={142} className="stat-ticker" />
            </div>
            <span className="stat-unit">vaults</span>
          </div>
          <p className="stat-label">Vaults Completed Successfully</p>
        </motion.div>
      </div>

      <div className="stats-row stats-row-3">
        <motion.div
          className="stats-box"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="stats-box-row">
            <div className="stat-num">
              <NumberTicker value={340} className="stat-ticker" /><span className="stat-suffix">+</span>
            </div>
          </div>
          <p className="stat-label">Active Farmers Onboarded</p>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
