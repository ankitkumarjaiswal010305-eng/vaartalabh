"use client"

import { ArrowRight } from "lucide-react"

export function SpecializedCTA() {
  return (
    <section id="footerctas" className="bg-[#f7efe9] py-20 px-6 md:px-12 border-t-4 border-black font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* Headline Column */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-black leading-tight tracking-tight text-black uppercase italic drop-shadow-sm">
              A community built <br /> on conversations
            </h2>
          </div>

          {/* WhatsApp Card */}
          <div className="md:col-span-2 bg-[#fbb040] border-4 border-black rounded-[32px] p-8 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#000] transition-all group cursor-pointer">
            <a href="https://chat.whatsapp.com/EnGgTPPZq7mLxIc47eBqt9?mode=gi_t" target="_blank" rel="noopener noreferrer"><div>
              <h3 className="text-2xl font-black mb-4 uppercase text-black">Join the WhatsApp community</h3>
              <p className="font-bold text-black/80 max-w-sm text-lg leading-snug">
                A safe space for exchanging ideas, events, job opportunities and opportunities for personal and career development.
              </p>
            </div>
              <div className="flex justify-end mt-8">
                <div className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center bg-white shadow-[4px_4px_0px_0px_#000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowRight className="w-7 h-7 text-black stroke-[3px]" />
                </div>
              </div></a>
          </div>

          {/* Partner Card */}
          <div className="bg-[#77a4d4] border-4 border-black rounded-[32px] p-8 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#000] transition-all group cursor-pointer">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEiv9Ug-BVTvQDMsD52J8092my0txEC3Lb7urX4Af2dEn9rg/viewform" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl font-black uppercase text-black leading-tight">Become a <br /> partner</h3>
              <div className="flex justify-end mt-8">
                <div className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center bg-white shadow-[4px_4px_0px_0px_#000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowRight className="w-7 h-7 text-black stroke-[3px]" />
                </div>
              </div></a>
          </div>

          {/* Empty Space for Grid Alignment per screenshot */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Event Card */}
          <div className="bg-[#ff5757] border-4 border-black rounded-[32px] p-8 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#000] transition-all group cursor-pointer">
            <a href="https://forms.gle/4Xsz6w7qYyQBijVq6" target="_blank" rel="noopener noreferrer"><h3 className="text-2xl font-black uppercase text-black leading-tight">Join an <br /> event</h3>
              <div className="flex justify-end mt-8">
                <div className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center bg-white shadow-[4px_4px_0px_0px_#000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <ArrowRight className="w-7 h-7 text-black stroke-[3px]" />
                </div>
              </div></a>
          </div>

          {/* Simple Thought Card */}
          <div className="md:col-span-2 bg-white/40 border-4 border-black border-dashed rounded-[32px] p-6">
            <h3 className="text-xl font-black mb-4 uppercase text-black/40">A simple thought</h3>
            <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-[6px_6px_0px_0px_#000]">
              <p className="text-xl font-bold leading-relaxed italic text-black/90">
                "Most people don't lack ideas. They lack the right space, the right moment, or the right people to talk to."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}