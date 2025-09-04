import { Title } from '@/app/about/components/Utils.about'
import { PageLayout } from '@/util/PageLayout'
import React from 'react'

export default function HeroFAQ() {
  return (
    <section className={`${PageLayout} bg-primary min-h-[50vh] py-6 lg:py-20 grid h-full gap-2 lg:gap-3 text-center items-center text-white `}>
        <Title title="Questions? We've Got Answers." />
        <p className={`text-center mx-auto max-w-3xl`}>
            Everything you need to know about payroll, compliance, and our services - answered by experts. if you have a question not covered in this FAQ, please send us a message and we will happily get you the answers you need.
        </p>
    </section>
  )
}
