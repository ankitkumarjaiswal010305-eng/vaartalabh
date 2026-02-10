"use client";

import Image from "next/image";
import { Heading } from "@/src/app/[locale]/components/heading";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import { Card } from "@/src/app/[locale]/components/card";
import { Paragraph } from "@/src/app/[locale]/components/paragraph";
import { LinkButton } from "@/src/app/[locale]/components/link-button";
import { formatDate, formatTime } from "@/src/app/utils/date";
import { useTranslations } from "next-intl";

interface EventData {
  title: string;
  description: string;
  location: string;
  applyLink: string;
  eventTime: string;
}

function NextEventContent() {
  const t = useTranslations();

  const events: EventData[] = [
    {
      title: "Open Circle — Stories, Ideas & Real Talk",
      description:
        "An open community circle where anyone can share thoughts, ideas, questions, or stories. No pressure, no stage — just people, perspectives, and meaningful conversations.",
      location: "Underpass Café, Sector 17 · Chandigarh",
      applyLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe6htMJAgCZDU-wP4Oy9qdtTc0RqfSyAWG7oqQ5bk3h9VLCnQ/viewform",
      eventTime: "2026-02-22T17:00:00+05:30",
    },
    {
      title: "Naavigation — Direction Through Conversation",
      description:
        "Finding direction through shared conversations and perspectives. A discussion meetup to slow down, talk openly, and find clearer direction together.",
      location: "Rose Garden, Sector 16 · Chandigarh",
      applyLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe6htMJAgCZDU-wP4Oy9qdtTc0RqfSyAWG7oqQ5bk3h9VLCnQ/viewform",
      eventTime: "2026-02-08T11:00:00+05:30",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 bg-white">
      {events.map((event, index) => {
        const date = formatDate(event.eventTime);
        const time = formatTime(event.eventTime);
        const formattedDateAndTime = [date, time].join(
          ` ${t("Events.at")} `
        );

        return (
          <div
            key={index}
            className="bg-[white] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-square bg-red100">
              <Image
                src="/assets/logo.png"
                alt="Vartalaabh Event"
                fill
                className="object-contain p-10"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <Paragraph size="sm" className="opacity-70">
                {`${formattedDateAndTime} @ ${event.location}`}
              </Paragraph>

              <Heading size="sm">{event.title}</Heading>

              <Paragraph size="md" className="opacity-80">
                {event.description}
              </Paragraph>

              <div className="mt-auto pt-4">
                <LinkButton
                  size="md"
                  showIcon
                  href={event.applyLink}
                  isExternal
                  className="w-full justify-center"
                >
                  Confirm Attendance
                </LinkButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function NextEvent() {
  const t = useTranslations("Events");

  return (
    <PageWrapper bgColor="bg-red">
      <div id="next-event" className="flex flex-col gap-8 md:gap-16">
        <div className="max-w-xl">
          <Heading size="lg">{t("title_next_event")}</Heading>
        </div>

        <Card bgColor="bg-red100">
          <NextEventContent />
        </Card>
      </div>
    </PageWrapper>
  );
}
