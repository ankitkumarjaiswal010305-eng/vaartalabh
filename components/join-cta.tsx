import { MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function JoinCTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#f7efe9] border-4 border-[#000000] rounded-2xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#000000] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000000] text-balance">
                Ready to find your people?
              </h2>
              <p className="text-[#000000]/80 text-lg leading-relaxed">
                Join a community where real conversations happen. No performative posts, no networking BS - just genuine human connection.
              </p>
              <Button className="bg-[#000000] text-white border-4 border-[#000000] px-8 py-6 text-lg font-bold shadow-[6px_6px_0px_0px_#ff5757] hover:shadow-[3px_3px_0px_0px_#ff5757] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                <a href="https://forms.gle/4Xsz6w7qYyQBijVq6" target="_blank" rel="noopener noreferrer">Get Your Invite</a>
              </Button>
            </div>

            {/* Decorative Illustration */}
            <div className="relative flex justify-center items-center">
              {/* Central Element */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-[#77a4d4] border-4 border-[#000000] rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_#000000]">
                  <MessageSquare className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </div>

                {/* Orbiting elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#ff5757] border-3 border-[#000000] rounded-xl flex items-center justify-center shadow-[3px_3px_0px_0px_#000000] rotate-12">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-8 w-20 h-20 bg-[#fbb040] border-3 border-[#000000] rotate-[-12deg] shadow-[3px_3px_0px_0px_#000000]"></div>

                {/* Starburst decoration */}
                <svg
                  className="absolute -bottom-8 right-0 w-24 h-24"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M50 0 L55 40 L95 50 L55 60 L50 100 L45 60 L5 50 L45 40 Z"
                    fill="#1a1a1a"
                  />
                </svg>
              </div>

              {/* Background shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-24 h-24 border-4 border-[#1a1a1a]/20 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-4 border-[#1a1a1a]/20 rounded-xl rotate-12"></div>
              </div>
            </div>
          </div>

          {/* Background decorative lines */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-0 opacity-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-0.5 bg-[#1a1a1a]"
                style={{
                  top: `${10 + i * 12}%`,
                  transform: `rotate(${-5 + i * 2}deg)`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
