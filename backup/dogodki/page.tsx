import { Footer } from "@/src/app/[locale]/components/footer";
import Hero from "./hero";
// import { NextEvent } from "../../src/app/[locale]/(website)/next-event";
import PastEvents from "./past-events";

export default function Page() {
  return (
    <>
      <Hero />
      {/* <NextEvent /> */}
      <PastEvents />
      <Footer />
    </>
  );
}
