"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Join the Community",
    content: "Fill out a quick form telling us about yourself and what conversations excite you. Then, Join our WhatsApp community.",
    color: "#ff5757"
  },
  {
    number: "02",
    title: "Find Your People",
    content: "Based on your interests, participate in conversations that matter to you. Explore discussions, topics, and members.",
    color: "#f97316"
  },
  {
    number: "03",
    title: "Join Naavigation (Meetups)",
    content: "Meet people offline. Jump into discussions, ask questions, share your journey, Listen. No judgment, just genuine talks with curious minds.",
    color: "#fbb040"
  },
  {
    number: "04",
    title: "Start Real Conversations",
    content: "Connect with people who resonate with you. Form lasting relationships beyond just professional networking.",
    color: "#77a4d4"
  },
  {
    number: "05",
    title: "Grow Together",
    content: "Learn and grow with your community. Clarity, confidence, and connections that grows naturally",
    color: "#ff5757"
  },
]

// NAMED EXPORT: Import this using { HowItWorks }
export function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="howitworks" className="py-20 px-4 md:px-8 bg-[#f7efe9] border-t-4 border-black font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-16">
          <div className="bg-[#fbb040] border-4 border-black px-6 py-3 shadow-[6px_6px_0px_0px_#000] -rotate-1">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-black">How It Works</h2>
          </div>
          <p className="text-xl font-bold text-black max-w-md leading-tight">
            Your journey from stranger to community member.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Image */}
          <div className="lg:sticky lg:top-24 order-2 lg:order-1">
            <div className="relative">
              <div className="border-4 border-black bg-white p-2 shadow-[12px_12px_0px_0px_#000] rounded-[40px_10px_60px_15px] overflow-hidden group">
                <img 
                  src="vtl2.jpeg" 
                  alt="Community" 
                  className="w-full h-[500px] object-cover rounded-[35px_5px_55px_10px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-[#77a4d4] border-4 border-black px-6 py-4 shadow-[6px_6px_0px_0px_#000] rotate-6 hidden md:block">
                <span className="font-black text-xl text-black">JOIN THE LOOP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="space-y-6 order-1 lg:order-2">
            {steps.map((step, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={step.number}
                  className={`bg-white border-4 border-black transition-all cursor-pointer ${
                    isOpen ? "shadow-[8px_8px_0px_0px_#000] -translate-y-1" : "shadow-[4px_4px_0px_0px_#000]"
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className="text-4xl font-black opacity-30" style={{ color: step.color }}>
                          {step.number}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-black uppercase leading-none">
                          {step.title}
                        </h3>
                      </div>
                      <div 
                        className={`w-10 h-10 border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000] transition-colors ${
                          isOpen ? "bg-[#ff5757]" : "bg-white"
                        }`}
                      >
                        {isOpen ? <Minus className="text-white" /> : <Plus className="text-black" />}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-6 font-bold text-black/70 leading-snug">
                            {step.content}
                          </p>
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