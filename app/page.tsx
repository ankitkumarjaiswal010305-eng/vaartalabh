import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatToExpect from "@/components/what-to-expect"
import CommunitySpeakers from "@/components/community-speakers"
import { Hero } from "@/components/hero"
import { CommunityLogos } from "@/components/community-logos"
import { Spaces } from "@/components/spaces"
import { JoinCTA } from "@/components/join-cta"
import { Stories } from "@/components/stories"
import { HowItWorks } from "@/components/how-it-works"
import { Members } from "@/components/members"
import { Testimonials } from "@/components/testimonials"
import VideoReviews from "@/components/video-reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import FAQAccordion from "@/components/faq-accordion"
import { WorkHero } from "@/components/work-hero"
import { SpecializedCTA } from "@/components/specializedcta"

// VartaLaabh - All 15 Sections Integrated
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7efe9]">
      <Header />
      <Hero />
      {/* <WorkHero /> */}
      {/* <HeroSection /> */}
      <WhatToExpect />
      <CommunityLogos />
      <CommunitySpeakers />
      {/* <Spaces /> */}
      {/* <Stories /> */}
      <HowItWorks />
      <JoinCTA />
      {/* <Members /> */}
      <VideoReviews />
      {/* <Testimonials /> */}
      <FAQAccordion
        items={[
          { id: '1', question: 'What should I bring?', answer: 'Just yourself 🙂 If you want — bring your thoughts, questions, or something you’ve been thinking about lately. No laptops, no presentations, no pressure.' },
          { id: '2', question: 'Will there be an afterparty?', answer: 'No afterparty 😄 But good conversations usually continue even after the meetup ends. Sometimes people stay back, grab chai, plan lunch together or just keep talking.' },
          { id: '3', question: 'Who is this for?', answer: 'Anyone who enjoys meaningful conversations. Students, professionals, founders, or just curious minds, if you like sharing ideas and learning from others, you’ll fit right in.' },
          { id: '4', question: 'How does it work?', answer: 'We sit together (usually in a circle), introduce ourselves, pick a topic, and start talking. No fixed agenda. No one dominating. Just open, flowing conversations.' },
          { id: '5', question: 'Is it suitable for me?', answer: 'If you’re open to listening, sharing, and learning, yes.You don’t need to be an expert or extrovert. Even if you just want to listen, that’s completely fine.' },
          // Add more items
        ]}
        imageUrl="vtl.jpeg"
      />
      {/* <Contact /> */}

      <SpecializedCTA />
      <Footer />
    </main>
  )
}
