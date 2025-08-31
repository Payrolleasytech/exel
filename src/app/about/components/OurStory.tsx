import Image from 'next/image'
import React from 'react'
import { SubTitle } from './Utils.about'

export default function OurStory() {
  return (
   <section className="grid grid-col-1 lg:grid-cols-2 gap-8 px-4 py-8 md:px-8 xl:px-14 2xl:px-20 min-h-[60vh]">
        <Image src={'/about/about1.svg'} alt="About Us" width={500} height={500} />

        <div className='flex flex-col gap-6 lg:gap-12 h-full justify-center'>
            <div className="flex flex-col justify-center">

            <SubTitle title="OUR STORY" />
            <h2 className='text-2xl lg:text-4xl font-bold'>
                More Than Numbers – We’re Your Business Growth Partner
            </h2>
            </div>

            <p className="">
                We started with one mission: to help businesses spend less time on admin and more time on what matters. Over the years, we’ve grown into a trusted provider of payroll, umbrella, and accountancy services for companies across the UK. Our secret? We combine smart software with friendly, expert support that feels like an extension of your team.
            </p>
        </div>
    </section>
  )
}





