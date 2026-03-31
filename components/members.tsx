import { Linkedin, GraduationCap, Briefcase, Rocket, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const members = [
  {
    name: "Priyanshu Purohit",
    role: "Project Manager",
    badge: "Startup Builder",
    badgeColor: "#FF5757",
    badgeIcon: Rocket,
    description: "Building in public, sharing the messy middle of startup life. 3x founder, eternal optimist.",
    avatar: "P",
    avatarBg: "#FF5757",
  },
  {
    name: "Shubham Mehta",
    role: "Marketplace",
    badge: "Tech Enthusiast",
    badgeColor: "#77A4D4",
    badgeIcon: Briefcase,
    description: "Backend engineer by day, side-project builder by night. Love discussing system design.",
    avatar: "A",
    avatarBg: "#77A4D4",
  },
  {
    name: "Shubham Sharma",
    role: "SEO Team Lead",
    badge: "Curious Mind",
    badgeColor: "#FBB040",
    badgeIcon: Sparkles,
    description: "PM at a fintech startup. Passionate about user research and building products people love.",
    avatar: "N",
    avatarBg: "#FBB040",
  },
  {
    name: "Rahul Verma",
    role: "CS Student, IIT Delhi",
    badge: "Student",
    badgeColor: "#77A4D4",
    badgeIcon: GraduationCap,
    description: "Final year student figuring out life. Interested in AI/ML and the future of work.",
    avatar: "R",
    avatarBg: "#77A4D4",
  },
  {
    name: "Kavya Reddy",
    role: "Designer & Founder",
    badge: "Startup Builder",
    badgeColor: "#FF5757",
    badgeIcon: Rocket,
    description: "Design-led founder building tools for creators. Previously at Swiggy and Cred.",
    avatar: "K",
    avatarBg: "#FF5757",
  },
  {
    name: "Vikram Singh",
    role: "VC Associate",
    badge: "Curious Mind",
    badgeColor: "#FBB040",
    badgeIcon: Sparkles,
    description: "Exploring the startup ecosystem from the investor side. Love meeting ambitious builders.",
    avatar: "V",
    avatarBg: "#FBB040",
  },
]

export function Members() {
  return (
    <section id="community" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f7efe9] border-y-4 border-[#000000]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <div className="inline-block bg-[#ff5757] border-2 border-[#000000] px-4 py-2 rounded-lg shadow-[3px_3px_0px_0px_#000000]">
            <h2 className="text-lg font-bold text-white">Community Members</h2>
          </div>
          <p className="text-[#000000]/80 text-lg">
            Meet some of the amazing folks in our community
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => {
            const BadgeIcon = member.badgeIcon
            return (
              <div
                key={member.name}
                className="group bg-white border-4 border-[#000000] rounded-xl p-6 shadow-[6px_6px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                style={{
                  transform: `rotate(${index % 3 === 0 ? -0.5 : index % 3 === 1 ? 0.5 : 0}deg)`,
                }}
              >
                {/* Header with avatar and LinkedIn */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-14 h-14 border-2 border-[#000000] rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] text-xl font-bold text-white"
                      style={{ backgroundColor: member.avatarBg }}
                    >
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#000000]">{member.name}</h3>
                      <p className="text-sm text-[#000000]/60">{member.role}</p>
                    </div>
                  </div>
                  <button className="w-8 h-8 bg-white border-2 border-[#000000] rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] hover:bg-[#77a4d4] hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1 border-2 border-[#000000] px-3 py-1 rounded-full text-sm font-bold text-white mb-4 shadow-[2px_2px_0px_0px_#000000]"
                  style={{ backgroundColor: member.badgeColor }}
                >
                  <BadgeIcon className="w-3 h-3" />
                  <span>{member.badge}</span>
                </div>

                {/* Description */}
                <p className="text-[#000000]/70 leading-relaxed border-t-2 border-dashed border-[#000000]/20 pt-4">
                  {member.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-[#000000] text-white border-4 border-[#000000] px-8 py-6 text-lg font-bold shadow-[6px_6px_0px_0px_#77a4d4] hover:shadow-[3px_3px_0px_0px_#77a4d4] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            See All Members
          </Button>
        </div>
      </div>
    </section>
  )
}
