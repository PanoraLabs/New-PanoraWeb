"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function AboutPanora() {
  return (
    <section id="about-panora" className="about-panora">
      <div className="about-panora-inner">
        {/* Tag */}
        <motion.div
          className="about-panora-tag"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-panora-dot" />
          <span>About Panora</span>
        </motion.div>

        {/* Large serif text */}
        <motion.p
          className="about-panora-text"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Panora bridges regenerative agriculture with decentralized
          finance&nbsp;&mdash; turning climate-smart farmland into tokenized,
          yield-bearing vaults anyone can join, while channeling real capital
          to the farmers who grow our future.
        </motion.p>

        {/* Button */}
        <motion.div
          className="about-panora-cta"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="#how" className="about-panora-btn">
            Learn How It Works
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
