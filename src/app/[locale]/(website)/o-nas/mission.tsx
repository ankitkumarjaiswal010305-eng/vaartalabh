// "use client";

// import { Heading } from "@/src/app/[locale]/components/heading";
// import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
// import { Paragraph } from "@/src/app/[locale]/components/paragraph";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import mission from "../../../../../public/assets/mission.webp";
// import ada from "../../../../../public/assets/ada-lovelace.webp";
// import beginning from "../../../../../public/assets/beginning-story.webp";
// import { useTranslations } from "next-intl";

// export function Mission() {
//   const t = useTranslations("AboutUs");
//   const textVariants = {
//     hidden: { x: 50, opacity: 0 }, // Start off-screen (to the right)
//     visible: {
//       x: 0, // End at the original position
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" }, // Smooth transition
//     },
//   };

//   return (
//     <PageWrapper hasNoTopPadding>
//       <div className="flex">
//         <div className="hidden md:block min-w-24 relative"></div>
//         <div className="border border-black border-l-[1px] border-t-[1px] border-b-[1px] border-r-[1px] bg-white rounded-2xl">
//           {/* Section 1*/}
//           <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
//             <div className="flex w-full md:w-1/2 h-full items-center justify-center md:ml-[-96px] p-4 md:p-0">
//               <Image
//                 src={mission}
//                 placeholder="blur"
//                 alt="Alt text"
//                 width={700}
//                 height={700}
//                 className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-yellow hover:-translate-y-1 hover:translate-x-1"
//               />
//             </div>
//             <motion.div
//               className="w-full md:w-1/2 h-full flex flex-col justify-center p-4 md:px-20 gap-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.4 }} // Trigger animation when 50% of the div is in view
//               variants={textVariants}
//             >
//               <Heading size="lg" color="red">
//                 {t("mission.title")}
//               </Heading>
//               <Paragraph size="lg" weight="bold">
//                 {t("mission.subtitle")}
//               </Paragraph>
//               <Paragraph size="lg">{t("mission.description")}</Paragraph>
//             </motion.div>
//           </div>

//           {/* Section 2*/}
//           <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
//             <div className="flex w-full md:w-1/2 h-full items-center justify-center md:ml-[-96px] p-4 md:p-0">
//               <Image
//                 src={beginning}
//                 placeholder="blur"
//                 alt="Alt text"
//                 width={700}
//                 height={700}
//                 className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-blue hover:-translate-y-1 hover:translate-x-1"
//               />
//             </div>
//             <motion.div
//               className="w-full md:w-1/2 h-full flex flex-col justify-center p-4 md:px-20 gap-4"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.4 }} // Trigger animation when 50% of the div is in view
//               variants={textVariants}
//             >
//               <Heading size="lg" color="red">
//                 {t("story.title")}
//               </Heading>
//               <Paragraph size="lg" weight="bold">
//                 {t("story.subtitle")}
//               </Paragraph>
//               <Paragraph size="lg">{t("story.description")}</Paragraph>
//             </motion.div>
//           </div>

//           {/* Section 3*/}
//           <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
//             <div className="flex w-full md:w-1/2 h-full items-center justify-center md:ml-[-96px] p-4 md:p-0">
//               <Image
//                 src={ada}
//                 placeholder="blur"
//                 alt="Alt text"
//                 width={700}
//                 height={700}
//                 className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-pink hover:-translate-y-1 hover:translate-x-1"
//               />
//             </div>
//             <motion.div
//               className="w-full md:w-1/2 h-full flex flex-col justify-center p-4 md:px-20 gap-4"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.4 }} // Trigger animation when 50% of the div is in view
//               variants={textVariants}
//             >
//               <Heading size="lg" color="red">
//                 {t("name.title")}
//               </Heading>
//               <Paragraph size="lg" weight="bold">
//                 {t("name.subtitle")}
//               </Paragraph>
//               <Paragraph size="lg">{t("name.description")}</Paragraph>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </PageWrapper>
//   );
// }

"use client";

import { Heading } from "@/src/app/[locale]/components/heading";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import { Paragraph } from "@/src/app/[locale]/components/paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import mission from "../../../../../public/assets/mission.webp";
import ada from "../../../../../public/assets/ada-lovelace.webp";
import beginning from "../../../../../public/assets/beginning-story.webp";
import { useTranslations } from "next-intl";

export function Mission() {
  const t = useTranslations("AboutUs");

  const textVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <PageWrapper hasNoTopPadding>
      <div className="flex">
        <div className="hidden md:block min-w-24 relative"></div>
        <div className="border border-black bg-white rounded-2xl">
          
          {/* Section 1 — Mission */}
          <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
            <div className="flex w-full md:w-1/2 items-center justify-center md:ml-[-96px] p-4 md:p-0">
              <Image
                src={mission}
                placeholder="blur"
                alt="Vartalaabh mission"
                width={700}
                height={700}
                className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-yellow hover:-translate-y-1 hover:translate-x-1"
              />
            </div>

            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center p-4 md:px-20 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={textVariants}
            >
              <Heading size="lg" color="red">Mission</Heading>

              <Paragraph size="lg">
                To build a positive, supportive community where people can connect, share experiences, and grow through meaningful conversations.
              </Paragraph>

              <Paragraph size="lg">
                Vartalaabh is not a course, company, or coaching platform. It is a space where individuals from different backgrounds come together to talk, learn, and help each other move forward.
              </Paragraph>

              <Paragraph size="lg">
                Our focus is simple: create an environment where conversations lead to clarity, confidence, and connections.
              </Paragraph>
            </motion.div>
          </div>

          {/* Section 2 — Beginning Story */}
          <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
            <div className="flex w-full md:w-1/2 items-center justify-center md:ml-[-96px] p-4 md:p-0">
              <Image
                src={beginning}
                placeholder="blur"
                alt="How Vartalaabh started"
                width={700}
                height={700}
                className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-blue hover:-translate-y-1 hover:translate-x-1"
              />
            </div>

            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center p-4 md:px-20 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={textVariants}
            >
              <Heading size="lg" color="red">The story of the beginning</Heading>

              <Paragraph size="lg">
                Vartalaabh started from a simple observation — many people feel stuck, confused, or disconnected in their careers and lives, even when surrounded by information and opportunities.
              </Paragraph>

              <Paragraph size="lg">
                There are countless courses, mentors, and content online, but very few spaces where people can sit together and have honest, pressure-free conversations.
              </Paragraph>

              <Paragraph size="lg">
                So the idea was simple: create small, casual meetups where people can talk openly, listen to different perspectives, and support each other.
              </Paragraph>

              <Paragraph size="lg">
                No stage. No hierarchy. No “experts” and “beginners”. Just people, conversations, and shared growth. That is how Vartalaabh began.
              </Paragraph>
            </motion.div>
          </div>

          {/* Section 3 — Name Meaning */}
          <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
            <div className="flex w-full md:w-1/2 items-center justify-center md:ml-[-96px] p-4 md:p-0">
              <Image
                src={ada}
                placeholder="blur"
                alt="Meaning of Vartalaabh"
                width={700}
                height={700}
                className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-pink hover:-translate-y-1 hover:translate-x-1"
              />
            </div>

            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center p-4 md:px-20 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={textVariants}
            >
              <Heading size="lg" color="red">What does the name Vartalaabh mean?</Heading>

              <Paragraph size="lg">
                The name comes from two words: <strong>Varta</strong> – conversation, dialogue and <strong>Laabh</strong> – value, benefit, gain.
              </Paragraph>

              <Paragraph size="lg">
                Together, Vartalaabh represents the idea that real value often comes from the right conversation.
              </Paragraph>

              <Paragraph size="lg">
                A single discussion can change direction, open new perspectives, create opportunities, and build meaningful connections. The community is built around this belief.
              </Paragraph>
            </motion.div>
          </div>

          {/* Section 4 — Future Direction */}
          <div className="flex flex-col md:flex-row md:h-[90vh] w-full">
            <div className="flex w-full md:w-1/2 items-center justify-center md:ml-[-96px] p-4 md:p-0">
              <Image
                src={mission}
                placeholder="blur"
                alt="Future of Vartalaabh community"
                width={700}
                height={700}
                className="aspect-square object-cover rounded-2xl border border-black transition-all duration-200 ease-in-out transform hover:shadow-green hover:-translate-y-1 hover:translate-x-1"
              />
            </div>

            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-center p-4 md:px-20 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={textVariants}
            >
              <Heading size="lg" color="red">Where the community is heading</Heading>

              <Paragraph size="lg">
                Today, Vartalaabh focuses on simple, casual meetups like Naavigation, where people gather to talk and learn from each other.
              </Paragraph>

              <Paragraph size="lg">
                As the community grows, we may explore domain-specific discussions, panel conversations, guest sessions, startup or investor meetups, special community events, and friendly competitions.
              </Paragraph>

              <Paragraph size="lg">
                The direction will always be shaped by the people in the community.
              </Paragraph>
            </motion.div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
