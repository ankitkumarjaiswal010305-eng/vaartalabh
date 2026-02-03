import Image from "next/image";
import { Heading } from "@/src/app/[locale]/components/heading";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import { useTranslations } from "next-intl";
import { Paragraph } from "../components/paragraph";

export function Logos() {
  const t = useTranslations("Partners.logos");

  return (
    <PageWrapper>
      <div className="flex flex-col gap-12 py-20">

        {/* Heading */}
        <div className="text-center md:text-left max-w-2xl">
          <Heading size="lg">{t("title")}</Heading>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT — Styled Image Block */}
          <div className="flex justify-center md:justify-start">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl shadow-sm">
              <Image
                src="/assets/finding.png"
                alt="Illustration representing collaboration and partnership"
                width={520}
                height={420}
                priority
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <Paragraph size="lg" className="text-gray-600 leading-relaxed">
              {t("subtitle")}
            </Paragraph>

            <Paragraph size="lg" className="text-gray-600 leading-relaxed">
              {t("ctaText")}
            </Paragraph>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
