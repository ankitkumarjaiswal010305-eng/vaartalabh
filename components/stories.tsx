import { ArrowUpRight } from "lucide-react"

const stories = [
  {
    quote: "Found co-founders for my startup through a casual conversation here. We bonded over shared frustrations about the job market!",
    tag: "Founder Story",
    tagColor: "#ff5757",
    linkText: "Read More",
  },
  {
    quote: "As a student confused about career paths, the mentorship I found here helped me land my dream internship at a YC startup.",
    tag: "Student Journey",
    tagColor: "#77a4d4",
    linkText: "Read More",
  },
  {
    quote: "The mental health discussions here helped me realize I wasn&apos;t alone in feeling burnt out. Found my support system.",
    tag: "Wellness Win",
    tagColor: "#fbb040",
    linkText: "Read More",
  },
]

export function Stories() {
  return (
    <section id="stories" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f7efe9] border-y-4 border-[#000000]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="inline-block bg-[#77a4d4] border-2 border-[#000000] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#000000]">
            <h2 className="text-lg font-bold text-white">Community Stories</h2>
          </div>
          <p className="text-[#000000]/80 text-lg">
            Real impact from real conversations
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white border-4 border-[#000000] rounded-xl p-6 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              style={{
                transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
              }}
            >
              <div
                className="inline-block border-2 border-[#000000] px-3 py-1 rounded-full text-sm font-bold text-white mb-4 shadow-[2px_2px_0px_0px_#000000]"
                style={{ backgroundColor: story.tagColor }}
              >
                {story.tag}
              </div>

              <p className="text-[#000000] leading-relaxed mb-6">
                {'"'}{story.quote}{'"'}
              </p>

              <div className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all" style={{ color: story.tagColor }}>
                <span>{story.linkText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
