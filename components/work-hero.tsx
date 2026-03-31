"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function WorkHero() {
  return (
    <section className="relative min-h-screen bg-[#f7efe9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Illustration with Waving Hand Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main illustration */}
              <div className="relative rounded-3xl border-4 border-[#000000] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <Image
                  src="/work-hero-illustration.jpg"
                  alt="Person working at desk waving hello"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Waving Hand Animation - Isolated SVG overlay */}
                <svg
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  viewBox="0 0 600 600"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Hand waving - animated with transform */}
                  <motion.g
                    animate={{
                      rotate: [0, 15, 0, -15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ transformOrigin: "160px 180px" }}
                  >
                    {/* Forearm */}
                    <rect x="130" y="180" width="35" height="120" fill="none" stroke="black" strokeWidth="3" rx="8" />
                    {/* Hand */}
                    <circle cx="160" cy="150" r="28" fill="none" stroke="black" strokeWidth="3" />
                    {/* Fingers */}
                    <line x1="160" y1="120" x2="160" y2="90" stroke="black" strokeWidth="3" strokeLinecap="round" />
                    <line x1="185" y1="135" x2="205" y2="115" stroke="black" strokeWidth="3" strokeLinecap="round" />
                    <line x1="175" y1="125" x2="190" y2="100" stroke="black" strokeWidth="3" strokeLinecap="round" />
                  </motion.g>
                </svg>
              </div>

              {/* Floating geometric elements - top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-[#fbb040] border-3 border-[#000000] rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                className="absolute -top-2 right-12 w-12 h-12 bg-[#fbb040] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:pl-8"
          >
            {/* Headline with special styling */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#000000] leading-tight text-balance">
                WORK
                <br />
                THAT
                <br />
                MATTERS
              </h1>

              {/* Floating geometric accent near "MATTERS" */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, linear: true }}
                className="absolute -top-8 right-0 w-8 h-8 bg-[#fbb040] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, linear: true }}
                className="absolute top-20 right-24 w-6 h-6 bg-[#fbb040] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
              />
            </div>

            {/* Subtext Group */}
            <div className="space-y-4">
              <p className="text-sm md:text-base font-semibold text-[#000000]/60 tracking-wide">
                Search • Talent Consultancy
              </p>
              <p className="text-lg md:text-xl text-[#000000]/70 max-w-lg leading-relaxed">
                Connecting groundbreaking companies with extraordinary talent
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Primary Button - Yellow */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-[#fbb040] hover:bg-[#f9a825] text-[#000000] font-bold px-8 py-4 rounded-full border-3 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all text-lg">
                  Learn more
                </button>
              </motion.div>

              {/* Secondary Button - Outline */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-transparent hover:bg-[#f7efe9] text-[#000000] font-bold px-8 py-4 rounded-full border-3 border-[#000000] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] transition-all text-lg">
                  Get in touch
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
