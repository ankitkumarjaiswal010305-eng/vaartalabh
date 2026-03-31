"use client"

import { motion } from "framer-motion"
import { Ticket } from "lucide-react"
import Image from "next/image"

const speakers = [
  {
    name: "Priyanshu Purohit",
    image: "/placeholder.svg?height=300&width=300",
    color: "#f97316", // orange
  },
  {
    name: "Shubham Mehta",
    image: "/placeholder.svg?height=300&width=300",
    color: "#ff5757", // coral
  },
  {
    name: "Shubham Sharma",
    image: "/placeholder.svg?height=300&width=300",
    color: "#fbb040", // amber
  },
  {
    name: "Sonu",
    image: "/placeholder.svg?height=300&width=300",
    color: "#f97316", // orange
  },
  {
    name: "Harendra Negi",
    image: "/placeholder.svg?height=300&width=300",
    color: "#fbb040", // amber
  },
  {
    name: "Anshita",
    image: "/placeholder.svg?height=300&width=300",
    color: "#ff5757", // coral
  },
]

export default function CommunitySpeakers() {
  return (
    <section id="core-members" className="bg-[#f7efe9] py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Heading and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight mb-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              An Event Ran by
              <br />
              The Community,
            </h2>
            
            {/* Tilted orange box */}
            <div className="inline-block mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: -2 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-[#f97316] px-4 py-2 border-[3px] border-black relative"
                style={{
                  boxShadow: "4px 4px 0 rgba(0,0,0,1)",
                }}
              >
                <span 
                  className="text-white text-3xl md:text-4xl font-black"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  For The Community
                </span>
              </motion.div>
            </div>

            <p className="text-[#1a1a1a] text-base md:text-lg mb-8 max-w-md leading-relaxed">
              <span className="font-bold">VartaLaabh</span> isn’t run by one person or a fixed team. It’s built by people who <span className="font-bold">show up, share, and contribute. </span> 
               From students to professionals, everyone brings <span className="font-bold">something</span> to the table.
            </p>
            {/* Buy Tickets button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#ff5757] text-white font-bold px-6 py-3 rounded-full border-2 border-black transition-all"
              style={{
                boxShadow: "3px 3px 0 rgba(0,0,0,1)",
              }}
            >
              <Ticket className="w-5 h-5" />
              <a href="https://forms.gle/4Xsz6w7qYyQBijVq6" target="_blank" rel="noopener noreferrer">Apply to Join</a>
            </motion.button>
          </motion.div>

          {/* Right side - Speaker Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "6px 6px 0 rgba(0,0,0,1)",
                }}
                className="relative rounded-3xl overflow-hidden border-[4px] border-black cursor-pointer transition-all"
                style={{
                  backgroundColor: speaker.color,
                  boxShadow: "4px 4px 0 rgba(0,0,0,1)",
                }}
              >
                {/* Speaker image */}
                <div className="aspect-square relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                  <div className="bg-white px-4 py-1.5 rounded-full border-2 border-black whitespace-nowrap">
                    <span className="text-[#1a1a1a] text-sm font-semibold">
                      {speaker.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
