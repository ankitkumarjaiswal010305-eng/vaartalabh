"use client";

import Image from "next/image";
import { Heading } from "@/src/app/[locale]/components/heading";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import { Card } from "@/src/app/[locale]/components/card";
import { Paragraph } from "@/src/app/[locale]/components/paragraph";
import imageLoader from "@/src/app/utils/image-loader";
import { LinkButton } from "@/src/app/[locale]/components/link-button";
import { formatDate, formatTime } from "@/src/app/utils/date";
import { usePathname } from "@/src/i18n/navigation";
import { LoadingAnimation } from "@/src/app/[locale]/components/loading-animation";
import { InlineError } from "@/src/app/[locale]/components/inline-error";
// import { useSanityData } from "@/src/app/utils/use-sanity-data";
import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";

interface EventData {
  title: string;
  description: string;
  eventImage: { src: string; alt: string };
  location: string;
  applyLink: string;
  eventTime: string;
}

const NEXT_EVENT_QUERY = `*[
  _type == "event" && language == $language && eventTime >= $today
] | order(eventTime) [0] {title, description, eventImage, location, applyLink, eventTime}`;

function NextEventContent() {
  const t = useTranslations();
  
  const nextEvent: EventData = {
    title: "Naavigation — Direction Through Conversation",
    description:
      "Finding direction through shared conversations and perspectives. Naavigation is a discussion meetup to slow down, talk openly, and find clearer direction through shared perspectives. Expect open group discussions, honest viewpoints, and a friendly low-pressure environment.",
    eventImage: {
      src: "/images/events/naavigation.jpg", // 👉 add this image to your public folder
      alt: "People sitting together in a group discussion outdoors",
    },
    location: "Rose Garden, Sector 16 · Chandigarh",
    applyLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe6htMJAgCZDU-wP4Oy9qdtTc0RqfSyAWG7oqQ5bk3h9VLCnQ/viewform",
    eventTime: "2026-02-08T11:00:00+05:30", // IST
  };

  const imageSrc = imageLoader(nextEvent.eventImage);
  const date = formatDate(nextEvent.eventTime);
  const time = formatTime(nextEvent.eventTime);
  const formattedDateAndTime = [date, time].join(` ${t("Events.at")} `);

  return (
    <div className="w-full md:flex gap-8 md:items-center">
      <div className="h-full lg:basis-2/5">
        <Image
       src="/assets/logo.png"
          width={500}
          height={500}
          alt={nextEvent.eventImage.alt || t("Common.image_alt")}
          className="w-full object-cover aspect-square rounded-2xl"
        />
      </div>

      <div className="flex flex-col pt-4 gap-6 md:gap-12 justify-center grow">
        <div className="flex flex-col gap-3">
          <Paragraph size="lg">
            {`${formattedDateAndTime} @ ${nextEvent.location}`}
          </Paragraph>

          <Heading size="sm">{nextEvent.title}</Heading>

          <Paragraph size="lg" className="max-w-xl">
            {nextEvent.description}
          </Paragraph>
        </div>

        <div>
          <LinkButton
            size="md"
            showIcon
            href={nextEvent.applyLink}
            isExternal
          >
            Confirm Attendance
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

export function NextEvent() {
  const pathname = usePathname();
  const t = useTranslations("Events");

  return (
    <PageWrapper bgColor="bg-red">
      <div id="next-event" className="flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="max-w-sm md:max-w-xl">
            <Heading size="lg">{t("title_next_event")}</Heading>
          </div>
          {/* {pathname !== "/dogodki" && (
            <div className="">
              <LinkButton size="md" variant="secondary" href="/dogodki">
                {t("all_events")}
              </LinkButton>
            </div>
          )} */}
        </div>
        <Card bgColor="bg-red100">
          <NextEventContent />
        </Card>
      </div>
    </PageWrapper>
  );
}
