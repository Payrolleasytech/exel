import { PageLayout } from '@/util/PageLayout'
import SectionTitle from '@/util/SectionTitle'
import Image from 'next/image'
import React from 'react'
import { ButtonExel } from '../ButtonExel'
import FAQPlaceholder from '../placeholders/FAQPlaceholder'

export default function FAQ() {
  return (
    <section className={`${PageLayout} grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8`}>
      <div className="order-2 md:order-1 ">
        <Image
          src={"/faq.svg"}
          alt='Excel FAQ'
          height={628}
          width={593}
        />
      </div>
      <div className='flex flex-col gap-3 md:gap-6 order-1 md:order-2'>
        <span className="flex flex-col">

          <SectionTitle title="Experience the Exel Consultancy Difference" />
          <small className=''> Contact us now! </small>
          <ButtonExel variant={"outline"} title='Talk to our Support Team' />
        </span>
        <span className="flex flex-col">
          <h5 className=''> Need more info?</h5>
          <h3 className=''> FAQs</h3>
          <FAQPlaceholder />
        </span>

      </div>


    </section>
  )
}
