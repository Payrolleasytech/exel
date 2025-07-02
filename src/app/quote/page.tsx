import MultiStepForm from '@/components/quote/MultiStepForm'
import { PageLayout } from '@/util/PageLayout'
import SectionTitle from '@/util/SectionTitle'
import SubTitle from '@/util/SubTitle'
import React from 'react'

export default function page() {
  return (
    <section className={`grid min-h-screen py-12 md:py-16 justify-center ${PageLayout}`}>
        <div className=" flex flex-col items-center">
            <SectionTitle title='Get a Personalised Quote' className='text-center '  />
            <SubTitle className='text-center max-w-4xl'> Tell us about your job or business and we’ll match you with the most cost-effective, compliant solution. </SubTitle>
        </div>
        <div className=''>
            <MultiStepForm />
        </div>
    </section>
  )
}
