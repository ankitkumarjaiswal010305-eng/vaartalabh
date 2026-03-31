export function CommunityLogos() {
  const affiliations = [
    "Managers",
    "Team Leads",
    "Founders",
    "Students",
    "Non-Tech",
    "Civil Services",
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y-4 border-[#000000] bg-[#f7efe9]">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[#000000]/60 font-medium mb-8">
          Members from amazing Experiences
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {affiliations.map((name, index) => (
            <div
              key={name}
              className="text-lg md:text-xl font-bold text-[#000000]/40 hover:text-[#000000] transition-colors"
              style={{
                transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
