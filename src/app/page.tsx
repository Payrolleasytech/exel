import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import HowitWorks from "@/components/home/HowitWorks";
import IndusctryWeSupport from "@/components/home/IndusctryWeSupport";
import Testimonials from "@/components/home/Testimonials";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsletterRender from "@/components/NewsletterRender";


export default function Home() {
  return (
    <main className=" py-4 grid overflow-x-hidden">
        <Hero />
        <WhatWeOffer />
        <HowitWorks />
        <WhyChooseUs />
        <Testimonials />
        <IndusctryWeSupport />
        <FAQ />
        <NewsletterRender />

    </main>
  );
}
