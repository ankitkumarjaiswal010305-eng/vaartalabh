import { Heading } from "@/src/app/[locale]/components/heading";
import { LinkButton } from "@/src/app/[locale]/components/link-button";
import { PageWrapper } from "@/src/app/[locale]/components/page-wrapper";
import Image from "next/image";
import team from "../../../../../public/assets/team.webp";

export function Hero() {
  return (
    <PageWrapper>
      <div className="flex flex-col pb-10 md:pb-20 md:px-16 gap-6 items-center">
        <div className="flex flex-col gap-4 items-center text-center max-w-4xl">
          <Image
            src="/assets/computer-illustration.svg"
            width={100}
            height={100}
            alt="Community illustration"
            className="w-[80px] md:w-[120px] lg:w-[160px]"
          />

          <Heading size="lg">
            We bring people together through conversations
          </Heading>

   <p className="text-base md:text-lg text-muted-foreground max-w-2xl text-center self-center">
  Vartalaabh is a community where people meet, talk, listen, and grow together.
  Across careers, technology, ideas, and life, we create space for honest
  conversations without pressure or hierarchy.
</p>


        </div>

        <LinkButton size="md" variant="secondary" href="#team">
          Join the community
        </LinkButton>
      </div>

      <div>
        <Image
          src={team}
          width={1500}
          height={672}
          placeholder="blur"
          alt="Vartalaabh community members"
          priority
          className="w-full object-cover bg-top object-[50%_10%] max-h-[42rem] rounded-2xl border border-black"
        />
      </div>
    </PageWrapper>
  );
}
