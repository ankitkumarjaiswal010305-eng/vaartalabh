"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formType, setFormType] = useState<"hello" | "invite">("hello")

  return (
    <div className="bg-[#f7efe9] border-4 border-[#000000] rounded-xl p-6 shadow-[6px_6px_0px_0px_#fbb040] rotate-[-1deg]">
      {/* Form Type Toggle */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFormType("hello")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#000000] font-medium transition-all ${
            formType === "hello"
              ? "bg-[#ff5757] text-white shadow-[2px_2px_0px_0px_#000000]"
              : "bg-white text-[#000000]"
          }`}
        >
          <div className={`w-3 h-3 rounded-full border-2 ${formType === "hello" ? "bg-white border-white" : "border-[#000000]"}`}></div>
          Say Hello
        </button>
        <button
          onClick={() => setFormType("invite")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#000000] font-medium transition-all ${
            formType === "invite"
              ? "bg-[#77a4d4] text-white shadow-[2px_2px_0px_0px_#000000]"
              : "bg-white text-[#000000]"
          }`}
        >
          <div className={`w-3 h-3 rounded-full border-2 ${formType === "invite" ? "bg-white border-white" : "border-[#000000]"}`}></div>
          Get Invite
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-[#000000] font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            autoComplete="off"
            data-lpignore="true"
            data-form-type="other"
            className="w-full px-4 py-3 bg-white border-2 border-[#000000] rounded-lg shadow-[3px_3px_0px_0px_#000000] focus:shadow-[4px_4px_0px_0px_#000000] focus:outline-none transition-shadow"
          />
        </div>

        <div>
          <label className="block text-[#000000] font-medium mb-2">Email*</label>
          <input
            type="email"
            placeholder="your@email.com"
            required
            autoComplete="off"
            data-lpignore="true"
            data-form-type="other"
            className="w-full px-4 py-3 bg-white border-2 border-[#000000] rounded-lg shadow-[3px_3px_0px_0px_#000000] focus:shadow-[4px_4px_0px_0px_#000000] focus:outline-none transition-shadow"
          />
        </div>

        <div>
          <label className="block text-[#000000] font-medium mb-2">
            {formType === "hello" ? "Message*" : "Tell us about yourself*"}
          </label>
          <textarea
            placeholder={
              formType === "hello"
                ? "What would you like to chat about?"
                : "What excites you? What conversations do you want to have?"
            }
            rows={4}
            required
            data-lpignore="true"
            data-form-type="other"
            className="w-full px-4 py-3 bg-white border-2 border-[#000000] rounded-lg shadow-[3px_3px_0px_0px_#000000] focus:shadow-[4px_4px_0px_0px_#000000] focus:outline-none transition-shadow resize-none"
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#000000] text-white border-2 border-[#000000] px-6 py-4 font-bold shadow-[4px_4px_0px_0px_#ff5757] hover:shadow-[2px_2px_0px_0px_#ff5757] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {formType === "hello" ? "Send Message" : "Request Invite"}
        </Button>
      </form>
    </div>
  )
}
