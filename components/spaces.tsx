import { ArrowUpRight, Code, Rocket, Heart, Brain, BookOpen, Compass } from "lucide-react"

const spaces = [
  {
    title: "Tech & Building",
    description: "Discussions on coding, products, and the craft of building things that matter.",
    icon: Code,
    color: "#ff5757",
    rotate: "-1deg",
  },
  {
    title: "Startup Life",
    description: "Real talk about the founder journey - the highs, the lows, and everything in between.",
    icon: Rocket,
    color: "#fbb040",
    rotate: "1deg",
  },
  {
    title: "Career & Growth",
    description: "Navigate your career path with insights from those who have been there.",
    icon: Compass,
    color: "#77a4d4",
    rotate: "-0.5deg",
  },
  {
    title: "Mental Wellness",
    description: "A safe space to talk about stress, burnout, and finding balance in the chaos.",
    icon: Heart,
    color: "#ff5757",
    rotate: "1.5deg",
  },
  {
    title: "Learning Together",
    description: "Share resources, courses, and learn new skills with curious minds.",
    icon: BookOpen,
    color: "#77a4d4",
    rotate: "-1.5deg",
  },
  {
    title: "Life Philosophy",
    description: "Deep conversations about purpose, meaning, and making sense of it all.",
    icon: Brain,
    color: "#fbb040",
    rotate: "0.5deg",
  },
]

export function Spaces() {
  return (
    <section id="spaces" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="inline-block bg-[#ff5757] border-2 border-[#000000] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#000000]">
            <h2 className="text-lg font-bold text-white">Spaces</h2>
          </div>
          <p className="text-[#000000]/80 text-lg">
            Different conversations for different moods. Find your tribe.
          </p>
        </div>

        {/* Spaces Grid - Artistic/Irregular */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => {
            const IconComponent = space.icon
            return (
              <div
                key={space.title}
                className="group bg-white border-4 border-[#000000] rounded-xl p-6 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all cursor-pointer"
                style={{ transform: `rotate(${space.rotate})` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[#000000]">{space.title}</h3>
                  <div
                    className="w-16 h-16 border-2 border-[#000000] rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]"
                    style={{ backgroundColor: space.color }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                <p className="text-[#000000]/70 mb-6 leading-relaxed">{space.description}</p>

                <div className="flex items-center gap-2 text-[#000000] font-medium group-hover:gap-3 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Join space</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
