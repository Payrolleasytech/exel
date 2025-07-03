import { PageLayout } from '@/util/PageLayout'
import SectionTitle from '@/util/SectionTitle'
import SubTitle from '@/util/SubTitle'
import TestimonialCarousel from '@/util/TestimonialCarousel'
// import TestimonialCarousels from '@/util/TestimonialCarousels'
// import TestimonialMarguee from '@/util/TestimonialMarguee'
import React from 'react'
// import TestimonialCarousel from '@/util/TestimonialCarousel'


export default function Testimonials() {
  return (
    // <section className={`bg-[#F2F4F8] grid gap-4 overflow-x-hidden ${PageLayout}`}>
    <section className={`${PageLayout} flex bg-[#F2F4F8] flex-col gap-6 md:gap-12 overflow-x-hidden`}>
       <div className=" w-full lg:max-w-lg mx-auto text-center gap-4 md:gap-8">
           <SectionTitle title="We Know You’ll Love Exel, But Don’t Take Our Word For It" className='text-center' />
           <SubTitle>
            What our customers say about us
           </SubTitle>
       </div>

      <div className="my-4 md:my-8">
        <TestimonialCarousel />
        {/* <TestimonialCarousels /> */}
        {/* <TestimonialMarguee /> */}
      </div>

    </section>
  )
}
