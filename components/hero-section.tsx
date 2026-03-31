"use client"

import { motion } from "framer-motion"
import { RefreshCw } from "lucide-react"
import { useState } from "react"

const images = [
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=700&fit=crop",
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const shuffleImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <section className="relative min-h-screen bg-[#f7efe9] overflow-hidden">
      {/* Left Rainbow Stripes */}
      <div className="absolute left-0 top-1/4 -translate-x-1/2 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none">
          <path
            d="M200 0 C200 0, 200 100, 120 100 C40 100, 40 200, 40 200 C40 200, 40 300, 120 300 C200 300, 200 400, 200 400"
            stroke="#f97316"
            strokeWidth="24"
            fill="none"
          />
          <path
            d="M200 0 C200 0, 200 100, 145 100 C65 100, 65 200, 65 200 C65 200, 65 300, 145 300 C200 300, 200 400, 200 400"
            stroke="#ff5757"
            strokeWidth="24"
            fill="none"
          />
          <path
            d="M200 0 C200 0, 200 100, 170 100 C90 100, 90 200, 90 200 C90 200, 90 300, 170 300 C200 300, 200 400, 200 400"
            stroke="#fbb040"
            strokeWidth="24"
            fill="none"
          />
        </svg>
      </div>

      {/* Right Rainbow Stripes */}
      <div className="absolute right-0 top-1/4 translate-x-1/2 hidden lg:block">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="scale-x-[-1]">
          <path
            d="M200 0 C200 0, 200 100, 120 100 C40 100, 40 200, 40 200 C40 200, 40 300, 120 300 C200 300, 200 400, 200 400"
            stroke="#f97316"
            strokeWidth="24"
            fill="none"
          />
          <path
            d="M200 0 C200 0, 200 100, 145 100 C65 100, 65 200, 65 200 C65 200, 65 300, 145 300 C200 300, 200 400, 200 400"
            stroke="#ff5757"
            strokeWidth="24"
            fill="none"
          />
          <path
            d="M200 0 C200 0, 200 100, 170 100 C90 100, 90 200, 90 200 C90 200, 90 300, 170 300 C200 300, 200 400, 200 400"
            stroke="#fbb040"
            strokeWidth="24"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-16 md:py-24">
        {/* Sun Icon and Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          {/* Sun Icon */}
          <div className="w-12 h-12 rounded-full bg-[#fbb040] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-2xl">&#9786;</span>
          </div>
          
          {/* Date Badge */}
          <div className="bg-[#f97316] text-white px-5 py-2 rounded-full border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-semibold text-sm">
            Friday 8th August, Manchester, UK
          </div>
        </motion.div>

        {/* Main Heading with Sticker Effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-center max-w-4xl mb-4 leading-tight"
          style={{
            WebkitTextStroke: "3px black",
            textShadow: "4px 4px 0px rgba(0,0,0,1)",
            color: "white",
            paintOrder: "stroke fill",
          }}
        >
          Webflow chat, festival vibes, good times.
        </motion.h1>

        {/* Tilted Subheading */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          animate={{ opacity: 1, rotate: -2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-[#f97316] px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-12"
          style={{ transform: "rotate(-2deg)" }}
        >
          <span
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white"
            style={{
              WebkitTextStroke: "2px black",
              textShadow: "3px 3px 0px rgba(0,0,0,1)",
              paintOrder: "stroke fill",
            }}
          >
            Flowfest is back.
          </span>
        </motion.div>

        {/* Central Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-[3rem] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-[300px] h-[380px] md:w-[380px] md:h-[480px]">
            <motion.img
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={images[currentImage]}
              alt="Festival moment"
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
            
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-white/50 rounded-tl-2xl" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-white/50 rounded-tr-2xl" />
            <div className="absolute bottom-16 left-4 w-8 h-8 border-b-4 border-l-4 border-white/50 rounded-bl-2xl" />
            <div className="absolute bottom-16 right-4 w-8 h-8 border-b-4 border-r-4 border-white/50 rounded-br-2xl" />
          </div>

          {/* Shuffle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={shuffleImage}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 font-semibold hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Shuffle
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path
            d="M0 50 Q360 100 720 50 T1440 50 V100 H0 Z"
            fill="#f7efe9"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </div>
    </section>
  )
}
