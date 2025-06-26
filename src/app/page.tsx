import Hero from "@/components/home/Hero";
import WhatWeOffer from "@/components/home/WhatWeOffer";

export default function Home() {
  return (
    <main className="px-4 md:px-8 xl:px-14 2xl:px-20 py-4 grid">
        <Hero />
        <WhatWeOffer />
    </main>
  );
}
