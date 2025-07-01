import { PageLayout } from '@/util/PageLayout'
import SectionTitle from '@/util/SectionTitle'
import TestimonialMarguee from '@/util/TestimonialMarguee'
import React from 'react'
// import TestimobnialsPlaceholder from '../placeholders/TestimobnialsPlaceholder'
// import TestimonialCarousel from '@/util/TestimonialCarousel'


export default function Testimonials() {
  return (
    <section className={`bg-[#F2F4F8] overflow-x-hidden ${PageLayout}`}>
       <div className="max-w-lg mx-auto text-center">
           <SectionTitle title="We Know You’ll Love Exel, But Don’t Take Our Word For It" className='text-center' />
       </div>

      <div className="">
        {/* <TestimonialCarousel /> */}
        <TestimonialMarguee />
      </div>

    </section>
  )
}
