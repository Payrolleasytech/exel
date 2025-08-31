
import React from 'react'
import { SubTitle, Title } from './Utils.about'

export default function OurMission() {
  return (
      <section className={`px-4 md:px-8 xl:px-14 2xl:px-20 py-8 lg:py-16 w-ful flex-col text-center items-center justify-center`}> 
      <SubTitle title="OUR MISSION" />
      <Title title='Empowering Success Through Precision' />

{/* <div className="flex items-center justify-center w-full"></div> */}
      <p className={`pt-2 lg:p2-4 text-center max-w-2xl mx-auto`}>
        Our mission is to simplify, streamline and secure, providing an unwavering bridge between talent 
        and opportunity in an ever evolving professional landscape. Every recommendation we make, 
        every solution we provide, and every innovation we develop is guided by one simple question: 
        &quot;Will this make our client&apos;s business stronger?&quot;
      </p>
      </section>
    )
}
