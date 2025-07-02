import { PageLayout } from '@/util/PageLayout'
import SectionTitle from '@/util/SectionTitle'
import React from 'react'
import IndustryWeSupportMarque from '@/util/IndustryWeSupportMarque'
import { ButtonExel } from '../ButtonExel'
import SubTitle from '@/util/SubTitle'

export default function IndusctryWeSupport() {
  return (
    <section className={`${PageLayout} flex flex-col gap-6 md:gap-12 overflow-x-hidden`}>
        <div className='flex flex-col justify-center items-center'>
            <SectionTitle title="We Support Any Industry Type" className='text-center' />
            <SubTitle className='font-bold text-center max-w-lg'>
                We work with businesses, freelancers, and contractors across industries, with tailored solutions to fit your needs. 
            </SubTitle>
            <p className='text-center max-w-md'>
                Our payroll expertise spans every sector of the UK economy. Here are some industries we serve:
            </p>
        </div>
       <IndustryWeSupportMarque />
       <span className="mx-auto">
        <ButtonExel
        text='Start Your Free Consultation'
        className='max-w-md justify-self-center'
       />
       </span>
    </section>
  )
}
