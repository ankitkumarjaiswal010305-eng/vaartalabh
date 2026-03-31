'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-poppins',
})

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  imageUrl?: string
}

export default function FAQAccordion({
  items = [],
  imageUrl = 'public/vtl.jpeg',
}: FAQAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id='faqs' className="w-full bg-[#f7efe9] py-20 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <h2 className={`${poppins.variable} font-poppins text-5xl md:text-7xl font-black tracking-tight text-black mb-4`}>
            Frequently Asked
          </h2>
          <div className="flex justify-center">
            <div className="relative inline-block -rotate-2">
              <div className="px-10 py-4 bg-[#f97316] border-[4px] border-black shadow-[6px_6px_0px_0px_#000]">
                <span className={`${poppins.variable} font-poppins text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter`}>
                  Questions
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image with rounded corners per screenshot */}
          <div className="relative group">
            <div className="border-[4px] border-black rounded-[40px] overflow-hidden shadow-[10px_10px_0px_0px_#000]">
              <img
                src={imageUrl}
                alt="Naavigation Meetup"
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4">
            {items.map((item) => {
              const isExpanded = expandedId === item.id

              return (
                <div key={item.id} className="relative pt-4">
                  {/* The "File Folder Tab" - Positioned to sit on top of the main border */}
                  <div 
                    className="absolute top-0 left-0 w-24 h-6 bg-[#fbb040] border-[3px] border-black border-b-0 rounded-t-lg z-10"
                    style={{ backgroundColor: '#fbb040' }}
                  />
                  
                  {/* Main Accordion Body */}
                  <div className={`relative z-20 transition-all ${isExpanded ? 'translate-y-[-2px]' : ''}`}>
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-6 bg-[#fbb040] border-[3px] border-black text-left shadow-[5px_5px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] transition-all"
                    >
                      <span className="font-bold text-black text-lg md:text-xl pr-4">
                        {item.question}
                      </span>
                      <div 
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}
                      >
                        <Plus className="w-8 h-8 text-black stroke-[3px]" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-[#fbb040] border-[3px] border-black border-t-0 shadow-[5px_5px_0px_0px_#000] -mt-[3px]"
                        >
                          <div className="p-6 pt-2 text-black font-bold opacity-80 leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}