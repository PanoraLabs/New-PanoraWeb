"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqItems = [
  {
    question: "What is Panora?",
    answer:
      "Panora is a blockchain-based agricultural infrastructure protocol built on Solana that allows global investors to fund Indonesian farmers through transparent, programmable vaults. Every fund flow, milestone disbursement, and profit distribution is executed automatically on-chain via Waterfall Payment Logic.",
  },
  {
    question: "How do I start investing on Panora?",
    answer:
      "Connect your Solana wallet (Phantom, Backpack, etc.), choose a vault based on your desired commodity and risk profile, deposit USDC into the vault, and you will automatically receive a Participation Token (PT) as proof of your investment position.",
  },
  {
    question: "What is the estimated return on investment?",
    answer:
      "Returns vary by vault type: Greenhouse Produce (chili, tomato, shallot) 15-22%, Traceable Exports (coffee, cacao, vanilla) 18-28%, and Staple Crops (rice, corn) 8-14%. All returns are estimates from the 35% net profit investors receive after harvest sales.",
  },
  {
    question: "Is my principal investment safe?",
    answer:
      "Panora implements several layers of protection: (1) Automatic parametric insurance based on oracles for extreme weather risk on open-field commodities, (2) Social collateral mechanisms within farmer groups, (3) Whitelisted off-takers to prevent side-selling, and (4) Emergency Insurance Fund from 2% of platform fees.",
  },
  {
    question: "What is a Participation Token (PT) and Yield-NFT?",
    answer:
      "A Participation Token (PT) is a digital proof of ownership automatically minted by the smart contract when you fund a vault. This token represents your right to 100% principal return plus 35% net profit share. PTs can be traded on Panora\u2019s secondary market.",
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[number]
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className="faq-accordion-item">
      <h3>
        <button
          className="faq-accordion-button"
          aria-expanded={isOpen}
          aria-controls={`faq-content-${index}`}
          type="button"
          onClick={onToggle}
        >
          <span className="faq-accordion-question">{item.question}</span>
          <div className="faq-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="faq-icon faq-icon-h"
            >
              <path d="M25.33,17.33H6.66v-2.67h18.67v2.67Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className={`faq-icon faq-icon-v ${isOpen ? "faq-icon-v-open" : ""}`}
            >
              <path d="M25.33,17.33H6.66v-2.67h18.67v2.67Z" />
            </svg>
          </div>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-content-${index}`}
            className="faq-accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="faq-accordion-body">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <motion.div
        className="faq-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="faq-header">
          <span className="section-label">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <em>Questions</em>
          </h2>
        </div>

        <div className="faq-accordion-list">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
