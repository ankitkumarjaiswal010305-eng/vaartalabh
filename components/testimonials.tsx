"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote: "I was skeptical about joining another community, but Vartalaabh is different. The conversations here are raw, honest, and actually helpful. Found my co-founder through a late-night discussion about startup anxiety!",
    name: "Ananya Krishnan",
    role: "Co-founder at NeoHealth",
    avatar: "A",
    avatarBg: "#ff5757",
  },
  {
    quote: "As a student trying to break into tech, the mentorship I received here was invaluable. People actually take time to help. No strings attached, just genuine support from the community.",
    name: "Rohan Sharma",
    role: "SWE Intern at Google",
    avatar: "R",
    avatarBg: "#77a4d4",
  },
  {
    quote: "The mental health discussions saved me during a really tough phase. It&apos;s rare to find a space where you can be vulnerable without judgment. This community gets it.",
    name: "Meera Patel",
    role: "Product Lead at Cred",
    avatar: "M",
    avatarBg: "#fbb040",
  },
  {
    quote: "Finally, a community that feels like a coffee shop conversation, not a LinkedIn post. Real talk, real people, real connections. This is what community should feel like.",
    name: "Aditya Menon",
    role: "Founder, EdTech Startup",
    avatar: "A",
    avatarBg: "#ff5757",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="inline-block bg-[#77a4d4] border-2 border-[#000000] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#000000]">
            <h2 className="text-lg font-bold text-white">Testimonials</h2>
          </div>
          <p className="text-[#000000]/80 text-lg">
            Hear what our community members have to say
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-[#000000] border-4 border-[#000000] rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#ff5757]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current testimonial */}
            <div className="bg-white border-4 border-[#000000] rounded-xl p-6 shadow-[6px_6px_0px_0px_#fbb040] rotate-[-1deg]">
              <p className="text-[#000000] leading-relaxed mb-6 text-lg">
                {'"'}{testimonials[currentIndex].quote}{'"'}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-[#000000]/20">
                <div
                  className="w-12 h-12 border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] text-lg font-bold text-white"
                  style={{ backgroundColor: testimonials[currentIndex].avatarBg }}
                >
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-bold text-[#000000]">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-[#000000]/60">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Next testimonial preview */}
            <div className="hidden md:block bg-white/80 border-4 border-[#000000]/50 rounded-xl p-6 rotate-[1deg] opacity-60">
              <p className="text-[#000000] leading-relaxed mb-6">
                {'"'}{testimonials[(currentIndex + 1) % testimonials.length].quote.substring(0, 150)}...{'"'}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-[#000000]/20">
                <div
                  className="w-12 h-12 border-2 border-[#000000]/50 rounded-full flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: testimonials[(currentIndex + 1) % testimonials.length].avatarBg }}
                >
                  {testimonials[(currentIndex + 1) % testimonials.length].avatar}
                </div>
                <div>
                  <p className="font-bold text-[#000000]">{testimonials[(currentIndex + 1) % testimonials.length].name}</p>
                  <p className="text-sm text-[#000000]/60">{testimonials[(currentIndex + 1) % testimonials.length].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] hover:bg-[#f7efe9] transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#000000]" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? "w-4 h-4"
                      : "w-3 h-3"
                  }`}
                >
                  <Star
                    className={`w-full h-full ${
                      index === currentIndex
                        ? "text-[#fbb040] fill-[#fbb040]"
                        : "text-white/40 fill-white/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] hover:bg-[#f7efe9] transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-[#000000]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
