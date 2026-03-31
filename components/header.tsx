"use client"

import { useState } from "react"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#howitworks" },
    { label: "Faqs", href: "#faqs" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#f7efe9] border-b-4 border-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-15 h-15  flex items-center justify-center ">
              <img src="/white circle-bglogo.svg" alt="" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-[#000000]">
              VartaLaabh
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-[#000000] font-medium hover:bg-[#fbb040]/20 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#000000] text-white border-2 border-[#000000] px-6 py-2 font-semibold shadow-[4px_4px_0px_0px_#ff5757] hover:shadow-[2px_2px_0px_0px_#ff5757] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <a href="https://forms.gle/4Xsz6w7qYyQBijVq6" target="_blank">Join the Circle</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-[#000000] rounded-lg shadow-[2px_2px_0px_0px_#000000]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#000000]" />
            ) : (
              <Menu className="w-6 h-6 text-[#000000]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-[#000000]">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-[#000000] font-medium hover:bg-[#fbb040]/20 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-2 bg-[#000000] text-white border-2 border-[#000000] px-6 py-3 font-semibold shadow-[4px_4px_0px_0px_#ff5757]">
                <a href="https://forms.gle/4Xsz6w7qYyQBijVq6"  target="_blank">Join the Circle</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
