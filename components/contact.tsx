"use client"

import dynamic from "next/dynamic"
import { Sparkles } from "lucide-react"

const ContactForm = dynamic(
  () => import("./contact-form").then((mod) => mod.ContactForm),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-[#f7efe9] border-4 border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_black] rotate-[-1deg] min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-black/50 font-medium">Loading form...</div>
      </div>
    )
  }
)

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f7efe9] border-y-4 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="inline-block bg-[#fbb040] border-2 border-black px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_black]">
            <h2 className="text-lg font-bold text-black">Get in Touch</h2>
          </div>
          <p className="text-black/80 text-lg">Say hello or request an invite to join the community</p>
        </div>

        <div className="bg-black border-4 border-black rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#77a4d4]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <ContactForm />

            <div className="relative flex flex-col items-center justify-center h-full">
              <div className="relative">
                <svg className="w-48 h-48 md:w-64 md:h-64" viewBox="0 0 200 200" fill="none">
                  {[...Array(16)].map((_, i) => (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={100 + 100 * Math.cos((i * 22.5 * Math.PI) / 180)}
                      y2={100 + 100 * Math.sin((i * 22.5 * Math.PI) / 180)}
                      stroke="#f7efe9"
                      strokeWidth="2"
                    />
                  ))}
                  <path d="M100 20 L115 80 L180 100 L115 120 L100 180 L85 120 L20 100 L85 80 Z" fill="#fbb040" stroke="black" strokeWidth="3" />
                  <circle cx="100" cy="100" r="30" fill="#77a4d4" stroke="black" strokeWidth="3" />
                </svg>

                <div className="absolute -top-4 -left-8 w-12 h-12 bg-[#ff5757] border-2 border-[#f7efe9] rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_#f7efe9] rotate-12">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#fbb040] border-2 border-[#f7efe9] rounded-xl -rotate-12 shadow-[3px_3px_0px_0px_#f7efe9]" />
              </div>

              <p className="text-[#f7efe9] text-center mt-8 font-medium max-w-xs leading-relaxed">We read every message. Expect to hear back within 24-48 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
