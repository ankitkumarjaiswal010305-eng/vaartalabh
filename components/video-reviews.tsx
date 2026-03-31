"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Shubham Sharma",
    category: "Review",
    testimonial: "This community changed my perspective on so many things. The honest conversations about burnout and work-life balance were exactly what I needed!",
    thumbnail: "/placeholder.svg?height=400&width=400",
    youtubeUrl: "https://youtube.com/watch?v=example1",
    bgColor: "#f97316",
  },
  {
    id: 2,
    name: "Shubham Mehta",
    category: "Review",
    testimonial: "The discussions are real and raw. No sugarcoating, just honest advice from people who've been there.",
    thumbnail: "/placeholder.svg?height=400&width=400",
    youtubeUrl: "https://youtube.com/watch?v=example2",
    bgColor: "#ff5757",
  },
  {
    id: 3,
    name: "Anshita",
    category: "Review",
    testimonial: "This is the real deal.",
    thumbnail: "/placeholder.svg?height=400&width=400",
    youtubeUrl: "https://youtube.com/watch?v=example3",
    bgColor: "#fbb040",
  },
  // {
  //   id: 4,
  //   name: "Madhvan",
  //   category: "Review",
  //   testimonial: "Learned more here than a year of watching YouTube videos. Highly recommend!",
  //   thumbnail: "/placeholder.svg?height=400&width=400",
  //   youtubeUrl: "https://youtube.com/watch?v=example4",
  //   bgColor: "#f97316",
  // },
  // {
  //   id: 5,
  //   name: "Vivek",
  //   category: "Review",
  //   testimonial: "As a non-tech , I felt intimidated at first. But everyone here is so welcoming. Now I understand my product better than ever!",
  //   thumbnail: "/placeholder.svg?height=400&width=400",
  //   youtubeUrl: "https://youtube.com/watch?v=example5",
  //   bgColor: "#fbb040",
  // },
  // {
  //   id: 6,
  //   name: "Kushal", 
  //   category: "Review",
  //   testimonial: "Real stories from real people who made an introvert to extrovert.",
  //   thumbnail: "/placeholder.svg?height=400&width=400",
  //   youtubeUrl: "https://youtube.com/watch?v=example6",
  //   bgColor: "#ff5757",
  // },
]

export default function VideoReviews() {
  return (
    <section className="bg-[#f7efe9] py-20 px-4 md:px-8 lg:px-16 overflow-hidden min-h-screen border-y-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-2">
            What Our
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-block bg-[#f97316] px-4 py-2 text-3xl md:text-4xl lg:text-5xl font-black text-white border-4 border-black transform -rotate-1 shadow-[4px_4px_0px_0px_black]">
              Community
            </span>
            <span className="inline-block bg-[#f97316] px-4 py-2 text-3xl md:text-4xl lg:text-5xl font-black text-white border-4 border-black transform rotate-1 shadow-[4px_4px_0px_0px_black]">
              Says
            </span>
          </div>
          <p className="text-black text-base md:text-lg max-w-md mb-6">
            Real stories from real members. Hear how Vartalaabh has helped people find their tribe, build connections, and navigate life&apos;s big questions.
          </p>
          <a
            href="https://youtube.com/@vartalaabh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ff5757] text-white font-bold px-6 py-3 border-4 border-black rounded-full transition-all shadow-[4px_4px_0px_0px_black] hover:shadow-[2px_2px_0px_0px_black]"
          >
            View More on YouTube
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_black]"
            >
              <div className="p-3 pb-0">
                <span className="inline-block bg-white text-black text-xs font-bold px-3 py-1 border-2 border-black rounded-md">
                  {review.category}
                </span>
              </div>

              <a
                href={review.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative m-3 mt-2"
              >
                <div
                  className="relative aspect-square rounded-xl overflow-hidden border-3 border-black"
                  style={{ backgroundColor: review.bgColor }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 bg-white border-3 border-black rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_black]"
                    >
                      <Play className="w-7 h-7 text-black fill-black ml-1" />
                    </motion.div>
                  </div>

                  <div className="absolute top-2 left-2 w-4 h-4 border-l-3 border-t-3 border-black" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-3 border-t-3 border-black" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-3 border-b-3 border-black" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-3 border-b-3 border-black" />

                  <div className="absolute bottom-3 right-3">
                    <span className="inline-block bg-white text-black text-sm font-bold px-4 py-1.5 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_black]">
                      {review.name}
                    </span>
                  </div>
                </div>
              </a>

              <div className="px-4 pb-4">
                <p className="text-black text-sm leading-relaxed">
                  {review.testimonial}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
