import { Sparkles, Coffee, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Sticker Badge */}
            <div className="inline-flex items-center gap-2 bg-[#fbb040] border-2 border-[#000000] px-4 py-2 rounded-full shadow-[3px_3px_0px_0px_#000000] rotate-[-2deg]">
              <Sparkles className="w-4 h-4 text-[#000000]" />
              <span className="text-sm font-bold text-[#000000]">A community built on conversations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#000000] leading-tight text-balance">
              Making sense of{" "}
              <span className="relative inline-block">
                <span className="relative z-10">life</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#ff5757]/40 -rotate-1"></span>
              </span>{" "}
              through{" "}
              <span className="relative inline-block">
                <span className="relative z-10">conversations</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-[#77a4d4]/40 rotate-1"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#000000]/80 max-w-xl leading-relaxed text-pretty">
              Vartalaabh is an open, growing community of people who enjoy talking, listening, and learning from each other.We’re not a company, institute, or coaching platform.We’re individuals students, professionals, founders, and curious minds trying to make sense of work, careers, technology, and life through conversations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#ff5757] text-white border-4 border-[#000000] px-8 py-6 text-lg font-bold shadow-[6px_6px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                <a href="https://forms.gle/4Xsz6w7qYyQBijVq6" target="_blank" rel="noopener noreferrer">Join the Conversation</a>
              </Button>
              <Button variant="outline" className="bg-white text-[#000000] border-4 border-[#000000] px-8 py-6 text-lg font-bold shadow-[6px_6px_0px_0px_#77a4d4] hover:shadow-[3px_3px_0px_0px_#77a4d4] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEiv9Ug-BVTvQDMsD52J8092my0txEC3Lb7urX4Af2dEn9rg/viewform" target="_blank" rel="noopener noreferrer">Become a Partner</a>
              </Button>
            </div>

            {/* Mini Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#77a4d4] border-2 border-[#000000] rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#000000]">50+</p>
                  <p className="text-sm text-[#000000]/60">Members</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#fbb040] border-2 border-[#000000] rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                  <Coffee className="w-5 h-5 text-[#000000]" />
                </div>
                <div>
                  <p className="font-bold text-[#000000]">10+</p>
                  <p className="text-sm text-[#000000]/60">Conversations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration Area */}
          <div className="relative hidden lg:block">
            {/* Main decorative card */}
            <div className="relative z-10 bg-white border-4 border-[#000000] rounded-2xl p-8 shadow-[8px_8px_0px_0px_#000000] rotate-2">
              <div className="space-y-6">
                {/* Chat bubbles illustration */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#ff5757] border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div className="flex-1 bg-[#f7efe9] border-2 border-[#000000] rounded-xl p-4 shadow-[2px_2px_0px_0px_#000000]">
                    <p className="text-sm font-medium text-[#000000]">{'"'}How do you balance building a startup with life?{'"'}</p>
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <div className="flex-1 bg-[#77a4d4] border-2 border-[#000000] rounded-xl p-4 shadow-[2px_2px_0px_0px_#000000]">
                    <p className="text-sm font-medium text-white">{'"'}Honestly? It{"\'"}s messy. But having people to talk to helps...{'"'}</p>
                  </div>
                  <div className="w-12 h-12 bg-[#fbb040] border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                    <span className="text-[#000000] font-bold">S</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#77a4d4] border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                    <span className="text-white font-bold">P</span>
                  </div>
                  <div className="flex-1 bg-[#f7efe9] border-2 border-[#000000] rounded-xl p-4 shadow-[2px_2px_0px_0px_#000000]">
                    <p className="text-sm font-medium text-[#000000]">{'"'}Real talk - this is exactly what I needed to hear today!{'"'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fbb040] border-4 border-[#000000] rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_#000000] -rotate-12">
              <Lightbulb className="w-10 h-10 text-[#000000]" />
            </div>

            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ff5757] border-4 border-[#000000] rounded-2xl rotate-12 -z-10"></div>
            <div className="absolute top-1/2 -right-12 w-20 h-20 bg-[#77a4d4] border-4 border-[#000000] rounded-xl rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
