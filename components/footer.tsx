"use client"

import { Languages } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f7efe9] pb-16 pt-10 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto border-t-2 border-black/10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Logo and Contact Section (6 columns) */}
          <div className="lg:col-span-6 space-y-10">
            {/* VartaLaabh Logo SVG/Shapes */}
            <div className="flex items-center gap-3">
              <div className="relative w-25 h-25">
                <img src="/white circle-bglogo.svg" alt="" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="font-bold text-black/50 text-lg">support@Vartalaabh.com</p>
              <button className="flex items-center gap-3 bg-white border-4 border-black px-6 py-2 rounded-xl shadow-[4px_4px_0px_0px_#000] font-black uppercase text-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <Languages className="w-5 h-5 stroke-[3px]" />
                English
              </button>
            </div>
          </div>

          {/* Links Column: About (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-black text-2xl uppercase tracking-tighter text-black">About us</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-bold text-black/70 text-lg hover:text-[#ff5757] transition-colors decoration-2 underline-offset-4 hover:underline">
                  Vartalaabh
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column: Join (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-black text-2xl uppercase tracking-tighter text-black">Join us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://chat.whatsapp.com/EnGgTPPZq7mLxIc47eBqt9?mode=gi_t" className="font-bold text-black/70 text-lg hover:text-[#ff5757] transition-colors decoration-2 underline-offset-4 hover:underline">
                  WhatsApp community
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/varta_laabh" className="font-bold text-black/70 text-lg hover:text-[#ff5757] transition-colors decoration-2 underline-offset-4 hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}