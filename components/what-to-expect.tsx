"use client"

import { motion } from "framer-motion"

const categories = [
  { title: "Expert Talks", color: "#ff5757" }, // orange
  { title: "Fun + Games", color: "#fbb040" }, // coral
  { title: "Food + Drink", color: "#77a4d4" }, // amber
  { title: "Live Music", color: "#f97316" }, // orange
  { title: "Community", color: "#ff5757" }, // coral
]

export default function WhatToExpect() {
  return (
    <section className="bg-[#f7efe9] py-16 px-4 md:px-8 overflow-hidden border-y-4">
      <div className="max-w-8xl mx-auto">
        <div className="flex rounded-3xl overflow-hidden border-2 border-black">
          {/* Black sidebar with rotated text */}
          <div className="bg-black w-20 md:w-28 flex-shrink-0 flex items-center justify-center relative min-h-[400px]">
            <div 
              className="absolute whitespace-nowrap"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center center",
              }}
            >
              <span 
                className="text-white text-3xl md:text-4xl font-black tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
                }}
              >
                What to
              </span>
              <br />
              <span 
                className="text-white text-3xl md:text-4xl font-black tracking-tight"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.3)",
                }}
              >
                Expect
              </span>
            </div>
          </div>

          {/* Colored bars stack */}
          <div className="flex-1 flex flex-col">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="border-b-2 border-black last:border-b-0 py-6 md:py-8 px-6 md:px-12 flex items-center justify-center cursor-pointer hover:brightness-105 transition-all"
                style={{ backgroundColor: category.color }}
              >
                <h3 
                  className="text-white text-2xl md:text-4xl font-black text-center tracking-wide"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    textShadow: "3px 3px 0 rgba(0,0,0,0.2)",
                    WebkitTextStroke: "1px rgba(0,0,0,0.1)",
                  }}
                >
                  {category.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
