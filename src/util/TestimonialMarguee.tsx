import React from 'react'
import Marquee from 'react-fast-marquee'
import { TestimonialsDetails } from './data/TestimonialsDetails'
import TestimobnialsPlaceholder from '@/components/placeholders/TestimobnialsPlaceholder'


export default function TestimonialMarguee() {
  return (
   <div className='overflow-x-clip'>
      <Marquee speed={100} delay={0} pauseOnHover direction='right'>
             {TestimonialsDetails.map((testimonial, key) => {
                return (
                     <div key={key} className='mx-2'>
                        <TestimobnialsPlaceholder 
                        src={testimonial.src} 
                        quote={testimonial.quote} 
                        name={testimonial.name} 
                        company={testimonial.company}  />
                        
                      </div>
                )
             })}
      </Marquee>
      </div>
  )
}
